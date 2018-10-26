import React, { Component } from 'react';
import './App.css';

 class Login extends Component {
    // TODO: Needs to apply logged in status to home page and reflect different view to the home page
    state = {
        loggedIn: false
    }
    
    // loginHandle = () => {
    //     this.setState(prevState => ({
    //         loggedIn: !prevState.loggedIn
    //     }))
    // }
    render(){
        return (
            // <form>
                 <h1>This is a Log in page</h1>
            //     <label className="userInput" for="user">Username</label>
            //     <input type="text" id="user" ></input>
            //     {/* <input className="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/> */}
            // </form>
        );
    }
}


export default Login;