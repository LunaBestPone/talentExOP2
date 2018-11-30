

import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Card, List, Icon, Button, Row, Col, Collapse } from 'antd';

import Workshop from '../components/Workshop';


const tabListNoTitle = [{
  key: 'hosting',
  tab: 'Hosting Workshops',
}, {
  key: 'participating',
  tab: 'Participating Workshops',
}];


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
      noTitleKey:'hosting',
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
      axios.get('http://127.0.0.1:8000/api/user/?enrollment' + "=" + this.props.user)
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

    onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  }

  render() {

    const user_id = this.props.user;
    console.log("render");

    const contentListNoTitle = {
      hosting: <p>

          <Row gutter={16}>
            <Col span={7} offset={1}>
              <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={this.state.hostWorkshops}
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
      
            </p>,

      participating: <p>
          <Row gutter={16}>
          <Col span={7} offset={1}>
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={this.state.enrolledWorkshops}
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

      </p>,
      //project: <p>project content</p>,
    };

    

    return (

      <div>

        <h1>My Workshops</h1>
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
        >
          {contentListNoTitle[this.state.noTitleKey]}

        </Card>
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
