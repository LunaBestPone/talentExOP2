import React from 'react';
import { Select, Row, Input } from 'antd';

const Option = Select.Option;

// function handleBlur() {
//   console.log('blur');
// }

// function handleFocus() {
//   console.log('focus');
// }

//Probably want props of subject lists, location lists, start time lists, end time lists.
//Want any in each select comp
class Sort extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(value) {
        console.log(value);
        this.props.changeSub(value);
    }
        // var subjs = [];
        // for(let i = 0; i < this.props.subjects.length; i++){
        //     subjs.push(<Option key={i} value={subjects[i]}>{subjects[i]}</Option>);
        // }
        // console.log(subjs);
    render(){
        var subjs = [];
        for(let i = 0; i < this.props.subjects.length; i++){
            subjs.push(<Option key={i} value={this.props.subjects[i]}>{this.props.subjects[i]}</Option>);
        }
        // console.log(subjs);
        return(
            <div>
                <Row gutter={15}>
                <Select
                    showSearch
                    style={{ width: "100%", padding: "10px"  }}
                    placeholder="Sort by subject"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                    // onFocus={handleFocus}
                    // onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    {subjs}
                    {/* <Option value= "Calculus I">Calculus I</Option>
                    <Option value= "Linear Algebra">Linear Algebra</Option>
                    <Option value= "Language">Language</Option> */}
                </Select>

                <Select
                    showSearch
                    style={{ width: "100%", padding: "10px"  }}
                    placeholder="Sort by location"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value= "Any">Any</Option>
                    
                </Select>
                S
                <Input name= "date" style={{ width: "100%", padding: "10px"  }} type="date" placeholder="Date" />
                <Select
                    showSearch
                    style={{ width: "100%", padding: "10px"  }}
                    placeholder="Sort by start time"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value= "Any">Any</Option>
                </Select>

                <Select
                    showSearch
                    style={{ width: "100%", padding: "10px" }}
                    placeholder="Sort by end time"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value= "Any">Any</Option>
                </Select>
                </Row>
            </div>
        );
     }
}
export default Sort;