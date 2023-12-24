import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers';
import { readFileSync } from 'fs';
import { DataSource, prisma } from './dataSources/client';

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      dataSources: new DataSource(),
    };
  },
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
