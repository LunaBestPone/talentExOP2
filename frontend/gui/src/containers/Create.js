import React from 'react';
import { Form, Input, Icon, Button, Select, Dropdown } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

const Option = Select.Option;
const FormItem = Form.Item;

class Registration extends React.Component {
    state = {
      //start and end time
      st: "",
      et: "", 
    }
    handleSubjectChange = (value) => {
      console.log(value);
      this.props.form.setFieldsValue({
        subject: value
      });
    }
    handleTime = (value) => {
      this.setState({
        st: value
      })
    }
    handleSubmit = (e) => {
      const wsname = e.target.elements.ws_title.value;
      const description = e.target.elements.description.value;
      var date = e.target.elements.date.value;
      date = new Date(date);
      // var day = date.getDay();
      // var dayString = "";
      // Form we need "2018-05-30T10:13:00-05:00" -> needs to be converted in datetime field
      // const startDate = dayString + " " + (date.getMonth() + 1) + "-" + (date.getDate() + 1) + "-" + (date.getYear() + 1900) + " at " + this.state.st;
      // var startDate = document.createElement("INPUT");
      // startDate.setAttribute("type", "datetime");
      var startDate = (date.getYear() + 1900) + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1) +  "T" + this.state.st + ":00:00-05:00";
      const min_cap = e.target.elements.min.value;
      const max_cap = e.target.elements.max.value;
      // console.log(startDate);
      // const subject_name = this.state.subject;
      this.props.history.push('/workshop/');
      return axios
        .post('http://127.0.0.1:8000/api/workshop/create/', {
          // ws_name: wsname,
          // min_cap: 1,
          // max_cap: 2,
          // is_active: true,
          // description: description,
          host_user: 2,
          ws_name: wsname,
          min_cap: min_cap,
          max_cap: max_cap,
          is_active: true,
          description: description,
          start_date_time: null,
          end_date_time: null,
      }).then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(err => {
        console.log(err)
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
              <Select style = {{ width: 300}}>
                  <Option value= "Calculus I">Calculus I</Option>
                  <Option value= "Linear Algebra">Linear Algebra</Option>
                  <Option value= "Language">Language</Option>
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
            <Input name= "date" style = {{ width: 300}} type="date" placeholder="Date" />
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

          <Select name="startTime" style = {{ width: 300}} onChange={this.handleTime} >
              <Option value="01">1am</Option>
              <Option value="02">2am</Option>
              <Option value="03">3am</Option>
              <Option value="04">4am</Option>
              <Option value="05">5am</Option>
              <Option value="06">6am</Option>
              <Option value="07">7am</Option>
              <Option value="08">8am</Option>
              <Option value="09">9am</Option>
              <Option value="10">10am</Option>
              <Option value="11">11am</Option>
              <Option value="12">12pm</Option>
              <Option value="13">1pm</Option>
              <Option value="14">2pm</Option>
              <Option value="15">3pm</Option>
              <Option value="16">4pm</Option>
              <Option value="17">5pm</Option>
              <Option value="18">6pm</Option>
              <Option value="19">7pm</Option>
              <Option value="20">8pm</Option>
              <Option value="21">9pm</Option>
              <Option value="22">10pm</Option>
              <Option value="23">11pm</Option>
              <Option value="00">12am</Option>
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
            <Input name='description'type="text" />
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
            <Input type="number" name='min'/>
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
            <Input type="number" name='max'/>
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
