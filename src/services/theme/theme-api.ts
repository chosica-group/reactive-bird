import type { TSiteTheme, TUserTheme } from 'server/models/types';
import { appApi } from 'services/app-api';

export const themeApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getTheme: builder.query<TSiteTheme, string>({
      query: (themeName) => ({
        url: `/theme/${themeName}`,
      }),
      providesTags: ['Theme'],
    }),
    getUserTheme: builder.query<TUserTheme, number>({
      query: (userId) => ({
        url: `/theme/user/${userId}`,
      }),
    }),
    addUserTheme: builder.mutation<TUserTheme, TUserTheme>({
      query: (body) => ({
        url: '/theme/newuser',
        method: 'POST',
        body,
      }),
    }),
    getAllThemes: builder.query<TSiteTheme[], void>({
      query: () => ({
        url: '/theme',
      }),
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
  useGetAllThemesQuery,
  useUpdateUserThemeMutation,
  useAddUserThemeMutation,
  useGetThemeQuery,
  useGetUserThemeQuery,
} = themeApi;
