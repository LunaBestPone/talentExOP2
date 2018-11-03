import React from 'react';
import { Route } from  'react-router-dom';
import { Card } from 'antd';

// TODO: import WorkshopList from './containers/WorkshopListView';
import UserDetail from './containers/UserDetailView';
import Create from './containers/Create';
import Signup from './containers/Signup';
import Login from './containers/Login';
import WorkshopDetail from './containers/WorkshopDetail';
import WorkshopList from './containers/WorkshopListView';


const BaseRouter = () => (
  <div>
    {/*
    TODO: <Route exact path='/' component={WorkshopList} />
    */}
    <Card title="Welcome to Talent Exchange and Meet Up Project!" bordered={false} style={{ width: '100%' }}>
      <p>This is a CS 506 Team Project by <br></br>
      Yong Jae Cho, Charles Grosz, William Laine, Jamie Lee, Zihan Wang, Xiaochao Yan, Sung Ho Youn, Hao Yuan</p>
      <p>The github could be found <a href="https://github.com/LunaBestPone/talentExOP2">HERE</a></p>
    </Card>
    
    <Route exact path='/user/:user_pk/' component={UserDetail} />
    <Route exact path='/workshop/' component={WorkshopList} />
    <Route exact path='/workshop/detail/:ws_id/' component={WorkshopDetail} />
    <Route exact path='/login/' component={Login} />
    <Route exact path='/createws/' component={Create} />
    <Route exact strict path='/signup/' component={Signup} />
  </div>
);

export default BaseRouter;
