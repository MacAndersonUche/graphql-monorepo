export const resolvers = {
  Query: {
    async user(_: any, { id }, { dataSources }: any) {
      return await dataSources.getUser({
        id,
      });
    },

    async users(_: any, __: any, { dataSources }: any) {
      return await dataSources.getUsers();
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
};
