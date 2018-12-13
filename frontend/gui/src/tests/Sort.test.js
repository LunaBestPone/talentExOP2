import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import Sort from '../containers/Sort';
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
    var sub = ["Any", "Language"];
    // handleFilterChange = () =>{
    //     return 1;
    // }
    it('renders as expected', () => {
      const wrapper = shallow(
        <Sort 
            subjects={sub}
            // changeSub={this.handleFilterChange}
        />
      );
    wrapper.find('Select').simulate('change');
    expect(wrapper).toHaveLength(1);
     
   });
});