// import { MainLayout } from 'layout/main';
import { withProviders } from 'providers';
import { withRouter } from 'providers/with-router/with-router';

export const App = withProviders(() => withRouter());
