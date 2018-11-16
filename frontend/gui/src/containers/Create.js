import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Option = Select.Option;
const FormItem = Form.Item;

class Registration extends React.Component {
    state = {
      //start and end time
      st: "",
      et: "",
      subject: "",
    }
    handleSubjectChange = (value) => {
      console.log(value);
      this.props.form.setFieldsValue({
        subject: value
      });
    }
    handleSTime = (value) => {
      this.setState({
        st: value
      });
    }
    handleETime = (value) => {
      this.setState( {
        et: value
      });
    }
    handleSubject = (value) => {
      this.setState({
        subject: value
      })
    }
    handleSubmit = (e) => {
      if (!this.props.isAuthenticated) {
        window.alert("Log in before creating a workshop.");
        return;
      }
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const wsname = e.target.elements.ws_title.value;
          const description = e.target.elements.description.value;
          const min_cap = e.target.elements.min.value;
          const max_cap = e.target.elements.max.value;

          const formDate = e.target.elements.date.value;
          const date = new Date(formDate);

          const year = date.getFullYear();
          const month = date.getMonth();
          const day = date.getDate() + 1;
    
          const startDate = new Date(year, month, day, this.state.st); //, this.state.st);
          const endDate = new Date(year, month, day, this.state.et); //, this.state.st);

          //window.alert(startDate);

          // Form we need "2018-05-30T10:13:00-05:00" -> needs to be converted in datetime field
          // const startDate = dayString + " " + (date.getMonth() + 1) + "-" + (date.getDate() + 1) + "-" + (date.getYear() + 1900) + " at " + this.state.st;
          // var startDate = document.createElement("INPUT");
          // startDate.setAttribute("type", "datetime");
          //var startDate = (date.getYear() + 1900) + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1) +  " " + this.state.st + ":00.000000+00";
          //var endDate = (date.getYear() + 1900) + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1) +  " " + this.state.et + ":00.000000+00";

          
          // const subject_name = this.state.subject;
          axios
            .post('http://127.0.0.1:8000/api/workshop/create/', {
              host_user: this.props.user,
              ws_name: wsname,
              min_cap: min_cap,
              max_cap: max_cap,
              is_active: true,
              description: description,
              //start_date_time: startDate,
              //end_date_time: endDate,
              category: this.state.subject,
              // location: null,
          }).then(res => {
            console.log(res);
            console.log(res.data);
            window.alert('Workshop created!')
          }).catch(err => {
            console.log(err)
            window.alert(err);
          });
        }
      });
      this.props.history.push('/workshop/');
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
                <Select
                  showSearch
                  style = {{ width: 300}}
                  onChange={this.handleSubject}
                  optionFilterProp="children"
                  placeholder="Please search the subject"
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
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

            <Select name="startTime" style = {{ width: 300}} onChange={this.handleSTime} >
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

            <Select name = "endTime" style = {{ width: 300}} onChange={this.handleETime}>
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
                required: true, message: 'Add a description for the Workshop',
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
                required: true, message: 'Please select the minimum amount of attendees!',
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
                required: true, message: 'Please select the maximum amount of attendees!',
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
      isAuthenticated: state.token !== null,
      user: state.user
    }
}


export default connect(mapStateToProps)(WrappedRegistrationForm);
