import type { FunctionComponent } from 'react';
import { compose } from '@reduxjs/toolkit';
import { withErrorBoundary } from './with-error-boundary';
import { withRedux } from './with-redux';
import { withRouter } from './with-router/index';
import { withTheme } from './with-theme/index';

export const withProviders = compose<FunctionComponent>(
  withTheme,
  withRedux,
  withRouter,
  withErrorBoundary,
);
