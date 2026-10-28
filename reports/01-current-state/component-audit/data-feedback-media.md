# Component Audit: Data, Feedback, Media

Files: [src/components/data/](../../../src/components/data), [src/components/feedback/](../../../src/components/feedback), [src/components/media/](../../../src/components/media). Line numbers refer to the current `master`.

Reference points: TanStack Table and MUI X DataGrid for tables, Recharts and MUI X Charts for charts, Sonner for toasts, Radix Avatar and AspectRatio, Embla for carousels.

## Summary

| Component | Approach | A11y | Theming | Key gaps |
| --- | --- | --- | --- | --- |
| Table | Hybrid: props-driven plus shadcn-style primitives | D | Hardcoded zinc plus `dark:` | Hook-order crash, mouse-only client-only sorting, no filter, resize, pin or virtualization |
| DataTable | Props-driven `div` grid, generic `<T>`, bespoke | F | Hardcoded zinc and blue | No table semantics, 12-column limit, index keys |
| Chart | Hand-rolled SVG | F | Mixed, random HSL pie colors | No `viewBox`, no ticks or tooltips, math bugs, Doughnut is a stub |
| Toast | One fixed-position component, no store | D | Hardcoded | No `toast()`, no stacking, reopen bug |
| Sonner | Re-implementation that borrows the name | F | Mixed | No live region, no `toast()`, no pause, swipe or promise |
| Alert | Props-driven plus Title and Description | C | Hardcoded | `role="alert"` by default, unknown props leak to DOM |
| Avatar | Hybrid | C | Hardcoded zinc | No loading state machine, compound mode broken |
| Carousel | Props-driven, compound parts unusable | D | Mostly hardcoded | No APG carousel pattern, about 35 inert props |
| Typography | 13 single-tag components | B | Hardcoded slate | No ref, no prop spread, no polymorphism |
| Badge | forwardRef plus variant map | B | Hardcoded | Renders a `div`, duplicate variants, no `badgeVariants` |
| AspectRatio | FC with CSS `aspect-ratio` | n/a | n/a | No ref or spread |

## Table

[table.tsx](../../../src/components/data/table.tsx)

- **Crash:** an early return (103 to 111) runs before `useMemo` (154). Passing `data={query.data}` (undefined, then an array) changes the hook count and React throws "Rendered more hooks than during the previous render".
- `String(row[rowKey] || index)` (145) treats an id of `0` as missing.
- With no data the footer reads "Showing 1 to 0 of 0" and "1 / 0" (338, 339, 352).
- Sorting is client-side with no `onSortChange` (154 to 165) while pagination is external. Sorting only reorders the current page, and server-side sorting is impossible.
- 9 props are destructured and never used (68 to 86): `variant`, `shadow`, `bordered`, `color`, `backgroundColor`, `textColor`, `headerColor`, `editable`, `onEditCell`.
- `Table` itself is not forwardRef (58). The primitives (372 to 419) are fine.
- Accessibility:
  - Sorting is `<th onClick>` (240): no button, no keyboard, no `aria-sort`.
  - Checkboxes are unlabeled and select-all has no indeterminate state (219 to 224, 292 to 297).
  - The icon-only delete button has only a `title` (317 to 320).
  - A clickable `<tr>` cannot receive focus (288).
  - Buttons lack `type="button"` (193, 202, 343, 354).

## DataTable

[data-table.tsx](../../../src/components/data/data-table.tsx)

- Columns are limited to `keyof T` (6): no accessor functions and no computed columns.
- No forwardRef, `displayName` or prop spread.
- Accessibility F:
  - Renders `div` grids with no `table`, `row` or `cell` roles (138, 176 to 237).
  - The search box has only a placeholder for a label (120 to 126).
  - Sort buttons have no `aria-sort` or `type` (187).
- `key={index}` on sorted and filtered rows (142).
- `String(item[key] || '')` (233) blanks out `0` and `false`.
- `currentPage` is never clamped when `data` shrinks (58, 92).
- Fixed `grid-cols-12` (177, 183), so more than 12 columns wraps.
- `divide-zinc-850` (138) is not a Tailwind color.
- **Recommendation:** keep the `Table*` primitives as markup and rebuild `DataTable` on `@tanstack/react-table` with `ColumnDef<TData, TValue>`, `manualSorting` and `manualPagination` for server mode, and `@tanstack/react-virtual` for large lists. Remove the props-driven mode from `Table`.

## Chart

[chart.tsx](../../../src/components/data/chart.tsx)

- No `viewBox` (79, 162, 277): `w-full` stretches the element but the drawing never scales.
- The last bar overflows the right edge by 40px: `barWidth = width / n - 10` (75) and `x = 50 + i * (barWidth + 10)` (105).
- Empty data gives `Math.max()` of `-Infinity` (74). All-zero data divides by zero (104). Negative values produce negative heights. A one-point LineChart divides by zero (149).
- A single 100% pie slice has identical arc endpoints and can disappear (250 to 260).
- `hover:r-6` (202) is not a Tailwind utility. `DoughnutChart` just renders `PieChart` (316 to 320).
- Accessibility F: no `role="img"`, `<title>`, `<desc>` or data table fallback. Only the pie has a legend.
- Pie colors are `hsl(i * 137.5, 70%, 50%)` (268) with white labels (290), poor contrast on yellow, no chart tokens.
- **Recommendation:** follow shadcn and wrap Recharts (or visx) with a `ChartContainer` that maps `--chart-1..5` tokens, plus `ChartTooltip` and `ChartLegend`.

