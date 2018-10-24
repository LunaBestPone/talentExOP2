import React from 'react';
import axios from 'axios';

import User from '../components/User';

import { List } from 'antd';

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
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={this.state.users}
        renderItem={item => (
          <List.Item>
            <User user_name = {item.user_name} email = {item.email} isDetail = {false} />
          </List.Item>
        )}
      />
    )
  }
}

export default UserList;
