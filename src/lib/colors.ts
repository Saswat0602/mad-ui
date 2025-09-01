// Color configuration system for the UI library
export interface ColorScheme {
  // Background colors
  'bg-primary': string;
  'bg-secondary': string;
  'bg-tertiary': string;
  'bg-card': string;
  'bg-overlay': string;
  
  // Text colors
  'text-primary': string;
  'text-secondary': string;
  'text-muted': string;
  'text-inverse': string;
  
  // Border colors
  'border-primary': string;
  'border-secondary': string;
  'border-focus': string;
  
  // Accent colors
  'accent-primary': string;
  'accent-secondary': string;
  'accent-success': string;
  'accent-warning': string;
  'accent-error': string;
  'accent-info': string;
  
  // Shadow colors
  'shadow-sm': string;
  'shadow-md': string;
  'shadow-lg': string;
  'shadow-xl': string;
  
  // Status colors
  'success': string;
  'warning': string;
  'error': string;
  'info': string;
}

// Default light theme colors
export const lightColors: ColorScheme = {
  // Backgrounds
  'bg-primary': '#ffffff',
  'bg-secondary': '#f8fafc',
  'bg-tertiary': '#f1f5f9',
  'bg-card': '#ffffff',
  'bg-overlay': 'rgba(0, 0, 0, 0.5)',
  
  // Text
  'text-primary': '#0f172a',
  'text-secondary': '#475569',
  'text-muted': '#64748b',
  'text-inverse': '#ffffff',
  
  // Borders
  'border-primary': '#e2e8f0',
  'border-secondary': '#cbd5e1',
  'border-focus': '#3b82f6',
  
  // Accents
  'accent-primary': '#3b82f6',
  'accent-secondary': '#2563eb',
  'accent-success': '#10b981',
  'accent-warning': '#f59e0b',
  'accent-error': '#ef4444',
  'accent-info': '#06b6d4',
  
  // Shadows
  'shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  'shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  'shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  'shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  
  // Status
  'success': '#10b981',
  'warning': '#f59e0b',
  'error': '#ef4444',
  'info': '#06b6d4',
};

// Default dark theme colors
export const darkColors: ColorScheme = {
  // Backgrounds
  'bg-primary': '#0f172a',
  'bg-secondary': '#1e293b',
  'bg-tertiary': '#334155',
  'bg-card': '#1e293b',
  'bg-overlay': 'rgba(0, 0, 0, 0.7)',
  
  // Text
  'text-primary': '#f8fafc',
  'text-secondary': '#cbd5e1',
  'text-muted': '#94a3b8',
  'text-inverse': '#0f172a',
  
  // Borders
  'border-primary': '#334155',
  'border-secondary': '#475569',
  'border-focus': '#60a5fa',
  
  // Accents
  'accent-primary': '#60a5fa',
  'accent-secondary': '#93c5fd',
  'accent-success': '#34d399',
  'accent-warning': '#fbbf24',
  'accent-error': '#f87171',
  'accent-info': '#22d3ee',
  
  // Shadows
  'shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  'shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
  'shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
  'shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.4)',
  
  // Status
  'success': '#34d399',
  'warning': '#fbbf24',
  'error': '#f87171',
  'info': '#22d3ee',
};

// Color utility functions
export const getColorValue = (colorKey: keyof ColorScheme, theme: 'light' | 'dark' = 'light'): string => {
  const colors = theme === 'dark' ? darkColors : lightColors;
  return colors[colorKey];
};

export const createCSSVariables = (theme: 'light' | 'dark' = 'light'): string => {
  const colors = theme === 'dark' ? darkColors : lightColors;
  const cssVars = Object.entries(colors)
    .map(([key, value]) => `--${key}: ${value};`)
    .join('\n  ');
  
  return `:root {\n  ${cssVars}\n}`;
};

// Component color presets
export const componentColors = {
  button: {
    primary: {
      bg: 'var(--accent-primary)',
      text: 'var(--text-inverse)',
      border: 'var(--accent-primary)',
      hover: 'var(--accent-secondary)',
    },
    secondary: {
      bg: 'var(--bg-tertiary)',
      text: 'var(--text-primary)',
      border: 'var(--border-primary)',
      hover: 'var(--bg-secondary)',
    },
    outline: {
      bg: 'transparent',
      text: 'var(--text-primary)',
      border: 'var(--border-primary)',
      hover: 'var(--bg-tertiary)',
    },
    ghost: {
      bg: 'transparent',
      text: 'var(--text-primary)',
      border: 'transparent',
      hover: 'var(--bg-tertiary)',
    },
    success: {
      bg: 'var(--accent-success)',
      text: 'var(--text-inverse)',
      border: 'var(--accent-success)',
      hover: 'var(--success)',
    },
    warning: {
      bg: 'var(--accent-warning)',
      text: 'var(--text-inverse)',
      border: 'var(--accent-warning)',
      hover: 'var(--warning)',
    },
    error: {
      bg: 'var(--accent-error)',
      text: 'var(--text-inverse)',
      border: 'var(--accent-error)',
      hover: 'var(--error)',
    },
  },
  input: {
    default: {
      bg: 'var(--bg-card)',
      text: 'var(--text-primary)',
      border: 'var(--border-primary)',
      focus: 'var(--border-focus)',
    },
    error: {
      bg: 'var(--bg-card)',
      text: 'var(--text-primary)',
      border: 'var(--accent-error)',
      focus: 'var(--accent-error)',
    },
    success: {
      bg: 'var(--bg-card)',
      text: 'var(--text-primary)',
      border: 'var(--accent-success)',
      focus: 'var(--accent-success)',
    },
  },
  card: {
    default: {
      bg: 'var(--bg-card)',
      border: 'var(--border-primary)',
      shadow: 'var(--shadow-sm)',
    },
    elevated: {
      bg: 'var(--bg-card)',
      border: 'var(--border-primary)',
      shadow: 'var(--shadow-md)',
    },
  },
};

// Export default colors
export const defaultColors = lightColors;
