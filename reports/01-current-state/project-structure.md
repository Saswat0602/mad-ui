# Project Structure Audit

## Current layout

```
mad-ui/
├── AGENTS.md, README.md, COMPONENTS_STATUS.md
├── COMPLETE_GUIDE.md, QUICK_REFERENCE.md      generic npm tutorials, unrelated
├── MAD_UI_ROADMAP.md                           stale (Dec 2025)
├── fix-imports.sh, update-exports.sh           dead one-off migration scripts
├── extra/drawer.ts                             orphan, 514 lines
├── node_modules -> docs/node_modules           symlink hack
├── package.json, tsup.config.ts, tailwind.config.js, postcss.config.js
├── scripts/
│   ├── build-css.js                            not wired to any npm script
│   └── copy-component.js                       CLI, broken (see build report)
├── src/
│   ├── index.ts, core.ts                       2 hand-written barrels
│   ├── components/index.ts                     3rd barrel, does not compile
│   ├── modules/*.ts                            4th set of barrels (8 files)
│   ├── individual/*.ts                         5th set of barrels (54 files)
│   ├── components/{core,forms,layout,overlay,navigation,data,media,feedback}/
│   ├── lib/{utils,colors,focus,keyboard,portal}
│   ├── icons/index.tsx                         unused by any component
│   └── styles.css                              never shipped
└── docs/                                       Next.js 16 app, separate lockfile
```

## Problems

### Five export barrels, maintained by hand

Every new component must be added in six places (`components/index.ts`, `index.ts`, `modules/<cat>.ts`, `individual/<name>.ts`, `package.json#exports`, `tsup.config.ts`). The [AGENTS.md](../../AGENTS.md) checklist documents this, which is a sign it should be automated. The barrels have already drifted (see [build-and-packaging.md](build-and-packaging.md), section P1).

### Dead infrastructure

None of these are imported by any component or entry point:

- [src/lib/focus.ts](../../src/lib/focus.ts): focus trap helpers
- [src/lib/keyboard.ts](../../src/lib/keyboard.ts): keyboard navigation helpers
- [src/lib/portal.tsx](../../src/lib/portal.tsx): portal helper
- [src/icons/index.tsx](../../src/icons/index.tsx): icon set (components use `lucide-react` directly)
- `isReactNative`, `getPlatformClassName`, `PlatformProps` in [src/lib/utils.ts](../../src/lib/utils.ts): React Native shims in a DOM-only Tailwind library

The focus, keyboard and portal helpers are exactly what the overlay components need. They were written and never wired in, so each overlay reimplements (or skips) this logic.

### Categories do not match what the components are

| Component | Current folder | Belongs in |
| --- | --- | --- |
| Tabs, Accordion | `forms/` | `disclosure/` or `navigation/` |
| Breadcrumbs | `forms/` | `navigation/` |
| Tooltip, Popover | `layout/` | `overlay/` |
| Separator | `overlay/` | `layout/` |
| Toggle, ToggleGroup | `overlay/` | `inputs/` |
| Collapsible | `overlay/` | `disclosure/` |
| Typography | `media/` | `typography/` |
| Badge | `media/` | `data-display/` |
| Navbar, Sidebar, Layout | `layout/` | `blocks/` (these are app shells, not primitives) |

Consumers who import by category (`mad-ui-components/forms`) cannot predict where something lives.

### Overlapping components

| Pair | Overlap | Recommendation |
| --- | --- | --- |
| `Modal` (layout) vs `Dialog` (overlay) | Same job | Keep `Dialog`. Deprecate `Modal` as an alias. |
| `Drawer` vs `Sheet` | Same job (side panel) | Keep `Sheet` for side panels, make `Drawer` the mobile bottom sheet with drag, as shadcn does (Vaul). |
| `Toast` vs `Sonner` | Two notification systems | Keep one imperative `toast()` API. |
| `Radio` vs `RadioGroup` + `RadioGroupItem` | Standalone radio is an accessibility trap | Keep `RadioGroup`. |
| `Table` vs `DataTable` | Fine to have both, but `DataTable` should be built on `Table` | Make `DataTable` compose `Table` primitives. |
| `Breadcrumbs` (plural) | shadcn and MUI call it `Breadcrumb` / `Breadcrumbs`, Radix has none | Pick one and alias the other. |

### Docs and library are not a real monorepo

- No `workspaces` field, two lockfiles, a symlinked `node_modules`.
- The docs app now depends on the published `^2.15.15`, so it cannot show unreleased work.
- There is nowhere to put a second package (tokens, icons, CLI, Figma plugin, blocks).

Target structure: [../03-target-architecture/folder-structure.md](../03-target-architecture/folder-structure.md).
