// TODO: grab a list component from antd, for general design guideline for the project, please refer to UserDetailView.js
// for axios calls, the path is 'http://127.0.0.1:8000/api/workshop' for list, 'http://127.0.0.1:8000/api/workshop/detail/' + ws_id for detail, 'http://127.0.0.1:8000/api/workshop/create' for creating workshop.
// in this file, implment list view exclusively.
// for Detail, please create a seperate component, aka WorkshopDetailView.js in similar manner.

import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { List, Icon, Button, Row, Col, Collapse } from 'antd';

import Workshop from '../components/Workshop';
import Sort from '../containers/Sort';

const Panel = Collapse.Panel;
const stylebutton = {
  position: 'fixed',
}

class WorkshopListView extends React.Component{

  state = {
    workshops: [],
    subjects: ["Any"]
  }


  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/workshop/')
      .then(res => {
        this.setState({
            workshops: res.data,
        });
        console.log(this.state.workshops.length);
        for(var i = 0; i < this.state.workshops.length; i++){
          let sub = this.state.workshops[i].category;
          if(!this.state.subjects.includes(sub)){
            this.setState({
              subjects: this.state.subjects.concat(sub)
            })
          }
        }
      })
      
  }
  render() {
    return (
      <div>
        <h1>Workshop Lists</h1>
        <Row gutter={16}>
          <Col span={7}>
          {/* This is for sorting UI */}
          <Collapse accordion>
            <Panel header="Sort/Filter" key="1">
              <Sort subjects={this.state.subjects}/>
            </Panel>
          </Collapse>
          </Col>
          <Col span={7} offset={1}>
          <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={this.state.workshops}
              renderItem={item => (
                <List.Item>
                  <Workshop
                    ws_id = {item.ws_id}
                    ws_name = {item.ws_name}
                    host_user = {item.host_user}
                    category = {item.category}
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
          </Col>
          <Col span={7} offset={15} style={stylebutton}> 
          {/* <div style = > */}
            <NavLink to="/createws/">
              <Button>
                <Icon type="plus" theme="outlined" />
                  Create Workshop
              </Button>
            </NavLink>
          {/* </div> */}
          
          </Col>
        </Row>
      </div>
    )
  }
}

export default WorkshopListView;
