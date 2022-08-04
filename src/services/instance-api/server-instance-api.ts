import { createApi } from '@reduxjs/toolkit/query/react';
import { serverQuery } from './server-query';

export const serverInstanceApi = createApi({
  reducerPath: 'server-api',
  baseQuery: serverQuery,
  endpoints: () => ({}),
  tagTypes: ['forum'],
});
