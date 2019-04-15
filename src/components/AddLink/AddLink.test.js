import React from 'react';
import { mount } from 'enzyme';
import AddLink from './AddLink';

describe('Header', () => {
  let wrapper;
  beforeEach(() => (wrapper = mount(<AddLink />)));

  it('should render a form-group element', () => {
    expect(wrapper.find('.form-group').length).toEqual(3);
  });

  it('should have a Formik Component', () => {
    expect(wrapper.find('Formik').length).toEqual(1);
  });

  it('should render a submit element', () => {
    expect(wrapper.find('.submit').length).toEqual(1);
  });

  it('addLink props should be of type `function`', () => {
    expect(typeof wrapper.props().addLink === 'function').toBe(false);
  });

  it('should render a page title', () => {
    // console.log(wrapper.props().debug());
    expect(wrapper.find('h3').text()).toEqual('Add New Link');
  });
});
