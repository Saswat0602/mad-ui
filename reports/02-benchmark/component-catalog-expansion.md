# Component Catalog Expansion

The full list of what Mad UI could add to become a complete, advanced library. It extends [missing-components.md](missing-components.md), which covers the essentials, with advanced inputs, data visualisation, AI interfaces, motion pieces, hooks, blocks and templates.

Do not start this list before phase 2 of the [roadmap](../04-roadmap/roadmap.md) is done. Adding 60 components on top of broken primitives multiplies the bugs. Every new component must meet [component-api-standards.md](../03-target-architecture/component-api-standards.md) and ship with tests from day one.

## Priority key

- **P1**: needed by most product teams, adds credibility. Build in phase 3.
- **P2**: strong differentiator, build after 3.0.
- **P3**: niche or heavy, build only on demand or as a separate package.

Complexity: S (days), M (1 to 2 weeks), L (weeks, likely a dependency).

## Inputs and forms

| Component | What it does | Priority | Complexity | Build on |
| --- | --- | --- | --- | --- |
| Field, Fieldset | Label, control, description, error with auto ids and `aria-*` wiring | P1 | S | In-house |
| Form | Real react-hook-form integration with `FormField`, `FormMessage` reading errors | P1 | S | react-hook-form |
| InputGroup | Prefix and suffix addons, icons, buttons inside inputs | P1 | S | In-house |
| SearchInput | Search icon, clear button, `Cmd+K` hint, debounced `onSearch` | P1 | S | In-house |
| NumberInput | Step buttons, min, max, precision, wheel and arrow keys, `Intl` formatting | P1 | M | In-house or React Aria |
| CurrencyInput, PercentInput | Locale-aware formatting while typing | P2 | M | `Intl.NumberFormat` |
| PasswordInput | Show and hide toggle, optional strength meter, caps lock warning | P1 | S | In-house |
| PhoneInput | Country select plus formatted national number | P2 | M | libphonenumber-js |
| MultiSelect | Select many with chips, search, select all, max count | P1 | M | Popover plus Command |
| TagsInput | Free text tags with paste splitting and validation | P1 | M | In-house |
| Autocomplete | Async suggestions with loading, debounce, creatable option | P1 | M | Combobox |
| SegmentedControl | Exclusive choice with sliding indicator | P1 | S | ToggleGroup |
| CheckboxGroup, CheckboxCards, RadioCards | Card-style selectable options for plans, settings | P1 | S | RadioGroup, Checkbox |
| Editable | Click to edit inline text with save and cancel | P2 | S | In-house |
| FileUpload, Dropzone | Drag and drop, previews, progress, validation by type and size | P1 | M | In-house |
| ColorPicker, ColorInput, Swatches | HSV area, hue and alpha sliders, eyedropper, presets | P2 | M | In-house |
| Mentions | `@user` and `#tag` suggestions in a textarea | P3 | M | Combobox |
| Transfer list | Move items between two lists | P3 | M | In-house |
| SignaturePad | Draw with pointer, export to SVG or PNG | P3 | M | In-house |
| ImageCropper | Crop and zoom avatars | P3 | L | react-easy-crop |
| RichTextEditor | Toolbar, bubble menu, slash commands | P3 | L | Tiptap (separate package) |
| CodeEditor | Syntax highlighted editing | P3 | L | CodeMirror (separate package) |

## Dates and time

