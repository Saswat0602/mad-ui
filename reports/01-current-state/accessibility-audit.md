# Accessibility Audit (Cross-Cutting)

The README says "Accessible by Design: built according to WAI-ARIA authoring practices with keyboard navigation and focus management". The code does not support that claim yet. This page groups the per-component findings ([component-audit/](component-audit/README.md)) by failure class and maps each to WCAG 2.2, so fixes can be planned as shared infrastructure rather than 55 separate patches.

## Failure classes

| # | Failure class | WCAG 2.2 | Where | Shared fix |
| --- | --- | --- | --- | --- |
| 1 | Popups and menus have no roles (`menu`, `menuitem`, `listbox`, `option`, `tablist`, `tab`) | 4.1.2 Name, Role, Value | Select, DropdownMenu, ContextMenu, Menubar, NavigationMenu, Command, Combobox, Tabs | Menu, listbox and tabs primitives |
| 2 | No keyboard operation (arrows, Home/End, typeahead, Enter/Space) | 2.1.1 Keyboard | Same as 1, plus Slider, RadioGroup, Rating, Carousel, Calendar, Table sort | Roving focus and collection primitives |
| 3 | No focus trap, no initial focus, no focus restore | 2.4.3 Focus Order | Dialog, AlertDialog, Modal, Sheet, Drawer, Popover | `FocusScope` |
| 4 | Content hidden visually but still focusable | 2.4.3, 1.3.2 | Accordion panels, Carousel slides, Navbar mobile menu, Switch double tab stop | `hidden` / `inert` on collapsed content, `Presence` |
| 5 | Missing accessible names | 4.1.2, 1.1.1 | Switch, RadioGroup radios, Table checkboxes, icon-only close and delete buttons, DataTable search, Toast close, carousel dots | Lint rule plus tests asserting `getByRole(..., { name })` |
| 6 | No ARIA relationships (`aria-labelledby`, `aria-describedby`, `aria-controls`, `aria-expanded`, `aria-activedescendant`) | 1.3.1 Info and Relationships | All 23 overlay, layout and navigation files have none | `React.useId` plus context in every compound component |
| 7 | Form errors not exposed (`aria-invalid`, error linked by `aria-describedby`) | 3.3.1 Error Identification | Input, Textarea, Checkbox, Select, Form | `Field` primitive that wires ids automatically |
| 8 | Live regions missing or misused | 4.1.3 Status Messages | Sonner has none, Toast inserts a live region with content already inside, Alert defaults to `role="alert"` on static content | One persistent toast region, Alert with no role by default |
| 9 | Tooltip and hover content not dismissible or hoverable | 1.4.13 Content on Hover or Focus | Tooltip (no Escape), HoverCard (closes before pointer arrives) | Floating primitive with hover bridge and Escape |
| 10 | Auto-moving content without pause | 2.2.2 Pause, Stop, Hide | Carousel autoplay (no pause control, does not pause on focus) | Carousel pause button and focus pause |
| 11 | No reduced motion support | 2.3.3 Animation from Interactions | Whole library and docs site | Motion tokens set to 0 under `prefers-reduced-motion` |
| 12 | Small targets | 2.5.8 Target Size (Minimum) | Carousel dots (8px), some icon buttons | Minimum 24 by 24 CSS px hit area |
| 13 | Contrast risk | 1.4.3 Contrast (Minimum) | 27 uses of `text-zinc-400`, white labels on generated yellow pie slices | Token pairs checked for contrast in CI |
| 14 | Focus invisible in forced colors (Windows High Contrast) | 2.4.7 Focus Visible | 47 `outline-none` plus 35 `ring-*` (box-shadow) focus styles, 0 outline fallbacks. Under Tailwind v4 `outline-none` removes the outline entirely | `outline-hidden` or `forced-colors:outline` on every focus style |
| 15 | No solid fallback for blur surfaces | 1.4.3 for text over translucent surfaces, plus a user preference | 21 `backdrop-blur` usages, no `prefers-reduced-transparency` handling | Opaque surface token under the media query |
| 16 | Buttons submitting forms by accident | Not WCAG, but a usability defect | Dozens of `<button>` without `type` in forms, overlays, tables, carousel | Default `type="button"` in internal buttons |

## Docs site

The docs site has its own gaps (no skip link, no `nav` landmark, unlabeled controls, search and mobile nav without dialog semantics, no `focus-visible` styles). See [docs-site-audit.md](docs-site-audit.md#accessibility-of-the-docs-site-itself).

## What "accessible" should mean for Mad UI

A component is allowed to claim accessibility in the docs only when:

1. It implements the matching WAI-ARIA APG pattern (linked from its `*.meta.ts`).
2. Its keyboard table on the docs page is generated from tests that exercise every listed key.
3. `axe` reports no violations in its default, open and disabled states.
4. It has passed one manual screen reader check (NVDA plus Firefox or VoiceOver plus Safari) since its last behavior change.

Until then, the docs badge should read "Accessibility: in progress", not "WCAG AA".

## Fastest path to A grades

Building correct focus management, dismissal layers, roving focus, typeahead and positioning from scratch is months of work and the most bug-prone part of any UI library. Wrapping a proven headless layer (Radix, Base UI or React Aria) moves most components from F to A in one step, which is how shadcn reached its quality bar. The trade-off is discussed in [../03-target-architecture/component-api-standards.md](../03-target-architecture/component-api-standards.md#headless-foundation-decision).
