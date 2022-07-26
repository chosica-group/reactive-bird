import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { instanceApi } from 'services/instance-api';
import isServer from 'utils/isServerSide';
import { rootReducer } from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(instanceApi.middleware),
});

export const history = !isServer
  ? createBrowserHistory()
  : createMemoryHistory({ initialEntries: ['/'] });
