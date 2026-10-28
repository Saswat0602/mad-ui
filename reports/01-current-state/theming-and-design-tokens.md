# Theming and Design Tokens Audit

A component library is only "themeable" if every color, radius, shadow and motion value flows from tokens the consumer can override. Mad UI currently has three competing color systems and most components bypass all of them.

## Three color systems that do not talk to each other

| System | Where | Used by |
| --- | --- | --- |
| shadcn-style HSL CSS variables (`--primary`, `--muted`, `--ring`) mapped in Tailwind config | [src/styles.css](../../src/styles.css), [tailwind.config.js](../../tailwind.config.js) | 172 class usages across components. Not shipped to consumers (see [build-and-packaging.md](build-and-packaging.md)). |
| JS hex color scheme (`lightColors`, `darkColors`, `componentColors`) | [src/lib/colors.ts](../../src/lib/colors.ts) | Only `breadcrumbs.tsx` and `calendar.tsx`. Exported publicly from the root anyway. |
| Hardcoded Tailwind palette classes | Inline in components | **About 1,110 class usages**, plus **408 `dark:` overrides**. |

Naming collision: `colors.ts` defines a key called `bg-primary` meaning "page background", while the Tailwind utility `bg-primary` means "brand color". Anyone reading both will be confused.

## Hardcoded palette usage

Counted across `src/components/**`:

| Palette | Usages | Note |
| --- | --- | --- |
| `zinc-*` | 548 | The de facto neutral |
| `blue-*` | 137 | The de facto brand color, bypasses `--primary` |
| `gray-*` | 110 | A second neutral scale |
| `red-*` | 51 | Bypasses `--destructive` |
| `slate-*` | 47 | A third neutral scale |
| `emerald-*`, `amber-*`, `rose-*` | 92 | Status colors with no tokens behind them |

Consequences:

- Changing `--primary` to purple leaves about 137 blue elements behind.
- Three neutral scales (`zinc`, `gray`, `slate`) have different hue tints, so borders and muted text look subtly different from one component to the next.
- Dark mode is hand-maintained per class through `dark:` variants instead of flipping tokens, so every new component doubles its color work and any miss is a dark mode bug.

Worst offenders by hardcoded class count: `datetime-picker.tsx` (38), `table.tsx` (22), `calendar.tsx` (20), `navbar.tsx` (19), `toast.tsx` (18), `sidebar.tsx` (16), `data-table.tsx` (15), `tabs.tsx` (13), `alert.tsx` (12).

## Token coverage gaps

The CSS variable set in `styles.css` is the shadcn v0 default and stops there.

| Token group | Present | Missing |
| --- | --- | --- |
| Surface and text | `background`, `foreground`, `card`, `popover`, `muted` | `surface-raised`, `surface-sunken`, `overlay` (scrim) |
| Brand and actions | `primary`, `secondary`, `accent` | Hover and active shades, `primary-subtle` |
| Status | `destructive` | `success`, `warning`, `info` (each with `-foreground` and `-subtle`) |
| Borders and focus | `border`, `input`, `ring` | `ring-offset`, `border-strong` |
| Charts | none | `chart-1` to `chart-5` (shadcn has these) |
| Sidebar | none | `sidebar`, `sidebar-foreground`, `sidebar-accent`, `sidebar-border` |
| Radius | `--radius` only | Per-component radius scale |
| Shadow and elevation | Utility classes only (`.shadow-soft`, `.elevation-1..5`) | Tokenised `--shadow-*` |
| Motion | Hardcoded `200ms ease-out` keyframes | `--duration-*`, `--ease-*`, reduced-motion handling |
| Typography | none | Font families, size scale, line height |
| Spacing and density | none | Density modes (compact, comfortable), as in MUI and Mantine |
| z-index | none | `--z-dropdown`, `--z-modal`, `--z-toast`, `--z-tooltip` |

## Variant vocabulary is inconsistent

Each component invents its own names for the same idea:

| Concept | Names used in the codebase |
| --- | --- |
| Outline style | `outline`, `outlined` |
| Error style | `destructive`, `error` |
| Filled style | `default`, `filled` |
| Raised style | `elevated`, `default` |
| Size | `"sm" \| "md" \| "lg"`, `"default" \| "sm" \| "lg" \| "icon"`, `"sm" \| "md" \| "lg" \| "xl" \| "full"`, `number` |
| Decorative | `modern`, `gradient`, `pill`, `steps`, `cards`, `minimal` |

Examples: Button uses `size: "default" | "sm" | "lg" | "icon"` while 14 other components use `"sm" | "md" | "lg"`. Badge has both `destructive` and `error` variants.

A consumer cannot learn the system once and apply it everywhere, which is the main thing MUI and shadcn get right.

## Variant engine

- [src/lib/utils.ts](../../src/lib/utils.ts) ships a home-grown `createVariants` (a reduced `cva`). Only 7 core components use it.
- No compound variants, no boolean variants, no slot support, no type export of variant props (`VariantProps<typeof x>`).
- Every other component builds classes with ad-hoc object maps or string concatenation.
- Recommendation: adopt `tailwind-variants` (slots plus compound variants) or `class-variance-authority`, and export the variant functions (for example `buttonVariants`) so consumers can style a Next.js `<Link>` as a button, a common shadcn pattern.

## Other issues

- `tailwind.config.js` defines `accordion-down` keyframes using `--radix-accordion-content-height`, a variable only Radix sets. Mad UI does not use Radix, so the animation height is undefined.
- `styles.css` puts `* { @apply border-border }` and `body { @apply bg-background text-foreground }` in `@layer base`. If shipped as is, the library would restyle the consumer's whole page. Base styles belong in an opt-in preset.
- Utility classes such as `.glass`, `.glass-dark`, `.hover-lift` encourage the decorative look that [AGENTS.md](../../AGENTS.md) section 3 forbids.
- No `prefers-reduced-motion` handling anywhere in the CSS.
- Colors use the HSL triplet format (`221.2 83.2% 53.3%`). shadcn and Tailwind v4 have moved to OKLCH, which gives perceptually even shades and better dark mode contrast.
- No contrast check exists. Several `text-zinc-400` on `bg-white` combinations likely fail WCAG AA 4.5:1 for body text.

Target design: [../03-target-architecture/design-token-system.md](../03-target-architecture/design-token-system.md).
