# Component Audit: Overlay, Layout, Navigation

Files: [src/components/overlay/](../../../src/components/overlay), [src/components/layout/](../../../src/components/layout), [src/components/navigation/](../../../src/components/navigation). Line numbers refer to the current `master`.

Reference points: Radix primitives (Dialog, Popover, DropdownMenu, Menubar, NavigationMenu), Floating UI for positioning, cmdk for Command, shadcn Sidebar.

## Summary

| Component | API style | Portal | Positioning | Focus trap / restore | Esc / outside | A11y | Key issue |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dialog | Compound, controlled only | No | Fixed, centered | No / No | Yes / Yes | D | **Trigger never mounts while closed** |
| AlertDialog | Compound, controlled only | No | Fixed, centered | No / No | Yes / No | D | Same trigger bug |
| Modal | Monolithic | No | Fixed, centered | No / No | Yes / Yes | D | Third dialog implementation |
| Drawer | Monolithic | Yes | Fixed edge | No / No | Yes / Yes | F | No role, slide never animates |
| Sheet | Compound, both modes | Yes | Fixed edge | No / No | Yes / Yes | D | Role on the backdrop, not the panel |
| Popover | Compound plus legacy `trigger` prop | No | CSS absolute | No / No | Yes / Yes | F | Trigger cannot close it |
| Tooltip | Compound plus `content` prop | No | CSS absolute | n/a | No / n/a | D | No `aria-describedby`, orphaned timer |
| HoverCard | Compound, miswired | No | Wrong coordinate space | n/a | No / No | F | Trigger does nothing, children rendered twice |
| DropdownMenu | Compound, uncontrolled only | No (Portal is a fragment) | CSS absolute | No / No | Yes / Yes | F | No menu roles or keyboard, submenus clipped |
| ContextMenu | Compound, miswired | No | Fixed at cursor, no flip | No / No | No / Yes | F | Items always visible inline |
| Menubar | Compound, miswired | No | CSS absolute | No / No | No / Yes | F | Sibling Content never opens |
| NavigationMenu | Compound, miswired | No | CSS absolute | No / No | No / Yes | F | Hover only, closes crossing the gap |
| Command | Styling only | n/a | n/a | n/a | n/a | F | No filtering, keyboard or roles |
| Combobox | Monolithic | No | CSS absolute | No / No | No / Yes | F | Trigger not focusable, no listbox |
| Collapsible | `cloneElement` on direct children | n/a | n/a | n/a | n/a | D | No `aria-expanded`, 22 inert props |
| Separator | Monolithic | n/a | n/a | n/a | n/a | C | About 25 props leak to the DOM |
| Toggle / ToggleGroup | Monolithic | n/a | n/a | n/a | n/a | B / D | Controlled only, group has no value |
| Resizable | Monolithic | n/a | n/a | n/a | n/a | F | Same size for every panel, mouse only |
| ScrollArea | Monolithic | n/a | n/a | n/a | n/a | C | Custom scrollbar is decorative |
| Pagination | Hybrid | n/a | n/a | n/a | n/a | C | No `aria-current` |
| Navbar | App-shell block | No | CSS absolute | No / No | No / No | D | Runtime class names, `console.log` |
| Sidebar | Block plus wrapper parts | n/a | n/a | n/a | n/a | D | Runtime class names, tooltips clipped |
| Layout | Block | n/a | n/a | n/a | n/a | n/a | Navbar height becomes 256px |

## Critical defects (verified)

