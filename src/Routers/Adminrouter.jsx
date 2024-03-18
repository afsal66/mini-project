import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admineditproduct from '../Pages/Admin/Admineditproduct'
import Adminhomepage from '../Pages/Admin/Adminhomepage'
import Adminlogin from '../Pages/Admin/Adminlogin'
import Adminuserlist from '../Pages/Admin/Adminuserlist'
import Adminproductlist from '../Pages/Admin/Adminproductlist'

function Adminrouter() {
  return (
    <div>
       <Routes>
       <Route path="/" element={<Adminhomepage />}/>

        <Route path="/edit" element={<Admineditproduct/>}/>
        <Route path="/adminlogin" element={<Adminlogin/>}/>
        {/* <Route path="/userlist" element={<Adminuserlist/>}/> */}
        <Route path="/productlist" element={<Adminproductlist/>}/>
       </Routes>
    </div>
  )
}

export default Adminrouter