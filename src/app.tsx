import { MainLayout } from 'layout/main';
import { withProviders } from 'providers';
import { Game } from 'pages/game';

export const App = withProviders(() =>
  <MainLayout>
    <Game />
  </MainLayout>
);
