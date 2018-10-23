import React from 'react';
import { List, Card } from 'antd';

const User = (props) => {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item>
          <Card title={item.user_name}>
            <div className = 'email'>
              Email: {item.email}
            </div>
            <div className = 'age'>
              Age: {item.age}
            </div>
            <div className = 'user_rating'>
              User Rating: {item.user_rating}
            </div>
            <div className = 'learning_credit'>
              Learning Credit: {item.learning_credit}
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
}

export default User;