| Component | What it does | Priority | Complexity | Build on |
| --- | --- | --- | --- | --- |
| Calendar | Inline grid: single, multiple, range, disabled matcher, week numbers, locale | P1 | M | react-day-picker or React Aria |
| DatePicker | Input plus popover calendar, typing support | P1 | M | Calendar plus Popover |
| DateRangePicker | Two-month view plus presets ("Last 7 days", "This quarter") | P1 | M | Calendar |
| TimePicker | Segmented hour, minute, AM/PM input, keyboard stepping | P1 | M | In-house or React Aria |
| DateTimePicker | Composition of the two above (replaces today's broken one) | P1 | S | Above |
| MonthPicker, YearPicker | Billing periods, reports | P2 | S | Calendar |
| TimeZoneSelect | Searchable IANA zones with offsets | P2 | S | Combobox plus `Intl` |
| RelativeTime | "3 minutes ago" that updates, `<time>` with full date tooltip | P1 | S | `Intl.RelativeTimeFormat` |
| Scheduler (day, week, month views) | Calendar app view with events | P3 | L | Block, not core |

## Data display

| Component | What it does | Priority | Complexity | Build on |
| --- | --- | --- | --- | --- |
| DataTable (advanced) | Sorting, faceted filters, column visibility, pinning, resizing, grouping, row expansion, inline edit, selection, server mode, CSV export, saved views | P1 | L | TanStack Table plus Virtual |
| VirtualList | Windowed list for thousands of items | P1 | S | TanStack Virtual |
| Tree, TreeView | Expand, select, checkboxes, async children, keyboard per APG tree pattern | P2 | M | In-house or React Aria |
| TreeTable | Hierarchical rows in DataTable | P2 | M | TanStack expanding rows |
| DescriptionList | Key and value pairs for detail pages | P1 | S | In-house |
| Stat, KPI card | Value, delta with trend arrow, sparkline | P1 | S | In-house plus Sparkline |
| Timeline | Vertical events with icons and timestamps | P1 | S | In-house |
| List, Item | Rows with media, title, description, actions (shadcn Item) | P1 | S | In-house |
| Kbd | Keyboard keys and shortcuts, platform aware (Cmd vs Ctrl) | P1 | S | In-house |
| Tag, Chip | Selectable and removable chips | P1 | S | In-house |
| Indicator | Dot or count on top of avatars, icons | P1 | S | In-house |
| CodeBlock | Highlighted code with copy, line numbers, filename tab | P1 | S | Shiki (async) |
| Image | Loading state, fallback, blur placeholder, lightbox | P2 | M | In-house |
| JSONViewer | Collapsible JSON for dev tools and logs | P3 | M | In-house |
| DiffViewer | Side-by-side or inline text diff | P3 | M | diff library |
| CalendarHeatmap | GitHub-style contribution grid | P3 | S | In-house |

## Charts

Build one `ChartContainer` that maps `--chart-1` to `--chart-5` tokens, plus shared `ChartTooltip`, `ChartLegend` and an accessible data table fallback. Then provide typed presets.

| Chart | Priority |
| --- | --- |
| Area, Bar (grouped, stacked, horizontal), Line | P1 |
| Pie, Donut with center label | P1 |
| Sparkline (inline in tables and stat cards) | P1 |
| Radial bar, Radar | P2 |
| Scatter, Bubble | P2 |
| Combo (bar plus line, dual axis) | P2 |
| Heatmap, Funnel, Gauge | P3 |

Built on Recharts (what shadcn uses) or visx. References: shadcn charts, Tremor, MUI X Charts.

## Feedback

| Component | What it does | Priority | Complexity |
| --- | --- | --- | --- |
| Toaster plus `toast()` | Stacking, promise toasts, actions, swipe, pause on hover | P1 | M |
| Banner | Page-level announcement, dismissible, persisted | P1 | S |
| Callout | Inline info, warning, tip blocks for docs and forms | P1 | S |
| Spinner | Sizes, label for screen readers | P1 | S |
| CircularProgress, RingProgress | Determinate and indeterminate rings, usage meters | P1 | S |
| Skeleton presets | Text lines, avatar, card, table row matching final layout | P1 | S |
| LoadingOverlay | Blocks a region during async work, `aria-busy` | P1 | S |
| Empty | Icon, title, description, action for empty lists and searches | P1 | S |
| Result | Success, 403, 404, 500 page states | P2 | S |
| Popconfirm | Small confirm popover for destructive inline actions | P1 | S |
| StatusDot | Online, offline, degraded with label | P1 | S |
| Tour, Onboarding | Step-by-step spotlight with focus management | P2 | M |

## Overlays

| Component | What it does | Priority | Complexity |
| --- | --- | --- | --- |
| Dialog sizes and fullscreen-on-mobile | One prop, consistent behavior | P1 | S |
| Drawer (mobile bottom sheet) | Drag to dismiss, snap points, nested drawers | P1 | M |
| CommandDialog, Spotlight | Global `Cmd+K` with groups, recent items, async sources | P1 | M |
| Lightbox | Zoomable image gallery with keyboard | P2 | M |
| FloatingToolbar | Contextual toolbar over a selection | P3 | M |

## Navigation

| Component | What it does | Priority | Complexity |
| --- | --- | --- | --- |
| Sidebar primitives | Provider, collapsible icon mode, mobile sheet, groups, persisted state, keyboard shortcut | P1 | M |
| Stepper | Horizontal and vertical, linear and free, error state | P1 | M |
| Breadcrumb with overflow | Collapses middle items into a menu | P1 | S |
| Tabs with overflow | Scroll buttons or "More" menu when tabs exceed width | P1 | M |
| Toolbar | `role="toolbar"` with roving focus for editor controls | P1 | S |
| TableOfContents | Scroll spy for long pages | P2 | S |
| BottomNavigation | Mobile app-style tab bar | P2 | S |
| Link | Router-agnostic styled link with external indicator | P1 | S |
| BackToTop | Appears after scrolling, respects reduced motion | P3 | S |

## Layout and typography

| Component | Priority |
| --- | --- |
| Stack, Group (flex helpers with gap and responsive props) | P1 |
| Grid, SimpleGrid, Container, Center | P1 |
| PageHeader (title, description, actions, breadcrumbs) | P1 |
| Section, Card variants for settings pages | P1 |
| Heading, Text, Link, Code, Blockquote (polymorphic) | P1 |
| Prose (styles for rendered markdown) | P1 |
| Truncate with tooltip on overflow | P1 |
| Highlight (search term highlighting) | P2 |
| Affix, Sticky | P2 |
| Masonry | P3 |

## AI and LLM interfaces

In 2026 almost every product ships an assistant, and teams rebuild the same pieces each time. A well-built AI kit is one of the strongest differentiators available. Vercel's AI Elements (built on shadcn) shows the demand.

| Component | What it does | Priority |
| --- | --- | --- |
| Conversation | Scroll container that sticks to bottom while streaming, "jump to latest" button | P1 |
| Message | User and assistant variants, avatar, timestamp, actions (copy, retry, edit) | P1 |
| PromptInput | Auto-growing textarea, attachments, model selector, submit and stop, `Enter` vs `Shift+Enter` | P1 |
| Response | Streaming-safe markdown rendering with sanitisation, code blocks, tables | P1 |
| Reasoning | Collapsible "thinking" section with duration | P1 |
| ToolCall | Tool name, status (pending, running, done, error), collapsible input and output | P1 |
| Sources, Citations | Inline numbered citations with hover preview and source list | P1 |
| Suggestions | Prompt starter chips | P1 |
| Loader | `TextShimmer` "Thinking..." state | P1 |
| Artifact panel | Side panel for generated documents or code with versions | P2 |
| Feedback | Thumbs up and down with optional comment | P2 |
| ChatHistory | Grouped list of past conversations with search | P2 |

Accessibility notes: streamed responses announce once on completion (not every token) through a polite live region, stop buttons are keyboard reachable, and auto-scroll pauses when the user scrolls up.

## Motion components

See [motion-system.md](../03-target-architecture/motion-system.md#optional-motion-components-mad-ui-componentsmotion): `Transition`, `Collapse`, `AnimatedNumber`, `Reveal`, `Stagger`, `Marquee`, `TextShimmer`, `StreamingText`, `Typewriter`, spotlight card.

## Utilities and primitives (public)

| Utility | Priority |
| --- | --- |
| `Slot`, `Portal`, `VisuallyHidden`, `FocusScope`, `Presence` | P1 |
| `ThemeProvider`, `DirectionProvider`, `LocaleProvider` | P1 |
| `ClientOnly` (render only after hydration) | P1 |
| `CopyButton` (copy with success state and live announcement) | P1 |
| `ShortcutProvider` with `useHotkeys` and a help dialog listing shortcuts | P2 |

## Hooks (`mad-ui-components/hooks`)

| Group | Hooks |
| --- | --- |
| State | `useControllableState`, `useDisclosure`, `useToggle`, `useCounter`, `useListState`, `usePrevious` |
| DOM | `useClickOutside`, `useResizeObserver`, `useIntersection`, `useElementSize`, `useFocusTrap`, `useFocusReturn`, `useScrollLock` |
| Environment | `useMediaQuery`, `useReducedMotion`, `useColorScheme`, `useIsClient`, `useNetwork`, `useDocumentVisibility` |
| Timing | `useDebouncedValue`, `useDebouncedCallback`, `useThrottledCallback`, `useInterval`, `useTimeout` |
| Storage | `useLocalStorage`, `useSessionStorage` (SSR safe) |
| Interaction | `useHotkeys`, `useClipboard`, `useLongPress`, `useHover`, `useMove` (sliders, color pickers) |

Every hook is SSR safe, tree-shakeable and tested.

## Blocks (registry)

Copy-paste page sections built only from library components. They double as the dogfooding suite described in [production-readiness.md](../04-roadmap/production-readiness.md#dogfooding-plan).

| Area | Blocks |
| --- | --- |
| Application shell | Sidebar dashboard, top-nav dashboard, settings layout, two-pane mail layout |
| Authentication | SSO sign-in, email plus password, magic link, 2FA verify, forgot password |
| Settings | Profile, security (2FA, sessions, API keys), notifications, team members and roles, billing and invoices |
| Data | Data table page with filters and bulk actions, detail page with description list and timeline, audit log |
| Dashboards | KPI row plus charts, analytics overview, usage and quota |
| Productivity | Kanban board, file manager, calendar app, notifications center, command center |
| AI | Chat app, assistant side panel, prompt playground |
| Marketing (tasteful) | Pricing table, feature grid, testimonials, FAQ, logo marquee, footer |
| States | Empty dashboard, 404, 500, maintenance, onboarding checklist |

## Templates

Full starter apps, each a real dogfooding target:

- **SaaS dashboard** (Next.js App Router): auth, sidebar, DataTable, charts, settings, billing.
- **AI chat app**: conversation UI, streaming, history, model picker.
- **Admin panel** (Vite plus React Router): CRUD pages over a mock API.
- **Docs site starter**: MDX, sidebar, search, table of contents.

## Suggested build order after phase 2

1. Field, Form, InputGroup, PasswordInput, SearchInput (fix forms everywhere first).
2. Calendar, DatePicker, DateRangePicker, TimePicker.
3. DataTable advanced, VirtualList, Stat, Sparkline, Charts P1.
4. Toaster, Spinner, Empty, Kbd, Popconfirm, Banner, Skeleton presets.
5. MultiSelect, TagsInput, Autocomplete, SegmentedControl, NumberInput, FileUpload.
6. Sidebar primitives, Stepper, Toolbar, Tabs overflow.
7. AI kit P1.
8. Motion components and hooks entry point.
9. Blocks and templates.
