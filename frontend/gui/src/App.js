import React, { Component } from 'react';
import BaseRouter from './routes';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

export default App;
