import type { FunctionComponent } from 'react';
import { compose } from '@reduxjs/toolkit';
import { withAuth } from 'providers/with-auth/with-auth';
import { withErrorBoundary } from './with-error-boundary';
import { withRedux } from './with-redux';
import { withRouter } from './with-router';
import { withTheme } from './with-theme';

export const withProviders = compose<FunctionComponent>(
  withTheme,
  withRedux,
  withRouter,
  withErrorBoundary,
  withAuth,
);
