import type { FunctionComponent } from 'react';
import { compose } from '@reduxjs/toolkit';
import { withAuth } from 'providers/with-auth';
import { withErrorBoundary } from './with-error-boundary';
import { withRouter } from './with-router';
import { withTheme } from './with-theme';
// import { withUserTheme } from './with-user-theme';

export const withProviders = compose<FunctionComponent>(
  // withUserTheme,
  withTheme,
  withRouter,
  withErrorBoundary,
  withAuth,
);
