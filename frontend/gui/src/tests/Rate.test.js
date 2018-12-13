import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import Rate from '../components/Rate';
import createMemoryHistory from 'history/createBrowserHistory'
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
    it('renders as expected', () => {
        const history = createMemoryHistory('/workshop/')
        const location = {"param1": 1,"param2": "user", "param3": "host", "param4": 2}
        const wrapper = shallow(
        <Rate
            history={history}
            location={location}
        />
        );
        expect(wrapper.state().rating).toEqual(0);
        wrapper.find("Button").simulate('click');       
   });
});