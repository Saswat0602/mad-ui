# Build and Packaging Audit

Scope: [package.json](../../package.json), [tsup.config.ts](../../tsup.config.ts), [tsconfig.json](../../tsconfig.json), the four export surfaces under `src/`, and the published tarball (`npm pack --dry-run`).

Verdict: the build exits 0, but the published package has broken entry points, no React Server Components boundary, no shipped theme, and export surfaces that disagree with each other. These are consumer-facing failures, not style issues.

## P0: Broken in production today

### 1. Subpath exports that resolve to nothing

`package.json#exports` advertises files that the build never produces:

| Export | Points to | Reality |
| --- | --- | --- |
| `mad-ui-components/alert` | `dist/alert.mjs` | `src/individual/alert.ts` does not exist. tsup silently drops the entry. |
| `mad-ui-components/date-picker` | `dist/date-picker.mjs` | No such source. The real component is `datetime-picker`. |
| `mad-ui-components/timepicker` | `dist/timepicker.mjs` | No such source anywhere in `src/`. |

The opposite also happens: `dist/datetime-picker.mjs` is built but has no export entry, so `mad-ui-components/datetime-picker` throws `ERR_PACKAGE_PATH_NOT_EXPORTED`.

### 2. Raw TypeScript exported as runtime code

```json
"./icons":  { "import": "./src/icons/index.tsx" },
"./utils":  { "import": "./src/lib/utils.ts" },
"./colors": { "import": "./src/lib/colors.ts" }
```

Node and most bundlers do not transpile `.ts`/`.tsx` from `node_modules`. Importing `mad-ui-components/utils` fails in Vite, plain Node, and Next.js without `transpilePackages`.

### 3. No `"use client"` in any built file

- 7 of 55 component sources start with `"use client"`, 48 do not.
- esbuild strips module directives when bundling, so `grep '"use client"' dist/*.mjs` returns 0 files.
- Result: importing almost any component into a Next.js App Router Server Component fails with "useState only works in Client Components".
- shadcn, Radix and MUI all ship the directive on every client module.

### 4. React context split across bundles

`splitting: false` plus 9 independent tsup configs means every entry inlines its own copy of shared code.

- `dist/dialog.mjs`, `dist/overlay.mjs` and `dist/index.mjs` each call `createContext()` for the same Dialog context (1, 3 and 7 contexts respectively).
- `import { Dialog } from "mad-ui-components/dialog"` combined with `import { DialogContent } from "mad-ui-components/overlay"` gives two unrelated contexts. The content cannot find its provider.
- The same class of bug applies to Popover, Tooltip, Sheet, Tabs, Accordion, DropdownMenu and every other context-based component.

### 5. Theme is not shipped

- Components use 172 semantic token classes (`bg-primary`, `border-input`, `ring-ring`). These classes only exist if the consumer's Tailwind config maps them and their CSS defines `--primary` and friends.
- [src/styles.css](../../src/styles.css) holds those variables, but it is not built to `dist/`, not exported, and not mentioned in the README.
- [scripts/build-css.js](../../scripts/build-css.js) exists but is not wired into any npm script.
- The README "Configure Tailwind" step only adds a `content` glob, which is Tailwind v3 syntax. The README badge claims Tailwind 3 and 4 support, but v4 needs `@source` and `@theme`, and no v4 guide exists.

### 6. Dynamic class names Tailwind cannot see

Tailwind's scanner only finds complete literal class strings. These never make it into the consumer's CSS:

