// TODO: grab a list component from antd, for general design guideline for the project, please refer to UserDetailView.js
// for axios calls, the path is 'http://127.0.0.1:8000/api/workshop' for list, 'http://127.0.0.1:8000/api/workshop/detail/' + ws_id for detail, 'http://127.0.0.1:8000/api/workshop/create' for creating workshop.
// in this file, implment list view exclusively.
// for Detail, please create a seperate component, aka WorkshopDetailView.js in similar manner.

import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { List, Icon, Button, Row, Col, Collapse } from 'antd';

import Workshop from '../components/Workshop';

const Panel = Collapse.Panel;
const stylebutton = {
  position: 'fixed',
}

class MyWorkshopList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hostWorkshops: [],
      enrolledWorkshops: [],
      //isRegistered: false,
      user: {}
    };
  }

  componentDidMount() {

    if (this.props.isAuthenticated) {
      //workshops user is host of
      axios.get('http://127.0.0.1:8000/api/workshop/?host_user' + "=" + this.props.user)
        .then(res => {
          this.setState({
            hostWorkshops: res.data,
          });

        })

      //workshops user is enrolled in
      axios.get('http://127.0.0.1:8000/api/user/?enrollment' + "=" + this.props.workshops)
        .then(res => {
          this.setState({
            enrolledWorkshops: res.data,
          })
        })
    }
    else {
      //event.preventDefault();
      window.alert("Log in before viewing your workshops.");
      this.props.history.push("/login");
    }
  }

  render() {
    const user_id = this.props.user;
    console.log("render");

    return (
      <div>
        <h1>My Workshops</h1>
        <p><NavLink to="/workshopmap/">Click for Map View</NavLink></p>
        <Row gutter={16}>
          <Col span={7} offset={1}>
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={this.state.workshops}
              renderItem={item => (
                //if(isRegistered ) {
                <List.Item>
                  <Workshop
                    ws_id={item.ws_id}
                    ws_name={item.ws_name}
                    host_user={item.host_user}
                    category={item.category}
                    min_cap={item.min_cap}
                    max_cap={item.max_cap}
                    is_active={item.is_active}
                    description={item.description}
                    start_time_display={item.start_time_display}
                    end_time_display={item.end_time_display}
                    is_detailed={false} />
                </List.Item>
                //}
              )}
            />
          </Col>
        </Row>
      </div>
    )

  }
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    user: state.user
  }
}


export default connect(mapStateToProps)(MyWorkshopList);
