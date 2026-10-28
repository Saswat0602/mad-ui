# Roadmap to an Advanced UI Library

Five phases. Each phase ends in a releasable state and a git tag, in line with the phase-wise commit protocol in [AGENTS.md](../../AGENTS.md) section 6. Durations assume one or two developers working part time and are rough estimates.

## Phase 0: Stop the bleeding (week 1)

Goal: nothing documented is broken.

- All items in [quick-wins.md](quick-wins.md).
- Release `2.16.0` with a real `CHANGELOG.md` entry.

Exit criteria:

- Every `package.json#exports` entry resolves in a smoke test.
- Importing any component from a Next.js Server Component page works.
- `tsc --noEmit` passes.
- Docs previews render the library's real classes.

## Phase 1: Foundation (weeks 2 to 4)

Goal: the infrastructure that makes every later change safe.

- Convert to pnpm workspaces plus Turborepo with the layout in [../03-target-architecture/folder-structure.md](../03-target-architecture/folder-structure.md). Docs depend on `workspace:*`.
- Add the component manifest and codegen for barrels, exports, tsup entries and the docs registry ([../03-target-architecture/build-and-release.md](../03-target-architecture/build-and-release.md)).
- Rewrite the tsup config: single config, `splitting: true`, ESM plus CJS, sourcemaps, `"use client"` banner.
- Add CI: typecheck against React 18 and 19 types, lint (with `jsx-a11y` and a "no palette classes" rule), build, `publint`, `attw`, export smoke test, RSC fixture build, size-limit.
- Add Vitest, Testing Library and axe. Write smoke plus SSR tests for all 55 components.
- Add Changesets and trusted publishing with provenance.
- Create `packages/tokens`, ship `theme.css` (Tailwind v4 `@theme`) and a v3 preset. Add success, warning, info, chart and sidebar tokens.
- Add `LICENSE`, `CONTRIBUTING.md`, `SECURITY.md`, `CODE_OF_CONDUCT.md`.

Exit criteria: CI green on every PR, a test file for every component, tokens importable with one CSS line.

## Phase 2: Primitives and API rewrite (weeks 4 to 10)

Goal: every interactive component reaches at least a B grade.

- Make the headless foundation decision ([../03-target-architecture/component-api-standards.md](../03-target-architecture/component-api-standards.md#headless-foundation-decision)). Recommended: Radix for interactive primitives.
- Add shared internals: `Slot`, `useControllableState`, `composeEventHandlers`, `Presence`.
- Rebuild, in this order (highest usage and worst grade first):
  1. Dialog, AlertDialog, Sheet (Modal and Drawer become deprecated wrappers)
  2. Popover, Tooltip, HoverCard
  3. DropdownMenu, ContextMenu, Menubar (shared menu core)
  4. Select, Combobox, Command (cmdk)
  5. Tabs, Accordion, Collapsible
  6. Checkbox, Switch, RadioGroup, Slider, Toggle, ToggleGroup
  7. NavigationMenu, ScrollArea, Resizable
- Apply the variant vocabulary and replace all hardcoded palette classes with tokens. Remove every `dark:` class from components.
- Ship the motion system ([../03-target-architecture/motion-system.md](../03-target-architecture/motion-system.md)): motion tokens, `animations.css`, `Presence` for exit animations, reduced motion, and the per-component motion spec.
- Make focus visible in forced colors mode and add Pointer Events to drag interactions (Slider, Resizable, Carousel).
- Remove inert props (about 150) or implement them.
- Full behavior test checklist for every rebuilt component.

Exit criteria: no F grades, axe clean, keyboard tables generated from tests.

## Phase 3: Advanced components (weeks 10 to 16)

Goal: the features that set enterprise libraries apart.

- **Forms**: `Field` system, real react-hook-form `Form`, zod example, hidden inputs for custom controls.
- **Dates**: inline Calendar on react-day-picker (single, multiple, range), DatePicker, DateRangePicker, TimePicker, DateTimePicker. Locale support through `Intl`.
- **DataTable** on TanStack Table: sorting, filtering, column visibility, pinning, resizing, row selection, server mode, virtualization, empty and loading states.
- **Charts**: `ChartContainer` on Recharts using `--chart-*` tokens, with tooltip, legend and accessible data table fallback.
- **Toasts**: one `toast()` API (wrap sonner or build a `useSyncExternalStore` store).
- **New Tier 1 components** from [../02-benchmark/missing-components.md](../02-benchmark/missing-components.md): MultiSelect, NumberInput, PasswordInput, Spinner, Kbd, Empty, ButtonGroup, InputGroup, Stepper, FileUpload, Stack, Grid, Container.
- `hooks` entry point.
- RTL support through `DirectionProvider` and logical CSS properties.

Exit criteria: feature parity with shadcn for core components, plus DataTable and Dates beyond it.

## Phase 4: Docs platform and ecosystem (weeks 12 to 20, overlaps phase 3)

Goal: docs that cannot drift and an ecosystem around the package.

- Migrate docs to MDX with one server-rendered page per component ([../03-target-architecture/docs-platform.md](../03-target-architecture/docs-platform.md)).
- Generated props tables, single-source demos, Shiki highlighting, real search.
- Guides: Theming, Dark mode, Server Components, Forms, Accessibility, Migration, Contributing.
- Theme builder page with contrast checks and export.
- shadcn-compatible registry, then the `mad-ui` CLI ([../03-target-architecture/cli-and-registry.md](../03-target-architecture/cli-and-registry.md)).
- Blocks: dashboard shell, auth, settings, billing, team members. Navbar, Sidebar and Layout move here.
- Starter templates for Next.js App Router and Vite.
- Workbench (Storybook or Ladle) with visual regression in CI.

## Phase 5: 3.0 release (around week 20)

- Remove deprecated exports: `Modal`, standalone `Radio`, `Sonner`, `colors.ts` helpers, custom `useId`, `individual/*` paths that changed.
- Publish the migration guide with codemods through `mad-ui upgrade`.
- Announce with a public test and accessibility matrix.

## Ongoing after 3.0

- Pass every gate in [production-readiness.md](production-readiness.md) and run the dogfooding apps before calling the library production grade.
- AI kit (Conversation, Message, PromptInput, Response, Reasoning, ToolCall, Sources) and the optional `motion` entry point.
- P2 components from [../02-benchmark/component-catalog-expansion.md](../02-benchmark/component-catalog-expansion.md) (Tree, Timeline, SegmentedControl, Chip, ColorPicker, virtualized List and more).
- Density modes and multi-brand theming.
- Figma kit generated from `packages/tokens`.
- Quarterly manual screen reader audit.

## Tracking

Replace [COMPONENTS_STATUS.md](../../COMPONENTS_STATUS.md) and [MAD_UI_ROADMAP.md](../../MAD_UI_ROADMAP.md) with:

- A GitHub Project board with one issue per component per phase.
- A generated status page in the docs (grade, tests, a11y, since-version), built from `*.meta.ts` and CI results.
