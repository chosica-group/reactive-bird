import { instanceApi } from '../../instance-api';
import type { TAuthWithYandex, TClientId } from './types';

export const oauthApi = instanceApi.injectEndpoints({
  endpoints: (builder) => ({
    getServiceIdOauth: builder.query<TClientId, string>({
      query: (redirectUri: string) => ({
        url: `/oauth/yandex/service-id?redirect_uri=${redirectUri}`,
        method: 'GET',
      }),
    }),
    authWithYandexOauth: builder.query<string, TAuthWithYandex>({
      query: (body) => ({
        url: '/oauth/yandex',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetServiceIdOauthQuery, useAuthWithYandexOauthQuery } = oauthApi;
