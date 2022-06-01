import type { ComponentType } from 'react';
import { Provider } from 'react-redux';

import { store } from 'store';

export const withRedux = (Component: ComponentType) => () =>
  (
    <Provider store={store}>
      <Component />
    </Provider>
  );
