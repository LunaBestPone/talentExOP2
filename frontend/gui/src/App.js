import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';

import UserList from './containers/UserListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <UserList />
        </CustomLayout>
      </div>
    );
  }
}

export default App;
