import React, { Component } from 'react';
import { Components, useCurrentUser } from 'meteor/vulcan:core';
import Applications from '../../modules/collection.js';
import CheckButton from './CheckButton.jsx';
import Header from '../other/Header.jsx';
//import{ seedApplications } from '../../server/seed.js';

const Backoffice = () => {
    //seedApplications();
    const { currentUser } = useCurrentUser();
  
    return (
        <div>
            <Header title='Backoffice' />
            <div className="signup-form">
                <Components.AccountsLoginForm />
            </div>
            {currentUser && currentUser.isAdmin ? 
            (<Components.Datatable 
                collection={Applications}
                columns={[
                    'lastName',
                    'firstName',
                    'age', 
                    { name: 'isSelected', component: CheckButton }
                ]}
                //showNew={false}
                showSearch={false}
                showEdit={false}
                />) : 
                null}
            {currentUser && !currentUser.isAdmin ? 'Vous n\'avez pas les droits pour accéder à cette ressource' : null}
        </div>
    )
}

export default Backoffice
