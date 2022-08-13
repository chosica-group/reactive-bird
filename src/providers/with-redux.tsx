import type { ComponentType } from 'react';
import { Provider } from 'react-redux';
import { configureInitialStore } from 'store';

const { store } = configureInitialStore();

export const withRedux = (Component: ComponentType) => () =>
  (
    <Provider store={store}>
      <Component />
    </Provider>
  );
