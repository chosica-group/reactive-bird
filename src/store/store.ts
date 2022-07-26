import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { instanceApi } from 'services/instance-api';
import isServer from 'utils/isServerSide';
import { rootReducer } from './root-reducer';

export const history = !isServer
  ? createBrowserHistory()
  : createMemoryHistory({ initialEntries: ['/'] });

export const store = configureStore({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  reducer: rootReducer(history),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(instanceApi.middleware),
});
