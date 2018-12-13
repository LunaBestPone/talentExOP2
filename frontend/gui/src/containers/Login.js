
import React from 'react';
import { Form, Icon, Input, Button, Spin } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import Rate from '../components/Rate';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  state = {
    hostWorkshops: [],
    enrolledWorkshops: [],
    // user: ""
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.userName, values.password);
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps !== this.props || nextState !== this.state);
  }

  render() {
    if (this.props.token !== null) {
      // let noRate = true;
      // //Look at the workshops he/she particiapted and hosted and determine
      // //whether anyone of them are in the past.
      // //If yes, then is_active => false and ask to rate them.
      // axios.get('http://127.0.0.1:8000/api/workshop/?host_user' + "=" + this.props.user)
      //   .then(res => {
      //     console.log(res.data);
      //     for(let i = 0; i <res.data.length; i++){
      //       //host check
      //       if(res.data[i].host_user == this.props.user){
      //         //time check
      //         var current = new Date();
      //         var wsTime = new Date(res.data[i].end_date_time);
      //         if(current.getTime() > wsTime.getTime()){
      //           noRate = false;
      //           break;
      //         }
      //       }
      //     }
      //   })
      // //workshops user is enrolled in
      // axios.get('http://127.0.0.1:8000/api/enrollment/?enrolled_user' + "=" + this.props.user)
      //   .then(res => {
      //     for(let i = 0; i <res.data.length; i++){
      //       //time check
      //       var ws = res.data[i].ws_id;
      //       var current = new Date();
      //       var wsTime = new Date(res.data[i].end_date_time);
      //       if(current.getTime() > wsTime.getTime()){
      //         noRate = false;
      //         break;
      //       }
      //     }
      //   })
      // if(noRate)
      this.props.history.push("/workshop/");
    }
    const { getFieldDecorator } = this.props.form;
    let EM = null;
    if (this.props.error !== null) {
      EM = this.props.error.request.responseText;
      let colonIndex = EM.indexOf(":");
      EM = EM.substring(colonIndex + 3, EM.length);
      let endIndex = EM.indexOf("\"");
      EM = EM.substring(0,endIndex);
    }
    return (
      <div>
        {
          this.props.loading ?
          <Spin />
          :
          <Form onSubmit={this.handleSubmit} className="login-form" style={{width: '30%', border: 'solid 1px rgba(0,0,0,.20)', borderRadius: '5px', padding: "15px", marginLeft: 'auto',
  marginRight: 'auto'}}>
            {EM}
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }, {min: 6, message: 'Username must have a length greater than 6 characters!'}],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }, {min: 8, message: 'Password must have a length greater than 8 characters!'}],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>Login</Button>
            </FormItem>
          </Form>
        }
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
  return {
    token:state.token,
    loading:state.loading,
    error: state.error,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)
