import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import fetch from 'isomorphic-fetch';
import config from '../config';

export const baseQuery = fetchBaseQuery({
  baseUrl: config.API_APP_URL,
  credentials: 'include',
  fetchFn: fetch,
});
