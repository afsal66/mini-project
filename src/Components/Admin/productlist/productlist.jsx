// ProductList.js
import React from 'react';
import "./productlist.css";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Men\'s Shirt',
      category: 'Shirts',
      price: 29.99,
      description: 'Comfortable cotton shirt for men.',
      
    },
    {
      id: 2,
      name: 'Men\'s Jeans',
      category: 'Jeans',
      price: 49.99,
      description: 'Classic denim jeans for men.',
    },
    {
      id: 3,
      name: 'Men\'s Tshirts',
      category: 'Tshirts',
      price: 299.99,
      description: 'Comfortable  Tshirt for men.',
      
    },
    {
      id: 4,
      name: 'Kids Shirt',
      category: 'Shirts',
      price: 99.99,
      description: 'Comfortable cotton shirt for kids.',

    },

    // Add more products as needed
  ];

  return (
    <div>
      <h2>Men's Wear</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
