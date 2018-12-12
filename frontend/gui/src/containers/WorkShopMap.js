// TODO: grab a list component from antd, for general design guideline for the project, please refer to UserDetailView.js
// for axios calls, the path is 'http://127.0.0.1:8000/api/workshop' for list, 'http://127.0.0.1:8000/api/workshop/detail/' + ws_id for detail, 'http://127.0.0.1:8000/api/workshop/create' for creating workshop.
// in this file, implment list view exclusively.
// for Detail, please create a seperate component, aka WorkshopDetailView.js in similar manner.

//New TODO Nov/14/2018
//TODO: ADD a post request to DataBase, so user could see all nearby event.
// location could be store in two Double 1. latitude  2. longitude
// Need to use post request to get those data from database.
//Please see <MarkerWithLabel> for detail on how add label
//
//



import React from 'react';
import axios from 'axios';
import { Map, InfoWindow, GoogleApiWrapper, Marker} from 'google-maps-react';
import { Row, Col, Card, Icon,Button } from 'antd';
import { NavLink } from 'react-router-dom';



const closeStyle = {
    position: 'fixed',
    top: 160,
    right: 95
}


class WorkShopMap extends React.Component {

    state = {
        workshops: [],
        lats: [],
        lons: [],
    }
    onMarkerClick(){

    }
    componentDidMount() {
       axios.get('http://127.0.0.1:8000/api/workshop/?is_active=true')
            .then(res => {
                this.setState({ workshops: res.data });
                for(var i = 0; i < this.state.workshops.length; i++){
                    let lat = this.state.workshops[i].latitude;
                    let lon = this.state.workshops[i].longitude;
                    this.setState({
                        lats: this.state.lats.concat(lat),
                        lons: this.state.lons.concat(lon)
                    })
                }
            })
            .catch(err => console.log(err));
    }
    render() {
      const style = {
        width: '100vw',
        height: '100vh'
      }
      let locs = [];
      console.log(this.state.workshops.length)
      for (let i = 0; i < this.state.workshops.length; i++) {
        console.log(this.state.workshops[i].latitude);
        locs.push(
          <Marker
            onClick = { this.onMarkerClick }
            title = { this.state.workshops[i].ws_name }
            position = {{ lat: this.state.workshops[i].latitude, lng: this.state.workshops[i].longitude }}
            key = { this.state.workshops[i].ws_id }
          />
        )
      }
      return (

        <Row>

          <Row>
          <Col span={8}>

              <h2> Workshop Map</h2>

          </Col>

          <Col span={4} offset={11}>
              <NavLink to="/workshop/">
                  <Button type="primary">
                    <Icon type="arrow-right" theme="outlined" />
                      To List View
                  </Button>
                </NavLink>
          </Col>

          </Row>
            <div style={style}>

                <Map google={this.props.google}
                    zoom={14}
                    style={{width: "90%",
                            height: "90%"}}
                    initialCenter={{
                        lat: 43.073051,
                        lng: -89.401230
                    }}
                    >
                        {locs}
                </Map>
            </div>

        </Row>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDSDo23qnbXL_JeeM9LCIhYh2fUwNRTA_4')
  })(WorkShopMap);
