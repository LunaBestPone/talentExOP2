// TODO: grab a list component from antd, for general design guideline for the project, please refer to UserDetailView.js
// for axios calls, the path is 'http://127.0.0.1:8000/api/workshop' for list, 'http://127.0.0.1:8000/api/workshop/detail/' + ws_id for detail, 'http://127.0.0.1:8000/api/workshop/create' for creating workshop.
// in this file, implment list view exclusively.
// for Detail, please create a seperate component, aka WorkshopDetailView.js in similar manner.

import React from 'react';
import axios from 'axios';
import { NavLink  } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// import Workshop from '../components/Workshop';

import { Button, Card, Row, Col } from 'antd';
import WSForm from '../components/WSForm';
import Rate from '../components/Rate';

const closeStyle = {
  position: 'fixed',
  top: 160,
  right: 95
}

var recipientName;
var recipientEmail;
var msg;
var subject;

class WorkshopDetail extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      workshop: {},
      isRegistered: false,
      enrollment: 0,
      enrolled: {},
      enrolled_users: [],
      enrolled_users_name: [],
      user:{},
      lc: 0,
      host_lc: 0,
      currentUser: "",
      host: "",
      user2id: [],
      date: "",
      rated: true,
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
  handleSubject = (value) => {
    const workshop = this.state.workshop;
    // console.log("cat: " + value);
    workshop["category"] = value;
    return this.setState({
      workshop: workshop
    })
  }
  handleTime = (value) => {
    const workshop = this.state.workshop;
    const field1 ="startDate";
    const field2 ="endDate";
    const startDateTime = value[0].toISOString();
    const endDateTime = value[1].toISOString();

    workshop[field1] = startDateTime;
    workshop[field2] = endDateTime;
    return this.setState({
      workshop: workshop
    })
  }
  saveWorkshop(event) {
    event.preventDefault();

    return axios.patch('http://127.0.0.1:8000/api/workshop/detail/' + this.state.workshop.ws_id  + '/update/', {
        ws_name: this.state.workshop.ws_name,
        min_cap: this.state.workshop.min_cap,
        max_cap: this.state.workshop.max_cap,
        description: this.state.workshop.description,
        start_date_time: this.state.workshop.startDate,
        end_date_time: this.state.workshop.endDate,
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

  updateLearningCredits(user_id, delta){
    var url = 'http://127.0.0.1:8000/api/user/' + user_id + '/updatelc'
    var lc;
    axios.get('http://127.0.0.1:8000/api/user/' + user_id + '/')
      .then(
        res => {
          lc = res.data.learning_credit + delta;
          console.log(lc)
          axios.patch(url, {
            learning_credit: lc
          })
            .then(res => {
              console.log(res.data);
            }).catch(err => {console.log(err)})
      }).catch(err => console.log(err));
  }

  deleteEnrollment(enrollmentUrl){
    axios.get(enrollmentUrl)
      .then(res => {
        console.log(res.data[0])
        var deleteurl = 'http://127.0.0.1:8000/api/enrollment/detail/' + res.data[0].id + '/delete/'
        axios.delete(deleteurl, {id: this.state.enrollment.id})
        .then(res => {
          console.log(res.data);
          console.log("Deleted enrollment record")
          }).catch(err => {
              console.log(err)
              })
      })
      .catch(err => console.log(err))
  }

  onDeleteClick = (e) => {
    const enrollmentListUrl = 'http://127.0.0.1:8000/api/enrollment/?ws_id=' + this.state.workshop.ws_id
    var enrollmentList;
    var restoredHostLearningCredits;

    axios.get(enrollmentListUrl)
      .then(res => {
        enrollmentList = res.data;
        //Update workshop host learning credits
        this.updateLearningCredits(this.state.workshop.host_user, -Object.keys(enrollmentList).length)
        //Iteratively delete all enrollment records and restore learning credits
        for (let indx = 0; indx < Object.keys(enrollmentList).length; indx++){
          var id = enrollmentList[indx].enrolled_user
          this.updateLearningCredits(id, 1)
          var enrollmentUrl = 'http://127.0.0.1:8000/api/enrollment/?ws_id=' + this.state.workshop.ws_id + '&enrolled_user=' + id
          console.log(enrollmentUrl)
          this.deleteEnrollment(enrollmentUrl)
        }
      })
      .catch(err => {
        console.log(err)
      })

    this.setState({ workshop: { ...this.state.workshop, is_active: false} });
    axios.patch('http://127.0.0.1:8000/api/workshop/detail/' + this.state.workshop.ws_id  + '/update/', {
        is_active: false,
      }).then(res => {
        console.log(res);
        console.log(res.data);
        window.location.reload();
        window.alert("This workshop is deleted.")
      }).catch(err => {
        console.log(err)
      })



    //Update workshop host learning credits
    //console.log(this.state.host_lc)
    //newHostLearningCredits = this.state.host_lc - Object.keys(enrollmentList).length;
    //console.log(newHostLearningCredits);
    //this.updateLearningCredits(this.state.workshop.host_user, newHostLearningCredits)
    // axios.patch('http://127.0.0.1:8000/api/workshop/detail/' + this.state.workshop.ws_id  + '/update/', {
    //     is_active: false,
    //   }).then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //     window.location.reload();
    //     //Update workshophost learning credits
    //     //var newHostLearningCredits = this.state.host_lc - Object.keys(enrollmentList).length
    //     //this.updateLearningCredits(this.state.workshop.host_user, newHostLearningCredits)
    //     window.alert("This workshop is deleted.")
    //   }).catch(err => {
    //     console.log(err)
    //   })
    //this.setState({ workshop: { ...this.state.workshop, is_active: false} });

  }

  onRegisterClick = (e) => {

    if (this.state.user.learning_credit > 0 && this.state.isRegistered === false){
      var d = new Date();
      axios.post('http://127.0.0.1:8000/api/enrollment/create/', {
        enroll_date_time: d.toISOString(),
        ws_id: this.state.workshop.ws_id,
        enrolled_user: this.state.user.id})
        .then(res => {
          this.updateLearningCredits(this.state.workshop.host_user, +1)
          this.updateLearningCredits(this.state.user.id, -1)
          this.setState({isRegistered: true});
          subject = "Workshop Registration Confirmation"
          msg = "Hi " + recipientName + ", workshop named as " + this.state.workshop.ws_name + " is added to your schedule."
          axios.post('/api/email', {recipientName, recipientEmail, subject, msg})
          window.alert("This workshop is added to your schedule!")})
       .catch(err => {
          console.log(err);
          window.alert("Oops, You can't register for the same workshop twice.");
      });
    }
    else{
      window.alert("Oops,you don't have enough learning credits. Host more workshops to earn more!");
    }
  }

  onCancelRegistrationClick = (e) => {
    const enrollmentUrl = 'http://127.0.0.1:8000/api/enrollment/?ws_id=' + this.state.workshop.ws_id + '&enrolled_user=' + this.state.user.id
    this.deleteEnrollment(enrollmentUrl);
    this.updateLearningCredits(this.state.workshop.host_user, -1)
    this.updateLearningCredits(this.state.user.id, +1)
    this.setState({isRegistered: false});
  }

  componentDidMount() {
    let workshop_id = this.props.match.params.ws_id;
    axios.get('http://127.0.0.1:8000/api/workshop/detail/' + workshop_id)
      .then(res => {
        this.setState({
          workshop: res.data,
          host: res.data.host_username,
          enrolled_users: this.state.enrolled_users.concat(res.data.host_user),
        });
        /*
        const user_id = res.data.host_user;
        axios.get('http://127.0.0.1:8000/api/user/' + user_id)
          .then(resFuser => this.setState({host: resFuser.data}))
          .catch(err => console.log(err));
          */
         // enrolled_users_name: this.state.enrolled_users_name.concat(res.data[i].host_user)

        axios.get('http://127.0.0.1:8000/api/enrollment/?ws_id'  + "=" + workshop_id)
          .then(res2 => {
            for(let i = 0; i < res2.data.length; i++){
              if(this.state.enrolled[i].enrolled_user == this.props.user){
                this.setState({
                  isRegistered: true
                })
              }
              this.setState({
                enrolled_users: this.state.enrolled_users.concat(res2.data[i].enrolled_user),
                
              })
            }
            console.log(this.state.enrolled_users)
            for(let i = 0; i < this.state.enrolled_users.length; i++){
              console.log(this.state.enrolled_users[i])
              axios.get('http://127.0.0.1:8000/api/user/' + this.state.enrolled_users[i] +"/").then(res => {
                var x = {user: res.data.username, id: res.data.id}
                console.log("x: " + x)
                this.setState({
                  user2id: this.state.user2id.concat(x),
                  enrolled_users_name: this.state.enrolled_users_name.concat(res.data.username)
                 })
              }).catch(err => console.log(err))
            }
            console.log(this.state.user2id);
          }
          ).catch(err => console.log(err))
        if(this.props.user != null){
          axios.get('http://127.0.0.1:8000/api/user/' + this.props.user)
            .then(res => {
              this.setState({user: res.data, currentUser: res.data.username});
              console.log(this.state.currentUser)
              recipientName = this.state.user.username;
              recipientEmail = this.state.user.email;
              axios.get('http://127.0.0.1:8000/api/enrollment/?enrolled_user'  + "=" + this.props.user)
                .then(res =>{
                  this.setState({enrolled: res.data})
                  console.log(res.data);
                  for(let i = 0; i < res.data.length; i++){
                    if(this.state.enrolled[i].enrolled_user == this.props.user){
                      // this.setState({
                      //   isRegistered: true
                      // })
                    }
                  }
                  console.log(this.state.enrolled_users);
                  axios.get('http://127.0.0.1:8000/api/enrollment/?ws_id=' + workshop_id + '&enrolled_user=' + this.props.user).then(res => {
                    if(res.data[0] != undefined){
                      this.setState({
                        rated: res.data[0].is_rated
                      })
                    }
                  })
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err));

  }

  render() {
    const isLoggedIn = this.props.isAuthenticated;
    const isRegistered = this.state.isRegistered;
    const enrolled_users = this.state.enrolled_users;
    const user_id = this.props.user;
    const rating = {
      pathname: '/rate/',
      param1 : user_id,
      param2 : this.state.currentUser,
      param3 : this.state.workshop.host_username,
      param4 : this.state.workshop.ws_id
    }
    let registerbutton;
    let editbutton;
    let cancelregistrationbutton;
    let rateButton;
    let current = new Date().getTime();
    let wsTime = new Date (this.state.workshop.end_date_time).getTime();
    let active = (current < wsTime ? false : true);
    let deletebutton;
    if (this.state.isEditing) {
      return (
      <div style = {{width: '100%'}}>
        <h1>Edit Workshop</h1>
        <WSForm
          workshop={this.state.workshop}
          onSave={this.saveWorkshop}
          onChange={this.updateWorkshopState}
          handleSubject={this.handleSubject}
          handleTime={this.handleTime}
          onCancel={this.toggleEdit}/>
      </div>
      )
    }

    //Display register button if the user is logged in
    if(isLoggedIn && !isRegistered && (user_id != this.state.workshop.host_user) && !active){
      registerbutton = <Button className = "registerButton" style={{padding: '5px'}} onClick={(e) => {this.onRegisterClick(e)}}>
        Register
      </Button>
    }

if(isRegistered && (user_id != this.state.workshop.host_user ) && !active){
      cancelregistrationbutton = <Button className = "cancelRegButton" style={{padding: '5px'}} onClick={(e) => {this.onCancelRegistrationClick(e)}}>
        Cancel Registration
      </Button>
    }

    //Display edit button if the user's id matches the workshop host id
    if(user_id == this.state.workshop.host_user){
      editbutton = <Button onClick = {this.toggleEdit}>Edit</Button>
      deletebutton = <Button className = "deleteRegButton" onClick = {this.onDeleteClick}>
                        <Link to="/workshop/">
                         Delete
                        </Link>
                       </Button>
    }
    //has to be !is_active but is_active is not changed yet. (active = workshop's not in the past, is_active = db)
    if((user_id == this.state.workshop.host_user || enrolled_users.includes(parseInt(user_id))) && active){
      console.log(this.state.enrolled_users, this.state.enrolled_users_name)
      if(this.state.workshop.is_active && !this.state.rated){ //if rated = false -> haven't rated
        rateButton = <Button><Link to = {rating} >Rate</Link></Button>
      }
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
          {rateButton}
          {deletebutton}
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
