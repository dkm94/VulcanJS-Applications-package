import Applications from '../modules/collection.js';
import { newMutation } from 'meteor/vulcan:core';
import { Promise } from 'meteor/promise';

const seedData = [
  {
      firstName: 'David',
      lastName: 'Dubois',
      age: 21,
  },
  {
      firstName: 'Emma',
      lastName: 'Watson',
      age: 31,
  },
  {
      firstName: 'Boris',
      lastName: 'Vian',
      age: 54,
  },{
      firstName: 'Matt',
      lastName: 'Damon',
      age: 47,
  },
  {
      firstName: 'Michelle',
      lastName: 'Rodriguez',
      age: 18,
  }
]

export const seedApplications = () => {

  // eslint-disable-next-line no-console
  console.log('seeding function…');
  if (Applications.find().fetch().length === 0) {
    
    const allApplications = Applications.find().fetch();
    
    // eslint-disable-next-line no-console
    console.log('seeding applications…');
    
    Promise.awaitAll(seedData.map(document => newMutation({
      collection: Applications,
      document: document, 
      currentUser: _.sample(allApplications),
      validate: false
    })));

    // eslint-disable-next-line no-console
    console.log('finished seeding!');
  }
}