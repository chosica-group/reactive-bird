import { ErrorBoundary } from 'components/error-boundary';
import { MainLayout } from 'layout/main';

export const App = () => (
  <ErrorBoundary>
    <MainLayout>
      <h1>App</h1>
    </MainLayout>
  </ErrorBoundary>
);
