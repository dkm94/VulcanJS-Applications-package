import React from 'react';
import { Components } from 'meteor/vulcan:core';
import Applications from '../../modules/collection.js';

const ApplicationsForm = () => {
  return(
    <div>

    Applications Form
      <div className="applications-form">
        <Components.SmartForm collection={Applications} />
      </div>

  </div>
  )
}
  
export default ApplicationsForm;