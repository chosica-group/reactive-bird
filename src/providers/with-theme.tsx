import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import type { ComponentType } from 'react';

const theme = createTheme({});

export const withTheme = (Component: ComponentType) => () =>
  (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component />
    </ThemeProvider>
  );
