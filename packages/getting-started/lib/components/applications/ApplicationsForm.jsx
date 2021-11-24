import React from 'react';
import { Components } from 'meteor/vulcan:core';
import Applications from '../../modules/collection.js';
import Header from '../other/Header.jsx';

const ApplicationsForm = (props) => {
console.log("🚀 ~ file: ApplicationsForm.jsx ~ line 6 ~ ApplicationsForm ~ props", props.currentRoute.name)
  return(
    <div>
      <Header title='Formulaire de candidature' />
      <div className="applications-form">
        <Components.SmartForm collection={Applications} />
      </div>

  </div>
  )
}
  
export default ApplicationsForm;