- **Dialog trigger cannot open the dialog.** [dialog.tsx:91-99](../../../src/components/overlay/dialog.tsx#L91-L99): the root renders `children` only when `open` is true. A `DialogTrigger` placed inside `<Dialog>` (the documented shadcn structure) does not exist while closed. Same in AlertDialog (97 to 101).
- **DropdownMenu is not a menu.** [dropdown-menu.tsx](../../../src/components/overlay/dropdown-menu.tsx): items are plain `div`s with no role, tabIndex or key handling (248 to 259). No `aria-haspopup`/`aria-expanded`. The trigger only opens and the outside-click check excludes it, so clicking the trigger never closes the menu. Content has `overflow-hidden` (220), which clips submenus (422). `DropdownMenuPortal` returns a fragment (457 to 461).
- **ContextMenu, Menubar, NavigationMenu, HoverCard are miswired.** Their Trigger parts wire nothing, and the Content part renders its children twice (once as the hit area, once as the popup). The shadcn-style sibling structure used in the docs ([docs/src/lib/examples/navigation.tsx:166-176](../../../docs/src/lib/examples/navigation.tsx#L166-L176)) produces empty popups with items rendered inline.
- **Command is styling only.** [command.tsx](../../../src/components/navigation/command.tsx): no search state, no filtering, `CommandEmpty` always renders (97 to 110), every item is `tabIndex=0`, no `aria-activedescendant`, no `listbox`/`option` roles. `onSelect` receives no value.
- **Combobox is unreachable by keyboard.** [combobox.tsx:91-101](../../../src/components/navigation/combobox.tsx#L91-L101): `role="combobox"` is on a `div` with no tabIndex. Options have no role or `aria-selected`.
- **Layout produces a 256px navbar.** [layout.tsx:91](../../../src/components/layout/layout.tsx#L91): `` `h-${navbarHeight}` `` with the default `64` becomes `h-64` (16rem). `w-280` (105) is not a Tailwind class. It forces the navbar to `zIndex: 60`, above every `z-50` overlay.
- **Resizable ignores its handles.** [resizable.tsx:81-91](../../../src/components/layout/resizable.tsx#L81-L91): one size for every panel and a single handle appended after all children, so user-placed `ResizableHandle`s do nothing. Mouse only, no `role="separator"`.

## Other findings by component

- **Dialog / AlertDialog / Modal**: no `aria-labelledby`/`aria-describedby`, no focus trap, no initial focus, no focus restore, `onEscapeKeyDown` accepted and ignored. AlertDialog stacks two `fixed z-50` layers and does not focus Cancel.
- **Drawer**: returns `null` when closed (102), so the translate transition never runs. No `role="dialog"`. Trailing `{...props}` overwrites merged `style`.
- **Sheet**: the best of the group (controlled and uncontrolled, portal with mounted guard) but `role` and `aria-modal` sit on the backdrop (176, 177). `zinc-850` (234) is not a color.
- **Popover**: two APIs in one file. Outside-click handler does not exclude the trigger (252), so clicking the trigger closes then reopens. `arrowColor`, `offset` leak to the DOM. `zIndex` and `arrow` ignored. `sideOffset` always applied as `marginTop`.
- **Tooltip**: `showTooltip` overwrites its timer without clearing (66), so a stale timer can reopen it. With `asChild`, focus and blur are not wired, so keyboard users never see it. No Escape (WCAG 1.4.13).
- **Collapsible**: 22 declared props unused. Overwrites the trigger's own `onClick`. `data-state` classes refer to an attribute that is never set.
- **ToggleGroup**: no `value`, no single or multiple mode, no roving focus.
- **ScrollArea**: native scrollbar stays visible. Custom thumb is neither sized nor draggable.
- **Navbar** (720 lines): default profile actions call `console.log` (266 to 268). Theme toggle and language button do nothing. Dropdowns are CSS hover only. Collapsed mobile menu is still reachable by Tab. The "colorful" gradient theme and pulsing badges break [AGENTS.md](../../../AGENTS.md) section 3.
- **Sidebar** (572 lines): `overflow-hidden` (245) clips collapsed-mode tooltips. `transform` (206) makes the `fixed` backdrop size to the sidebar instead of the viewport. Wrapper parts (504 to 569) share no state.
- **Icon props** in Navbar and Sidebar are typed `any` and rendered as `<Icon size>`. Passing an element (`<Home />`) instead of a component crashes. Type it as `React.ElementType | React.ReactNode` and branch on `isValidElement`.

## Why `tsc` fails here

- `node_modules/@types/react` is 19.3.0 via the docs symlink, while the root declares `^18.2.0`.
- Under React 19 types, `isValidElement` narrows to `ReactElement<unknown>`, so every `child.props.x` and `cloneElement(child, { onClick })` fails (dropdown-menu, hover-card, context-menu, sheet, collapsible, radio-group).
- `useRef<T>()` without an argument is an error in React 19 types (tooltip 56, hover-card 63, scroll-area 25).
- Sidebar's custom `onToggle(collapsed)` conflicts with the DOM `onToggle` it inherits (unrelated to React 19).
- Fix: a typed `Slot` helper replaces all `cloneElement` trigger wiring, and CI typechecks against both React 18 and 19 types.

## Cross-cutting

- **No shared overlay infrastructure.** Scroll lock is copy-pasted five times (dialog 87, alert-dialog 91, modal 87, drawer 98, sheet 153), resets to `'unset'`, and is not ref-counted, so closing a nested overlay unlocks the outer one. Each overlay adds its own document Escape listener, so one Escape closes every stacked overlay.
- **No positioning engine.** CSS `absolute` everywhere: no flip, shift, collision padding or tracking on scroll. Only Drawer and Sheet portal, so everything else is clipped by `overflow` ancestors.
- **No ARIA linkage at all.** Across 23 files there is no `useId`, `aria-labelledby`, `aria-describedby`, `aria-controls`, `aria-activedescendant`, nor any `menu`, `listbox` or `option` role.
- **No exit animations.** Everything unmounts the moment `open` is false. `animate-in fade-in-0 zoom-in-95` classes need `tailwindcss-animate`, which is not configured, and `styles.css` only defines part of that set. No `prefers-reduced-motion`.
- **SSR is clean** in this group: no `Math.random` ids, no `window`/`document` during render.

## Recommended consolidation

1. Build the shared core first (or adopt a headless library, see [../../03-target-architecture/component-api-standards.md](../../03-target-architecture/component-api-standards.md)): `useControllableState`, `Slot`, ref-counted scroll lock, dismissable layer stack, focus scope, `Portal`, `Presence` for exit animations, Floating UI for positioning.
2. One Dialog primitive. AlertDialog becomes a Dialog that ignores outside clicks and focuses Cancel. Sheet becomes Dialog content with a `side` option. Modal and Drawer become deprecated wrappers (Drawer later reborn as a mobile bottom sheet).
3. One menu core (roving focus, typeahead, submenu arrows) shared by DropdownMenu, ContextMenu and Menubar.
4. Combobox becomes Popover plus Command. Command gets a store modeled on cmdk (scoring, active item, loading, optional virtualization).
5. Navbar, Sidebar and Layout move to `blocks/`, distributed through the registry. Ship composable Sidebar primitives with a provider instead.
