import React from 'react';
import "./Header.css";
//import {useHistory} from 'react-router-dom';

function Header() {
  // const history = useHistory();

  // const handleLogin = () => {
  //   // Redirect to the login page
  //   history.push('/login');
  
  return (
    <div className='header'>
      <h1>ZaC's MeN</h1>
      <div className='header-links'>
        <ul>
          <li><a href='#'>New Arrivals</a></li>
          <li><a href='#'>Brand Collection</a></li>
          <li><a href='#'>Kids Collection</a></li>
          <li><a href='#'>Special Offers</a></li>
        </ul> 
      </div>
      <div className='header-user'>
        <button className='login-button' >Login</button>
        <button className='signup-button'>Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
