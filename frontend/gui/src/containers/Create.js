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
            initialValue: "Select",
        })(
            <Select style = {{ width: 500}}>
                <Option value= "math.calc">CalculusI</Option>
                <Option value= "math.linAlg">Linear Algebra</Option>
            </Select>
        );
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
              type: 'subject',
            }, {
              required: true, message: 'Please select the subjects you like to teach!',
            }],
          })(
            <Select style = {{ width: 500}}>
                <Option value= "math.calc">Calculus I</Option>
                <Option value= "math.linAlg">Linear Algebra</Option>
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
