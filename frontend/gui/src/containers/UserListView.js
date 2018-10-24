import React from 'react';
import axios from 'axios';

import User from '../components/User';

class UserList extends React.Component{

  state = {
    users: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({
            users: res.data
        });
      })
  }

  render() {
    return (
      <User data = {this.state.users} />
    )
  }
}

export default UserList;
