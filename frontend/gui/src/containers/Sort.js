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

//Probably want props of subject lists, location lists, start time lists, end time lists.
//Want any in each select comp
const Sort = (props) => {
    return(
        <div>
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
                <Option value= "Any">Any</Option>
                <Option value= "Calculus I">Calculus I</Option>
                <Option value= "Linear Algebra">Linear Algebra</Option>
                <Option value= "Language">Language</Option>
            </Select>
            <Select
                showSearch
                style={{ width: 300 }}
                placeholder="Sort by location"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                <Option value= "Any">Any</Option>
            </Select>
            <Select
                showSearch
                style={{ width: 300 }}
                placeholder="Sort by start time"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                <Option value= "Any">Any</Option>
            </Select>
            <Select
                showSearch
                style={{ width: 300 }}
                placeholder="Sort by end time"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                <Option value= "Any">Any</Option>
            </Select>

        </div>
    );
}
export default Sort;