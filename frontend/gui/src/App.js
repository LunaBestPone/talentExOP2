import React, { Component, Fragment } from 'react';
import BaseRouter from './routes';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';
import Login from './Login';
import Home from './Home';
import Help from './Help';
import Sign from './Sign';

class App extends Component {
  // TODO: Keeping logged in state
  //       When logged in, the user img (or default img) is loaded next to Log in tab
  // state = {
  //   loggedIn: false
  // }

  render() {
    return (
      <Fragment>
        <Router>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>
         {/* <Router>
           <div className="App">
            <header className="App-header">
              <h1 className="App-title">Talent Exchange and Meetup</h1>
            </header>
          <div className="filters">
            
            <div className="selected">
              <p>Selected</p>
            </div>
            <div className="calendar">
              <p>Calendar</p>
            </div>
            <div className="categories">
              <p>Categories</p>
            </div>
            <div className="ratings">
              <p>Host Ratings</p>
            </div>
          </div>
          <div className="options">
            <Link to={{pathname: "/home"}} className="link">Home</Link>
            <Link to={{pathname: "/help"}} className="link">Help</Link>
            <Link to={{pathname: "/sign"}} className="link">Sign Up</Link>
            <Link to={{pathname: "/login"}} className="link">Log In</Link>
          </div>
          
          <Route path = "/home" exact render = {
            () => {
              // TODO: Visualize My workshop lists if logged in, else just most recent workshop lists
              return (
                <Home />
              )
            } 
          }/>
          <Route path = "/help" exact render = {
            () => {
              // TODO: Textbox of descriptions on how to use the app
              return (
                <Help />
              )
            } 
          }/>
          <Route path = "/sign" exact render = {
            () => {
              // TODO: Create a sign up page
              return (
                <Sign />
              )
            } 
          }/>
          <Route path = "/login" exact render = {
            () => {
              // TODO: Create a login page
              return(
                <Login />
              )
            } 
          }/>
          </div>
        </Router> */}
      </Fragment>
    );
  }
}

export default App;
