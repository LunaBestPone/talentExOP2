import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import SignUp from '../containers/SignUp';
import createMemoryHistory from 'history/createBrowserHistory'
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
    it('renders as expected', () => {
      const history = createMemoryHistory('/workshop/')
      const setRouteLeaveHook = jest.fn();
      const wrapper = shallow(
        <SignUp.WrappedComponent params={{router: 
          setRouteLeaveHook}}
          token={null}
          err={null}
          history={history}
        />
      );
     expect(wrapper.state().confirmDirty).toEqual(false);
     wrapper.find('.confirmPass').simulate('blur')
   });
});