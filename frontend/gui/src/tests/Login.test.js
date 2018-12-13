import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import Login from '../containers/Login';
import createMemoryHistory from 'history/createBrowserHistory'
        
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
    it('renders as expected', () => {
      const history = createMemoryHistory('/workshop/')
      const setRouteLeaveHook = jest.fn();
      const wrapper = shallow(
        <Login.WrappedComponent params={{router: 
          setRouteLeaveHook}}
          history={history}
          error={null}
        />
      );
     expect(wrapper.state().hostWorkshops).toEqual([]);
     expect(wrapper.state().enrolledWorkshops).toEqual([]);      
   });
});