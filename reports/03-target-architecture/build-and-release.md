# Target Build and Release Pipeline

Goal: generated entry points, correct output for every consumer environment (ESM, CJS, RSC, SSR, Tailwind v3 and v4), automated quality gates, and releases that cannot ship a broken export.

## One manifest, everything generated

Each component folder has a `*.meta.ts`:

```ts
// packages/react/src/components/dialog/dialog.meta.ts
export default {
  name: "dialog",
  title: "Dialog",
  category: "overlay",
  status: "stable",         // "experimental" | "beta" | "stable" | "deprecated"
  since: "3.0.0",
  apg: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
  exports: ["Dialog", "DialogTrigger", "DialogContent", "DialogHeader", "DialogFooter", "DialogTitle", "DialogDescription", "DialogClose"],
}
```

`scripts/codegen.ts` reads every meta file and writes:

- `src/index.ts` (root barrel)
- `src/<category>.ts` (category barrels)
- tsup `entry` list
- `package.json#exports`
- `apps/docs/.generated/registry.json` (docs navigation, status badges)
- `registry/*.json` (CLI and shadcn registry)

CI runs `codegen --check` and fails if any generated file is stale. This replaces the six-place checklist in [AGENTS.md](../../AGENTS.md) section 7.

## tsup configuration

```ts
// packages/react/tsup.config.ts
import { defineConfig } from "tsup"
import { entries } from "./.generated/entries"

export default defineConfig({
  entry: entries,                 // { index: "src/index.ts", button: "src/components/button/index.ts", ... }
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  splitting: true,                // shared code and React contexts live in one chunk
  treeshake: true,
  minify: false,                  // consumers minify
  clean: false,                   // keep: Next.js Turbopack watch stability (AGENTS.md section 9)
  target: "es2020",
  external: ["react", "react-dom", "react/jsx-runtime"],
  banner: { js: '"use client";' },
  esbuildOptions(o) { o.jsx = "automatic" },
})
```

Notes:

- `splitting: true` fixes the duplicated context bug. Every subpath imports the same `DialogContext` chunk.
- The `banner` puts `"use client"` on every output file. That is acceptable because almost every component is interactive. If a server-safe subset matters later (Card, Badge, Separator), move to an unbundled build (`bundle: false`, or Rollup `preserveModules` with `rollup-plugin-preserve-directives`) so each file keeps its own directive.
- tsup's maintainers now recommend tsdown as its successor. The same settings map across directly, so treat a switch as optional.
- CSS is built by a separate step (`@tailwindcss/cli` or PostCSS) into `dist/theme.css` and `dist/base.css`.

## Exports map (generated)

```json
{
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "sideEffects": ["**/*.css"],
  "exports": {
    ".": {
      "import": { "types": "./dist/index.d.ts", "default": "./dist/index.js" },
      "require": { "types": "./dist/index.d.cts", "default": "./dist/index.cjs" }
    },
    "./dialog": {
      "import": { "types": "./dist/dialog.d.ts", "default": "./dist/dialog.js" },
      "require": { "types": "./dist/dialog.d.cts", "default": "./dist/dialog.cjs" }
    },
    "./theme.css": "./dist/theme.css",
    "./base.css": "./dist/base.css",
    "./tailwind-preset": "./dist/tailwind-preset.cjs",
    "./package.json": "./package.json"
  },
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18",
    "tailwindcss": ">=3.4"
  },
  "peerDependenciesMeta": { "tailwindcss": { "optional": true } },
  "engines": { "node": ">=18" }
}
```

Keeps the `"default"` condition rule from [AGENTS.md](../../AGENTS.md) section 9.

## Quality gates

| Gate | Tool | Fails when |
| --- | --- | --- |
| Generated files current | `codegen --check` | Someone hand-edited a barrel or forgot to run codegen |
| Types | `tsc --noEmit` against `@types/react` 18 **and** 19 (matrix) | Any error, including the 47 that exist today |
| Lint | ESLint with `jsx-a11y`, `react-hooks`, custom "no palette classes" rule | Hook order violations, missing labels, hardcoded colors |
| Unit and a11y tests | Vitest, Testing Library, axe | See [testing-strategy.md](testing-strategy.md) |
| Package correctness | `publint`, `@arethetypeswrong/cli` | Missing files, wrong conditions, types that do not resolve |
| Export smoke test | Script that `import()`s every subpath from the packed tarball in Node | Any `ERR_MODULE_NOT_FOUND` (would have caught `alert`, `date-picker`, `timepicker`) |
| RSC smoke test | Minimal Next.js App Router fixture importing every component in a Server Component page | Missing `"use client"` |
| Bundle size | `size-limit` per entry | Regression beyond budget (for example Button under 3 kB gzip) |

## CI workflows

```
.github/workflows/
├── ci.yml          on PR and push: install, codegen --check, typecheck matrix, lint, test, build, publint, attw, size-limit, docs build
├── visual.yml      on PR: Playwright screenshots of workbench stories, light and dark
└── release.yml     on push to master: changesets version PR, then publish with provenance
```

## Release process

- **Changesets** for versioning and `CHANGELOG.md` generation. Every PR that changes `packages/react` adds a changeset.
- **Trusted publishing** from GitHub Actions (OIDC) with `npm publish --provenance`. No long-lived npm token on any laptop.
- **Preview builds** on every PR (for example pkg.pr.new) so the docs site and testers can install a PR build without publishing.
- **Prerelease channel**: `next` dist-tag for 3.0 alphas.
- **Deprecation policy**: deprecated exports keep working for one major, log a dev-only console warning, and are listed in the migration guide.
