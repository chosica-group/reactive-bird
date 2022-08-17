import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import fetch from 'isomorphic-fetch';
import config from '../config';

export const baseQuery = fetchBaseQuery({
  baseUrl: config.API_URL,
  credentials: 'include',
  fetchFn: fetch,
  prepareHeaders: (headers) => {
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    headers.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    return headers;
  },
});
