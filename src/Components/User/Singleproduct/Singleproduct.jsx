import React from 'react';

const SingleProductPage = () => {
  // Dummy product data (you can replace it with actual data fetched from a server)
  const product = {
    id: 1,
    name: "Example Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisi velit.",
    price: 29.99,
    imageUrl: "https://example.com/product-image.jpg",
  };

  return (
    <div className="single-product-page">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProductPage;
