import React from 'react';
import { Route } from  'react-router-dom';

import UserDetail from './containers/UserDetailView';
import Create from './containers/Create';
import Signup from './containers/Signup';
import Login from './containers/Login';
import WorkshopDetail from './containers/WorkshopDetail';
import WorkshopList from './containers/WorkshopListView';
import Home from './containers/Home';
import WorkshopMap from './containers/WorkShopMap';
import profile from './containers/profile';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route exact path='/user/:user_pk/' component={UserDetail} />
    <Route exact path='/workshop/' component={WorkshopList} />
    <Route exact path='/workshopmap/' component={WorkshopMap} />
    <Route exact path='/workshop/detail/:ws_id/' component={WorkshopDetail} />
    <Route exact path='/login/' component={Login} />
    <Route exact path='/createws/' component={Create} />
    <Route exact strict path='/signup/' component={Signup} />
    <Route exact path='/profile/' component={profile}/>
  </div>
);

export default BaseRouter;
