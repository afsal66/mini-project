import React from 'react'
import ProductPage from '../productpage/productpage';
import menData from '../../../Data/Men.json';
function Kids() {
    const Userkids= menData.Men.filter(kids => kids.isKids === true);
  return (
    <div>
<div className="kids">
    <div className="kids heading">

    </div>
    <h1>Kids Collection</h1>
    <ProductPage products={Userkids}/>
</div>
    </div>
  )
}

export default Kids