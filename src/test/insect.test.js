import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Insect from '../components/Insect';

describe('<Insect>', () => {

  it('should render correctly', () => {
    const component = shallow(<Insect />);
    expect(component).toMatchSnapshot();
  });
});