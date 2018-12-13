

import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavLink, withRouter } from 'react-router-dom';
import { Card, List, Icon, Button, Collapse } from 'antd';

import Workshop from '../components/Workshop';

import { Carousel, Grid,Jumbotron, Row, Col} from 'react-bootstrap';


const tabListNoTitle = [{
  key: 'hosting',
  tab: 'Hosting Workshops',
}, {
  key: 'participating',
  tab: 'Participating Workshops',
}];

class MyWorkshopList extends React.Component {


  constructor(props, context) {
    super(props, context);
    this.state = {
      hostWorkshops: [],
      enrolledWorkshops: [],
      //isRegistered: false,
      noTitleKey:'hosting',
      user: {},
      enrollment:[]
    };
  }



  componentDidMount() {

    if (this.props.isAuthenticated) {
      //workshops user is host of
      axios.get('http://127.0.0.1:8000/api/workshop/?host_user' + "=" + this.props.user + '&is_active=true')
        .then(res => {
          console.log(res.data)
          console.log("Can you see this 1?")

          this.setState({
            hostWorkshops: res.data,
          });

        })

      //workshops user is enrolled in
      axios.get('http://127.0.0.1:8000/api/enrollment/?enrolled_user' + "=" + this.props.user)
        .then(res => {
          console.log(res.data)
          console.log("Can you see this 2?")

          this.setState({
            enrollment: res.data,

          })
          for(var i = 0; i < res.data.length; i++){
            console.log(res.data[i])
            axios.get('http://127.0.0.1:8000/api/workshop/?ws_id' + '=' + res.data[i].ws_id + '&is_active=true')
              .then(res1 => {
                console.log(res1)
                console.log("Can you see this 3?")
                this.setState({
                  enrolledWorkshops: this.state.enrolledWorkshops.concat(res1.data),
                });

              })
          }
        })

//Current problem: when pass a specific ws_id (eg:1) the REST API returned all 3 workshops even those whose ws_id is not 1
//Could not filter





    }
    else {
      //event.preventDefault();
      window.alert("Log in before viewing your workshops.");
      // this.props.history.push("/login");
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
            <Col span={16} offset={4}>
              <List
                grid={{ gutter: 16, column: 4 }}
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
          <Col span={16} offset={4}>
            <List
              grid={{ gutter: 8, column: 1 }}
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


export default withRouter(connect(mapStateToProps)(MyWorkshopList));
