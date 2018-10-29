// TODO: grab a list component from antd, for general design guideline for the project, please refer to UserDetailView.js
// for axios calls, the path is 'http://127.0.0.1:8000/api/workshop' for list, 'http://127.0.0.1:8000/api/workshop/detail/' + ws_id for detail, 'http://127.0.0.1:8000/api/workshop/create' for creating workshop.
// in this file, implment list view exclusively.
// for Detail, please create a seperate component, aka WorkshopDetailView.js in similar manner.

import React from 'react';
import axios from 'axios';

import Workshop from '../components/Workshop';

import { List } from 'antd';

class WorkshopDetail extends React.Component{

  state = {
    workshops: {}
  }

  componentDidMount() {
    let workshop_name = this.props.match.params.ws_name;
    axios.get('http://127.0.0.1:8000/api/workshop/')
      .then(res => {
        this.setState({
            workshops: res.data
        });
      })
  }
  render() {
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
          dataSource={this.state.workshops}
          renderItem={item => (
            <List.Item>
              <Workshop
                ws_id = {item.ws_id}
                ws_name = {item.ws_name}
                host_user = {item.host_user}
                min_cap = {item.min_cap}
                max_cap = {item.max_cap}
                is_active = {item.is_active}
                description = {item.description}
                start_date_time = {item.start_date_time}
                end_date_time = {item.end_date_time}
                is_detailed = {false} />
            </List.Item>
          )}
        />
      
    )
  }
}

export default WorkshopDetail;
