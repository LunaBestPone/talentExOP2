import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import TextInput from '../components/TextInput';
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
  it('renders as expected', () => {
    const wrapper = shallow(
      <TextInput
        is_number={true}
      />
    );
    expect(wrapper).toHaveLength(1);    
   });
   it('renders as expected', () => {
    const wrapper = shallow(
      <TextInput
        is_number={false}
      />
    );
    expect(wrapper).toHaveLength(1);    
   });
});