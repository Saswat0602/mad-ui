/**
 * Design system tokens for Mad UI.
 */
export const tokens = {
  radius: {
    none: '0px',
    xs: '0.125rem', // 2px
    sm: '0.25rem',  // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem',   // 8px
    xl: '0.75rem',  // 12px
    '2xl': '1rem',  // 16px
    '3xl': '1.5rem',// 24px
    full: '9999px',
  },
  zIndex: {
    hide: -1,
    base: 0,
    docked: 10,
    dropdown: 50,
    sticky: 100,
    banner: 200,
    overlay: 300,
    modal: 400,
    popover: 500,
    toast: 600,
    tooltip: 700,
  },
  transition: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  typography: {
    fontSans: 'var(--font-sans, ui-sans-serif, system-ui, sans-serif)',
    fontMono: 'var(--font-mono, ui-monospace, SFMono-Regular, monospace)',
  },
} as const

export type Tokens = typeof tokens

