import { DataSource } from '../dataSources/client';

export const MutationResolvers = {
  Mutation: {
    async addUser(
      _: any,
      { email },
      { dataSources }: { dataSources: DataSource }
    ) {
      return await dataSources.addUser({ email });
    },
    async addPost(
      _: any,
      { title, authorId },
      { dataSources }: { dataSources: DataSource }
    ) {
      return await dataSources.addPost({ title, authorId });
    },
    async addComment(
      _: any,
      { postId, content, userId },
      { dataSources }: { dataSources: DataSource }
    ) {
      return await dataSources.addComment({ postId, content, userId });
    },
  },
};
