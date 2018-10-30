import React from 'react';
import { Card } from 'antd';

const Workshop = (props) => {
  if (props.is_detailed) {
    return (
      <Card title={props.ws_name}>
        <div className = 'ws_id'>
          <b>Workshop ID:</b> {props.ws_id}
        </div>
        <div className = 'ws_name'>
          <b>Workshop Name:</b> {props.ws_name}
        </div>
        <div className = 'host_user'>
          <b>Host:</b> {props.host_user}
        </div>
        <div className = 'min_cap'>
          <b>Minimum Capacity:</b> {props.min_cap}
        </div>
        <div className = 'max_cap'>
          <b>Maximum Capacity:</b> {props.max_cap}
        </div>
        <div className = 'is_active'>
          <b>Active?:</b> {props.is_active}
        </div>
        <div className = 'description'>
          <b>Description:</b> {props.description}
        </div>
        <div className = 'start_date_time'>
          <b>Start Date:</b> {props.start_date_time}
        </div>
        <div className = 'end_date_time'>
          <b>End Date:</b> {props.end_date_time}
        </div>
      </Card>
    )
  } else {
    let ws_id = props.ws_id;
    return (
    <Card title={<a href={'/workshop/detail/' + ws_id}>{props.ws_name}</a>}>
      <div className = 'description'>
        <b>Description:</b>  {props.description}
      </div>
      <div className = 'start_date_time'>
        <b>Start Date:</b> {props.start_date_time}
      </div>
      <div className = 'end_date_time'>
        <b>End Date:</b> {props.end_date_time}
      </div>
    </Card>
    )
  }
}
export default Workshop;
