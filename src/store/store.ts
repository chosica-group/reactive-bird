import { configureStore } from '@reduxjs/toolkit';
import { instanceApi } from 'services/instance-api';
import { rootReducer } from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(instanceApi.middleware),
});
