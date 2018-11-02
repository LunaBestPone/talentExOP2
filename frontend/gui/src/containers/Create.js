import React from 'react';
import { Form, Input, Icon, Button, Select, Dropdown } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

const Option = Select.Option;
const FormItem = Form.Item;

class Registration extends React.Component {

    handleSubmit = (e) => {
        this.props.form.validateFields((err, values) => {
        console.log('Received values of form: ', values);
      });
      axios.create('http://127.0.0.1:8000/workshop/create', {
          ws_name: "fd",
          min_cap: 6,
          max_cap: 7,
          is_active: true,
          description: '123',
          host_user: '123123',
      }).then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
    render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };

    const tailFormItemLayout = {
      wrapperCol: {
          span: 4,
          offset: 4,
      },
    };

    return (
        // onSubmit={this.handleSubmit}
      <Form onSubmit={this.handleSubmit}>

        <FormItem 
          {...formItemLayout}
          label="Workshop Name: " 
        >
            {getFieldDecorator('Workshopname', {
                rules: [{ required: true, message: 'Please input your Workship Name!' }],
            })(
              <Input type="text" />
            )}
        </FormItem>

        <FormItem
        {...formItemLayout}
        label="Subject: ">
          {getFieldDecorator('subject', {
            rules: [{
              required: true, message: 'Please select the subjects you like to teach!',
            }],
          })(
              <Select style = {{ width: 300}}>
                  <Option value= "math.calc">Calculus I</Option>
                  <Option value= "math.linAlg">Linear Algebra</Option>
                  <Option value= "language">Language</Option>
              </Select>
          )}
        </FormItem>

        <FormItem
        {...formItemLayout}
        label="Date: ">
          {getFieldDecorator('date', {
            rules: [{
              required: true, message: 'Please select the date!',
            }],
          })(
            <Input style = {{ width: 300}} type="date" placeholder="Date" />
          )}
        </FormItem>

        <FormItem
        {...formItemLayout}
        label="Start Time: ">
          {getFieldDecorator('starttime', {
            rules: [{
              required: true, message: 'Please select the time of day!',
            }],
          })(

          <Select style = {{ width: 300}}>
              <Option value="1a">1am</Option>
              <Option value="2a">2am</Option>
              <Option value="3a">3am</Option>
              <Option value="4a">4am</Option>
              <Option value="5a">5am</Option>
              <Option value="6a">6am</Option>
              <Option value="7a">7am</Option>
              <Option value="8a">8am</Option>
              <Option value="9a">9am</Option>
              <Option value="10a">10am</Option>
              <Option value="11a">11am</Option>
              <Option value="12p">12pm</Option>
              <Option value="1p">1pm</Option>
              <Option value="2p">2pm</Option>
              <Option value="3p">3pm</Option>
              <Option value="4p">4pm</Option>
              <Option value="5p">5pm</Option>
              <Option value="6p">6pm</Option>
              <Option value="7p">7pm</Option>
              <Option value="8p">8pm</Option>
              <Option value="9p">9pm</Option>
              <Option value="10p">10pm</Option>
              <Option value="11p">11pm</Option>
              <Option value="12a">12pm</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
        {...formItemLayout}
        label="End Time: ">
          {getFieldDecorator('endtime', {
            rules: [{
              required: true, message: 'Please select the time of day!',
            }],
          })(

          <Select style = {{ width: 300}} > 
              <Option value="1a">1am</Option>
              <Option value="2a">2am</Option>
              <Option value="3a">3am</Option>
              <Option value="4a">4am</Option>
              <Option value="5a">5am</Option>
              <Option value="6a">6am</Option>
              <Option value="7a">7am</Option>
              <Option value="8a">8am</Option>
              <Option value="9a">9am</Option>
              <Option value="10a">10am</Option>
              <Option value="11a">11am</Option>
              <Option value="12p">12pm</Option>
              <Option value="1p">1pm</Option>
              <Option value="2p">2pm</Option>
              <Option value="3p">3pm</Option>
              <Option value="4p">4pm</Option>
              <Option value="5p">5pm</Option>
              <Option value="6p">6pm</Option>
              <Option value="7p">7pm</Option>
              <Option value="8p">8pm</Option>
              <Option value="9p">9pm</Option>
              <Option value="10p">10pm</Option>
              <Option value="11p">11pm</Option>
              <Option value="12a">12pm</Option>
          </Select>
          )}
        </FormItem>

        <FormItem
        {...formItemLayout}
        label="Description: ">
          {getFieldDecorator('description', {
            rules: [{
              required: false, message: 'Add a description for the Workshop',
            }],
          })(
            <Input type="text" />
          )}
        </FormItem>

        <FormItem
        {...formItemLayout}
        label="Minimum Attendees: ">
          {getFieldDecorator('minAttendees', {
            rules: [{
              required: false, message: 'Please select the minimum amount of attendees!',
            }],
          })(
            <Input type="number"/>
          )}
        </FormItem>

        <FormItem
        {...formItemLayout}
        label="Maximum Attendees: ">
          {getFieldDecorator('maxAttendees', {
            rules: [{
              required: false, message: 'Please select the maximum amount of attendees!',
            }],
          })(
            <Input type="number"/>
          )}
        </FormItem>

        <FormItem
        {...tailFormItemLayout}
        // {right: '-9.5%'}
        >
        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
            Submit
        </Button>
        
        <NavLink
            style={{marginRight: '10px'}}
            to='/workshop/'> Cancel
        </NavLink>
        </FormItem>

      </Form>
    );
  }
}


const WrappedRegistrationForm = Form.create()(Registration);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}


export default connect(mapStateToProps)(WrappedRegistrationForm);
