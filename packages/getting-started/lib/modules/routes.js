import { addRoute } from 'meteor/vulcan:core';
import ApplicationsForm from '../components/applications/ApplicationsForm.jsx';
import Backoffice from '../components/applications/Backoffice.jsx';

addRoute({ name: 'home', path: '/', component: ApplicationsForm });
addRoute({ name: 'backoffice', path: '/backoffice2', component: Backoffice });