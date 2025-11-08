/**
 * Theme Configuration
 * Centralized color and design system configuration
 * Following SOLID principles - Single Responsibility
 */

export const THEME_CONFIG = {
  colors: {
    // Primary colors - Black and White only
    background: '#FFFFFF',
    foreground: '#000000',
    
    // Grayscale variations
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    
    // Semantic colors
    border: '#E5E5E5',
    input: '#E5E5E5',
    ring: '#000000',
    
    // Component specific
    card: {
      background: '#FFFFFF',
      foreground: '#000000',
      border: '#E5E5E5',
    },
    
    button: {
      primary: {
        background: '#000000',
        foreground: '#FFFFFF',
        hover: '#262626',
      },
      secondary: {
        background: '#F5F5F5',
        foreground: '#000000',
        hover: '#E5E5E5',
      },
    },
  },
  
  typography: {
    fontFamily: {
      sans: "'Mona Sans', system-ui, sans-serif",
      mono: "monospace",
    },
    fontSize: {
      base: '18px',
    },
  },
  
  spacing: {
    radius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.625rem',
      xl: '1rem',
    },
  },
  
  effects: {
    // Minimal shadows for depth
    shadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    },
  },
} as const;

export type ThemeConfig = typeof THEME_CONFIG;
