import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; //added this line
import UserDetailView from '../containers/UserDetailView';
Enzyme.configure({ adapter: new Adapter() });

describe('Testing SignUp component', () => {
  
    it('renders as expected', () => {
      const wrapper = shallow(
        <UserDetailView 
          match={{params: {user_pk: 1}}}
        />
      );
     expect(wrapper).toHaveLength(1);
     expect(wrapper.state().users).toEqual(undefined);
   });
});