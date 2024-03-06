import React from 'react'
import {Route,Routes} from "react-router-dom";
import Userhomepage from '../Pages/User/Userhomepage';
import Userlogin from '../Pages/User/Userlogin';
import Usersignup from '../Pages/User/Usersignup';
import Usersingleproduct from '../Pages/User/Usersingleproduct';
import UserNewArrivals from '../Pages/User/UserNewArrivals';
import Userkids from '../Pages/User/Userkids';
import Mensfashion from '../Pages/User/Usermensfashion';

function Userrouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Userhomepage />}/>
        <Route path="/login" element={<Userlogin />}/>
        <Route path="/signup" element={<Usersignup />}/>
        <Route path="/products" element={<Usersingleproduct />}/>
        <Route path='/newarrivals' element={<UserNewArrivals/>}/>
        <Route path='/Kids' element={<Userkids/>}/>
        <Route path='/mens' element={<Mensfashion/>}/>
      </Routes>
    </div>
  )
}

export default Userrouter