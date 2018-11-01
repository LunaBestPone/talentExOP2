import React from 'react';
import { Form, Input, Icon, Button, Select, Dropdown } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

const Option = Select.Option;
const FormItem = Form.Item;

class Registration extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
            console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const subjectSelector = getFieldDecorator('subject', {
          initialValue: "Select Subjects",
        })(
            <Select style = {{ width: 500}}>
                <Option value= "math.calc">CalculusI</Option>
                <Option value= "math.linAlg">Linear Algebra</Option>
            </Select>
        );
        const timeSelector = getFieldDecorator('starttime', {
          initialValue: "Select start time"
        })
        const timeSelector2 = getFieldDecorator('endtime', {
          initialValue: "Select end time"
        })

    return (
        // onSubmit={this.handleSubmit}
      <Form onSubmit={this.handleSubmit}>

        <FormItem>
            {getFieldDecorator('Workshopname', {
                rules: [{ required: true, message: 'Please input your Workship Name!' }],
            })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Workshop Name" />
            )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('subject', {
            rules: [{
              type: 'Select Subjects',
            }, {
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
              type: 'Time of Day',
              required: true, message: 'Please select the time of day!',
            }],
          })(

          <Select style = {{ width: 500}}>
              <Option value= "Time">12am</Option>
              <Option value= "Time">11am</Option>
              <Option value= "Time">10am</Option>
              <Option value= "Time">9am</Option>
              <Option value= "Time">8am</Option>
              <Option value= "Time">7am</Option>
              <Option value= "Time">6am</Option>
              <Option value= "Time">5am</Option>
              <Option value= "Time">4am</Option>
              <Option value= "Time">3am</Option>
              <Option value= "Time">2am</Option>
              <Option value= "Time">1am</Option>
              <Option value= "Time">12pm</Option>
              <Option value= "Time">11pm</Option>
              <Option value= "Time">10pm</Option>
              <Option value= "Time">9pm</Option>
              <Option value= "Time">8pm</Option>
              <Option value= "Time">7pm</Option>
              <Option value= "Time">6pm</Option>
              <Option value= "Time">5pm</Option>
              <Option value= "Time">4pm</Option>
              <Option value= "Time">3pm</Option>
              <Option value= "Time">2pm</Option>
              <Option value= "Time">1pm</Option>
          </Select>
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('endtime', {
            rules: [{
              type: 'Time of Day',
              required: true, message: 'Please select the time of day!',
            }],
          })(

          <Select style = {{ width: 500}}>
              <Option value= "Time">12am</Option>
              <Option value= "Time">11am</Option>
              <Option value= "Time">10am</Option>
              <Option value= "Time">9am</Option>
              <Option value= "Time">8am</Option>
              <Option value= "Time">7am</Option>
              <Option value= "Time">6am</Option>
              <Option value= "Time">5am</Option>
              <Option value= "Time">4am</Option>
              <Option value= "Time">3am</Option>
              <Option value= "Time">2am</Option>
              <Option value= "Time">1am</Option>
              <Option value= "Time">12pm</Option>
              <Option value= "Time">11pm</Option>
              <Option value= "Time">10pm</Option>
              <Option value= "Time">9pm</Option>
              <Option value= "Time">8pm</Option>
              <Option value= "Time">7pm</Option>
              <Option value= "Time">6pm</Option>
              <Option value= "Time">5pm</Option>
              <Option value= "Time">4pm</Option>
              <Option value= "Time">3pm</Option>
              <Option value= "Time">2pm</Option>
              <Option value= "Time">1pm</Option>
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
