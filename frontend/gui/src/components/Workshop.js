import React from 'react';
import { Card } from 'antd';

const Workshop = (props) => {
  
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
export default Workshop;
