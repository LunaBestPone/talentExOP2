import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import CustomLayout from './Layout';
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
    it('renders as expected', () => {
      const setRouteLeaveHook = jest.fn();
      const wrapper = shallow(
        <CustomLayout.WrappedComponent params={{router: 
          setRouteLeaveHook}}/>
      );
     expect(wrapper.state().page_name).toEqual("Home");     
   });
});