import type { TTopicCommentCreate, TTopicCommentsResponse } from 'services/comments/types';
import { serverInstanceApi } from 'services/instance-api';

export const commentsApi = serverInstanceApi.injectEndpoints({
  endpoints: (builder) => ({
    getTopicComments: builder.query<TTopicCommentsResponse[], string>({
      query: (id: string) => ({ url: `topics/${id}/comments` })
    }),
    addCommentToTopic: builder.mutation<any, TTopicCommentCreate>({
      query: ({ id, ...comment }) => ({
        url: `/topics/${id}/comments`,
        method: 'POST',
        body: comment,
      }),
    }),
  }),
});

const enhancedApi = commentsApi.enhanceEndpoints({
  addTagTypes: ['Commnent'],
  endpoints: {
    getTopicComments: { providesTags: ['Commnent'] }
  },
});

export const {
  useGetTopicCommentsQuery,
  useAddCommentToTopicMutation
} = enhancedApi;
