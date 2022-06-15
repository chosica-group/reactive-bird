import { instanceApi } from '../instance-api';
import type {
  TChangeAvatarUserRequest,
  TChangePasswordUserRequest,
  TReject,
  TUpdateUserProfileRequest,
  TUserResponse,
} from './types';

export const userApi = instanceApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<TUserResponse, void>({
      query: () => ({ url: '/auth/user' }),
      transformResponse: (user: TUserResponse) => ({
        ...user,
        avatar: `https://ya-praktikum.tech/api/v2/resources${user?.avatar}`,
      }),
    }),
    updateUserProfile: builder.mutation<TUserResponse | TReject, TUpdateUserProfileRequest>({
      query: (body) => ({ url: '/user/profile', method: 'PUT', body }),
    }),
    changeAvatarUser: builder.mutation<TUserResponse | TReject, TChangeAvatarUserRequest>({
      query: (body) => ({ url: '/user/profile/avatar', method: 'PUT', body }),
    }),
    changePasswordUser: builder.mutation<void | TReject, TChangePasswordUserRequest>({
      query: (body) => ({ url: '/user/password', method: 'PUT', body }),
    }),
  }),
});

const enhancedApi = userApi.enhanceEndpoints({
  addTagTypes: ['User'],
  endpoints: {
    getUser: { providesTags: ['User'] },
    updateUserProfile: { invalidatesTags: ['User'] },
    changeAvatarUser: { invalidatesTags: ['User'] },
  },
});

export const {
  useChangeAvatarUserMutation,
  useChangePasswordUserMutation,
  useUpdateUserProfileMutation,
  useGetUserQuery,
} = enhancedApi;
