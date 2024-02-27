import React from 'react'
import "./Signup.css";

function Signup() {
  return (
    

  <div class="container">
    <h1>Create Your Account</h1>
    <form id="signup-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
        <label for="password">Conform Password:</label>
        <input type="password" id="password" name="password" required/>
      </div>
      <button type="submit">Sign Up</button><br/><br/>
      <button type="submit">login</button>
    </form>
    <div id="message"></div>
  </div>
  
  


    
  )
}

export default Signup