# Quick Wins (Week 1)

Small, low-risk fixes that remove the worst consumer-facing failures without waiting for the restructure. Each item is independent and can ship as a 2.x patch.

## Packaging

- [ ] Remove `./date-picker` and `./timepicker` from `package.json#exports`, or build them.
- [ ] Create `src/individual/alert.ts` (export `Alert`, `AlertTitle`, `AlertDescription`) so `mad-ui-components/alert` resolves.
- [ ] Add a `./datetime-picker` export for the file that is already built.
- [ ] Rename `src/individual/layout.ts` output (for example `layout-shell`) so it stops overwriting `dist/layout.mjs` from `src/modules/layout.ts`.
- [ ] Point `./icons`, `./utils`, `./colors` at built files, or remove them from `exports`.
- [ ] Add `banner: { js: '"use client";' }` to every tsup config block.
- [ ] Add `sourcemap: true`, remove `ignoreAnnotations`, `mangleProps`, `drop`. Consider `minify: false`.
- [ ] Export missing parts: `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`, `DialogClose`, all `AlertDialog*`, `HoverCard*`, `Collapsible*`, `ContextMenu*` from `src/index.ts`. `CardHeader` and friends from `src/core.ts`. `Select*` parts from `src/individual/select.ts`. `RadioGroupItem`, `InputOTPGroup`, `InputOTPSlot` from `src/modules/forms.ts`.
- [ ] Delete `src/components/index.ts` (imports two files that do not exist).
- [ ] Fix `package.json` metadata: `author`, `bugs.url` (`my-ui` to `mad-ui`), add `engines`, add `"./package.json"` export.
- [ ] Build `src/styles.css` to `dist/theme.css` (wire `scripts/build-css.js` into `build`) and export `./theme.css`.

## Components (one-line or few-line fixes)

- [ ] Dialog and AlertDialog: render `children` always, render only the overlay and content when `open` ([dialog.tsx:91-99](../../src/components/overlay/dialog.tsx#L91-L99)).
- [ ] Slider: read drag state from a ref instead of `isDragging` state in the document listeners, and remove listeners on unmount.
- [ ] Switch: move `{...props}` before `onChange={handleChange}`, or compose the handlers.
- [ ] DateTimePicker: hour option `i + 1` for all `i` in 12-hour mode, and leading days from `new Date(y, m, 0)`.
- [ ] InputOTP: build the new value from a fixed-length array (`Array.from({ length }, (_, i) => value[i] ?? "")`).
- [ ] Calendar and DateTimePicker: set the day to 1 before changing month.
- [ ] Table: move the early return below all hooks.
- [ ] Badge: render `span` instead of `div`.
- [ ] Alert: default `role` to `undefined`, not `"alert"`.
- [ ] Layout: map `navbarHeight` to a style (`style={{ height: navbarHeight }}`) instead of `h-${n}`.
- [ ] Navbar and Sidebar: replace `` `bg-${primaryColor}-600` `` with a literal class map or `bg-primary`.
- [ ] Remove `console.log` defaults from Navbar profile actions.
- [ ] Add `type="button"` to every internal `<button>` (search `<button` without `type=`).
- [ ] Replace `zinc-850` (not a Tailwind color) with `zinc-800` or `zinc-900`.
- [ ] Make animations work: add `tw-animate-css` (or ship equivalent keyframes) and define `animate-collapsible-down`, `animate-collapsible-up`, `animate-caret-blink`. Wrap all keyframe animations in `motion-safe:`.
- [ ] Make focus visible in Windows High Contrast: replace `outline-none` with `outline-hidden` (Tailwind v4) or add a `forced-colors:outline` fallback next to every `focus-visible:ring-*`.
- [ ] Decide the Tailwind target. If v3 stays supported, replace `shadow-xs`, `shadow-2xs`, `backdrop-blur-xs` (v4-only). If v4 only, update `peerDependencies` and README.

## Docs

- [ ] Add `@source "../../node_modules/mad-ui-components/dist";` to [docs/src/app/globals.css](../../docs/src/app/globals.css) so previews show real styles.
- [ ] Build the copy-import line from an `exportName` field instead of `component.title` ([ComponentDocumentation.tsx:37](../../docs/src/components/ComponentDocumentation.tsx#L37)).
- [ ] Wire the Dialog and AlertDialog previews to real `useState` instead of `open={false}`.
- [ ] Remove the CLI section from README and docs until the CLI works.
- [ ] Register `calendar` and `form`. Remove the duplicate `breadcrumb` entry.
- [ ] Remove the 📝 emoji from `PropsTable.tsx` and emojis from example code.
- [ ] Remove unbacked claims ("analytics, ripple effects", "drag-and-drop", generic "WCAG AA" text).
- [ ] Add a short "Theming" section listing the CSS variables and Tailwind config mapping consumers need.

## Repository

- [ ] Add `LICENSE` (MIT, matching `package.json`).
- [ ] Delete `COMPLETE_GUIDE.md`, `QUICK_REFERENCE.md`, `extra/`, `fix-imports.sh`, `update-exports.sh`, `docs/src/lib/component-props.ts.backup`, and the dead docs files listed in [../01-current-state/docs-site-audit.md](../01-current-state/docs-site-audit.md#dead-files-and-dependencies).
- [ ] Move the npm token out of the project `.npmrc` into `~/.npmrc`.
- [ ] Add a `typecheck` script (`tsc --noEmit`) and a minimal GitHub Actions workflow running `build` and `typecheck` on push.
- [ ] Update [AGENTS.md](../../AGENTS.md) for Next 16, the npm-published docs dependency, and the real component count.
