import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('Pagination', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Pagination />)));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});
