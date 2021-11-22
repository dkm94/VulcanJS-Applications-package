import React from 'react';
import { Components } from 'meteor/vulcan:core';

const CheckButton = ({ document: application }) =>
application.isSelected ? (
    <span>✓</span>
  ) : (
    <Components.MutationButton
      label="✓"
      variant="primary"
      mutationOptions={{
        name: 'markAsSelected',
        args: { applicationId: 'String' }
      }}
      mutationArguments={{ applicationId: application._id }}
    />
  );

export default CheckButton;
