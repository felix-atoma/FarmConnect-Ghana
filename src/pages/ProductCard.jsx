// ProductCard.jsx
import React from 'react';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
