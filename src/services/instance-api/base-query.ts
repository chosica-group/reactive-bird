import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import config from '../config';

export const baseQuery = fetchBaseQuery({
  baseUrl: config.API_URL,
  credentials: 'include',
});
