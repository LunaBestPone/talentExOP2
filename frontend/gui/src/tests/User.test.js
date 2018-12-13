import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import User from '../components/User';
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
  it('renders as expected', () => {
    const user = {"user_name": "s", "user_rating": 5, "learning_credit": 3}
    const wrapper = shallow(
      <User
        props={user}
      />
    );
    expect(wrapper).toHaveLength(1);    
   });
});