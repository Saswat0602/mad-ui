# Target Motion and Animation System

Motion is one of the clearest differences between a hobby library and a polished one. Good motion is fast, purposeful, interruptible and optional. It explains where something came from and where it went. It never decorates for its own sake, which also keeps it inside the design rules in [AGENTS.md](../../AGENTS.md) section 3.

## Current state

| Finding | Evidence |
| --- | --- |
| No animation class works in a consumer app | 37 animation class usages in components. 21 reference classes defined nowhere. The other 16 (`animate-in`) exist only in the unshipped `styles.css` |
| Plugin vocabulary without the plugin | `fade-in-0`, `zoom-in-95`, `slide-in-from-top-2` (from `tailwindcss-animate`) are used 18 times, but the plugin is not installed |
| Undefined animations | `animate-collapsible-down`, `animate-collapsible-up`, `animate-caret-blink` are used and defined nowhere |
| Dead keyframes | `accordion-down` in `tailwind.config.js` reads `--radix-accordion-content-height`, which nothing sets |
| No exit animations | Every overlay unmounts the moment `open` becomes `false` |
| Ad-hoc durations | `duration-100`, `150`, `200`, `300`, `500` mixed with no tokens |
| No reduced motion | Zero `motion-reduce`, `motion-safe` or `prefers-reduced-motion` anywhere |
| Theme never shipped | Even the animations that `styles.css` defines (`.animate-in`, `.fade-in`) never reach consumers |
| Docs depend on framer-motion | Only wraps plain divs, so nothing animates |

## Principles

1. **CSS first.** Core components animate with CSS keyframes and transitions driven by `data-state`. No runtime animation library in the core bundle.
2. **Enter and exit are symmetric.** If it fades in, it fades out. Exit is slightly faster than enter.
3. **Origin aware.** Popovers, menus and tooltips scale from their trigger using a `--mad-transform-origin` variable set by the positioning layer (Radix exposes this as `--radix-popover-content-transform-origin`).
4. **Interruptible.** Closing mid-open reverses smoothly. No queued animations.
5. **Only `transform` and `opacity`**, plus measured `height` for collapsibles. Nothing that triggers layout every frame.
6. **Reduced motion is a first-class mode.** Durations go to near zero, slides become fades, autoplay stops.
7. **Short.** 100 to 300 ms for UI. Nothing over 500 ms except deliberate loading indicators.

## Motion tokens

| Token | Value | Use |
| --- | --- | --- |
| `--duration-instant` | 0ms | Reduced motion |
| `--duration-fast` | 120ms | Tooltips, hover states, switches, checkmarks |
| `--duration-normal` | 200ms | Popovers, menus, dialog content, accordion |
| `--duration-slow` | 300ms | Sheets, drawers, large panels |
| `--duration-slower` | 500ms | Page-level transitions, chart entry |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Most transitions |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Enter |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Exit |
| `--ease-spring` | `linear(...)` approximation of a light spring | Sheet and drawer enter, toasts |
| `--motion-distance-sm` | 4px | Menu and popover slide |
| `--motion-distance-md` | 8px | Toasts, dialog |
| `--motion-scale-start` | 0.96 | Dialog and popover zoom start |

Under `@media (prefers-reduced-motion: reduce)` every duration token becomes `1ms` (not `0`, so `animationend` still fires and exit logic keeps working).

## Mechanism

### Enter and exit with `Presence`

```tsx
// Internal helper: keeps an element mounted until its exit animation ends
<Presence present={open}>
  <div data-state={open ? "open" : "closed"} className="data-[state=open]:animate-in data-[state=closed]:animate-out ..." />
</Presence>
```

- `Presence` watches `animationend` on the node and unmounts after the closing animation.
- Falls back to unmounting immediately when no animation is running (jsdom, reduced motion with no keyframes).
- If the library adopts Radix, this comes built in.

### Collapsible height

The component measures content and sets `--mad-collapsible-height` on the element. Keyframes animate `height` from `0` to that variable. The same variable serves Accordion, Collapsible, NavigationMenu viewport and Command list.

### Modern CSS (progressive enhancement)

- `@starting-style` plus `transition-behavior: allow-discrete` animate elements entering from `display: none`, useful for native `popover` and `<dialog>`.
- The View Transitions API for theme switching (circular reveal from the toggle) and tab content changes. Gated behind `document.startViewTransition` support.
- Scroll-driven animations (`animation-timeline: view()`) for the optional `Reveal` component, with an IntersectionObserver fallback.

### Shipped files

```
packages/react/src/styles/
├── theme.css          tokens incl. motion tokens
└── animations.css     keyframes plus utilities: animate-in, animate-out, fade-*, zoom-*, slide-in-from-*, collapsible-*, caret-blink, shimmer, indeterminate
```

