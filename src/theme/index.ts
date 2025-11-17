/**
 * Material-UI Theme Configuration
 * Modern 2025 design system
 */

import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: palette.primary.main,
      light: palette.primary.light,
      dark: palette.primary.dark,
      contrastText: palette.primary.contrastText,
    },
    secondary: {
      main: palette.secondary.main,
      light: palette.secondary.light,
      dark: palette.secondary.dark,
      contrastText: palette.secondary.contrastText,
    },
    error: {
      main: palette.error.main,
      light: palette.error.light,
      dark: palette.error.dark,
    },
    success: {
      main: palette.success.main,
      light: palette.success.light,
      dark: palette.success.dark,
    },
    warning: {
      main: palette.warning.main,
      light: palette.warning.light,
      dark: palette.warning.dark,
    },
    info: {
      main: palette.info.main,
      light: palette.info.light,
      dark: palette.info.dark,
    },
    background: {
      default: palette.background.default,
      paper: palette.background.paper,
    },
    text: {
      primary: palette.text.primary,
      secondary: palette.text.secondary,
      disabled: palette.text.disabled,
    },
    divider: palette.divider,
  },
  typography,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
          },
        },
        contained: {
          background: palette.gradients.primary,
          color: '#ffffff',
          '&:hover': {
            background: palette.gradients.primary,
            opacity: 0.9,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: `1px solid ${palette.divider}`,
          background: palette.background.paper,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: palette.gradients.dark,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
  },
});

export { palette };
