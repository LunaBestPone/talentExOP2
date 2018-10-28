import React from 'react';
import { Card } from 'antd';

const Workshop = (props) => {
  return (
    <Card title={props.ws_name}>
      <div className = 'ws_id'>
        Email: {props.ws_id}
      </div>
      <div className = 'ws_name'>
        Age: {props.ws_name}
      </div>
      <div className = 'host_user'>
        User Rating: {props.host_user}
      </div>
      <div className = 'min_cap'>
        Learning Credit: {props.min_cap}
      </div>
      <div className = 'max_cap'>
        Learning Credit: {props.max_cap}
      </div>
      <div className = 'is_active'>
        Learning Credit: {props.is_active}
      </div>
      <div className = 'description'>
        Learning Credit: {props.description}
      </div>
      <div className = 'start_date_time'>
        Learning Credit: {props.start_date_time}
      </div>
      <div className = 'end_date_time'>
        Learning Credit: {props.end_date_time}
      </div>
    </Card>
  );
}
export default Workshop;
