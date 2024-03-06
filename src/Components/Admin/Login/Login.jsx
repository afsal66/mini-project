import React, { useState } from 'react';
import "./Login.css";

const LoginForm = () => {
  // State to manage user input for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement logic to authenticate user using email and password
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div  className="login-page">
      <h2 className='header'>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='login-mail'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='login-pass'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div >
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
