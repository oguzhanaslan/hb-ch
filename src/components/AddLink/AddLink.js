import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import './AddLink.scss';

export class AddLink extends Component {
  handleSubmitForm(values) {
    this.props.addLink(values);
    toastr.success('Settings updated');
  }

  render() {
    return (
      <Formik
        initialValues={{ title: '', url: '' }}
        onSubmit={(values) => {
          this.handleSubmitForm(values);
        }}
        validate={(values) => {
          const errors = {};
          if (!values.title || !values.url) {
            errors.title = 'title is required';
            errors.url = 'link is required';
          }
          return errors;
        }}
        render={(props) => (
          <div className='col-xs-6 col-xs-offset-3'>
            <form className='form' onSubmit={props.handleSubmit}>
              <h3>Add New Link</h3>
              <div className='form-group'>
                {props.errors.title && <span className='error'>{props.errors.title}</span>}
                <input
                  type='text'
                  placeholder='Title'
                  name='title'
                  onChange={props.handleChange}
                  value={props.values.title}
                />
              </div>

              <div className='form-group'>
                {props.errors.url && <span className='error'>{props.errors.url}</span>}
                <input
                  type='text'
                  placeholder='Url'
                  name='url'
                  onChange={props.handleChange}
                  value={props.values.type}
                />
              </div>

              <div className='form-group'>
                <button className='submit' type='submit'>
                  Add
                </button>
              </div>
            </form>
          </div>
        )}
      />
    );
  }
}

AddLink.propTypes = {
  addLink: PropTypes.func,
};

export default AddLink;
