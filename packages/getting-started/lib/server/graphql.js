import { GraphQLSchema, addGraphQLResolvers, addGraphQLQuery } from 'meteor/vulcan:core';
import Applications from '../modules/collection';

const schemaResolvers = {
  //déclarer une requête
  Query: {
    //nom de la requête
    schemaContents(root, args, context) {
      return GraphQLSchema.finalSchema[0];
    },
  },
};
// créer le resolver de schema
addGraphQLResolvers(schemaResolvers);
// stringify la query pour interprétation GraphQL
addGraphQLQuery('schemaContents: String');


const applicationsCountResolvers = {
  // créer une requête
  Query: {
    // nom de la requête
    applicationsCount(root, args, context) {
      return Applications && Applications.find().count();
    },
  },
};

// créer le resolver totalCount
addGraphQLResolvers(applicationsCountResolvers);
// stringify la query pour interprétation GraphQL
addGraphQLQuery('applicationsCount: Int');
