import React from 'react';
import { Route } from  'react-router-dom';

// TODO: import WorkshopList from './containers/WorkshopListView';
import UserDetail from './containers/UserDetailView';
import Register from './containers/Register';
import Signup from './containers/Signup';
import Login from './containers/Login';

const BaseRouter = () => (
  <div>
    {
    /*
    TODO: <Route exact path='/' component={WorkshopList} />
    */
    }
    <Route exact path='/user/:user_name/' component={UserDetail} />
    <Route exact path='/login/' component={Login} />
    <Route exact path='/register/' component={Register} />
    <Route exact strict path='/signup/' component={Signup} />
  </div>
);

export default BaseRouter;
