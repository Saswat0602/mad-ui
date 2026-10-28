# Component API Standards

The contract every Mad UI component follows. A PR that breaks one of these rules does not merge. The rules are drawn from what makes Radix, shadcn and MUI predictable to use.

## Headless foundation decision

The overlay, menu, select, combobox, tabs, slider and date components score D or F today because the hard behavior (focus scope, dismissable layers, roving focus, typeahead, collision-aware positioning, presence for exit animations) was never built. There are two ways to fix that.

| Option | What it means | Pros | Cons |
| --- | --- | --- | --- |
| **A. Wrap a headless library** (recommended) | Styled Mad UI components on top of Radix UI (or Base UI). Dates on `react-day-picker` or React Aria. | Months of a11y work done and battle tested. Same model as shadcn, so its users feel at home. Fixes most F grades at once. | Adds runtime dependencies. Contradicts the "zero runtime baggage" README line, which should be reworded. |
| B. Build in-house primitives | Finish and use `lib/focus.ts`, `lib/keyboard.ts`, `lib/portal.tsx`, add Floating UI | No extra dependencies. Full control. | Large, ongoing effort. Every edge case (nested layers, iframes, RTL, touch, screen reader quirks) must be found and fixed by this team. |

Recommendation: **Option A for interactive primitives** (Dialog, AlertDialog, Popover, Tooltip, HoverCard, DropdownMenu, ContextMenu, Menubar, NavigationMenu, Select, Tabs, Accordion, Collapsible, RadioGroup, Checkbox, Switch, Slider, Toggle, ToggleGroup, ScrollArea, Avatar). **In-house** for static or simple components (Button, Card, Badge, Input, Textarea, Label, Separator, Skeleton, Typography, Alert, Table primitives) and for differentiated features (DataTable on TanStack, Charts on Recharts, Command on cmdk, toast on sonner).

## Composition

- **Compound components are the primary API.** `Dialog`, `DialogTrigger`, `DialogContent`, `DialogTitle`. Parts share state through context, never through `cloneElement` on direct children.
- **Convenience props are allowed as thin wrappers** built from the compound parts (for example `<Tabs items={...} />`). They never contain behavior the compound API lacks.
- **`asChild` on every trigger and link-like part**, implemented with a `Slot` that merges props, composes handlers and composes refs.
- **No "props or children" hybrids** that switch behavior based on whether `data` or `children` is passed. That pattern caused the Table hook crash, the Avatar double render and the empty Carousel.

## State

- Every stateful component supports **controlled and uncontrolled** modes through one `useControllableState` hook.
- Naming is fixed:

| State | Controlled | Uncontrolled | Callback |
| --- | --- | --- | --- |
| Open | `open` | `defaultOpen` | `onOpenChange(open)` |
| Value | `value` | `defaultValue` | `onValueChange(value)` |
| Checked | `checked` | `defaultChecked` | `onCheckedChange(checked)` |
| Pressed | `pressed` | `defaultPressed` | `onPressedChange(pressed)` |

- Native `onChange` stays native. Never reuse it for a custom value signature.

## DOM contract

- Every part that renders a DOM element uses `React.forwardRef` (still required for React 18 consumers) and sets `displayName`.
- Every root spreads remaining props onto its DOM element. No silent prop swallowing.
- **No inert props.** If a prop is declared in the type, it is implemented and tested. Today about 150 declared props do nothing.
- Internal `<button>` elements always set `type="button"`.
- User event handlers are composed, never replaced: call the user's handler first, then the internal one unless `event.defaultPrevented`.
- Ids come from `React.useId`. Never a module counter, never `Math.random`.
- No `window` or `document` access during render.

## Styling hooks

- State is exposed as data attributes so consumers can style without JavaScript: `data-state="open|closed|checked|unchecked|active|inactive"`, `data-disabled`, `data-orientation`, `data-side`, `data-align`, `data-highlighted`.
- `className` on every part, merged last through `cn()` so consumer classes win.
- Variant functions are exported (`buttonVariants`, `badgeVariants`) so consumers can apply them to other elements, such as a router `Link`.

## Variant vocabulary

One set of names across the library.

| Prop | Allowed values | Notes |
| --- | --- | --- |
| `variant` (actions) | `default`, `secondary`, `outline`, `ghost`, `link`, `destructive` | Button, Toggle, Badge |
| `variant` (surfaces) | `default`, `outline`, `muted` | Card, Alert container |
| `tone` (status) | `neutral`, `info`, `success`, `warning`, `destructive` | Alert, Badge, Toast, Progress |
| `size` | `xs`, `sm`, `md`, `lg`, plus `icon` for square buttons | Default `md` everywhere |
| `orientation` | `horizontal`, `vertical` | Tabs, Separator, Slider, RadioGroup, ToggleGroup |
| `side` / `align` | `top`, `right`, `bottom`, `left` / `start`, `center`, `end` | Every floating part |

Retired names: `outlined`, `filled`, `elevated`, `modern`, `gradient`, `pill`, `steps`, `cards`, `minimal`, `error` (use `destructive`).

## Overlay behavior

Every floating or modal part supports, with Radix-compatible names:

- `container` prop on the portal.
- `forceMount` for external animation libraries.
- `side`, `align`, `sideOffset`, `alignOffset`, `avoidCollisions`, `collisionPadding`.
- `onEscapeKeyDown(event)`, `onPointerDownOutside(event)`, `onInteractOutside(event)`, all preventable.
- `onOpenAutoFocus(event)`, `onCloseAutoFocus(event)`, both preventable.
- One shared, ref-counted scroll lock and one layer stack so Escape closes only the top layer.
- Exit animations driven by `data-state="closed"` with a `Presence` helper that waits for `animationend`.

## Types

```tsx
type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
  }
```

- Every part exports its props type (`DialogContentProps`), and every barrel exports them.
- Icon props accept `React.ReactNode` (an element). Components never render an icon prop as `<Icon />`. This keeps React 18 and 19 types compatible ([AGENTS.md](../../AGENTS.md) section 4) and avoids the Navbar crash when an element is passed.
- Generic components infer from data: `DataTable<TData>` with `ColumnDef<TData, TValue>`.

## Directionality and i18n

- `DirectionProvider` with `dir="rtl"` support. Use logical CSS (`ms-*`, `pe-*`, `start-*`) instead of `ml-*`, `pr-*`, `left-*`.
- Date and number components take a `locale` and use `Intl` for formatting. No hardcoded English month or day names.
- All built-in strings (for example "Close", "Next page", "No results") are overridable through props or a `LocaleProvider`.

## Example skeleton

```tsx
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "../../lib/cn"
import { dialogContentVariants } from "./dialog.variants"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { size?: "sm" | "md" | "lg" }
>(({ className, size, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-[var(--z-overlay)] bg-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
    <DialogPrimitive.Content ref={ref} className={cn(dialogContentVariants({ size }), className)} {...props}>
      {children}
      <DialogPrimitive.Close className="absolute end-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring">
        <X className="size-4" aria-hidden />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))
DialogContent.displayName = "DialogContent"

export { Dialog, DialogTrigger, DialogClose, DialogContent }
```
