// src/components/ProductDetail.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl font-semibold">Price: GHS {product.price}</p>
      <p className="text-lg">Category: {product.category}</p>
      {/* Add more product details if needed */}
    </div>
  );
};

export default ProductDetail;
