import React from 'react';
import { Form, Input, Button, Select, DatePicker, TimePicker } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import SelectUSState from 'react-select-us-states';
import moment from 'moment';
import { GoogleApiWrapper } from 'google-maps-react';

const Option = Select.Option;
const FormItem = Form.Item;
const { RangePicker } = DatePicker;

class Registration extends React.Component {
  state = {
    subject: "",
    locationState: 'AL',
  }

  handleSubject = (value) => {
    this.setState({
      subject: value
    })
  }

  handleLocationStateChange = (value) => {
    this.setState({
      locationState: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.props.isAuthenticated) {
      window.alert("Log in before creating a workshop.");
      return;
    }



    this.props.form.validateFields((err, values) => {
      if (!err) {
        var success = false;
        const wsname = e.target.elements.ws_title.value;
        const description = e.target.elements.description.value;
        const min_cap = e.target.elements.min.value;
        const max_cap = e.target.elements.max.value;

        const rangeTimeValue = values['range-time-picker'];
        if(rangeTimeValue[0] < moment()) {
          window.alert('Selected start time has already past, try again.');
          return;
        }
        const startDateTime = rangeTimeValue[0].toISOString();
        const endDateTime = rangeTimeValue[1].toISOString();

        const address = e.target.elements.address.value;
        const city = e.target.elements.city.value;
        const state = this.state.locationState;
        console.log(state);
        const zip = e.target.elements.zip.value;
        // debugger;
        axios
          .post('http://127.0.0.1:8000/api/workshop/create/', {
            host_user: this.props.user,
            ws_name: wsname,
            min_cap: min_cap,
            max_cap: max_cap,
            is_active: true,
            description: description,
            start_date_time: startDateTime,
            end_date_time: endDateTime,
            category: this.state.subject,
            // location: null,
          }).then(res => {
            console.log(res);
            console.log(res.data);
            window.alert('Workshop created!')

            console.log("1.", success);
          }).catch(err => {
            console.log(err)
            window.alert(err);
          });
          success = true;
          console.log("2.", success);
          if(success) {
            this.props.history.push('/workshop/');
          }
      }
    });
  }

  disabledDate(current){
    return current < moment().startOf('day');
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };

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
            <Input name="ws_title" type="text" />
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
            <Select
              showSearch
              style={{ width: 300 }}
              onChange={this.handleSubject}
              optionFilterProp="children"
              placeholder="Please search the subject"
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
              <Option value="Calculus I">Calculus I</Option>
              <Option value="Linear Algebra">Linear Algebra</Option>
              <Option value="Language">Language</Option>
              <Option value="Other">Other</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Address: ">
          {getFieldDecorator('address', {
            rules: [{
              required: true,
            }],
          })(
            <Input type="text" name='address' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="City: ">
          {getFieldDecorator('city', {
            rules: [{
              required: true,
            }],
          })(
            <Input type="text" name='city' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="State: ">
          {getFieldDecorator('state', {
            rules: [{
              required: false,
            }],
          })(
            <SelectUSState onChange={this.handleLocationStateChange} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Zip: ">
          {getFieldDecorator('zip', {
            rules: [{
              required: true,
            }],
          })(
            <Input type="text" name='zip' />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Time"
        >
          {getFieldDecorator('range-time-picker', rangeConfig)(
            <RangePicker
              disabledDate={this.disabledDate}
              showTime
              format="YYYY-MM-DD HH:mm:ss" />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Description: ">
          {getFieldDecorator('description', {
            rules: [{
              required: true, message: 'Add a description for the Workshop',
            }],
          })(
            <Input name='description' type="text" />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Minimum Attendees: ">
          {getFieldDecorator('minAttendees', {
            rules: [{
              required: true, message: 'Please select the minimum amount of attendees!',
            }],
          })(
            <Input type="number" name='min' />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Maximum Attendees: ">
          {getFieldDecorator('maxAttendees', {
            rules: [{
              required: true, message: 'Please select the maximum amount of attendees!',
            }],
          })(
            <Input type="number" name='max' />
          )}
        </FormItem>

        <FormItem
          {...tailFormItemLayout}
        // {right: '-9.5%'}
        >
          <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
            Submit
          </Button>

          <NavLink
            style={{ marginRight: '10px' }}
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
    isAuthenticated: state.token !== null,
    user: state.user
  }
}


export default connect(mapStateToProps)(GoogleApiWrapper({
    apiKey: ('AIzaSyDSDo23qnbXL_JeeM9LCIhYh2fUwNRTA_4')
  })(WrappedRegistrationForm));
