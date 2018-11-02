// TODO: grab a list component from antd, for general design guideline for the project, please refer to UserDetailView.js
// for axios calls, the path is 'http://127.0.0.1:8000/api/workshop' for list, 'http://127.0.0.1:8000/api/workshop/detail/' + ws_id for detail, 'http://127.0.0.1:8000/api/workshop/create' for creating workshop.
// in this file, implment list view exclusively.
// for Detail, please create a seperate component, aka WorkshopDetailView.js in similar manner.

import React from 'react';
import axios from 'axios';
import { Card, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

import Workshop from '../components/Workshop';

import { List } from 'antd';


const stylebutton = {
  position: 'fixed',
  top: 160,
  right: 100
}

class WorkshopListView extends React.Component{

  state = {
    workshops: {}
  }



  onRegisterClick = (e) => {
    if(this.state.registered == false){
      this.setState({
        registered: true
      })
      window.alert("This workshop is added to your schedule!")
    }
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
      <div>
        <h1>Workshop Lists</h1>
        {this.isAuthenticated &&
          <div style = {stylebutton}>
          <NavLink to="/createws/">
            <button onClick={(e) => {this.onRegisterClick(e)}}>
              <Icon type="plus" theme="outlined" />
                 Create Workshop
            </button>
          </NavLink>
          </div>
        }
        <List
          style={{width:'40%', right: '-30%'}}
          grid={{ gutter: 16, column: 1 }}
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
      </div>
    )
  }
}

export default WorkshopListView;
