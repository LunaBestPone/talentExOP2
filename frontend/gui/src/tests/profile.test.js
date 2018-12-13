import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import Profile from '../containers/profile';
import createMemoryHistory from 'history/createBrowserHistory'
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
    it('renders as expected', () => {
		const setRouteLeaveHook = jest.fn();
		const history = createMemoryHistory('/workshop/')
		const wrapper = shallow(
			<Profile.WrappedComponent params={{
				router: setRouteLeaveHook, 
			}}
			history= {history}
			isAuthenticated= {true}
			user={2}
			/>
		);
		expect(wrapper.state().isRegistered).toEqual(false);
		expect(wrapper.state().user).toEqual({});
	   });
	   it('renders as expected', () => {
		const setRouteLeaveHook = jest.fn();
		const history = createMemoryHistory('/workshop/')
		const wrapper = shallow(
			<Profile.WrappedComponent params={{
				router: setRouteLeaveHook, 
			}}
			history= {history}
			isAuthenticated= {false}
			user={1}
			/>
		);
		expect(wrapper.state().user).toEqual({});
		wrapper.find('Card').first().simulate('change');
   	});
});