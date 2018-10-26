import React from 'react';
import axios from 'axios';
import { Card } from 'antd';
import User from '../components/User';

class UserDetail extends React.Component{

  state = {
    user: {}
  }
// axios url parameter is broken somehow
  componentDidMount() {
    const user_name = this.props.match.params.user_name;
    axios.get('http://127.0.0.1:8000/api/' + user_name)
      .then(res => {
        this.setState({
            user: res.data
        });
      })
  }

  render() {
    return (
      <Card title={this.state.user.user_name}>
        <div className = 'email'>
          Email: {this.state.user.email}
        </div>
        <div className = 'age'>
          Age: {this.state.user.age}
        </div>
        <div className = 'user_rating'>
          User Rating: {this.state.user.user_rating}
        </div>
        <div className = 'learning_credit'>
          Learning Credit: {this.state.user.learning_credit}
        </div>
      </Card>
    )
  }
}

export default UserDetail;
