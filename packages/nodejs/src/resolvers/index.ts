import { DataSource } from '../dataSources/client';

export const resolvers = {
  Query: {
    async user(_: any, { id }, { dataSources }: { dataSources: DataSource }) {
      return await dataSources.getUser({
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
  },
  Mutation: {
    async addUser(_: any, { email }, { dataSources }: any) {
      return await dataSources.addUser({ email });
    },
    async addPost(_: any, { title, authorId }, { dataSources }: any) {
      return await dataSources.addPost({ title, authorId });
    },
  },
  User: {
    async posts(parent, _: any, { dataSources }: { dataSources: DataSource }) {
      const allPosts = await dataSources.getPosts();
      return allPosts.filter((post) => post.authorId === parent.id);
    },
  },

  Post: {
    async author(parent, _: any, { dataSources }: { dataSources: DataSource }) {
      return await dataSources.getUser({
        id: parent.authorId,
      });
    },
  },
};
