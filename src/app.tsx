import { MainLayout } from 'layout/main';
import { UserPage } from 'pages/user/user';
import { withProviders } from 'providers';

export const App = withProviders(() => (
  <MainLayout>
    <UserPage />
  </MainLayout>
));