- [navbar.tsx:327](../../src/components/layout/navbar.tsx#L327), [navbar.tsx:539](../../src/components/layout/navbar.tsx#L539): `` `bg-${primaryColor}-600 hover:bg-${primaryColor}-700` ``
- [sidebar.tsx:169](../../src/components/layout/sidebar.tsx#L169), [sidebar.tsx:306](../../src/components/layout/sidebar.tsx#L306): `` `bg-${primaryColor}-500` ``
- [layout.tsx:91](../../src/components/layout/layout.tsx#L91), [layout.tsx:105](../../src/components/layout/layout.tsx#L105): `` `h-${navbarHeight}` ``, `` `w-${sidebarWidth}` ``

## P1: Export surfaces disagree

There are four hand-maintained barrels: [src/index.ts](../../src/index.ts), [src/core.ts](../../src/core.ts), [src/modules/*.ts](../../src/modules), [src/individual/*.ts](../../src/individual), plus a fifth, [src/components/index.ts](../../src/components/index.ts), that is not built and does not compile.

Examples of what a consumer hits:

- `import { DialogTrigger, DialogContent } from "mad-ui-components"` fails. The root only exports `Dialog`. Same for `AlertDialog*`, `HoverCard*`, `Collapsible*`, `ContextMenu*`.
- `import { SelectTrigger } from "mad-ui-components/select"` fails. The individual entry only exports `Select`.
- `import { CardHeader } from "mad-ui-components/core"` fails. Core only exports `Card`.
- `DropdownMenuSub*`, `RadioGroupItem`, `BarChart`, `LineChart` exist at the root but in no category module.
- [src/components/index.ts](../../src/components/index.ts) imports `./forms/timepicker` and `./date-picker`, which do not exist (2 of the 47 `tsc` errors).
- The root re-exports everything from `lib/utils`, including a custom `useId` that shadows React's and is not SSR safe (module-level counter, see [utils.ts:68-72](../../src/lib/utils.ts#L68-L72)).

Fix: generate every barrel and the `exports` map from a single manifest (see [../03-target-architecture/build-and-release.md](../03-target-architecture/build-and-release.md)).

## P1: tsup configuration

[tsup.config.ts](../../tsup.config.ts) repeats the same 25-line block 9 times. Settings that hurt consumers:

| Setting | Problem |
| --- | --- |
| `minify: true`, `minifyIdentifiers: true` | Libraries should ship readable code. Consumers minify. Stack traces become useless. |
| `sourcemap: false` | No way to debug into the library. |
| `keepNames: false` | Combined with 25 files that lack `displayName`, React DevTools shows anonymous components. |
| `ignoreAnnotations: true` | Discards `/*#__PURE__*/` hints, which makes consumer tree-shaking worse, the opposite of the stated goal. |
| `drop: ['console']` | Removes any dev-time warnings the library might emit. |
| `mangleProps: /^_/` | Footgun. Any future `__html` or `_internal` prop gets renamed silently. |
| `splitting: false` | Root cause of the context duplication above. |
| `format: ['esm']` only, `main` points to `.mjs` | `require()` consumers (Jest default config, older tooling) break with no clear message. |

## P1: Type safety

- `npx tsc --noEmit` reports **47 errors** across 14 files. The largest clusters are `dropdown-menu.tsx` (9), `hover-card.tsx` (8), `context-menu.tsx` (5), `tooltip.tsx` (5).
- Root cause: the root `node_modules` is a symlink to `docs/node_modules`, so the library compiles against `@types/react@19` while `package.json` declares `@types/react@^18`. Under React 19 types, `child.props` is `unknown`, which breaks every `cloneElement` trigger pattern.
- tsup's DTS step still passes, so these errors never block a release.
- There is no `typecheck` script and no CI to catch this.

## P2: Package metadata

| Field | Current | Should be |
| --- | --- | --- |
| `author` | `"Your Name"` | Real author |
| `bugs.url` | `github.com/Saswat0602/my-ui/issues` | `github.com/Saswat0602/mad-ui/issues` |
| `peerDependencies` | React only | Add `tailwindcss` (or document that it is required) |
| `engines` | missing | `"node": ">=18"` |
| `exports["./package.json"]` | missing | Add, many tools read it |
| `exports["./styles.css"]` | missing | Add once CSS is built |
| `files` vs `.npmignore` | `files` ships `src/`, `.npmignore` says exclude `src/` | Pick one source of truth. `files` wins today. |
| `prepublishOnly` | `clean && build` | Add `typecheck`, `lint`, `test`, and a pack check such as `publint` and `@arethetypeswrong/cli` |

## P2: The copy CLI does not work

The README documents `npx mad-ui-components copy button card input`, `--category core` and `--all`. [scripts/copy-component.js](../../scripts/copy-component.js) does none of that:

- It reads only `process.argv[2]`, so `copy` is treated as the component name and the command exits with "Component 'copy' not found".
- No multi-component, `--category` or `--all` support.
- 7 of 57 path mappings are wrong: `date-picker`, `timepicker` (missing files), `drawer`, `popover`, `tooltip` (listed under `overlay/`, actually in `layout/`), `separator`, `toggle` (listed under `layout/`, actually in `overlay/`). `datetime-picker` is not mapped at all.
- Copied files keep `import { cn } from "../../lib/utils"` but `utils.ts` is copied into the same folder, so every copied component has a broken import.
- Cross-component imports (for example Navbar importing Button) are not followed.

## Evidence commands

```bash
npm run build                    # exits 0, dist/alert.mjs is never created
npx tsc --noEmit -p .            # 47 errors
grep -l '"use client"' dist/*.mjs | wc -l      # 0
grep -o "createContext(" dist/overlay.mjs | wc -l  # 3 (duplicated per bundle)
npm pack --dry-run               # 255 files, 224.6 kB
```
