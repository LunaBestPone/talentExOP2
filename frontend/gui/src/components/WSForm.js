import React, { PropTypes } from 'react';
import TextInput from './TextInput';
import { Row, Select, Form, Input} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class WSForm extends React.Component {
  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
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
            label="Current Start Time:">
            {this.props.workshop.start_time_display}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Change Start Date:">
            <Input name= "date" style = {{ width: '50%'}} type="date" placeholder="Date" onChange={this.props.handleSDate}/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Change Start Time:"> 
            <Select name="startTime" style = {{ width: '50%'}} onChange={this.props.handleSTime} >
              <Option value="1">1am</Option>
              <Option value="2">2am</Option>
              <Option value="3">3am</Option>
              <Option value="4">4am</Option>
              <Option value="5">5am</Option>
              <Option value="6">6am</Option>
              <Option value="7">7am</Option>
              <Option value="8">8am</Option>
              <Option value="9">9am</Option>
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
              <Option value="0">12am</Option>
            </Select>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Current End Time:">
            {this.props.workshop.end_time_display}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Change End Date:">
            <Input name= "date" style = {{ width: '50%'}} type="date" placeholder="Date" onChange={this.props.handleEDate}/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Change End Time:"> 
            <Select name="endTime" style = {{ width: '50%'}} onChange={this.props.handleETime} >
              <Option value="1">1am</Option>
              <Option value="2">2am</Option>
              <Option value="3">3am</Option>
              <Option value="4">4am</Option>
              <Option value="5">5am</Option>
              <Option value="6">6am</Option>
              <Option value="7">7am</Option>
              <Option value="8">8am</Option>
              <Option value="9">9am</Option>
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
              <Option value="0">12am</Option>
            </Select>
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