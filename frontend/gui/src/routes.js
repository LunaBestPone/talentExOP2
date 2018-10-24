import React from 'react';
import { Route } from  'react-router-dom';

import UserList from './containers/UserListView';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={UserList}/>
  </div>
);

export default BaseRouter;
