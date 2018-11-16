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

//import Marker from "react-google-maps";


// const Marker = ({ text }) => (
//     <div style={{
//         color: '#ffccb3',
//         background: 'grey',
//         padding: '15px 10px',
//         display: 'inline-flex',
//         textAlign: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: '100%',
//         transform: 'translate(-50%, -50%)'
//     }}>
//         {text}
//     </div>
// );

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
    }
    render() {
        return (
            <div>
                <Map google={this.props.google} 
                    zoom={14}
                    style={{width: "90%"}}
                    initialCenter={{
                        lat: 43.073051,
                        lng: -89.401230
                      }}
                      Center={{
                        lat: 43.073051,
                        lng: -89.401230
                      }}
                    >
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />
                    <InfoWindow onClose={this.onInfoWindowClose}>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyD7TTkay4sQGPFiSeGmJD7wJD-az5-sav8')
  })(WorkShopMap);
