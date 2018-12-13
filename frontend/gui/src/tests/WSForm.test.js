import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import WSForm from '../components/WSForm';
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
    it('renders as expected', () => {
      const ws = {"is_active": false}
      const wrapper = shallow(
        <WSForm
          workshop= {ws}
        />
      );
      expect(wrapper).toHaveLength(1);    
   });
});