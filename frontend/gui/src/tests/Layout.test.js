import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import CustomLayout from '../containers/Layout';
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
  it('renders as expected', () => {
    const setRouteLeaveHook = jest.fn();
    const wrapper = shallow(
      <CustomLayout.WrappedComponent params={{router: 
        setRouteLeaveHook}}
        isAuthenticated = {true}/>
    );
    expect(wrapper.state().page_name).toEqual("Home");
    wrapper.find('.item1').simulate('click'); 
    wrapper.find('.item21').simulate('click');

    wrapper.find('.item3').simulate('click');
    wrapper.find('.item4').simulate('click');
    wrapper.find('.item5').simulate('click');
    wrapper.find('.item6').simulate('click');
    wrapper.find('.item7').simulate('click');
  });
  it('renders as expected', () => {
    const setRouteLeaveHook = jest.fn();
    const wrapper = shallow(
      <CustomLayout.WrappedComponent params={{router: 
        setRouteLeaveHook}}
        isAuthenticated = {false}/>
    );
    expect(wrapper.state().userName).toEqual("default");
    wrapper.find('.item22').simulate('click');
    
  });
});