import React from 'react';
import { shallow } from 'enzyme';
import SelectBox from './SelectBox';

describe('SelectBox', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<SelectBox />)));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <select />', () => {
    expect(wrapper.find('select').length).toEqual(1);
  });

  it("should render 3 <option />'s", () => {
    expect(wrapper.find('option').length).toEqual(3);
  });
});
