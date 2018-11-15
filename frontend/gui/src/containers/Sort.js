import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

// function handleBlur() {
//   console.log('blur');
// }

// function handleFocus() {
//   console.log('focus');
// }

const Sort = (props) => {
    return(
        <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Sort by subject"
            optionFilterProp="children"
            // onChange={handleChange}
            // onFocus={handleFocus}
            // onBlur={handleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
            <Option value= "Calculus I">Calculus I</Option>
            <Option value= "Linear Algebra">Linear Algebra</Option>
            <Option value= "Language">Language</Option>
        </Select>
    );
}
export default Sort;