import { GraphQLSchema, addGraphQLResolvers, addGraphQLQuery } from 'meteor/vulcan:core';

/*

SchemaContents resolver

Used to output the GraphQL schema as a string

*/
const schemaResolvers = {
  Query: {
    schemaContents(root, args, context) {
      return GraphQLSchema.finalSchema[0];
    },
  },
};
addGraphQLResolvers(schemaResolvers);

addGraphQLQuery('schemaContents: String');

/*

ApplicationsCount resolver

Used to display the total number of documents in the Applications collection

*/
import Applications from '../modules/collection';

const applicationsCountResolvers = {
  Query: {
    applicationsCount(root, args, context) {
      return Applications && Applications.find().count();
    },
  },
};
addGraphQLResolvers(applicationsCountResolvers);

addGraphQLQuery('applicationsCount: Int');
