import { GraphQLServerLambda } from 'graphql-yoga';
import merge from 'lodash/merge';
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date';
import contextBuilder from './contextBuilder';

const rootTypeDefs = `
  type Query {
    healthcheck: String!
  }

  type Mutation {
    healthcheck: String!
  }

  scalar Date
  scalar Time
  scalar DateTime
  scalar JSON
  scalar Upload
`;

const rootResolvers = {
  Query: {
    healthcheck: () => 'hello world',
  },
  Mutation: {
    healthcheck: () => 'hello world',
  },
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,

};

const types = [
  require('./types/example'),
];

const resolvers = [
  require('./resolvers/example'),
];

export const serverLambda = new GraphQLServerLambda({
  typeDefs: [
    rootTypeDefs,
    ...types,
    ...[].concat(...resolvers.map(resolver => resolver.typeDefs)),
  ].join(''),
  resolvers: merge(
    rootResolvers,
    ...resolvers.map(resolver => resolver.resolvers),
  ),
  context: contextBuilder,
});
