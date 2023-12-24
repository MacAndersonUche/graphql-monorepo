import { DataSource } from '../dataSources/client';

export const QueriesResolver = {
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
};
