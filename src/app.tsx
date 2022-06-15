import { MainLayout } from 'layout/main';
import { SignUpPage } from 'pages/signup';
import { withProviders } from 'providers';

export const App = withProviders(() => (
  <MainLayout>
    <SignUpPage />
  </MainLayout>
));
