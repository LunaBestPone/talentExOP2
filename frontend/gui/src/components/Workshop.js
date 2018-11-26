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
        <div className = 'category'>
          <b>Subject</b>: {props.category}
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
        <div className = 'start_time_display'>
          <b>Start Date:</b> {props.start_time_display}
        </div>
        <div className = 'end_time_display'>
          <b>End Date:</b> {props.end_time_display}
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
      <div className = 'category'>
        <b>Subject</b>: {props.category}
      </div>
      <div className = 'start_time_display'>
        <b>Start Date:</b> {props.start_time_display}
      </div>
      <div className = 'end_time_display'>
        <b>End Date:</b> {props.end_time_display}
      </div>
    </Card>
    )
  }
}
export default Workshop;
