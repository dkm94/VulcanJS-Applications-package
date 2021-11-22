/*

The main Movies collection definition file.

*/

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';

let Applications;

Applications = createCollection({

    collectionName: 'Applications',
  
    typeName: 'Application',
  
    schema,
  
    permissions: {
      canRead: ['members'],
      canCreate: ['guests'],
      canUpdate: ['members'],
      canDelete: ['members']
    }
  
  });
  
  export default Applications;