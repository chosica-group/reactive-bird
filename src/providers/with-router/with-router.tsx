import type { ComponentType } from 'react';
import { Router } from 'react-router-dom';
import { history } from 'store';

export const withRouter = (Component: ComponentType) => () =>
  (
    <Router history={history}>
      <Component />
    </Router>
  );
