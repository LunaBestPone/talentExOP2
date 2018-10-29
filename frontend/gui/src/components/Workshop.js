import React from 'react';
import { Card } from 'antd';

const Workshop = (props) => {
  if (props.is_detailed) {
    return (
      <Card title={props.ws_name}>
        <div className = 'ws_id'>
          Workshop ID: {props.ws_id}
        </div>
        <div className = 'ws_name'>
          Workshop Name: {props.ws_name}
        </div>
        <div className = 'host_user'>
          Host: {props.host_user}
        </div>
        <div className = 'min_cap'>
          Minimum Capacity: {props.min_cap}
        </div>
        <div className = 'max_cap'>
          Maximum Capacity: {props.max_cap}
        </div>
        <div className = 'is_active'>
          Active?: {props.is_active}
        </div>
        <div className = 'description'>
          Description: {props.description}
        </div>
        <div className = 'start_date_time'>
          Start Date: {props.start_date_time}
        </div>
        <div className = 'end_date_time'>
          End Date: {props.end_date_time}
        </div>
      </Card>
    )
  } else {
    let ws_id = props.ws_id;
    return (
    <Card title={<a href={'/workshop/detail/' + ws_id}>{props.ws_name}</a>}>
      <div className = 'description'>
        Description: {props.description}
      </div>
      <div className = 'start_date_time'>
        Start Date: {props.start_date_time}
      </div>
      <div className = 'end_date_time'>
        End Date: {props.end_date_time}
      </div>
    </Card>
    )
  }
}
export default Workshop;
