import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Start from '../Start';

configure({ adapter: new Adapter() });

describe('<Start>', () => {

  it('should render correctly', () => {
    const component = shallow(<Start />);
    expect(component).toMatchSnapshot();
  });

  it('should register a click on the button', () => {
    let clickFn = jest.fn();
    const component = shallow(<Start gameStart={clickFn}/>);
    component.find('button').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });

});