import React from 'react';
import { Route, Link } from  'react-router-dom';

import UserDetail from './containers/UserDetailView';
import Register from './containers/Register';
import Signup from './containers/Signup';

const BaseRouter = () => (
  <div>
    <Route exact path='/:user_name/' component={UserDetail} />
    <Route exact path='/register/' component={Register} />
    <Route exact strict path='/signup/' component={Signup} />
  </div>
);

export default BaseRouter;