For Tailwind v4 consumers, `tw-animate-css` provides the `animate-in` / `fade-in-0` / `zoom-in-95` vocabulary that shadcn components use. Either depend on it or ship a compatible `animations.css` so classes copied from shadcn keep working.

## Per-component motion spec

| Component | Enter | Exit | Notes |
| --- | --- | --- | --- |
| Dialog overlay | Fade, `normal` | Fade, `fast` | |
| Dialog content | Fade plus scale 0.96 to 1, `normal`, `ease-out` | Reverse, `fast` | Fullscreen slide-up on small screens |
| AlertDialog | Same as Dialog | Same | No bounce, it is a serious moment |
| Sheet | Slide from side, `slow`, `ease-spring` | Slide out, `normal` | Distance is 100% of panel |
| Drawer (mobile) | Slide up with drag, snap points | Velocity-based dismiss | Pointer Events, rubber-band at limits |
| Popover, DropdownMenu, Select, Combobox | Fade plus scale 0.96 plus slide `sm` away from side, `fast` | Fade, `fast` | Origin from trigger |
| Tooltip | Fade plus slide 2px, `fast` | Fade, `fast` | 500ms open delay, 300ms skip-delay window between tooltips |
| HoverCard | Fade plus scale, `normal` | Fade, `fast` | 700ms open delay, hover bridge |
| ContextMenu | Fade plus scale from cursor, `fast` | Fade | |
| NavigationMenu | Viewport animates width and height, content slides from the direction of travel | Reverse | Matches Radix behavior |
| Accordion, Collapsible | Height to measured value, `normal` | Height to 0, `normal` | Content fades in at 50% |
| Tabs | Active indicator slides with `transform`, `normal` | | Panel cross-fade is optional |
| Toast | Slide `md` plus fade from edge, `ease-spring` | Swipe or fade | Stacked toasts scale 0.95 per layer, expand on hover |
| Switch | Thumb translate, `fast` | | |
| Checkbox | Check path draws via `stroke-dashoffset`, `fast` | | Indeterminate bar scales from center |
| Button | `active:` scale 0.98, `fast` | | Loading spinner fades in, label keeps width |
| Progress | Width transition, `slow` | | Indeterminate: translating bar loop |
| Skeleton | Pulse (default) or shimmer | | Shimmer pauses under reduced motion |
| Carousel | `transform` slide, `slow` | | Jump without animation under reduced motion |
| Command | List height animates on filter, `fast` | | |
| Chart | Bars grow, lines draw, `slower`, once | | Skip under reduced motion |

## Optional motion components (`mad-ui-components/motion`)

Small, tasteful, opt-in pieces that product teams keep rebuilding. Each respects reduced motion.

| Component | Purpose |
| --- | --- |
| `Transition` / `Presence` (public) | Mount and unmount with CSS enter and exit, for consumers' own components |
| `Collapse` | Animate any content to and from auto height |
| `AnimatedNumber` | Count to a value with `Intl.NumberFormat`, for KPIs and pricing |
| `Reveal` | Fade and rise on scroll into view, once |
| `Stagger` | Stagger children's enter animation (lists, cards) |
| `Marquee` | Logo strips and tickers. Pauses on hover and focus, stops under reduced motion, duplicated items `aria-hidden` |
| `TextShimmer` | Subtle shimmer for "Generating..." states in AI UIs |
| `StreamingText` | Smooth token reveal for streamed LLM output, no layout jump |
| `Typewriter` | Single-line reveal for hero text, respects reduced motion |
| `Spotlight card` | Subtle cursor-follow highlight on cards (low opacity, neutral color) |

### Deliberately not shipped

These conflict with [AGENTS.md](../../AGENTS.md) section 3 or hurt usability:

- Floating gradient orbs, neon glows, rainbow borders.
- Infinite attention-seeking animations (pulsing badges by default, bouncing icons).
- Parallax heroes, scroll-jacking.
- Confetti and particles in core components (fine as a user-land effect).

The current Navbar "colorful" gradient theme and pulsing badges should be removed for the same reason.

## Integration with motion libraries

- Every animated part accepts `forceMount` and `asChild`, so users can drive it with Motion (`motion.div`) or React Spring when they need physics or layout animations.
- The core never imports a motion library. The docs drop framer-motion.

## Testing motion

- Unit tests run with a global stylesheet that sets `animation: none` and `transition: none`. `Presence` falls back to immediate unmount.
- One Playwright test per overlay asserts the element stays mounted during exit and is removed after `animationend`.
- Visual tests run twice: default and with `reducedMotion: "reduce"` emulated.
- Lint rule: no `duration-*` or `ease-*` utility in components without a token (use `duration-[var(--duration-normal)]` or a named utility).
