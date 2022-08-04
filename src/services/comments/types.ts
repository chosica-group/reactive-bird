export type TTopicCommentsResponse = {
  id: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export type TTopicCommentCreate = {
  id: string;
  comment: string
}
