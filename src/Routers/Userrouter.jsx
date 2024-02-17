import React from 'react'
import {Route,Routes} from "react-router-dom";
import Userhomepage from '../Pages/User/Userhomepage';
import Userlogin from '../Pages/User/Userlogin';
import Usersignup from '../Pages/User/Usersignup';
import Usersingleproduct from '../Pages/User/Usersingleproduct';


function Userrouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Userhomepage />}/>
        <Route path="/login" element={<Userlogin />}/>
        <Route path="/signup" element={<Usersignup />}/>
        <Route path="/products" element={<Usersingleproduct />}/>
      </Routes>
    </div>
  )
}

export default Userrouter