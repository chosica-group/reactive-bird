import type { TTopicCreate, TTopicResponse } from 'services/topics/types';
import { serverInstanceApi } from 'services/instance-api';

export const topicsApi = serverInstanceApi.injectEndpoints({
  endpoints: (builder) => ({
    getTopic: builder.query<TTopicResponse, string>({
      query: (id: string) => ({ url: `/topics/${id}` })
    }),
    getTopics: builder.query<TTopicResponse[], void>({
      query: () => ({ url: '/topics' })
    }),
    createTopic: builder.mutation<any, TTopicCreate>({
      query: (data) => ({
        url: `/topics`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

const enhancedApi = topicsApi.enhanceEndpoints({
  addTagTypes: ['Topic'],
  endpoints: {
    getTopics: { providesTags: ['Topic'] }
  },
});

export const {
  useGetTopicQuery,
  useGetTopicsQuery,
  useCreateTopicMutation
} = enhancedApi;
