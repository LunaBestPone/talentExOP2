// TODO: grab a list component from antd, for general design guideline for the project, please refer to UserDetailView.js
// for axios calls, the path is 'http://127.0.0.1:8000/api/workshop' for list, 'http://127.0.0.1:8000/api/workshop/detail/' + ws_id for detail, 'http://127.0.0.1:8000/api/workshop/create' for creating workshop.
// in this file, implment list view exclusively.
// for Detail, please create a seperate component, aka WorkshopDetailView.js in similar manner.

import React from 'react';
import axios from 'axios';

// import Workshop from '../components/Workshop';

import { Card, Icon } from 'antd';

const closeStyle = {
  position: 'fixed',
  top: 160,
  right: 95
}

class WorkshopDetail extends React.Component{

  state = {
    workshop: {},
    host:{},
//    wishlist: false,
  }

  // onWishlistClick = (e) => {
  //   if(this.state.wishlist == false){
  //     this.setState({
  //       wishlist: true
  //     })
  //     window.alert("This workshop is added to your wishlist!");
  //   }
  // }

  onRegisterClick = (e) => {
      var d = new Date();
      this.setState({
        registered: true
      });
      axios.post('http://127.0.0.1:8000/api/enrollment/create/', {
        enroll_date_time: d.toISOString(),
        ws_id: this.state.workshop.ws_id,
        enrolled_user: this.state.user_id
      })
        .then(res => {
        console.log(res.data);
        window.alert("This workshop is added to your schedule!");
      }).catch(err => {
        console.log(err);
        window.alert("Oops something went wrong~ Make sure you are logged in. And you can't register for the same workshop twice.");
      });
  }

  componentDidMount() {
    let workshop_id = this.props.match.params.ws_id;
    axios.get('http://127.0.0.1:8000/api/workshop/detail/' + workshop_id)
      .then(res => {
        this.setState({workshop: res.data});
        const user_id = res.data.host_user;
        axios.get('http://127.0.0.1:8000/api/user/' + user_id)
          .then(resFuser => this.setState({host: resFuser.data}))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
        <Card title={this.state.workshop.ws_name}>
        <div className = 'host_user'>
          Host: {this.state.host.username}
        </div>
        <div className = 'min_cap'>
          Minimum Capacity: {this.state.workshop.min_cap}
        </div>
        <div className = 'max_cap'>
          Maximum Capacity: {this.state.workshop.max_cap}
        </div>
        <div className = 'is_active'>
          Active?: {this.state.workshop.is_active ? 'Yes' : 'No'}
        </div>
        <div className = 'description'>
          Description: {this.state.workshop.description}
        </div>
        <div className = 'start_date_time'>
          Start Date: {this.state.workshop.start_date_time}
        </div>
        <div className = 'end_date_time'>
          End Date: {this.state.workshop.end_date_time}
        </div><br></br>
        {/*
         <div style = {{float: 'left'}}>
          <button onClick={(e) => {this.onWishlistClick(e)}}>
             Add to wishlist
           </button>
        </div>
        */}
        <div style = {{float: 'right'}}>
          <button onClick={(e) => {this.onRegisterClick(e)}}>
            Register
          </button>
        </div>
        <div style = {closeStyle}>
          <a href={'/workshop/'}>
            <Icon type="close" theme="outlined" />
          </a>
        </div>
      </Card>
    )
  }
}

export default WorkshopDetail;
