import React from 'react'
import "./productpage.css";
import ProductCard from '../productcard/productcard';
function productpage({products}) {
  return (
    
    <div>
        <div className='productpage'>
            {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
            ))}
        </div>

    </div>
  )
}

export default productpage