import React from 'react';
import "./Header.css";
import {Link, useNavigate} from 'react-router-dom';
//import {useHistory} from 'react-router-dom';

function Header() {

  const navigate = useNavigate();
  const handleClickLogin = () => navigate("/login");
  const handleClickSignup = () => navigate("/signup");
  // const history = useHistory();

  // const handleLogin = () => {
  //   // Redirect to the login page
  //   history.push('/login');
  
  return (
    <div className='headeradmin'>
      <h1>ZaC's MeN</h1>
      <div className='header-links'>
        <ul>
          <li><Link to='/Addproduct'>Addproduct</Link></li>
          {/* <li><Link to='/mens'></Link></li>
          <li><Link to='/Kids'>Kids Collection</Link></li> */}
          {/* <li><Link to='#'>Special Offer</Link></li> */}
        </ul> 
      </div>
      <div className='header-user'>
        <button className='login-button' onClick={handleClickLogin}>Login</button>
        <button className='signup-button'onClick={handleClickSignup}>Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
