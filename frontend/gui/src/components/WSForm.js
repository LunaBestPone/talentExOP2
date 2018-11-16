import React, { PropTypes } from 'react';
import TextInput from './TextInput';

class WSForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <span>
            <b>workshop id:</b>{this.props.workshop.ws_id}
          </span>

          <TextInput
            name="ws_name"
            label="name"
            value={this.props.workshop.ws_name}
            onChange={this.props.onChange} />

          <span>
            <b>host user:</b> {this.props.workshop.host_username}
          </span>

          <TextInput
            name="category"
            label="category"
            value={this.props.workshop.category}
            onChange={this.props.onChange} />

          <TextInput
            label="min attendees"
            name="min_cap"
            value={this.props.workshop.min_cap}
            onChange={this.props.onChange} />

          <TextInput
            label="max attendes"
            name="max_cap"
            value={this.props.workshop.max_cap}
            onChange={this.props.onChange} />

          <span>
            <b>is active: </b> {this.props.workshop.is_active.toString()}
          </span>

          <TextInput
            name="description"
            label="description"
            value={this.props.workshop.description}
            onChange={this.props.onChange} />

          <span>
            <b>starts: </b> {this.props.workshop.start_time_display}
          </span>
          <br></br>
          <span>
            <b>ends: </b> {this.props.workshop.end_time_display}
          </span>

          <br></br>
          <input
            type="submit"
            disabled={this.props.saving}
            className="btn btn-primary"
            onClick={this.props.onSave} />
          {' '}
          <input
            type="submit"
            value="Cancel"
            disabled={this.props.saving}
            className="btn btn-primary"
            onClick={this.props.cancelEdit}/>
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