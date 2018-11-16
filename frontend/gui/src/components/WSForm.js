import React, { PropTypes } from 'react';
import TextInput from './TextInput';
import { Row, Col, Form, Input} from 'antd';

const FormItem = Form.Item;

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
            label="Category:">
            <TextInput
            name="category"
            value={this.props.workshop.category}
            onChange={this.props.onChange} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Min Attendees:">
            <TextInput
            name="min_cap"
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
            label="Start Time:">
            <TextInput
            name="start_date_time"
            value={this.props.workshop.start_date_time}
            onChange={this.props.onChange} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="End Time:">
            <TextInput
            name="end_date_time"
            value={this.props.workshop.end_date_time}
            onChange={this.props.onChange} />
          </FormItem>
          {/* </div>
          </Col> */}
          
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
            onClick={this.props.cancelEdit}/>
          {/* </Row> */}
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