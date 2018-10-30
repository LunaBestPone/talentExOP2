import React from 'react';
import axios from 'axios';

import User from '../components/User';

class UserDetail extends React.Component{

  state = {
    user: {}
  }
// axios url parameter is broken somehow
  componentDidMount() {
    const user_pk = this.props.match.params.user_pk;
    axios.get('http://127.0.0.1:8000/api/user/' + user_pk)
      .then(res => {
        this.setState({
            user: res.data
        });
      })
  }

  render() {
    return (
      <User
        user_name = {this.state.user.username}
        email = {this.state.user.email}
        age = {this.state.user.age}
        user_rating = {this.state.user.user_rating}
        learning_credit = {this.state.user.learning_credit}
        isDetail = {true} />
    )
  }
}

export default UserDetail;
