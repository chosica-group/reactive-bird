import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import config from '../config';

export const serverQuery = fetchBaseQuery({
  baseUrl: config.SERVER_URL,
  credentials: 'include',
  // prepareHeaders: headers => {
  //   headers.set('Access-Control-Allow-Origin', '*');
  //   headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  //   headers.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  //   return headers;
  // }
});
