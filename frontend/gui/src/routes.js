import React from 'react';
import { Route } from  'react-router-dom';

import UserList from './containers/UserListView';
import UserDetail from './containers/UserDetailView';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={UserList}/>
    <Route exact path='/:user_name' component={UserDetail}/>
  </div>
);

export default BaseRouter;
