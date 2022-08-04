import { combineReducers } from '@reduxjs/toolkit';
import { instanceApi, serverInstanceApi } from "services/instance-api";
import { authReducer } from 'store/auth-reducer';

export const rootReducer = combineReducers({
  [instanceApi.reducerPath]: instanceApi.reducer,
  [serverInstanceApi.reducerPath]: serverInstanceApi.reducer,
  auth: authReducer,
});
