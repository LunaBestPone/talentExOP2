import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import About from '../components/About';
Enzyme.configure({ adapter: new Adapter() });

describe('Testing Creating component', () => {
  
    it('renders as expected', () => {
      const wrapper = shallow(
        <About />
      );
      expect(wrapper).toHaveLength(1);   
   });
});