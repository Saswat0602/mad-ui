# Target Folder Structure

Goal: one workspace where the library, tokens, CLI, registry and docs build together, every component lives in a self-contained folder, and barrels plus the `exports` map are generated instead of hand-written.

## Monorepo layout

```
mad-ui/
├── apps/
│   ├── docs/                         Next.js docs site (moved from ./docs)
│   └── workbench/                    Storybook or Ladle for isolated development
├── packages/
│   ├── react/                        published as `mad-ui-components`
│   │   ├── src/
│   │   │   ├── components/           one folder per component (see below)
│   │   │   ├── hooks/                shared hooks
│   │   │   ├── primitives/           Slot, Portal, FocusScope, VisuallyHidden, Presence
│   │   │   ├── lib/                  cn, compose-refs, create-context
│   │   │   ├── styles/               theme.css, base.css (opt-in), animations.css
│   │   │   └── index.ts              GENERATED
│   │   ├── manifest.json             GENERATED from component meta files
│   │   ├── package.json              exports map GENERATED
│   │   └── tsup.config.ts            entries GENERATED
│   ├── tokens/                       `@mad-ui/tokens`: token source and generated CSS, TS, JSON
│   ├── cli/                          `mad-ui` CLI: init, add, diff, upgrade
│   ├── eslint-config/                shared lint rules (a11y plugin included)
│   └── tsconfig/                     shared tsconfig bases
├── registry/                         shadcn-compatible registry JSON, built from packages/react
├── blocks/                           app-level compositions: dashboard shell, auth, settings, billing
├── templates/                        starter apps: next-app-router, vite-react
├── scripts/                          codegen: barrels, exports, registry, props docs
├── reports/                          audits like this one
├── .changeset/
├── .github/workflows/                ci.yml, release.yml, visual.yml
├── pnpm-workspace.yaml
├── turbo.json
├── LICENSE, CHANGELOG.md, CONTRIBUTING.md, SECURITY.md, CODE_OF_CONDUCT.md
└── AGENTS.md                         single agent guide
```

Why pnpm workspaces plus Turborepo: the docs app consumes `"mad-ui-components": "workspace:*"`, which removes the `node_modules` symlink, the second lockfile and the need to publish before previewing. Turborepo caches `build`, `typecheck`, `test` per package.

## Component folder convention

```
packages/react/src/components/dialog/
├── dialog.tsx                        implementation, "use client" at top
├── dialog.variants.ts                tailwind-variants or cva definitions, exported
├── dialog.test.tsx                   behavior and a11y tests (Vitest, Testing Library, axe)
├── dialog.stories.tsx                workbench stories, also used for visual tests
├── dialog.meta.ts                    name, category, status, since, a11y pattern link
├── index.ts                          public surface of this component only
└── README.md                         optional: design notes, known limitations
```

Rules:

- A component imports other components only through their `index.ts`.
- Shared behavior goes into `primitives/` or `hooks/`, never copied.
- `*.meta.ts` is the single source of truth. Codegen reads it to produce the root barrel, category barrels, `exports`, tsup entries, docs registry and CLI registry.

## Category taxonomy

Aligned with how MUI, Mantine and shadcn group things, so consumers can guess where a component lives.

| Category | Components |
| --- | --- |
| `inputs` | Button, IconButton, ButtonGroup, Input, InputGroup, Textarea, NumberInput, PasswordInput, Checkbox, RadioGroup, Switch, Slider, RangeSlider, Select, NativeSelect, MultiSelect, Combobox, TagsInput, InputOTP, Toggle, ToggleGroup, Rating, FileUpload, ColorPicker |
| `dates` | Calendar, DatePicker, DateRangePicker, TimePicker, DateTimePicker |
| `forms` | Form, Field, Label, FieldDescription, FieldError, Fieldset |
| `data-display` | Card, Table, DataTable, Badge, Avatar, Kbd, List, Tree, Timeline, Stat, Chart, Empty |
| `feedback` | Alert, Toast, Progress, CircularProgress, Spinner, Skeleton, Banner |
| `overlay` | Dialog, AlertDialog, Sheet, Drawer, Popover, Tooltip, HoverCard, DropdownMenu, ContextMenu |
| `navigation` | Tabs, Breadcrumb, Pagination, NavigationMenu, Menubar, Command, Stepper, Link, Sidebar (primitives) |
| `disclosure` | Accordion, Collapsible |
| `layout` | Container, Stack, Grid, Separator, AspectRatio, ScrollArea, Resizable |
| `typography` | Heading, Text, Code, Blockquote, Prose |
| `utilities` | ThemeProvider, DirectionProvider, Portal, VisuallyHidden, Slot, FocusScope |

App shells (Navbar, full Sidebar layout, Layout) move to `blocks/` and are distributed through the registry, not the npm package.

## Migration map from today

| Today | Target |
| --- | --- |
| `src/components/core/button.tsx` | `packages/react/src/components/button/button.tsx` |
| `src/components/forms/tabs.tsx` | `packages/react/src/components/tabs/` (category `navigation`) |
| `src/components/layout/tooltip.tsx` | `packages/react/src/components/tooltip/` (category `overlay`) |
| `src/components/layout/modal.tsx` | Deprecated alias of `dialog` |
| `src/components/layout/navbar.tsx`, `sidebar.tsx`, `layout.tsx` | `blocks/app-shell/` plus `components/sidebar/` primitives |
| `src/index.ts`, `src/core.ts`, `src/modules/*`, `src/individual/*`, `src/components/index.ts` | Deleted, replaced by generated barrels |
| `src/lib/focus.ts`, `keyboard.ts`, `portal.tsx` | `packages/react/src/primitives/` and actually used |
| `src/lib/colors.ts` | Deleted, replaced by `packages/tokens` |
| `src/styles.css` | `packages/react/src/styles/theme.css`, built and exported |
| `scripts/copy-component.js` | `packages/cli` |
| `docs/` | `apps/docs/` |
| `COMPLETE_GUIDE.md`, `QUICK_REFERENCE.md`, `extra/`, `*.sh` | Deleted |
