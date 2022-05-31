import { ErrorBoundary } from 'components/error-boundary';
import { MainLayout } from 'layout/main';
import { withProviders } from 'providers';

export const App = withProviders(() => (
  <ErrorBoundary>
    <MainLayout />
  </ErrorBoundary>
));
