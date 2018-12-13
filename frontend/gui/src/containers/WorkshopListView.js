// TODO: grab a list component from antd, for general design guideline for the project, please refer to UserDetailView.js
// for axios calls, the path is 'http://127.0.0.1:8000/api/workshop' for list, 'http://127.0.0.1:8000/api/workshop/detail/' + ws_id for detail, 'http://127.0.0.1:8000/api/workshop/create' for creating workshop.
// in this file, implment list view exclusively.
// for Detail, please create a seperate component, aka WorkshopDetailView.js in similar manner.
//: = %3A (for time filter)
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { List, Card, Icon, Button, Row, Col, Collapse } from 'antd';

import Workshop from '../components/Workshop';
import Sort from '../containers/Sort';
import WorkShopMap from '../containers/WorkShopMap';

const Panel = Collapse.Panel;
const stylebutton = {
  position: 'fixed',
}

class WorkshopListView extends React.Component{
  state = {
    workshops: [],
    filterSub: "-1",
    filterSTime: "",
    filterETime: "",
    subjects: ["Any"],
    locations: ["Any"],
    date:[],
    mapview: false,

  }

  handleFilterChange = (value) => {
    let val = "=" + value.replace(" ", "+");
    if(val !== "=Any"){
      this.setState({
        filterSub: val
      })
    } else {
      this.setState({
        filterSub: ""
      })
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/workshop/?is_active=true')
      .then(res => {
        this.setState({
            workshops: res.data,
        });
        for(var i = 0; i < this.state.workshops.length; i++){
          let sub = this.state.workshops[i].category;
          if(!this.state.subjects.includes(sub) && sub !== null){
            this.setState({
              subjects: this.state.subjects.concat(sub)
            })
          }
        }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("value = " + nextState.filterSub);
    if (prevState.filterSub !== this.state.filterSub) {
      axios.get('http://127.0.0.1:8000/api/workshop/?category' + this.state.filterSub +"&?is_active=true")
        .then(res => {
          this.setState({
              workshops: res.data,
          });
          // console.log("workshops"+nextState.workshops);
      })
    }
  }
  viewMap(){
    this.setState({mapview: !this.state.mapview});
  }
  toggleAscend = () => {
    var workshops = this.state.workshops;
    // console.log(workshops);
    workshops.sort(function(a,b) {
      return new Date(a.start_date_time).getTime() - new Date(b.start_date_time).getTime()
    });
    // console.log(workshops);
    this.setState({
      workshops: workshops
    })
  }
  toggleDescend = () => {
    var workshops = this.state.workshops;
    // console.log(workshops);
    workshops.sort(function(a,b) {
      return new Date(b.start_date_time).getTime() - new Date(a.start_date_time).getTime()
    });
    // console.log(workshops);
    this.setState({
      workshops: workshops
    })
  }
  handleRange = (value) => {
    const workshops = this.state.workshops;
    const startDateTime = value[0];
    const endDateTime = value[1];
    const match = [];
    for(let i = 0; i < workshops.length; i++){
      let workshoptime = new Date(workshops[i].start_date_time);
      if(workshoptime <= endDateTime){
        if(workshoptime >= startDateTime){
          match.push(workshops[i]);
        }
      }
    }
    return this.setState({
      workshops: match
    })
  }
  reset = () => {
    axios.get('http://127.0.0.1:8000/api/workshop/?is_active=true')
      .then(res => {
        return this.setState({
            workshops: res.data,
        });
      })
  }
  render() {
    return (


      
      <div>
        <Row gutter={16}>
          <Col span={6}>
            <h1>Workshop List</h1>
          </Col>
          <Col span={4} offset={9}>
            {
              this.props.isAuthenticated ?
              
                <NavLink to="/createws/">
                  <Button type="primary">
                    <Icon type="plus" theme="outlined" />
                      Create Workshop
                  </Button>
                </NavLink>
             
              :
              <Col span={7} offset={15} style={stylebutton} />
            }
          </Col>

          <Col span={5}>
              <NavLink to="/workshopmap/">
                  <Button type="primary">
                    <Icon type="arrow-right" theme="outlined" />
                      To Map View
                  </Button>
                </NavLink>
          </Col>
        </Row>


        <Row>
        </Row>

        <Row gutter={16}>
          <Col span={7}>
          
          <Collapse accordion>
            <Panel header="Sort/Filter" key="1">
              <Sort
                subjects={this.state.subjects}
                changeSub = {(val) => this.handleFilterChange(val)}
                ascend = {this.toggleAscend}
                descend = {this.toggleDescend}
                handleRange = {this.handleRange}
                reset = {this.reset}
              />
            </Panel>
          </Collapse>
          </Col>
          <Col span={14} offset={1}>
          <List
              grid={{ gutter: 16, column: 2 }}
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
                    start_time_display = {item.start_time_display}
                    end_time_display = {item.end_time_display}
                    is_detailed = {false} />
                </List.Item>
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


export default connect(mapStateToProps)(WorkshopListView);
