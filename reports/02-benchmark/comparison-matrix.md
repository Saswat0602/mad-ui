# Benchmark: Mad UI vs Leading Libraries

How Mad UI compares with the libraries it wants to be measured against. Mad UI's column reflects the current `master` as audited. The other columns reflect each library's well-known public positioning and are meant as direction, not a feature-by-feature spec sheet.

## Positioning

| | Mad UI today | shadcn/ui | Radix Primitives | MUI (Material UI) | Mantine | Chakra UI v3 |
| --- | --- | --- | --- | --- | --- | --- |
| Distribution | npm package plus a broken copy CLI | Copy into your repo via CLI and registry | npm package | npm package | npm package | npm package |
| Styling | Tailwind classes, theme not shipped | Tailwind, CSS variables | Unstyled | Emotion / Pigment CSS, theme object | CSS modules, CSS variables | Recipes, CSS variables |
| Headless engine | None (hand-rolled, mostly incomplete) | Radix | Is the engine | Own (and Base UI) | Own, Floating UI | Ark UI / Zag.js |
| Who owns the code | Library | User | Library | Library | Library | Library |

## Engineering quality

| Capability | Mad UI | shadcn/ui | Radix | MUI | Mantine |
| --- | --- | --- | --- | --- | --- |
| WAI-ARIA patterns implemented | 0 of 53 at A grade | Yes (via Radix) | Yes, the reference | Yes | Yes |
| Focus trap and restore in modals | No | Yes | Yes | Yes | Yes |
| Collision-aware positioning | No | Yes | Yes | Yes (Popper) | Yes |
| Controlled and uncontrolled everywhere | Partial, inconsistent | Yes | Yes | Yes | Yes |
| `asChild` / polymorphism | Declared, not implemented | `asChild` | `asChild` | `component` prop | `component` / `renderRoot` |
| Exit animations | No | Yes | Yes (Presence) | Yes (Transitions) | Yes |
| RTL | No | Yes | Yes | Yes | Yes |
| RSC ready (`"use client"`) | No | Yes | Yes | Yes | Yes |
| Tests | None | Via Radix plus own | Extensive | Extensive | Extensive |
| Type errors in source | 47 | n/a | 0 | 0 | 0 |
| CJS and ESM | ESM only | n/a (source) | Both | Both | Both |
| Changelog, semver discipline | No changelog | Yes | Yes | Yes | Yes |

## Theming

| Capability | Mad UI | shadcn/ui | MUI | Mantine |
| --- | --- | --- | --- | --- |
| Semantic tokens | 8 color pairs plus border, input, ring. About 13% of color classes use them | Full set incl. chart and sidebar | Full theme object | Full set |
| Theme shipped to consumers | No | Written into user CSS by CLI | Yes (ThemeProvider) | Yes (`@mantine/core/styles.css`) |
| Dark mode | Hand-written `dark:` classes (408) | Token swap | Color schemes | Token swap |
| Status colors (success, warning, info) | Hardcoded palette | Partial | Yes | Yes |
| Density and size scale | Inconsistent per component | Consistent | Consistent, density via theme | Consistent |
| Theme builder | No | Yes | Yes | Partial |
| Figma kit | No | Community | Official | Official |

## Feature depth

| Area | Mad UI | shadcn/ui | MUI (incl. X) | Mantine |
| --- | --- | --- | --- | --- |
| Data table | Bespoke, div grid, 12-col limit | TanStack recipe | DataGrid (virtualized, pinning, grouping in paid tiers) | Third party (mantine-react-table) |
| Charts | Hand-rolled SVG, no axes or tooltips | Recharts wrapper with tokens | MUI X Charts | `@mantine/charts` (Recharts) |
| Date and time | Broken DateTimePicker, Calendar is a picker | react-day-picker Calendar, DatePicker recipe | MUI X Date Pickers (range in paid tier) | `@mantine/dates` (range, month, year) |
| Command palette | Styling only | cmdk | n/a | Spotlight |
| Toasts | Two incomplete systems | Sonner | Snackbar | Notifications |
| Forms | Fake RHF wrapper | `Form` / `Field` with RHF | Form controls, no form state | `@mantine/form` |
| Rich text | No | No | No | Tiptap editor |
| Hooks library | No | No | Few | 70+ hooks |
| Blocks and templates | 4 docs examples | Blocks gallery | Templates | Mantine UI |

## What to copy from each

| Library | Borrow |
| --- | --- |
| shadcn/ui | Registry and CLI model, Tailwind token naming, compound API shape, blocks gallery, chart wrapper with tokens |
| Radix | Behavior and accessibility (ideally by depending on it), data-attribute styling hooks, docs keyboard tables |
| MUI | Consistent `size` / `variant` / `color` vocabulary, deep data grid and date pickers, theme builder, localization |
| Mantine | Hooks package, CSS-variable theme shipped as one stylesheet, breadth of form inputs, polished docs with props tables generated from types |
| Chakra v3 | Recipes and slot recipes as a typed variant system, state machines for complex widgets |

## Where Mad UI can differentiate

Matching shadcn feature for feature is a losing race. Realistic angles:

1. **npm package with shadcn ergonomics.** shadcn users must copy and maintain code. A versioned package with the same API, plus an eject path through the registry, serves teams that want upgrades without merge pain.
2. **Enterprise defaults out of the box.** DataTable with server mode, Field and Form with validation, SSO and settings blocks, density modes. This matches the "authentic enterprise patterns" rule already in [AGENTS.md](../../AGENTS.md).
3. **Verified accessibility.** Publish the test matrix and keyboard tables per component. Few Tailwind libraries can show proof.
4. **One import for theming** across Tailwind v3 and v4, with a theme builder.
