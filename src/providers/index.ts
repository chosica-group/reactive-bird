import type { FunctionComponent } from 'react';
import { compose } from '@reduxjs/toolkit';
import { withErrorBoundary } from './with-error-boundary';
// eslint-disable-next-line prettier/prettier
import { withTheme } from './with-theme';

// import { withRouter } from './with-router/with-router';

export const withProviders = compose<FunctionComponent>(withTheme, withErrorBoundary);
