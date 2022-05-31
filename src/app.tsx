import { ErrorBoundary } from 'components/error-boundary';
import { MainLayout } from 'layout/main';
import { withProviders } from 'providers';

export const App = withProviders(() => (
  <ErrorBoundary>
    <MainLayout>
      <h1>App</h1>
    </MainLayout>
  </ErrorBoundary>
));
