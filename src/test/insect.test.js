import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Insect from '../components/Insect';

configure({ adapter: new Adapter() });

describe('<Insect>', () => {

  it('should render correctly', () => {
    const component = shallow(<Insect />);
    expect(component).toMatchSnapshot();
  });

  it('should register a click', () => {
    let clickFn = jest.fn();
    const component = shallow(<Insect hit={clickFn}/>);
    component.simulate('click')
    expect(clickFn).toHaveBeenCalled();
  });

});