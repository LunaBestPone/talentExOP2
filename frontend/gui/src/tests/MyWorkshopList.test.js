import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import MyWorkshopList from '../containers/MyWorkshopList';
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
    it('renders as expected', () => {
      const setRouteLeaveHook = jest.fn();
      const wrapper = shallow(
        <MyWorkshopList.WrappedComponent params={{router: 
          setRouteLeaveHook}}
          isAuthenticated={true}
          user={1}/>
      );
    expect(wrapper.state().hostWorkshops).toEqual([]);
    expect(wrapper.state().enrolledWorkshops).toEqual([]);
    expect(wrapper.state().noTitleKey).toEqual('hosting');
    expect(wrapper.state().user).toEqual({});
    expect(wrapper.state().enrollment).toEqual([]);
  });
  it('renders as expected', () => {
    const setRouteLeaveHook = jest.fn();
    const wrapper = shallow(
      <MyWorkshopList.WrappedComponent params={{router: 
        setRouteLeaveHook}}
        isAuthenticated={false}
        user={1}/>
    );
    wrapper.find('Card').simulate('tabChange');
  });
});