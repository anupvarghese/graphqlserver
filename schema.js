const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
} = require('graphql');

let count = 0;

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        resolve: () => count,
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      updateCount: {
        type: GraphQLInt,
        description: 'Updates count',
        resolve: () => count += 1,
      },
    },
  }),
});

module.exports = schema;
