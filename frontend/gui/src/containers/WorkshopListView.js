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
    filterSub: "-1",
    subjects: ["Any"],
    locations: ["Any"],
    first: true,
  }

  handleFilterChange = (value) => {
    let val = "=" + value.replace(" ", "+");
    if(val !== "=Any"){
      this.setState({
        filterSub: val
      })
    } else {
      // console.log("val: " + val);
      this.setState({
        filterSub: ""
      })
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/workshop/')
      .then(res => {
        this.setState({
            workshops: res.data,
        });
        // console.log(this.state.workshops);
        console.log("didmount");
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
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldcompupdate");
  //   let first = this.state.first;
  //   if(first){
  //     this.setState({
  //       first: !first
  //     })
  //   }
  //   return ((nextState !== this.state) || first);
  // }

  componentWillUpdate(nextProps, nextState) {
    // console.log("value = " + nextState.filterSub);
    console.log("willupdate");
    axios.get('http://127.0.0.1:8000/api/workshop/?category' + nextState.filterSub)
      .then(res => {
        this.setState({
            workshops: res.data,
        });
        // console.log("workshops"+nextState.workshops);
    }) 
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Workshop Lists  </h1> 
        <p><NavLink to="/workshopmap/">Click for Map View</NavLink></p>
        <Row gutter={16}>
          <Col span={7}>
          {/* This is for sorting UI */}
          <Collapse accordion>
            <Panel header="Sort/Filter" key="1">
              <Sort subjects={this.state.subjects} changeSub = {(val) => this.handleFilterChange(val)}/>
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
