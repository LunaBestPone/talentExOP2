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
      axios.post('http://127.0.0.1:8000/workshop', {
          ws_name: "fd",
          ws_id: 7,
          min_cap: 6,
          max_cap: 7,
          is_active: true,
          description: 'd',
          host_user: 3,
          start_date_time: "Friday 11-30-2018 at 10:13 AM",
          end_date_time: "Friday 11-31-2018 at 10:13 AM"
      }).then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
    render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 12 },
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
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Workshop Name" />
            )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('subject', {
            rules: [{
              required: true, message: 'Please select the subjects you like to teach!',
            }],
          })(
              <Select style = {{ width: 500}}>
                  <Option value= "math.calc">Calculus I</Option>
                  <Option value= "math.linAlg">Linear Algebra</Option>
                  <Option value= "language">Language</Option>
              </Select>
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('date', {
            rules: [{
              required: true, message: 'Please select the date!',
            }],
          })(
            <Input type="date" placeholder="Date" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('starttime', {
            rules: [{
              required: true, message: 'Please select the time of day!',
            }],
          })(

          <Select style = {{ width: 500}}>
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

        <FormItem>
          {getFieldDecorator('endtime', {
            rules: [{
              required: true, message: 'Please select the time of day!',
            }],
          })(

          <Select style = {{ width: 500}} > 
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

        <FormItem>
          {getFieldDecorator('description', {
            rules: [{
              required: false, message: 'Add a description for the Workshop',
            }],
          })(
            <Input type="text" placeholder="Desctiption" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('minAttendees', {
            rules: [{
              required: false, message: 'Please select the minimum amount of attendees!',
            }],
          })(
            <Input type="number" placeholder="Minimum Attendees" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('maxAttendees', {
            rules: [{
              required: false, message: 'Please select the maximum amount of attendees!',
            }],
          })(
            <Input type="number" placeholder="Maximum Attendees" />
          )}
        </FormItem>

        <FormItem>
        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
            Submit
        </Button>
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
