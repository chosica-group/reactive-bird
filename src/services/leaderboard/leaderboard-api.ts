import { instanceApi } from '../instance-api';
import type {
  TAllLeaderboardRequest,
  TAllLeaderboardResponse,
  TTeamLeaderboardRequest,
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
      invalidatesTags: ['Leaderboard'],
    }),
    getAllLeaderboard: builder.query<TAllLeaderboardResponse, TAllLeaderboardRequest>({
      query: (body) => ({
        url: '/leaderboard/all',
        method: 'POST',
        body,
      }),
    }),
    getTeamLeaderboard: builder.query<TAllLeaderboardResponse, TTeamLeaderboardRequest>({
      query: ({ teamName, body }) => ({
        url: `/leaderboard/${teamName}`,
        method: 'POST',
        body,
      }),
      providesTags: ['Leaderboard'],
    }),
  }),
});

export const {
  useAddUserToLeaderboardMutation,
  useGetTeamLeaderboardQuery,
  useGetAllLeaderboardQuery,
} = leaderboardApi;
