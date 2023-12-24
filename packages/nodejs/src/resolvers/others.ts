import { DataSource } from '../dataSources/client';

export const OtherResolvers = {
  User: {
    async posts(parent, _: any, { dataSources }: { dataSources: DataSource }) {
      const allPosts = await dataSources.getPosts();
      return allPosts.filter((post) => post.authorId === parent.id);
    },
    async comments(
      parent,
      _: any,
      { dataSources }: { dataSources: DataSource }
    ) {
      const allComments = await dataSources.getComments();
      return allComments.filter((comment) => comment.userId === parent.id);
    },
  },
  Post: {
    async author(parent, _: any, { dataSources }: { dataSources: DataSource }) {
      return await dataSources.getUser({
        id: parent.authorId,
      });
    },
    async comments(
      parent,
      _: any,
      { dataSources }: { dataSources: DataSource }
    ) {
      const allComments = await dataSources.getComments();
      return allComments.filter((comment) => comment.postId === parent.id);
    },
  },
  Comment: {
    async author(parent, _: any, { dataSources }: { dataSources: DataSource }) {
      return await dataSources.getUser({
        id: parent.userId,
      });
    },
    async post(parent, _: any, { dataSources }: { dataSources: DataSource }) {
      return await dataSources.getPost({
        id: parent.postId,
      });
    },
  },
};
