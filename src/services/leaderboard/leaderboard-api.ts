import { instanceApi } from '../instance-api';
import type {
  TAllLeaderboardRequest,
  TAllLeaderboardResponse,
  TUserLeaderboardRequest,
} from './types';

export const leaderboardApi = instanceApi.injectEndpoints({
  endpoints: (builder) => ({
    addUserToLeaderboard: builder.mutation<string, TUserLeaderboardRequest>({
      query: (body) => ({
        url: '/leaderboard',
        method: 'POST',
        body,
      }),
    }),
    getAllLeaderboard: builder.query<TAllLeaderboardResponse, TAllLeaderboardRequest>({
      query: (body) => ({
        url: '/leaderboard/all',
        method: 'POST',
        body,
      }),
    }),
    getTeamLeaderboard: builder.query<TAllLeaderboardResponse, TAllLeaderboardRequest>({
      query: (body) => ({
        url: `/leaderboard/${process.env.GROUP_NAME || 'chosica'}`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useAddUserToLeaderboardMutation,
  useGetTeamLeaderboardQuery,
  useGetAllLeaderboardQuery,
} = leaderboardApi;
