import { withProviders } from 'providers';
import { withRouter } from 'providers/with-router/with-router';

export const App = withProviders(() => withRouter()); // потом это будет withAuth
