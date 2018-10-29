// TODO: grab a list component from antd, for general design guideline for the project, please refer to UserDetailView.js
// for axios calls, the path is 'http://127.0.0.1:8000/api/workshop' for list, 'http://127.0.0.1:8000/api/workshop/detail/' + ws_id for detail, 'http://127.0.0.1:8000/api/workshop/create' for creating workshop.
// in this file, implment list view exclusively.
// for Detail, please create a seperate component, aka WorkshopDetailView.js in similar manner.

import React from 'react';
import axios from 'axios';

// import Workshop from '../components/Workshop';

import { Card } from 'antd';

class WorkshopDetail extends React.Component{

  state = {
    workshops: {}
  }

  componentDidMount() {
    let workshop_id = this.props.match.params.ws_id;
    axios.get('http://127.0.0.1:8000/api/workshop/detail/' + workshop_id)
      .then(res => {
        this.setState({
            workshops: res.data
        });
      })
  }
  render() {
    return (
        <Card title={this.state.workshops.ws_name}>
        <div className = 'ws_id'>
          Workshop ID: {this.state.workshops.ws_id}
        </div>
        <div className = 'ws_name'>
          Workshop Name: {this.state.workshops.ws_name}
        </div>
        <div className = 'host_user'>
          Host: {this.state.workshops.host_user}
        </div>
        <div className = 'min_cap'>
          Minimum Capacity: {this.state.workshops.min_cap}
        </div>
        <div className = 'max_cap'>
          Maximum Capacity: {this.state.workshops.max_cap}
        </div>
        <div className = 'is_active'>
          Active?: {this.state.workshops.is_active}
        </div>
        <div className = 'description'>
          Description: {this.state.workshops.description}
        </div>
        <div className = 'start_date_time'>
          Start Date: {this.state.workshops.start_date_time}
        </div>
        <div className = 'end_date_time'>
          End Date: {this.state.workshops.end_date_time}
        </div>
      </Card>
      
    )
  }
}

export default WorkshopDetail;
