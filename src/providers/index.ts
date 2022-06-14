import type { FunctionComponent } from 'react';
import { compose } from '@reduxjs/toolkit';
import { withErrorBoundary } from './with-error-boundary';
import { withRouter } from './with-router/index';
import { withTheme } from './with-theme/index';

export const withProviders = compose<FunctionComponent>(withTheme, withRouter, withErrorBoundary);
