
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
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps !== this.props || nextState !== this.state);
  }

  render() {
    if (this.props.token !== null) {
      this.props.history.push("/workshop/");
    }
    const { getFieldDecorator } = this.props.form;
    let EM = null;
    if (this.props.error !== null) {
      EM = this.props.error.request.responseText;
    }
    return (
      <div>
        {EM}
        {
          this.props.loading ?
          <Spin />
          :
          <Form onSubmit={this.handleSubmit} className="login-form" style={{width: '30%', border: 'solid 1px rgba(0,0,0,.20)', borderRadius: '5px', padding: "15px"}}>
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
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)
