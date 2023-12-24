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
    async updateUser(
      _: any,
      { id, email },
      { dataSources }: { dataSources: DataSource }
    ) {
      return await dataSources.updateUser({ email, id });
    },
    async addPost(_: any, arg, { dataSources }: { dataSources: DataSource }) {
      const { title, authorId } = arg.input;
      return await dataSources.addPost({ title, authorId });
    },
    async updatePost(
      _: any,
      { title, id },
      { dataSources }: { dataSources: DataSource }
    ) {
      return await dataSources.updatePost({ title, id });
    },
    async deletePost(
      _: any,
      { id },
      { dataSources }: { dataSources: DataSource }
    ) {
      return await dataSources.deletePost({ id });
    },
    async deleteUser(
      _: any,
      { id },
      { dataSources }: { dataSources: DataSource }
    ) {
      return await dataSources.deleteUser({ id });
    },
    async addComment(
      _: any,
      arg,
      { dataSources }: { dataSources: DataSource }
    ) {
      const { postId, content, userId } = arg.input;
      return await dataSources.addComment({ postId, content, userId });
    },
    async updateComment(
      _: any,
      { content, id },
      { dataSources }: { dataSources: DataSource }
    ) {
      return await dataSources.updateComment({ content, id });
    },
    async deleteComment(
      _: any,
      { id },
      { dataSources }: { dataSources: DataSource }
    ) {
      return await dataSources.deleteComment({ id });
    },
  },
};
