import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default class TestComponent extends Component {
  render() {
    return (
      <div className="test">
        Hello Friends!
      </div>
    )
  }
}

describe('does TestComponent work', () => {
  it('should contain a div with hello world in it', () => {
    const wrapper = mount(<TestComponent />);
    expect(wrapper.text()).toEqual('Hello Friends!');
  });
})