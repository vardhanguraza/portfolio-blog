/**
 * Typography configuration for modern 2025 design
 */

import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography: TypographyOptions = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  h1: {
    fontSize: '3.5rem',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
  },
  h2: {
    fontSize: '2.75rem',
    fontWeight: 700,
    letterSpacing: '-0.01em',
    marginBottom: '1.25rem',
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '1rem',
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#1a1a2e',
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    color: '#6b7280',
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: 1.4,
    color: '#9ca3af',
  },
  button: {
    fontWeight: 600,
    textTransform: 'none',
    fontSize: '1rem',
  },
};
