import React from 'react'
import ProductPage from '../productpage/productpage';
import menData from '../../../Data/Men.json'
function Mensfashion() {
    const mensfashion=menData.Men.filter(men=> men.isMens ===true);
  return (
    <>
<div className='mens heading'>
    <h1>Mens Fashion</h1>
    <ProductPage products={mensfashion}/>

</div>
    </>
  )
}

export default Mensfashion