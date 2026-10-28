# Target Design Token System

Goal: one token source drives CSS variables, Tailwind (v4 first, v3 preset for compatibility), TypeScript types and Figma. Components only ever reference semantic tokens. Changing a brand color or switching dark mode is a variable swap, never a class rewrite.

## Three tiers

| Tier | Example | Who uses it |
| --- | --- | --- |
| 1. Primitive | `--zinc-950`, `--blue-600`, `--space-4`, `--radius-base` | Only tier 2. Never referenced by components. |
| 2. Semantic | `--background`, `--primary`, `--border`, `--ring`, `--success` | All components. This is the public theming API. |
| 3. Component (optional) | `--button-height-md`, `--dialog-max-width`, `--sidebar-width` | One component each. Lets consumers tune a single component without forking. |

## Semantic token set

| Group | Tokens |
| --- | --- |
| Surfaces | `background`, `foreground`, `card`, `card-foreground`, `popover`, `popover-foreground`, `muted`, `muted-foreground`, `overlay` |
| Brand | `primary`, `primary-foreground`, `secondary`, `secondary-foreground`, `accent`, `accent-foreground` |
| Status | `destructive`, `success`, `warning`, `info`, each with `-foreground` and `-subtle` |
| Lines and focus | `border`, `input`, `ring` |
| Charts | `chart-1` to `chart-5` |
| Sidebar | `sidebar`, `sidebar-foreground`, `sidebar-primary`, `sidebar-accent`, `sidebar-border`, `sidebar-ring` |
| Shape | `radius` (base), derived `radius-sm`, `radius-md`, `radius-lg`, `radius-xl` |
| Elevation | `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg` |
| Motion | `duration-fast` (120ms), `duration-normal` (200ms), `duration-slow` (300ms), `ease-out`, `ease-in-out` |
| Layering | `z-dropdown`, `z-sticky`, `z-overlay`, `z-modal`, `z-popover`, `z-toast`, `z-tooltip` |
| Density | `control-height-sm`, `control-height-md`, `control-height-lg` |

## Shipped files

```
packages/tokens/
├── src/tokens.json               W3C Design Tokens (DTCG) format, single source
├── build.ts                      Style Dictionary or a small script
└── dist/
    ├── theme.css                 :root and .dark variables, plus @theme inline mapping (Tailwind v4)
    ├── preset.cjs                Tailwind v3 preset for older consumers
    ├── tokens.ts                 typed token names for TS consumers
    └── figma.tokens.json         for Tokens Studio / Figma Variables
```

`mad-ui-components` re-exports `theme.css`, so most consumers need one import.

## Consumer setup (Tailwind v4)

```css
/* app/globals.css */
@import "tailwindcss";
@import "mad-ui-components/theme.css";
@source "../node_modules/mad-ui-components/dist";
```

## Consumer setup (Tailwind v3)

```js
// tailwind.config.js
module.exports = {
  presets: [require("mad-ui-components/tailwind-preset")],
  content: ["./src/**/*.{ts,tsx}", "./node_modules/mad-ui-components/dist/**/*.mjs"],
}
```

```css
@import "mad-ui-components/theme.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## theme.css sketch

OKLCH values, zinc neutrals and a blue accent, matching the palette rules in [AGENTS.md](../../AGENTS.md) section 3.

```css
:root {
  --radius: 0.625rem;

  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.141 0.005 285.823);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.141 0.005 285.823);
  --muted: oklch(0.967 0.001 286.375);
  --muted-foreground: oklch(0.552 0.016 285.938);
  --border: oklch(0.92 0.004 286.32);
  --input: oklch(0.92 0.004 286.32);
  --ring: oklch(0.623 0.214 259.815);

  --primary: oklch(0.546 0.245 262.881);
  --primary-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --success: oklch(0.596 0.145 163.225);
  --warning: oklch(0.769 0.188 70.08);

  --duration-normal: 200ms;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.21 0.006 285.885);
  --popover: oklch(0.21 0.006 285.885);
  --muted: oklch(0.274 0.006 286.033);
  --muted-foreground: oklch(0.705 0.015 286.067);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  /* ... */
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-border: var(--border);
  --color-ring: var(--ring);
  --color-success: var(--success);
  /* ... one line per semantic token */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

@media (prefers-reduced-motion: reduce) {
  :root { --duration-fast: 0ms; --duration-normal: 0ms; --duration-slow: 0ms; }
}
```

## Rules for components

- Only semantic utilities: `bg-primary`, `text-muted-foreground`, `border-border`. A lint rule bans palette classes (`zinc-*`, `blue-*`, `gray-*`) inside `packages/react/src/components`.
- No `dark:` variants in components. Dark mode is a token swap. The only exception is a documented case where the token model cannot express it.
- No template-literal class names (`bg-${color}-500`). Use a variant map with complete literal strings.
- Base element styles (`body`, `*`) live in an opt-in `base.css`, never in `theme.css`, so importing the theme does not restyle the host app.

## Theme switching

- Default: `.dark` class on `<html>` (works with `next-themes`).
- Also support `[data-theme="dark"]` and arbitrary named themes (`[data-theme="ocean"]`) for multi-brand apps.
- Ship an optional `ThemeProvider` only for convenience (system preference, persistence, no flash). Components must never require it.

## Theme builder

The docs site gets a page that edits the semantic tokens live (color pickers, radius slider, density toggle), previews a fixed set of components, checks WCAG contrast for every foreground and background pair, and exports `theme.css`. shadcn, MUI and Mantine all offer one, and it is the fastest way to prove that theming works.

## Migration from today

1. Ship `theme.css` built from the current `styles.css` variables so existing token classes start working for consumers.
2. Add `success`, `warning`, `info`, `chart-*`, `sidebar-*` and the motion and z-index tokens.
3. Replace the about 1,110 hardcoded palette classes component by component, worst offenders first (`datetime-picker`, `table`, `calendar`, `navbar`, `toast`, `sidebar`).
4. Delete `src/lib/colors.ts` and its root export (breaking, so it goes in 3.0).
5. Move to OKLCH once the token pipeline exists.
