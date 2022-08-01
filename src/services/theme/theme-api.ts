import type { TSiteTheme, TUserTheme } from 'server/models/types';
import { appApi } from 'services/app-api';

export const themeApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getTheme: builder.query<TSiteTheme, string>({
      query: (themeName) => ({
        url: `/theme/${themeName}`,
      }),
    }),
    getUserTheme: builder.query<TUserTheme, number>({
      query: (userId) => ({
        url: `/theme/user/${userId}`,
      }),
      providesTags: ['Theme'],
    }),
    addUserTheme: builder.mutation<TUserTheme, TUserTheme>({
      query: (body) => ({
        url: '/theme/newuser',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Theme'],
    }),
    updateUserTheme: builder.mutation<TUserTheme, TUserTheme>({
      query: (body) => ({
        url: '/theme/user',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Theme'],
    }),
  }),
});

export const {
  useUpdateUserThemeMutation,
  useAddUserThemeMutation,
  useGetThemeQuery,
  useGetUserThemeQuery,
} = themeApi;
