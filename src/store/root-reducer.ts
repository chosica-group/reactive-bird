import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import type { History } from 'history';
import { appApi } from 'services/app-api';
import { instanceApi, serverInstanceApi } from 'services/instance-api';
import { authReducer } from 'store/auth-reducer';
import { themeReducer } from './theme-reduser';

export const rootReducer = (history: History): any =>
  combineReducers({
    [instanceApi.reducerPath]: instanceApi.reducer,
    [appApi.reducerPath]: appApi.reducer,
    [serverInstanceApi.reducerPath]: serverInstanceApi.reducer,
    auth: authReducer,
    theme: themeReducer,
    router: connectRouter(history),
  });
