import type { ComponentType } from 'react';
import { ErrorBoundary } from './error-boundary';

export const withErrorBoundary = (Component: ComponentType) => () =>
  (
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  );
