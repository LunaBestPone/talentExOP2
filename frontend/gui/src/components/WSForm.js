import React, { PropTypes } from 'react';
import TextInput from './TextInput';
import SelectUSState from 'react-select-us-states';
import {  DatePicker, Select, Form, Input} from 'antd';
import moment from 'moment';


const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

class WSForm extends React.Component {
  disabledDate(current){
    return current < moment().startOf('day');
  }
  render() {
    // const { getFieldDecorator } = this.props.form;
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 15 },
    };
    let active = "";
    this.props.workshop.is_active ? active = "True" : active = "False";
    return (
        <Form>
          <FormItem
            {...formItemLayout}
            label="Workshop ID:">
            {this.props.workshop.ws_id}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Workshop Name:">
            <TextInput
            name="ws_name"
            value={this.props.workshop.ws_name}
            onChange={this.props.onChange} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Host Name:">
            {this.props.workshop.host_username}
          </FormItem>
          <FormItem
            {...formItemLayout}
            // categories={this.props.subjects}
            label="Category:">
            <Select
                showSearch
                style = {{width: '50%'}}
                // onChange={this.handleSubject.bind(this)}
                onChange={this.props.handleSubject}
                optionFilterProp="children"
                placeholder={this.props.workshop.category}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  <Option value= "Calculus I">Calculus I</Option>
                  <Option value= "Linear Algebra">Linear Algebra</Option>
                  <Option value= "Language">Language</Option>
                  <Option value= "Other">Other</Option>
              </Select>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Min Attendees:">
            
            <TextInput
            name="min_cap"
            is_number={true}
            value={this.props.workshop.min_cap}
            onChange={this.props.onChange} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Max Attendees:">
            <TextInput
            name="max_cap"
            value={this.props.workshop.max_cap}
            onChange={this.props.onChange} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Active?:">
            {active}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Description:">
            <TextInput
            name="description"
            value={this.props.workshop.description}
            onChange={this.props.onChange} />

          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Current Date/Time:">
            {this.props.workshop.start_time_display} ~ {this.props.workshop.end_time_display}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Change Date/Time:">
            {/* {getFieldDecorator('range-time-picker', rangeConfig)( */}
              <RangePicker
                disabledDate={this.disabledDate}
                showTime
                onChange={this.props.handleTime}
                format="YYYY-MM-DD HH:mm:ss" />
              {/* )} */}
          </FormItem>
          <FormItem
          {...formItemLayout}>
          <Input
            type="submit"
            style={{width: '100px', padding: '5px'}}
            disabled={this.props.saving}
            className="btn btn-primary"
            onClick={this.props.onSave} />
          {' '}
          <Input
            type="submit"
            style={{width: '100px', padding: '5px'}}
            value="Cancel"
            disabled={this.props.saving}
            className="btn btn-primary"
            onClick={this.props.onCancel}/>
          </FormItem>
        </Form>
    );
  }
}

{/*
CatForm.propTypes = {  
  cat: React.PropTypes.object.isRequired,
  hobbies: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired
};
*/}

export default WSForm;  