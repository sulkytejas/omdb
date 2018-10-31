import React from 'react';
import Posts from './index.js';
import {shallow,configure} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Posts',() =>{
  it('Check if posts state is set', () => {
    const wrapper = shallow(
      <Posts/>
    );
    wrapper.setState({post:[1,2,3]})
    expect(wrapper.state('post')).toEqual([1,2,3])
  });
})
