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
import Workshop from '../components/Workshop';



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
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
      });
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null,
        })
      }
    };
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
            ws_id = {this.state.workshops[i].ws_id}
            ws_name = {this.state.workshops[i].ws_name}
            host_user = {this.state.workshops[i].host_user}
            category = {this.state.workshops[i].category}
            min_cap = {this.state.workshops[i].min_cap}
            max_cap = {this.state.workshops[i].max_cap}
            is_active = {this.state.workshops[i].is_active}
            description = {this.state.workshops[i].description}
            start_time_display = {this.state.workshops[i].start_time_display}
            end_time_display = {this.state.workshops[i].end_time_display}
            is_detailed = {false}
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
                    className='googleMap'
                    zoom={14}
                    style={{width: "90%",
                            height: "90%"}}
                    initialCenter={{
                        lat: 43.073051,
                        lng: -89.401230
                    }}
                    >
                        {locs}
                        <InfoWindow
                          marker={this.state.activeMarker}
                          visible={this.state.showingInfoWindow}>
                            <Workshop
                              ws_id={this.state.selectedPlace.ws_id}
                              ws_name={this.state.selectedPlace.ws_name}
                              host_user={this.state.selectedPlace.host_user}
                              category={this.state.selectedPlace.category}
                              min_cap={this.state.selectedPlace.min_cap}
                              max_cap={this.state.selectedPlace.max_cap}
                              is_active={this.state.selectedPlace.is_active}
                              description={this.state.selectedPlace.description}
                              start_time_display={this.state.selectedPlace.start_time_display}
                              end_time_display={this.state.selectedPlace.end_time_display}
                              is_detailed={false} />
                        </InfoWindow>
                </Map>
            </div>

        </Row>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCpsrhTt2NeVN3ktdCD3KMZX6PAKQ5RAbk')
  })(WorkShopMap);
