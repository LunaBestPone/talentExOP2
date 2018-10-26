import React from 'react';
import { Card } from 'antd';

const User = (props) => {

  // if (props.isDetail) {
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
//   else {
//     const user_name = props.user_name;
//     return (
//       <Card  title={<a href={'/' + user_name}>{props.user_name}</a>}>
//         <div className = 'email'>
//           Email: {props.email}
//         </div>
//       </Card>
//     );
//   }
// }

export default User;
