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
import GoogleMapReact from 'google-map-react';
import { Card, Icon } from 'antd';

//import Marker from "react-google-maps";


const Marker = ({ text }) => (
    <div style={{
        color: '#ffccb3',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);

const closeStyle = {
    position: 'fixed',
    top: 160,
    right: 95
}

class WorkShopMap extends React.Component {

    state = {
        workshop: {},
        host: {},
    }


    onRegisterClick = (e) => {

        var d = new Date();
        this.setState({
            registered: true
        });
        axios.post('http://127.0.0.1:8000/api/enrollment/create/', {
            enroll_date_time: d.toISOString(),
            ws_id: this.state.workshop.ws_id,
            enrolled_user: 1,

        })
            .then(res => {
                console.log(res.data);
                window.alert("This workshop is added to your schedule!");
            }).catch(err => {
                console.log(err);
                window.alert("Oops something went wrong~ You can't register for the same workshop twice. And makesure you are logged in~");
            });
    }

    componentDidMount() {
        let workshop_id = this.props.match.params.ws_id;
        axios.get('http://127.0.0.1:8000/api/workshop/detail/' + workshop_id)
            .then(res => {
                this.setState({ workshop: res.data });
                const user_id = res.data.host_user;
                axios.get('http://127.0.0.1:8000/api/user/' + user_id)
                    .then(resFuser => this.setState({ host: resFuser.data }))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <Card title={this.state.workshop.ws_name}>
                <div className='host_user'>
                    Host: {this.state.host.username}
                </div>
                <div className='min_cap'>
                    Minimum Capacity: {this.state.workshop.min_cap}
                </div>
                <div className='max_cap'>
                    Maximum Capacity: {this.state.workshop.max_cap}
                </div>
                <div className='is_active'>
                    Active?: {this.state.workshop.is_active ? 'Yes' : 'No'}
                </div>
                <div className='description'>
                    Description: {this.state.workshop.description}
                </div>
                <div className='start_date_time'>
                    Start Date: {this.state.workshop.start_date_time}
                </div>
                <div className='end_date_time'>
                    End Date: {this.state.workshop.end_date_time}
                </div>

                <div style={{ height: '80vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key:'AIzaSyBut1PTcKfPOO_dEAKXZf9YsSMHqauyTtI'}}
                        defaultCenter={{ lat: 59.95, lng: 30.33 }}
                        defaultZoom = {11}
                    >
                    
                        <Marker
                            lat={59.955413}
                            lng={30.337844}
                            text={"Information about event Goes Here"}
                        >
                        </Marker>
                    </GoogleMapReact>
                </div>

                <br></br>
                
                <div style={{ float: 'right' }}>
                    <button onClick={(e) => { this.onRegisterClick(e) }}>
                        Register
          </button>
                </div>
                <div style={closeStyle}>
                    <a href={'/workshop/'}>
                        <Icon type="close" theme="outlined" />
                    </a>
                </div>
            </Card>
        )
    }
}

export default WorkShopMap;
