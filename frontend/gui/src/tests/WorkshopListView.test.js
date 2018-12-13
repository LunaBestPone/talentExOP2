import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import WorkshopListView from '../containers/WorkshopListView';
import { NavLink } from 'react-router-dom';
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
    it('renders as expected', () => {
      const setRouteLeaveHook = jest.fn();
      const wrapper = shallow(
        <WorkshopListView.WrappedComponent params={{router: 
          setRouteLeaveHook}}
          isAuthenticated = {true}
          />
      );
      expect(wrapper.state().workshops).toEqual([]);
      expect(wrapper.state().filterSub).toEqual("-1");
      expect(wrapper.state().subjects).toEqual(["Any"]);
      expect(wrapper.state().mapview).toEqual(false);
      expect(wrapper.find(NavLink).first().props().to).toBe("/createws/")
    });
  it('renders as expected', () => {
    const setRouteLeaveHook = jest.fn();
    const wrapper = shallow(
      <WorkshopListView.WrappedComponent params={{router: 
        setRouteLeaveHook}}
        isAuthenticated = {false}
        />
    );
    expect(wrapper.find(NavLink).first().props().to).toBe("/workshopmap/")
  });
});