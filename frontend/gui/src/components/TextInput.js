import React, {PropTypes} from 'react';
import { Input } from 'antd';

const TextInput = ({name, label, onChange, placeholder, value}) => {  
  return (
    <div className="form-group">
      <div className="field">
        <b>{label}{' '}</b>
        <Input
          style = {{width: '25%'}}
          type="text"
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