import { combineReducers } from '@reduxjs/toolkit';
import { instanceApi } from 'services/instance-api';

export const rootReducer = combineReducers({
  [instanceApi.reducerPath]: instanceApi.reducer,
});
