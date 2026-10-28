# Missing Components and Capabilities

Mad UI ships 55 component files. Coverage by name is reasonable. The gap that matters first is quality (see [../01-current-state/component-audit/README.md](../01-current-state/component-audit/README.md)). This page lists what is missing entirely, ranked by how often real product teams need it.

For the complete catalog (advanced inputs, dates, charts, AI interfaces, motion components, hooks, blocks and templates, with priority and complexity), see [component-catalog-expansion.md](component-catalog-expansion.md).

## Tier 1: expected from any "advanced" library

| Component | Seen in | Why it matters |
| --- | --- | --- |
| Field (Label, Control, Description, Error with auto ids) | shadcn, Mantine, Base UI | Fixes `aria-invalid` and `aria-describedby` for every input at once |
| Form with real react-hook-form integration | shadcn | The current `Form` is a styled wrapper with no form logic |
| DatePicker (Popover plus Calendar) | shadcn, MUI X, Mantine | The current Calendar is a picker and DateTimePicker is broken |
| DateRangePicker | MUI X, Mantine | Every analytics dashboard needs it |
| TimePicker | MUI X, Mantine | Advertised in `package.json` exports, never built |
| Inline Calendar (single, multiple, range) | shadcn (react-day-picker), Mantine | Foundation for the three pickers above |
| MultiSelect / TagsInput | MUI Autocomplete, Mantine | Filters, assignees, labels |
| NumberInput | Mantine, Chakra | Quantities, prices, with step and clamp |
| PasswordInput | Mantine | Show and hide toggle with correct labeling |
| Spinner | shadcn, Mantine, Chakra | Loading states outside buttons |
| Kbd | shadcn, Mantine | Keyboard shortcut hints in menus and command palette |
| Empty state | shadcn | Tables, lists and search with no results |
| ButtonGroup, InputGroup | shadcn, MUI | Toolbars, inputs with addons |
| Stepper | MUI, Mantine | Onboarding and checkout flows |
| FileUpload / Dropzone | Mantine | Uploads with drag and drop and progress |
| Stack, Grid, Container | MUI, Mantine, Chakra | Layout primitives without hand-written flex classes |
| VisuallyHidden, Portal, Slot, FocusScope (public) | Radix, MUI | Building blocks consumers need for their own components |
| ThemeProvider (optional), DirectionProvider | MUI, Mantine, Radix | Theme persistence without flash, RTL |

## Tier 2: strong differentiators

| Component | Seen in | Note |
| --- | --- | --- |
| Tree / TreeView | MUI X, Mantine, Ark | File browsers, permission scopes |
| Timeline | MUI Lab, Mantine | Audit logs, activity feeds |
| SegmentedControl | Mantine | View switchers |
| Chip (selectable, removable) | MUI, Mantine | Filters |
| CircularProgress / RingProgress | MUI, Mantine | Usage meters |
| Stat / KPI card | Tremor, Chakra | Dashboards |
| ColorPicker / ColorInput | Mantine, Chakra | Theme editors, labels |
| Virtualized List | MUI X, TanStack Virtual | Long lists in Combobox, Command, DataTable |
| Drawer as mobile bottom sheet with drag | shadcn (Vaul) | Today Drawer duplicates Sheet |
| Banner / Announcement bar | Many | System notices |
| Sidebar primitives with provider | shadcn | Replace the 572-line Sidebar mega-component |

## Tier 3: nice to have

Masonry, Marquee, Spoiler, Highlight, Transfer list, Rich text editor (Tiptap wrapper), Code block with highlighting, Image with lightbox, Calendar scheduler, Kanban (as a block).

## Hooks package

Mantine's hooks are a large part of its appeal. A `mad-ui-components/hooks` entry would expose what components already need internally:

- `useControllableState`, `useDisclosure`, `useMediaQuery`, `useClickOutside`, `useHotkeys`, `useDebouncedValue`, `useLocalStorage`, `useClipboard`, `useIsomorphicLayoutEffect`, `useResizeObserver`, `useIntersection`, `useReducedMotion`.

## Capabilities missing across the board

| Capability | Status |
| --- | --- |
| RTL support | None |
| Locale and i18n for built-in strings and dates | None (hardcoded English) |
| Density modes | None |
| Reduced motion | None |
| Server Components support | None (no `"use client"` in dist) |
| Form submission for custom controls (hidden inputs, `name`) | None (Select, Switch, Slider, InputOTP, RadioGroup) |
| Virtualization | None |
| Exit animations | None |

## What to remove or merge instead of adding

| Current | Action |
| --- | --- |
| Modal | Alias of Dialog, deprecate |
| Drawer (side panel) | Merge into Sheet, rebuild Drawer as bottom sheet |
| Toast and Sonner | Replace both with one `toast()` system |
| Radio (standalone) | Keep only RadioGroup and RadioGroupItem |
| Calendar (picker behavior) | Becomes DatePicker. Calendar becomes the inline grid |
| Navbar, Layout, Sidebar mega-components | Move to registry blocks |
| `lib/colors.ts` public exports | Remove in 3.0 |
| Custom `useId` export | Remove, use `React.useId` |
