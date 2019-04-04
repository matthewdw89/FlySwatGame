import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Player from '../Player';

configure({ adapter: new Adapter() });

describe('<Player>', () => {

  it('should render correctly', () => {
    const component = shallow(<Player />);
    expect(component).toMatchSnapshot();
  });

});