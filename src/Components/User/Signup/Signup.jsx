// import React from 'react'
// import "./Signup.css";

// function Signup() {
//   return (
    

//   <div class="container">
//     <h1>Create Your Account</h1>
//     <form id="signup-form">
//       <div class="form-group">
//         <label for="username">Username:</label>
//         <input type="text" id="username" name="username" required/>
//       </div>
//       <div class="form-group">
//         <label for="email">Email:</label>
//         <input type="email" id="email" name="email" required/>
//       </div>
//       <div class="form-group">
//         <label for="password">Password:</label>
//         <input type="password" id="password" name="password" required/>
//         <label for="password">Conform Password:</label>
//         <input type="password" id="password" name="password" required/>
//       </div>
//       <button type="submit">Sign Up</button><br/><br/>
//       <button type="submit">login</button>
//     </form>
//     <div id="message"></div>
//   </div>
  
  


    
//   )
// }

// export default Signup

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./Signup.css";
import { signup } from '../../../Services/UserApi';

const SignupForm = () => {
  // Initial values for the form fields
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  // Validation function for form fields
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  // Submit function for handling form submission
  const handleSubmit = async(values ) => {
    // Here you can implement your signup logic, e.g., sending a request to your backend API
    console.log('Submitted values:', values);

    const {data}= await signup(values)
  };

  return (
    <div className='signup'>
      <h2 className='header2'>Create Your Account</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='form-name'>
              <label>First Name:</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="div" className="error" />
            </div>
            <div className='form-name'>
              <label>Last Name:</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>
            <div className='form-mail'>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className='form-pass'>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div className='form-pass'>
              <label>Confirm Password:</label>
              <Field type="password" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" className="error" />
            </div>
            <button className='button' type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Signup'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
