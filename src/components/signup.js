// Complete the component in this file.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { register } from '../actions';

class SignUp extends Component {
/** TODO:
 * This component needs a `handleFormSubmit` function 
 * that takes in the following strings as input and
 * invokes the `register` action --> DONE
 * 
 * username --> DONE
 * password --> DONE
 * comfirmPassword --> DONE 
*/
  handlFormSubmit(username, password, confirmPassword) {
    register(username, password, confirmPassword);
  }
  
  renderAlert = () => {
    if (!this.props.error) return null;
    return (
      <h3>{this.props.error}</h3>
    );
  };

  render() {
/** TODO:
 * Use reduxForm to build the sign up form
 * Check the other components to see how reduxForm is used
 * 
 * Create fields for:
 * Username --> DONE
 * Password --> DONE
 * Confirm Password --> DONE
*/
    return (
      <form onSubmit={handleFormSubmit(this.handleFormSubmit.bind(this))}>
      <fieldset>
        <label>Username:</label>
        <Field name="username" component="input" type="text" />
      </fieldset>
      <fieldset>
        <label>Password:</label>
        <Field name="password" component="input" type="password" />
      </fieldset>
      <fieldset>
        <label>Confirm Password:</label>
        <Field name="confirm password" component="input" type="password" />
      </fieldset>
      <button action="submit">Sign Up</button>
      {this.renderAlert()}
    </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated
  };
};

// Make sure to correctly fill in this `connect` call
SignUp = connect(null)(SignUp);

export default reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'confirmPassword'],
})(SignUp);
