// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    // user(parent, args, contextValue, info) {
    //   return users.find((user) => user.id === args.id);
    // },
    async users(_: any, __: any, { dataSources }) {
      return await dataSources.api.users.findMany();
    },
  },
};
