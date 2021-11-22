import React, { Component } from 'react';
import { Components } from 'meteor/vulcan:core';
import Applications from '../../modules/collection.js';
import CheckButton from './CheckButton.jsx';

const Backoffice = () => {

    return (
        <div>
            Backoffice Datatable
            <Components.AccountsLoginForm/>
            <Components.Datatable 
            collection={Applications}
            columns={[
                'lastName',
                'firstName',
                'age', 
                { name: 'isSelected', component: CheckButton }
            ]}
            showNew={false}
            showSearch={false}
            showEdit={false}
            />
        </div>
    )
}

export default Backoffice
