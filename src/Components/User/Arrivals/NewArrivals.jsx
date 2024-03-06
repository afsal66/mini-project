import React from 'react'
import ProductPage from "../productpage/productpage";
import menData from "../../../Data/Men.json";


function NewArrivals() {
    const NewArrivals= menData.Men.sort((a,b)=>new Date(b.dateAdded)-new Date(a.dateAdded));
  return (
    <>
<div className='Newarrivals'>
    <div className='Newarrival heading'>
    </div>
    <h1>New Arrivals</h1>
    <ProductPage products={NewArrivals}/>
</div>
    </>
  )
}

export default NewArrivals