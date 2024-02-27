import React from 'react'
import "./Login.css";

function Login() {
  return (
    <div  className="login-page">
    <div class="login">
        <h2>Login</h2>
        <form id="user">
            <div class="user">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="user">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button className='login button' type="submit">Login</button>
        </form>
    </div>

    


    </div>
  );
}

export default Login