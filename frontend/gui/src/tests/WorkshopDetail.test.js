import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import WorkshopDetail from '../containers/WorkshopDetail';
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
  it('renders as expected', () => {
    const ws = {'host_user': 2};
    const setRouteLeaveHook = jest.fn();
    const wrapper = shallow(
      <WorkshopDetail.WrappedComponent params={{router: 
        setRouteLeaveHook}}
        match={{params: {ws_id: 1}}}
        user={1}
        isAuthenticated={true}
        />
    );
    expect(wrapper.state().isEditing).toEqual(false);
    expect(wrapper.state().enrollment).toEqual(0);
    expect(wrapper.state().isRegistered).toEqual(false);
    expect(wrapper.state().lc).toEqual(0);
    expect(wrapper.state().host).toEqual("");
    wrapper.setState({isLoggedIn:true, isRegistered:false, ws})
    wrapper.find('.registerButton').simulate('click');
  });
  it('renders as expected', () => {
    const ws = {'host_user': 2};
    const setRouteLeaveHook = jest.fn();
    const wrapper = shallow(
      <WorkshopDetail.WrappedComponent params={{router: 
        setRouteLeaveHook}}
        match={{params: {ws_id: 1}}}
        user={1}
        isAuthenticated={true}
        />
    );
    wrapper.setState({isRegistered:true, workshop:ws});
    wrapper.find('.cancelRegButton').simulate('click');
  });
  it('renders as expected', () => {
    const ws = {'host_user': 1};
    const setRouteLeaveHook = jest.fn();
    const wrapper = shallow(
      <WorkshopDetail.WrappedComponent params={{router: 
        setRouteLeaveHook}}
        match={{params: {ws_id: 1}}}
        user={1}
        isAuthenticated={true}
        />
    );
    wrapper.setState({workshop:ws});
    wrapper.find('.deleteRegButton').simulate('click');
  });
});