
import React from 'react';
import { Form, Icon, Input, Button, Spin } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.userName, values.password);
      }
    });
    this.props.history.push('/');
  }

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p>{this.props.error.message}</p>
      );
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {errorMessage}
        {
          this.props.loading ?
          <Spin />
          :
          <Form onSubmit={this.handleSubmit} className="login-form" style={{width: '30%', border: 'solid 1px rgba(0,0,0,.20)', borderRadius: '5px', padding: "15px"}}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>Login</Button>
              Or
              <NavLink style={{marginRight: '10px'}} to='/signup/'> Sign Up
              </NavLink>
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
    loading:state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)
