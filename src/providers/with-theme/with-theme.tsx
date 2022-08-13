import type { ComponentType } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

export const withTheme = (Component: ComponentType) => () =>
  (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component />
    </ThemeProvider>
  );
