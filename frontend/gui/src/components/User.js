import React from 'react';
import { Card } from 'antd';

const User = (props) => {
  return (
    <Card title={props.user_name}>
      <div className = 'email'>
        Email: {props.email}
      </div>
      <div className = 'age'>
        Age: {props.age}
      </div>
      <div className = 'user_rating'>
        User Rating: {props.user_rating}
      </div>
      <div className = 'learning_credit'>
        Learning Credit: {props.learning_credit}
      </div>
    </Card>
  );
}
export default User;