## Toast

[toast.tsx](../../../src/components/feedback/toast.tsx)

- Each toast is its own `fixed` element (162), so toasts overlap. `ToastProvider` is an empty fragment (273 to 275).
- No imperative `toast()`, no queue, no max visible.
- `isExiting` is set (67) and never reset, so a reopened controlled toast renders at `opacity-0` (164).
- The 200ms exit timer (68 to 72) is never cleared. `onClose` can fire after unmount.
- The auto-dismiss effect (64) omits `handleClose` from deps and calls a stale `onClose`.
- Accessibility: every toast is `role="status" aria-live="polite"` (159, 160), including errors. A live region inserted with content already inside is often not announced. `ToastViewport` has no region role or label. `ToastClose` has no `aria-label`. No pause on hover or focus.

## Sonner

[sonner.tsx](../../../src/components/feedback/sonner.tsx)

- Not the `sonner` package. The caller owns `toasts[]` and `onDismiss` (17 to 22). No `toast()` callable outside React.
- Accessibility F: no `aria-live`, role or label on the container (46 to 52). Screen readers announce nothing.
- Effect deps `[toast.duration]` (87) leave `onDismiss` stale. Manual dismiss (89 to 93) does not clear the auto timer, so `onDismiss` can fire twice.
- `duration || 5000` (79) turns `0` (persistent) into 5 seconds.
- Exports its own `Toast` interface and `ToastProps` that clash with `toast.tsx`.
- **Recommendation:** ship one system. Either wrap the real `sonner` as `<Toaster />` plus `toast` (what shadcn now does), or build a module-level store read with `useSyncExternalStore` and render one persistent live region. Remove both current implementations.

## Alert

[alert.tsx](../../../src/components/feedback/alert.tsx)

- **Defaults to `role="alert"` (59).** Static banners interrupt screen readers on mount. Default to no role and opt in for dynamic errors.
- `loading`, `autoDismiss`, `dismissTimeout`, `onDismiss`, `onShow`, `priority`, `category`, `tags`, `dismissible` (26 to 34) are declared, never destructured, and spread onto the DOM `<div>` (175). React warns, nothing happens.
- Two overlapping enums, `type` and `variant` (5, 6), resolved by a cast (63 to 68).
- `closable` without `onClose` renders a dead button (203 to 206).
- `AlertTitle` is locked to `h5` with an `HTMLParagraphElement` ref type (221 to 224).

## Avatar

[avatar.tsx](../../../src/components/media/avatar.tsx)

- Only an `imageError` boolean (22). No loading state, no `delayMs`, so a broken box flashes before the fallback.
- `imageError` is never reset when `src` changes, so a later valid image never shows.
- Compound mode (37 to 52) has no context. `AvatarImage` and `AvatarFallback` both render.
- Initials take the first two characters (82): "John Doe" becomes "JO".
- `AvatarGroup` uses index keys (129) and an unlabeled "+N" chip (134).

## Carousel

[carousel.tsx](../../../src/components/media/carousel.tsx)

- Children are filtered by `child.type === CarouselItem` (97 to 99), so the documented `<CarouselContent>` wrapper renders zero slides.
- About 35 props declared (12 to 56), 6 used. `pauseOnFocus`, `swipeable`, `keyboardNavigation`, `rtl`, `ariaLabel`, `onSlideChange` do nothing.
- `setInterval(next)` (115) captures a stale slide count. Zero slides produces `NaN` (102, 106).
- Accessibility D: no `aria-roledescription="carousel"`, no "n of N" slide labels, no live region, no arrow keys. Hidden slides are not `inert` (140 to 144). No pause button (WCAG 2.2.2). Dots are 8px targets with no `aria-current`.
- No swipe, no reduced-motion handling, no `setApi`.

## Typography, Badge, AspectRatio

- [typography.tsx](../../../src/components/media/typography.tsx): accepts only `children` and `className` (4 to 7), so no `id` for the anchor-ready `scroll-m-20` headings. Uses `slate` while the rest uses `zinc`. Replace with polymorphic `Heading` (level separate from size) and `Text`.
- [badge.tsx](../../../src/components/media/badge.tsx): renders a `div` (31), which is invalid inside `<p>` and causes hydration errors. `destructive` and `error` are identical. Non-interactive but has hover and focus styles. Use a `span` and export `badgeVariants`.
- [aspect-ratio.tsx](../../../src/components/media/aspect-ratio.tsx): no ref or spread, and children are not absolutely positioned, so tall content stretches the box.

## Cross-cutting

- **Tailwind version drift.** The library declares Tailwind `^3.3` but uses v4-only utilities (`shadow-xs`, `shadow-2xs` in button, input, select, textarea, radio, switch, table, data-table, alert) and the non-existent `zinc-850`. These render in the v4 docs site and silently disappear in a v3 consumer app.
- **"Props or children" hybrids** (Table, Avatar, Carousel) whose compound half has no context. This produces the hook crash, the double Avatar render and the empty Carousel.
- **Declared but inert props:** Table 9, Alert 9, Carousel about 35. Some leak to the DOM.
- **No consistent ref and spread contract.** DataTable, Chart, Carousel, Sonner, Typography, AspectRatio, AvatarGroup take neither.
- **Untracked timers** in toast and sonner, and effects that omit callbacks from deps.
