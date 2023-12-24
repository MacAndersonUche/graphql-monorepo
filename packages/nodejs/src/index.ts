import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { DataSource } from './dataSources/client';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { QueriesResolver } from './resolvers/queries';
import { MutationResolvers } from './resolvers/mutation';
import { OtherResolvers } from './resolvers/others';

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: [QueriesResolver, MutationResolvers, OtherResolvers],
});

const server = new ApolloServer({
  schema,
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
