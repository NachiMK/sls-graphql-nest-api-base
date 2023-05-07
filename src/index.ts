import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda';
import { loadFilesSync } from '@graphql-tools/load-files';
import { resolvers } from './application/resolvers/index'

// Load typedefs
const typeDefs = loadFilesSync('**/*.gql');
//  Load resolvers from files - This doesn't work see here:
// https://github.com/ardatan/graphql-tools/issues/1750#issuecomment-716939594
// https://github.com/ardatan/graphql-tools/issues/1750
// const resolvers = loadFilesSync('src/application/resolvers/**/*.{js,ts}');

// create the Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server and create the Lambda handler
export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  // We will be using the Proxy V2 handler
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
);