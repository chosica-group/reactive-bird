export type TTopicResponse = {
  id: number;
  commentsCount: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type TTopicCreate = {
  name: string;
}
