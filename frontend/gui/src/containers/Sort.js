import React from 'react';
import { DatePicker, Select, Row, Input, Button } from 'antd';

const Option = Select.Option;
const { RangePicker } = DatePicker;

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
                Filters: 
                <Select
                    showSearch
                    style={{ width: "100%"}}
                    placeholder="Select subject"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    {subjs}
                </Select>
                {/* 
                This is a filter for Location. But we will leave it out for now
                <p></p>
                <Select
                    showSearch
                    style={{ width: "100%"}}
                    placeholder="Sort by location"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value= "Any">Any</Option>
                    
                </Select> */}
                <p></p>
                Select Range:
                <RangePicker
                    style={{width: '100%'}}
                    showTime
                    onChange={this.props.handleRange}
                    format="YYYY-MM-DD HH:mm:ss" />
                
                <p></p>
                <Button onClick={this.props.ascend}>Date Ascending Order</Button>
                <p></p>
                <Button onClick={this.props.descend}>Date Descending Order</Button>
                <p></p>
                <Button onClick={this.props.reset}>Reset</Button>
                </Row>
            </div>
        );
     }
}
export default Sort;