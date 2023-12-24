import { DataSource } from '../dataSources/client';

export const resolvers = {
  Query: {
    async user(_: any, { id }, { dataSources }: { dataSources: DataSource }) {
      return await dataSources.getUser({
        id,
      });
    },
    async comment(
      _: any,
      { id },
      { dataSources }: { dataSources: DataSource }
    ) {
      return await dataSources.getComment({
        id,
      });
    },
    async post(_: any, { id }, { dataSources }: { dataSources: DataSource }) {
      return await dataSources.getPost({
        id,
      });
    },

    async users(_: any, __: any, { dataSources }: { dataSources: DataSource }) {
      return await dataSources.getUsers();
    },
    async posts(_: any, __: any, { dataSources }: { dataSources: DataSource }) {
      return await dataSources.getPosts();
    },
    async comments(
      _: any,
      __: any,
      { dataSources }: { dataSources: DataSource }
    ) {
      return await dataSources.getComments();
    },
  },
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
};
