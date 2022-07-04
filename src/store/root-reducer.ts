import { combineReducers } from '@reduxjs/toolkit';
import { instanceApi } from 'services/instance-api';
import { authReducer } from 'store/auth-reducer';

export const rootReducer = combineReducers({
  [instanceApi.reducerPath]: instanceApi.reducer,
  auth: authReducer,
});
