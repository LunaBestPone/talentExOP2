import React, {PropTypes} from 'react';  
import TextInput from './TextInput';

class WSForm extends React.Component {  
  render() {
    return (
      <div>
        <form>
          <span>
            workshop id: {this.props.workshop.ws_id}
          </span> 

          <TextInput
            name="ws_name"
            label="ws_name"
            value={this.props.workshop.ws_name}
            onChange={this.props.onChange}/>

            <span>
              host user: {this.props.workshop.host_user}
            </span> 

            <TextInput
            name="category"
            label="category"
            value={this.props.workshop.category}
            onChange={this.props.onChange}/>

            <TextInput
            name="min attendees"
            label="min_cap"
            value={this.props.workshop.min_cap}
            onChange={this.props.onChange}/>

            <TextInput
            name="max attendes"
            label="max_cap"
            value={this.props.workshop.max_cap}
            onChange={this.props.onChange}/>

            <span>
              is active: {this.props.workshop.is_active}
            </span> 
           
            <TextInput
            name="description"
            label="description"
            value={this.props.workshop.description}
            onChange={this.props.onChange}/>

            <TextInput
            name="start_date_time"
            label="start_date_time"
            value={this.props.workshop.start_date_time}
            onChange={this.props.onChange}/>

            <TextInput
            name="end_date_time"
            label="end_date_time"
            value={this.props.workshop.end_date_time}
            onChange={this.props.onChange}/>

          <input
            type="submit"
            disabled={this.props.saving}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
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