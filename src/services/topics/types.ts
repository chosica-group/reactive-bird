export type TTopicResponse = {
  id: number;
  comments: Comment[];
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type TTopicCreate = {
  name: string;
}
