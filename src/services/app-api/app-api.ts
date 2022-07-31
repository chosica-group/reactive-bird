import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './base-query';

export const appApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['app'],
});
