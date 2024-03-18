import React from 'react'
import Header from '../../Components/Admin/Header/Header'
import Footer from '../../Components/Admin/Footer/Footer'
import Userlist from '../../Components/Admin/Userlist/Userlist'

function Adminhomepage() {
  return (
    <div>
        <Header/>
        <Userlist/>
        <Footer/>
    </div>
  )
}

export default Adminhomepage