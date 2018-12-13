import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import Workshop from '../components/Workshop';
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
  it('renders as expected', () => {
    const ws = {"ws_id": 3, "description": "test", "category": "subject"}
    const wrapper = shallow(
      <Workshop
        props={ws}
      />
    );
    expect(wrapper).toHaveLength(1);    
   });
});