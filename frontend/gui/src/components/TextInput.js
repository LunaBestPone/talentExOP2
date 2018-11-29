import React, {PropTypes} from 'react';
import { Input } from 'antd';

const TextInput = ({name, label, onChange, placeholder, value, is_number}) => {
  // TODO: In future we would need to provide dropdown menu for cat, not text
  //       Same for time as well
  var typeField = "";
  if (is_number) {
    typeField = "number"
  } else {
    typeField = "text"
  }
  return (

    <div className="form-group">
      <div className="field">
        <b>{label}{' '}</b>
        
        <Input
          style = {{width: '50%'}}
          type={typeField}
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
      </div>
    </div>
  );
};

{/*
TextInput.propTypes = {  
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};
*/}

export default TextInput;  