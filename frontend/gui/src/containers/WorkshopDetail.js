// TODO: grab a list component from antd, for general design guideline for the project, please refer to UserDetailView.js
// for axios calls, the path is 'http://127.0.0.1:8000/api/workshop' for list, 'http://127.0.0.1:8000/api/workshop/detail/' + ws_id for detail, 'http://127.0.0.1:8000/api/workshop/create' for creating workshop.
// in this file, implment list view exclusively.
// for Detail, please create a seperate component, aka WorkshopDetailView.js in similar manner.

import React from 'react';
import axios from 'axios';
import { NavLink  } from 'react-router-dom';
import { connect } from 'react-redux';

// import Workshop from '../components/Workshop';

import { Button, Card, Row, Col } from 'antd';
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
      isRegistered: false,
      enrollment: 0,
      user:{}
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateWorkshopState = this.updateWorkshopState.bind(this);
    this.saveWorkshop = this.saveWorkshop.bind(this);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  updateWorkshopState(event) {
    const field = event.target.name;
    const workshop = this.state.workshop;
    workshop[field] = event.target.value;
    return this.setState({workshop: workshop});
  }

  saveWorkshop(event) {
    event.preventDefault();

    return axios.patch('http://127.0.0.1:8000/api/workshop/detail/' + this.state.workshop.ws_id  + '/update/', {
        ws_name: this.state.workshop.ws_name,
        min_cap: this.state.workshop.min_cap,
        max_cap: this.state.workshop.max_cap,
        description: this.state.workshop.description,
        //start_date_time: this.state.workshop.start_date_time,
        //end_date_time: this.state.workshop.end_date_time,
        category: this.state.workshop.category,
        // location: null,
      }).then(res => {
        console.log(res);
        console.log(res.data);
        window.alert("success")
        this.toggleEdit()
      }).catch(err => {
        window.alert("didn't work")
        console.log(err)
      })

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
    if (this.state.user.learning_credit > 1 && this.state.isRegistered === false){
      var d = new Date();
      axios.post('http://127.0.0.1:8000/api/enrollment/create/', {
        enroll_date_time: d.toISOString(),
        ws_id: this.state.workshop.ws_id,
        enrolled_user: this.state.user.id
      })
        .then(res => {
          var url = 'http://127.0.0.1:8000/api/user/' + this.state.user.id + '/updatelc'
          var newLearningCredits = this.state.user.learning_credit - 1
          axios.patch(url, {
            learning_credit: newLearningCredits
          })
            .then(res => {
              console.log(res.data);
              }).catch(err => {
                  console.log(err)
                  })
          this.setState({isRegistered: true});
          window.alert("This workshop is added to your schedule!");
      }).catch(err => {
        console.log(err);
        window.alert("Oops something went wrong~ You can't register for the same workshop twice. And makesure you are logged in~");
      });
    }
    else{
      window.alert("Oops,you don't have enough learning credits. Host more workshops to earn more!");
    }
  }

  onCancelRegistrationClick = (e) => {
    const enrollmentUrl = 'http://127.0.0.1:8000/api/enrollment/?ws_id=' + this.state.workshop.ws_id + '&enrolled_user=' + this.state.user.id
    axios.get(enrollmentUrl)
      .then(res => {
        this.setState({enrollment: res.data[1]});
        var deleteurl = 'http://127.0.0.1:8000/api/enrollment/detail/' + this.state.enrollment.id + '/delete'
        axios.delete(deleteurl, {id: this.state.enrollment.id})
        .then(res => {
          console.log(res.data);
          }).catch(err => {
              console.log(err)
              })
      })
      .catch(err => console.log(err))

    var url = 'http://127.0.0.1:8000/api/user/' + this.state.user.id + '/updatelc'
    var newLearningCredits = this.state.user.learning_credit + 1
    axios.patch(url, {
      learning_credit: newLearningCredits
    })
      .then(res => {
        console.log(res.data);
        }).catch(err => {
            console.log(err)
            })
    this.setState({isRegistered: false});
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
        if(this.props.user != null){
          axios.get('http://127.0.0.1:8000/api/user/' + this.props.user)
            .then(res => {
              this.setState({user: res.data});
            })
            .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const isLoggedIn = this.props.isAuthenticated;
    const isRegistered = this.state.isRegistered;
    const user_id = this.props.user;
    let registerbutton;
    let editbutton;
    let cancelregistrationbutton;

    if (this.state.isEditing) {
      return (
      <div style = {{width: '100%'}}>
        <h1>Edit Workshop</h1>
        <WSForm
          workshop={this.state.workshop}
          onSave={this.saveWorkshop}
          onChange={this.updateWorkshopState}
          onCancel={this.toggleEdit}/>
      </div>
      )
    }

    //Display register button if the user is logged in
    if(isLoggedIn && !isRegistered){
      registerbutton = <Button style={{padding: '5px'}} onClick={(e) => {this.onRegisterClick(e)}}>
        Register
      </Button>
    }

    if(isRegistered){
      cancelregistrationbutton = <Button  style={{padding: '5px'}} onClick={(e) => {this.onCancelRegistrationClick(e)}}>
        Cancel Registration
      </Button>
    }

    //Display edit button if the user's id matches the workshop host id
    if(user_id == this.state.workshop.host_user){
      editbutton = <Button onClick = {this.toggleEdit}>Edit</Button>
    }
    return (
        <Row gutter={14}>
        <Col span={10} offset={7}>
          <Card title={this.state.workshop.ws_name}>
          <div className = 'host_user'>
            Host: {this.state.workshop.host_username}
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
            Start Date: {this.state.workshop.start_time_display}
          </div>
          <div className = 'end_date_time'>
            End Date: {this.state.workshop.end_time_display}
          </div><br></br>

        {/*
         <div style = {{float: 'left'}}>
          <button onClick={(e) => {this.onWishlistClick(e)}}>
             Add to wishlist
           </button>
        </div>
        */}
      </Card>

      <div style = {{float: 'left', padding: '5px'}} >
          <NavLink
            style={{padding: '5px'}}
            to='/workshop/'>
            Close
          </NavLink>
          {registerbutton}
          {editbutton}
          {cancelregistrationbutton}
        </div>
      </Col>
      </Row>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    user: state.user
  }
}


export default connect(mapStateToProps)(WorkshopDetail);
