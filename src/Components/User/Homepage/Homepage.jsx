import React from 'react'
import "./Homepage.css"
import img1 from '../../../Assets/img1.jpg';
import img2 from '../../../Assets/img2.webp'

function Homepage() {
  return (
    <div className='home'>
      <h1>Welcome to Our Website!</h1>
      <div className="img">
        <img src={img1} alt="Error 404" />
        <img src={img2} alt="Error 404" />
      </div>
    </div>
  )
}

export default Homepage