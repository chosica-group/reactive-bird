import { withRouter } from 'providers/with-router';
import { withProviders } from 'providers';

export const App = withProviders(() => withRouter());
