import React from "react";
import "./Signup.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {signup}from'../../../Services/UserApi';
function SignUp() {

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };


  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = async (values) => {
    console.log(values);

    const {data} = await signup(values);
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });


  

  return (
    <>
      <div className="signup">
        <div className="signup">
            <form onSubmit={formik.handleSubmit}>
              <h1>Create your Account</h1>
              <p>Please enter your details.</p>
              <div className="signupUserInput">
                <div className="Username">
                  <label htmlFor="name">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="signupName"
                    className="signupInput"
                    placeholder="Enter your name"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p
                      className="error-message"
                      style={{ marginTop: "5px", color: "red" }}
                    >
                      {formik.errors.username}
                    </p>
                  )}
                </div>
                <br />
                <div className="Email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="signupEmail"
                    className="signupInput"
                    placeholder="Enter your email address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p
                      className="error-message"
                      style={{ marginTop: "5px", color: "red" }}
                    >
                      {formik.errors.email}
                    </p>
                  )}
                </div>
                <br />
                <div className="Password">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="signupPassword"
                    className="signupInput"
                    placeholder="Enter password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p
                      className="error-message"
                      style={{ marginTop: "5px", color: "red" }}
                    >
                      {formik.errors.password}
                    </p>
                  )}
                </div>
                <br />
                <div className="Password">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="signupInput"
                    placeholder="Confirm your password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <p
                        className="error-message"
                        style={{ marginTop: "5px", color: "red" }}
                      >
                        {formik.errors.confirmPassword}
                      </p>
                    )}
                </div>
                <br />
                <div className="signupbutton">
                  <button type="submit">Sign Up</button>
                </div>
                <br />
                
                
              </div>
            </form>
          </div>

        </div>
    </>
  );
}

export default SignUp;