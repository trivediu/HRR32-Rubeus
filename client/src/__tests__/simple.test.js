import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestComponent from './TestComponent.jsx';

configure({ adapter: new Adapter() });

/**
 * {@link https://github.com/airbnb/enzyme}
 */

describe('test shallow rendering', () => {

  xit('renders children when passed in', () => {
    const wrapper = shallow((
      <TestComponent>
        <div className="unique" />
      </TestComponent>
    ));
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
    //why doesn't this work?
  });

  it('should render a `.test`', () => {
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.find('.test').length).toEqual(1);
  });

  it('should not render a `.nottest`', () => {
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.find('.nottest').length).toEqual(0);
  });

});