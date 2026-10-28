# 🚀 Mad UI — Engineering Work Progress Tracker

> **Current Version**: `2.16.0`  
> **Repository**: [mad-ui](https://github.com/Saswat0602/mad-ui) (`mad-ui-components`)  
> **Last Updated**: October 2026  
> **Status**: **Phase 0 (100% Completed)** · **Phase 1 (100% Completed)**  

---

## 📊 Phase Overview & Status Matrix

| Phase | Title | Target Scope | Status | Completion |
| :---: | :--- | :--- | :---: | :---: |
| **Phase 0** | **Stop the Bleeding** | P0 bug fixes, `"use client"`, packaging exports, docs preview, hygiene | 🟢 **COMPLETED** | **100%** |
| **Phase 1** | **Foundation Infrastructure** | Vitest testing, axe a11y, Changesets, tokens, manifest, root ESLint, CI, zinc migration | 🟢 **COMPLETED** | **100%** |
| **Phase 2** | **Primitives & Headless Rewrite** | Radix headless foundation, unified motion system, keyboard a11y maps | ⚪ **UPCOMING** | 0% |
| **Phase 3** | **Advanced Components & Forms** | Composable forms (zod + react-hook-form), virtualized DataTable | ⚪ **UPCOMING** | 0% |
| **Phase 4** | **Showcase Platform & DX** | Interactive theme builder, CLI component adder, props documentation | ⚪ **UPCOMING** | 0% |
| **Phase 5** | **Release & Community** | NPM 3.0 release, migration guides, automated release provenance | ⚪ **UPCOMING** | 0% |

---

## 🟢 Phase 0 — Stop the Bleeding (Week 1) — [COMPLETED]

**Goal**: Ensure nothing documented or exported is broken. Bring the library to a clean, stable state with 0 TypeScript errors, working Next.js App Router support, working docs previews, and clean repository hygiene.

- [x] **Next.js App Router & Server Components**:
  - Injected `"use client";` banners into all 64 distribution bundles (`dist/*.mjs`).
  - Switched from Rollup directive-stripping to esbuild tree-shaking in `tsup.config.ts`.
- [x] **Packaging & Subpath Exports**:
  - Added `./theme.css`, `./styles.css`, `./layout-shell`, `./alert`, and root `./package.json` to `package.json#exports`.
  - Re-exported all compound component parts (`Dialog*`, `AlertDialog*`, `HoverCard*`, `Collapsible*`, `ContextMenu*`, `CardHeader`...).
  - Deleted broken barrel `src/components/index.ts`.
- [x] **P0 Component Bug Fixes**:
  - `Dialog` & `AlertDialog`: Always mount children so `DialogTrigger` works.
  - `Slider`: Cleaned up mouse/touch event listeners on unmount; removed drag state leaks.
  - `Switch`: Preserved consumer `onChange` handler composition.
  - `DateTimePicker`: Fixed month offset calculation and 12-hour option generation.
  - `InputOTP`: Fixed state indexing with fixed-length array tracking.
  - `Calendar`: Fixed 31st-day month navigation skip.
  - `Carousel`: Supported nested `<CarouselContent>` wrapper structure.
  - `Chart`: Fixed 40px bar overflow and division-by-zero on empty datasets.
  - `Toast`: Reset exiting state on reopen; eliminated DOM attribute leaks.
  - Replaced non-existent `zinc-850` with standard `zinc-800`.
- [x] **Documentation Site Previews**:
  - Configured `@source` for Tailwind v4 in `docs/src/app/globals.css`.
  - Fixed multi-word component import generation (`import { InputOTP }`).
  - Added live interactive demos for Dialog, AlertDialog, and Calendar.
  - Removed outdated CLI instructions, false claims ("analytics", "drag-and-drop"), and raw emojis.
- [x] **Repository Hygiene**:
  - Added MIT `LICENSE` matching `package.json`.
  - Added `CHANGELOG.md` with full notes for version 2.16.0.
  - Secured auth tokens into `~/.npmrc` (removed from project root).
  - Deleted stale scripts (`fix-imports.sh`, `update-exports.sh`, `COMPLETE_GUIDE.md`, `QUICK_REFERENCE.md`, `extra/`).

---

## 🟢 Phase 1 — Foundation Infrastructure (Weeks 2–4) — [COMPLETED]

**Goal**: Establish the testing, token design system, neutral scale standardization, and multi-environment packaging verification that makes every future change safe.

### Completed Milestones
- [x] **Automated Testing Suite (Vitest)**:
  - Configured `vitest.config.mts` with `jsdom` environment and setup cleanup in `tests/setup.ts`.
  - Wrote 21 unit, smoke, and SSR tests in `tests/smoke.test.tsx` running under `<React.StrictMode>`.
- [x] **Automated Accessibility Testing (`axe-core`)**:
  - Configured `vitest-axe` with matchers and automated a11y tests for component primitives.
- [x] **Behavior Test Checklist**:
  - Authored standard 9-point verification template in `tests/BEHAVIOR_CHECKLIST.md`.
- [x] **Component Manifest & Verification**:
  - Created single source of truth `src/component.manifest.ts` registering all 55 components.
  - Created `scripts/verify-manifest.js` (`npm run check:manifest`) validating source files and exports map.
- [x] **Packaging Linter (`publint`)**:
  - Integrated `publint` into `npm run check:pkg` and CI (validating all 64 subpaths with 0 errors).
- [x] **Root ESLint Configuration**:
  - Configured `eslint.config.mjs` with `typescript-eslint`; `npm run lint` exits with 0 errors.
- [x] **Changesets Setup**:
  - Initialized `.changeset/config.json` and added scripts (`npm run changeset`, `npm run version-packages`).
- [x] **Extended Design Tokens**:
  - Expanded `src/styles.css` with semantic tokens for status (`success`, `warning`, `info`), charts (`chart-1`–`5`), sidebar variables, radius scale, and z-indexes.
  - Quoted path escaping in `scripts/build-css.js` for space-safe Tailwind CLI compilation (65.64 KB).
- [x] **Opt-in Base Styles**:
  - Scoped global body restyling in `src/styles.css` to `.mad-ui-base, body[data-mad-ui-theme]`.
- [x] **Neutral Scale (`zinc`) Standardization & Palette Migration**:
  - Standardized all 55 components on the `zinc` neutral palette.
  - Completely eliminated inconsistent `gray-` and `slate-` color classes in `accordion.tsx`, `typography.tsx`, `tabs.tsx`, `slider.tsx`, `layout.tsx`, `navbar.tsx`, `sidebar.tsx`, `calendar.tsx`, and `datetime-picker.tsx`.
  - Replaced remaining raw emojis with clean Lucide icons (`CalendarIcon`).
- [x] **Monorepo Workspace Configuration**:
  - Added `"workspaces": ["docs"]` to root `package.json` for native monorepo workspace resolution.
- [x] **Community Files**:
  - Added `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `.nvmrc` (Node 20), `.editorconfig`.
- [x] **CI Pipeline**:
  - Configured `.github/workflows/ci.yml` running `typecheck`, `build`, `test`, `check:pkg`, `check:manifest`, and `docs` build/lint across Node 18 & 20.

---

## ⚪ Phase 2 — Primitives & Headless Rewrite (Weeks 4–10) — [UPCOMING]

**Goal**: Rebuild interactive primitives on accessible headless foundations. Every interactive component reaches an A/B grade.

- [ ] **Headless Primitive Layer (Radix UI)**:
  - Group 1: Dialog, AlertDialog, Sheet, Drawer
  - Group 2: Popover, Tooltip, HoverCard
  - Group 3: DropdownMenu, ContextMenu, Menubar
  - Group 4: Select, Combobox, Command
  - Group 5: Tabs, Accordion, Collapsible
  - Group 6: Checkbox, Switch, RadioGroup, Slider, Toggle
- [ ] **Shared Internals**:
  - Implement `Slot`, `useControllableState`, `composeEventHandlers`, `Presence`.
- [ ] **Unified Motion System**:
  - Complete `animations.css` with `prefers-reduced-motion` compliance.
- [ ] **Keyboard Navigation & APG Compliance**:
  - Comprehensive keyboard interaction specs for all interactive components.

---

## ⚪ Phase 3 — Advanced Components & Forms (Weeks 10–16) — [UPCOMING]

- [ ] **Composable Form System**: `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage` with `react-hook-form` and `zod`.
- [ ] **Data Presentation**: Virtualized `DataTable` with column sorting, filtering, and row selection.

---

## ⚪ Phase 4 — Showcase Platform & DX — [UPCOMING]

- [ ] **Interactive Theme Builder**: Live palette customizer & CSS token exporter.
- [ ] **CLI Component Tool**: `npx mad-ui-components add <component>`.
- [ ] **Complete API Documentation**: Generated props tables and keyboard shortcuts reference for every component.

---

## 🧪 Verification Matrix

| Check / Tool | Target | Status | Result |
| :--- | :--- | :---: | :--- |
| **TypeScript Typecheck** | `tsc --noEmit` | ✅ Passing | 0 errors |
| **Unit & Smoke Tests** | `vitest run` (`tests/smoke.test.tsx`) | ✅ Passing | 21 / 21 tests passing |
| **Accessibility Audits** | `vitest-axe` (`axe-core`) | ✅ Passing | 0 violations |
| **Package Linter** | `publint` (`npm run check:pkg`) | ✅ Passing | 64 / 64 subpaths valid |
| **Manifest Audit** | `node scripts/verify-manifest.js` | ✅ Passing | 55 / 55 components verified |
| **Root Linter** | `eslint src tests` | ✅ Passing | 0 errors |
| **Core Build** | `tsup && node scripts/build-css.js` | ✅ Passing | 64 bundles + 69.35 KB CSS |
| **Documentation Build** | `next build` (Next.js 16.4.3 Turbopack) | ✅ Passing | 64 / 64 static pages generated |
| **Documentation Linter** | `npm --prefix docs run lint` | ✅ Passing | 0 errors, 0 warnings |

---

## 📜 Git Commit History for this Upgrade

```
9bd4759 feat(phase-1): add component manifest, Changesets, axe-core testing, and behavior checklist
695b8c7 docs(audit): include comprehensive library audit, benchmarks, and architectural roadmap
03a92ae chore(lint): configure root ESLint with typescript-eslint, add publint packaging check, and resolve code style issues
0341b37 feat(test): set up Vitest test suite, expand design tokens, and fix path escaping in CSS build
e975363 docs(community): add CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, and update roadmap
5af43a4 chore(infra): add CI workflow, MIT license, CHANGELOG for 2.16.0, and clean stale files
50c3f14 docs: resolve false claims, fix demo interactivity, and add theming guide
1c0259e fix(core): resolve P0 component bugs, add use client banners, and fix packaging exports
```
