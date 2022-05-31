import { ErrorBoundary } from 'components/error-boundary';
import { MainLayout } from 'layout/main';
import { withProviders } from 'providers';
import { StartGamePage } from 'pages/start-game';

export const App = withProviders(() => (
  <ErrorBoundary>
    <MainLayout>
      <StartGamePage />
    </MainLayout>
  </ErrorBoundary>
));
