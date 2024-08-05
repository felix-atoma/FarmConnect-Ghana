// src/components/Customer/ProductDetail.jsx
import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div style={detailStyle}>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <button style={buttonStyle} onClick={() => alert('Add to Cart')}>Add to Cart</button>
    </div>
  );
};

// Inline CSS styles
const detailStyle = { padding: '20px', border: '1px solid #ddd', borderRadius: '5px' };
const buttonStyle = { padding: '10px', borderRadius: '5px', backgroundColor: '#71B34A', color: '#fff', border: 'none' };

export default ProductDetail;
