import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onAuth(
            values.userName,
            values.email,
            values.password,
            values.confirm
        );
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps !== this.props || nextState !== this.state);
  }

  componentDidMount() {
    if(this.props.token !== null) {
      window.alert("You are already logged in.");
      this.props.history.push("/workshop/");
    }
  }

  render() {
    if (this.props.token !== null) {
      window.alert("Logging you in...")
      this.props.history.push("/workshop/");
    }
    const { getFieldDecorator } = this.props.form;
    let EM = null;
    if (this.props.error !== null) {
      EM = this.props.error.request.responseText;
      EM = this.props.error.request.responseText;
      let colonIndex = EM.indexOf(":");
      EM = EM.substring(colonIndex + 3, EM.length);
      let endIndex = EM.indexOf("\"");
      EM = EM.substring(0,endIndex);
    }
    return (
      <div>
        <Form onSubmit={this.handleSubmit} style={{width: '30%', border: 'solid 1px rgba(0,0,0,.20)', borderRadius: '5px', padding: "15px", marginLeft: 'auto',
  marginRight: 'auto'}}>
          {EM}
          <FormItem style = {{ width: 300}}>
              {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }, {min: 6, message: 'Username must have a length greater than 6 characters!'}],
              })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
          </FormItem>

          <FormItem style = {{ width: 300}}>
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
            )}
          </FormItem>

          <FormItem style = {{ width: 300}}>
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }, {min: 8, message: 'Password must have a length greater than 8 characters!'}],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>

          <FormItem style = {{ width: 300}}>
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }, {min: 8, message: 'Password must have a length greater than 8 characters!'}],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onBlur={this.handleConfirmBlur} />
            )}
          </FormItem>

          <FormItem >
          <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                Signup
          </Button>

          <NavLink
              style={{marginRight: '10px'}}
              to='/workshop/'> Cancel
          </NavLink>
          </FormItem>

        </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

const mapStateToProps = (state) => {
    return {
        token: state.token,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);
