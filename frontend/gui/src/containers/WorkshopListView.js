// TODO: grab a list component from antd, for general design guideline for the project, please refer to UserDetailView.js
// for axios calls, the path is 'http://127.0.0.1:8000/api/workshop' for list, 'http://127.0.0.1:8000/api/workshop/detail/' + ws_id for detail, 'http://127.0.0.1:8000/api/workshop/create' for creating workshop.
// in this file, implment list view exclusively.
// for Detail, please create a seperate component, aka WorkshopDetailView.js in similar manner.

import React from 'react';
import axios from 'axios';

import Workshop from '../components/Workshop';

class UserDetail extends React.Component{

  state = {
    workshop: {}
  }
// axios url parameter is broken somehow
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/workshop')
      .then(res => {
        this.setState({
            workshop: res.data
        });
      })
  }
  render() {
    return (
      <Workshop
        ws_id = {this.state.ws.ws_id}
        ws_name = {this.state.ws.ws_name}
        host_user = {this.state.ws.host_user}
        min_cap = {this.state.ws.min_cap}
        max_cap = {this.state.ws.max_cap}
        is_active = {this.state.ws.is_active}
        description = {this.state.ws.description}
        start_date = {this.state.ws.start_date}
        end_date = {this.state.ws.end_date}
        is_detailed = {false} />
    )
  }
}

export default Workshop;
