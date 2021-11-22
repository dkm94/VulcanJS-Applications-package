import { addGraphQLResolvers, addGraphQLMutation, updateMutator } from 'meteor/vulcan:core';
import Applications from '../modules/collection.js';

// wait for x ms before moving on
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const markAsSelected = {
  Mutation: {
    async markAsSelected(root, { applicationId }, context) {
      // add a 2s delay to simulate a slower operation
      await sleep(2000);

      const result = await updateMutator({
        collection: Applications,
        documentId: applicationId,
        data: { isSelected: true },
        context,
      });
      return result.data;
    },
  },
};

// créer un nouveau resolver
 addGraphQLResolvers(markAsSelected);

 //créer une nouvelle mutation
 addGraphQLMutation('markAsSelected(applicationId: String): Application');
