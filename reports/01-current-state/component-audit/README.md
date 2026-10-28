# Component Audit: Scorecard

All 55 component files were read in full. Each was graded on accessibility against the WAI-ARIA Authoring Practices pattern it claims to implement. API, theming and bugs are noted alongside.

Detailed findings with line references:

- [core-forms.md](core-forms.md): 21 components in `core/` and `forms/`
- [overlay-layout-navigation.md](overlay-layout-navigation.md): 23 components in `overlay/`, `layout/`, `navigation/`
- [data-feedback-media.md](data-feedback-media.md): 11 components in `data/`, `feedback/`, `media/`

## Grade distribution

| Grade | Meaning | Count | Components |
| --- | --- | --- | --- |
| A | Matches Radix or shadcn behavior | **0** | none |
| B | Correct semantics, minor gaps | 7 | Button, Card, Label, Progress, Toggle, Typography, Badge |
| C | Usable, missing ARIA wiring | 10 | Checkbox, Input, Radio, Skeleton, Textarea, Separator, ScrollArea, Pagination, Alert, Avatar |
| D | Partly broken for keyboard or screen reader users | 17 | Rating, Switch, Accordion, Breadcrumbs, InputOTP, RadioGroup, Dialog, AlertDialog, Modal, Sheet, Tooltip, Collapsible, Navbar, Sidebar, Table, Toast, Carousel |
| F | Wrong semantics or functionally broken | 19 | Select, Slider, Calendar, DateTimePicker, Form, Tabs, Drawer, Popover, HoverCard, DropdownMenu, ContextMenu, Menubar, NavigationMenu, Command, Combobox, Resizable, DataTable, Chart, Sonner |
| n/a | Layout only | 2 | Layout, AspectRatio |

**36 of 53 graded components (68%) are D or F.** Every component that involves a popup, a menu, a list selection or a date is in that group. These are exactly the components that make a library "advanced", and the ones where shadcn leans on Radix.

## Functionally broken (not just inaccessible)

These fail for mouse users too. All were verified in the source.

| Component | Defect | Location |
| --- | --- | --- |
| Dialog, AlertDialog | `DialogTrigger` inside `<Dialog>` never mounts while closed, so it cannot open the dialog | `overlay/dialog.tsx:91-99` |
| Slider | Dragging does nothing (stale `isDragging` in document listener) | `core/slider.tsx:196-209` |
| Switch | Passing `onChange` stops the switch toggling | `core/switch.tsx:81-82` |
| Select, Popover, DropdownMenu | Clicking the trigger cannot close the popup | `core/select.tsx:98, 131-145` and others |
| DateTimePicker | 12-hour list skips 1 and repeats 12, leading days come from the wrong month | `forms/datetime-picker.tsx:107, 319` |
| InputOTP | Typed digits shift into earlier slots | `forms/input-otp.tsx:46-48` |
| Calendar | Navigating months from the 31st skips a month | `forms/calendar.tsx:218-222` |
| Table | Crashes with "Rendered more hooks" when `data` goes from undefined to an array | `data/table.tsx:103-154` |
| Carousel | Documented `<CarouselContent>` wrapper renders zero slides | `media/carousel.tsx:97-99` |
| Menubar, NavigationMenu, ContextMenu, HoverCard | Sibling Content (the documented structure) never opens, items render inline | see overlay report |
| Command | No filtering at all | `navigation/command.tsx` |
| Resizable | User-placed handles ignored, every panel gets the same size | `layout/resizable.tsx:81-91` |
| Layout | Default navbar height renders 256px | `layout/layout.tsx:91` |
| Form | Named after react-hook-form, does not use it | `forms/react-hook-form.tsx` |
| Chart | Last bar overflows by 40px, empty data gives infinity | `data/chart.tsx:74-105` |
| Toast | A reopened controlled toast stays invisible | `feedback/toast.tsx:67, 164` |

## API consistency

| Concern | Current state | Target |
| --- | --- | --- |
| Composition | Mix of compound (Dialog, Select), `items` arrays (Tabs, Accordion, Breadcrumbs) and hybrids whose compound half has no context (Table, Avatar, Carousel) | Compound everywhere, optional `items` shortcut built on top |
| `asChild` | Declared on Button but not implemented. `cloneElement` hacks elsewhere | `Slot` primitive, used by every trigger |
| `forwardRef` | Missing in 25 of 55 files | Every DOM-rendering part |
| `displayName` | Missing in 25 of 55 files | Every part |
| Controlled and uncontrolled | Dialog and AlertDialog controlled only, DropdownMenu uncontrolled only, Switch broken | `useControllableState` for every stateful component |
| Prop spread | DataTable, Chart, Carousel, Sonner, Typography, AspectRatio take none | Every root spreads remaining props |
| Inert props | About 150 declared props do nothing (Slider about 50, Carousel about 35, Collapsible 22, Separator about 25, Table 9, Alert 9) and many leak to the DOM | Every declared prop implemented and tested |
| Event handlers | Consumer handlers replace internal ones (Select, Switch, Collapsible) | `composeEventHandlers` everywhere |
| Buttons | Dozens of `<button>` without `type="button"`, so they submit enclosing forms | Always set `type="button"` unless documented |
| Variant names | `outline` vs `outlined`, `destructive` vs `error`, `sm\|md\|lg` vs `default\|sm\|lg\|icon` | One vocabulary, see [../../03-target-architecture/component-api-standards.md](../../03-target-architecture/component-api-standards.md) |

## What is already good

- Card, Label, Badge, Separator and Table primitives follow the shadcn shape closely.
- Sheet supports controlled and uncontrolled state and portals correctly with a mounted guard.
- Overlay, layout and navigation code is SSR clean (no `Math.random` ids, no `window` during render).
- Button, Input and Card already use a variant helper, so moving to `tailwind-variants` or `cva` is mechanical.
- The compound naming (`DialogTrigger`, `DropdownMenuItem`, `SelectValue`) already matches shadcn, so consumers coming from shadcn will recognise the API once the behavior is fixed.
