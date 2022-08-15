import type { FunctionComponent } from 'react';
import { compose } from '@reduxjs/toolkit';
import { withAuth } from 'providers/with-auth';
import { withErrorBoundary } from './with-error-boundary';
import { withRouter } from './with-router';
import { withTheme } from './with-theme';

export const withProviders = compose<FunctionComponent>(
  withTheme,
  withRouter,
  withErrorBoundary,
  withAuth,
);
