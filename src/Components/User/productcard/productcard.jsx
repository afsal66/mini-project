// ProductCard.js
import React from 'react';
import './productcard.css';
import kids from '../../../Assets/kids.jpg';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={kids} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ${product.price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
