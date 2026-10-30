// Color configuration system for Mad UI
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
  'accent-secondary': '#3b82f6',
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

// Component-specific color definitions
export const componentColors = {
  button: {
    primary: {
      light: {
        bg: '#3b82f6',
        text: '#ffffff',
        hover: '#2563eb',
        focus: '#1d4ed8',
      },
      dark: {
        bg: '#60a5fa',
        text: '#0f172a',
        hover: '#3b82f6',
        focus: '#2563eb',
      },
    },
    secondary: {
      light: {
        bg: '#f1f5f9',
        text: '#0f172a',
        hover: '#e2e8f0',
        focus: '#cbd5e1',
      },
      dark: {
        bg: '#334155',
        text: '#f8fafc',
        hover: '#475569',
        focus: '#64748b',
      },
    },
    danger: {
      light: {
        bg: '#ef4444',
        text: '#ffffff',
        hover: '#dc2626',
        focus: '#b91c1c',
      },
      dark: {
        bg: '#f87171',
        text: '#0f172a',
        hover: '#ef4444',
        focus: '#dc2626',
      },
    },
    success: {
      light: {
        bg: '#10b981',
        text: '#ffffff',
        hover: '#059669',
        focus: '#047857',
      },
      dark: {
        bg: '#34d399',
        text: '#0f172a',
        hover: '#10b981',
        focus: '#059669',
      },
    },
  },
  card: {
    light: {
      bg: '#ffffff',
      border: '#e2e8f0',
      header: '#f8fafc',
    },
    dark: {
      bg: '#1e293b',
      border: '#334155',
      header: '#0f172a',
    },
  },
  input: {
    light: {
      bg: '#ffffff',
      border: '#cbd5e1',
      text: '#0f172a',
      placeholder: '#94a3b8',
      focus: '#3b82f6',
    },
    dark: {
      bg: '#1e293b',
      border: '#475569',
      text: '#f8fafc',
      placeholder: '#64748b',
      focus: '#60a5fa',
    },
  },
};

// Helper function to get color value with fallback
export function getColor(colorName: keyof ColorScheme, isDark = false): string {
  const scheme = isDark ? darkColors : lightColors;
  return scheme[colorName] || lightColors[colorName];
}

// Helper function to generate CSS variables
export function generateCssVariables(isDark = false): Record<string, string> {
  const scheme = isDark ? darkColors : lightColors;
  const variables: Record<string, string> = {};
  
  Object.entries(scheme).forEach(([key, value]) => {
    variables[`--mad-${key}`] = value;
  });
  
  return variables;
}
