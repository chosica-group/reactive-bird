import { BrowserRouter as Router, Route } from 'react-router-dom';
import type { ComponentType } from 'react';
import { SignUpPage } from '../../pages/sugnup/index';
import { WelcomePage } from '../../pages/welcome-page';

const NoUser = () => (
  <Route>
    <Route path="/" element={<SignUpPage />} />
  </Route>
);

const User = () => (
  <Router>
    <Route path="/" element={<WelcomePage />} />
  </Router>
);

export const withRouter =
  (Component: ComponentType, isUser = true) =>
  () =>
    !isUser ? NoUser() : User();
