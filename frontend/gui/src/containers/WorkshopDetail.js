// TODO: grab a list component from antd, for general design guideline for the project, please refer to UserDetailView.js
// for axios calls, the path is 'http://127.0.0.1:8000/api/workshop' for list, 'http://127.0.0.1:8000/api/workshop/detail/' + ws_id for detail, 'http://127.0.0.1:8000/api/workshop/create' for creating workshop.
// in this file, implment list view exclusively.
// for Detail, please create a seperate component, aka WorkshopDetailView.js in similar manner.

import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

// import Workshop from '../components/Workshop';

import { Button, Card, Icon } from 'antd';
import WSForm from '../components/WSForm';

const closeStyle = {
  position: 'fixed',
  top: 160,
  right: 95
}

class WorkshopDetail extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      workshop: {},
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateWorkshopState = this.updateWorkshopState.bind(this);
    this.saveWorkshop = this.saveWorkshop.bind(this);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workshop.ws_id != nextProps.workshop.ws_id) {
      this.setState({workshop: nextProps.workshop});
    }
  }

  updateWorkshopState(event) {
    const field = event.target.name;
    const workshop = this.state.cat;
    workshop[field] = event.target.value;
    return this.setState({workshop: workshop});
  }
  
  saveWorkshop(event) {
    event.preventDefault();
    //this.props.actions.updateWorkshop(this.state.workshop);
    window.alert('TODO')
    this.toggleEdit()
  }

 // state = {
 //   workshop: {},
 //   user:{}, //this is the user visiting the website

//    wishlist: false,
//  }

  // onWishlistClick = (e) => {
  //   if(this.state.wishlist == false){
  //     this.setState({
  //       wishlist: true
  //     })
  //     window.alert("This workshop is added to your wishlist!");
  //   }
  // }

  onRegisterClick = (e) => {
//    console.log(localStorage.getItem('username'));
//    axios.get('http://127.0.0.1:8000/api/rest-auth/user/' + localStorage.getItem('username'))
//      .then(res => {
//        const loggedinuserid = res.data.pk;
    if (this.state.user.learning_credit > 1){
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
          var url = 'http://127.0.0.1:8000/api/user/' + 1 + '/updatelc'
          console.log(url)
          var newLearningCredits = this.state.user.learning_credit - 1
          axios.patch(url, {
            learning_credit: newLearningCredits
          })
            .then(res => {
              console.log(res.data);
              }).catch(err => {
                  console.log(err)
                  })
          window.alert("This workshop is added to your schedule!");
      }).catch(err => {
        console.log(err);
        window.alert("Oops something went wrong~ You can't register for the same workshop twice. And makesure you are logged in~");
      });
    }
    else{
      window.alert("Oops,you don't have enough learning credits.Host more workshops to earn more!");
    }
  }

  componentDidMount() {
    let workshop_id = this.props.match.params.ws_id;
    axios.get('http://127.0.0.1:8000/api/workshop/detail/' + workshop_id)
      .then(res => {
        this.setState({workshop: res.data});
        /*
        const user_id = res.data.host_user;
        axios.get('http://127.0.0.1:8000/api/user/' + user_id)
          .then(resFuser => this.setState({host: resFuser.data}))
          .catch(err => console.log(err));
          */
      })
      .catch(err => console.log(err));

    //Need to have this retrived from this.props
    let user_id = 1;
    axios.get('http://127.0.0.1:8000/api/user/' + user_id)
      .then(res => {
        this.setState({user: res.data});
      })
      .catch(err => console.log(err))
  }
  render() {

    if (this.state.isEditing) {
      return (
      <div style = {{width: '100%'}}> 
        <h1>edit workshop</h1>
        <WSForm 
          workshop={this.state.workshop} 
          onSave={this.saveWorkshop} 
          onChange={this.updateWorkshopState}/> 
      </div>
      )
    }

    return (
        <Card title={this.state.workshop.ws_name}>

        <div style = {{float: 'right'}}>
          <NavLink
            style={{padding: '5px'}}
            to='/workshop/'> 
            Cancel
          </NavLink>
          <Button onClick={(e) => {this.onRegisterClick(e)}}>
            Register
          </Button>
          <Button onClick = {this.toggleEdit}>Edit</Button>
        </div>

        <div className = 'host_user'>
          Host: {this.state.workshop.host_user}
        </div>
        <div className = 'category'>
          Subject: {this.state.workshop.category}
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
      </Card>
    )
  }
}

export default WorkshopDetail;
