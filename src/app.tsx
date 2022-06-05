import { ErrorBoundary } from 'components/error-boundary';
// import { MainLayout } from 'layout/main';
// import { Route } from 'react-router-dom';
import { WelcomeLayout } from 'layout/welcomePage';
import { withProviders } from 'providers';

export const App = withProviders(() => (
  <ErrorBoundary>
    <WelcomeLayout />
  </ErrorBoundary>
));
