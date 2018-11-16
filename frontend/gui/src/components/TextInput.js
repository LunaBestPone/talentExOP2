import React, {PropTypes} from 'react';
import { Input } from 'antd';

const TextInput = ({label, onChange, placeholder, value, categories}) => {
  // TODO: In future we would need to provide dropdown menu for cat, not text
  //       Same for time as well
  if(label === "category"){
    
  } else if (label === "start_date_time") {

  } else if (label === "end_date_time"){

  }
  return (
    <div className="form-group">
      <div className="field">
        <b>{label}{' '}</b>
        <Input
          style = {{width: '50%'}}
          type="text"
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