import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import Create from '../containers/Create';
Enzyme.configure({ adapter: new Adapter() });

describe('Testing Creating component', () => {
  
    it('renders as expected', () => {
      const setRouteLeaveHook = jest.fn();
      const wrapper = shallow(
        <Create.WrappedComponent params={{router: 
          setRouteLeaveHook}}
        isAuthenticated= {true}
        />
      );
      expect(wrapper.state().locationState).toEqual(undefined);
      wrapper.find('Form').simulate('submit');     
   });
   it('renders as expected', () => {
      const setRouteLeaveHook = jest.fn();
      const wrapper = shallow(
        <Create.WrappedComponent params={{router: 
          setRouteLeaveHook}}
        isAuthenticated= {false}
        />
      );
      expect(wrapper.state().locationState).toEqual(undefined);     
    });
});