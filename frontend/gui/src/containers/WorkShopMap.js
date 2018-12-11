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
import { Card, Icon } from 'antd';

const closeStyle = {
    position: 'fixed',
    top: 160,
    right: 95
}


class WorkShopMap extends React.Component {

    state = {
        workshop: [],
        locations: [],
    }
    onMarkerClick(){

    }
    componentDidMount() {
       axios.get('http://127.0.0.1:8000/api/workshop/')
            .then(res => {
                this.setState({ workshop: res.data });
                for(var i = 0; i < this.state.workshops.length; i++){
                    let loc = this.state.workshops[i].location;
                    if(!this.state.locations.includes(loc)){
                        this.setState({
                            locations: this.state.locations.concat(loc)
                        })
                    }
                }
            })
            .catch(err => console.log(err));
            /*
            const location = "437 N Frances Street, Madison, WI";
            axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA &key=AIzaSyDSDo23qnbXL_JeeM9LCIhYh2fUwNRTA_4')
                .then(res=>{
                    console.log(res.data)
                });
            */
    }
    render() {
      return (
            <div>
                <Map google={this.props.google}
                    zoom={14}
                    style={{width: "80%"}}
                    initialCenter={{
                        lat: 43.073051,
                        lng: -89.401230
                    }}
                    >
                        <Marker
                          onClick = { this.onMarkerClick }
                          title = { 'Changing Colors Garage' }
                          position = {{ lat: 43.078209, lng: -89.411185 }}

                        />

                        <Marker
                          onClick = { this.onMarkerClick }
                          title = { 'Changing Colors Garage' }
                          position = {{ lat: 43.074775, lng: -89.395588 }}

                        />

                        <Marker
                          onClick = { this.onMarkerClick }
                          title = { 'Changing Colors Garage' }
                          position = {{ lat: 43.078239, lng: -89.431189 }}

                        />



                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDSDo23qnbXL_JeeM9LCIhYh2fUwNRTA_4')
  })(WorkShopMap);
