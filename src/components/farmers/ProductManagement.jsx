// src/components/ProductManagement.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductManagement = () => {
  // Example product list
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    // Add more products
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Manage Products</h1>
      <ul style={listStyle}>
        {products.map(product => (
          <li key={product.id} style={itemStyle}>
            <Link to={`/farmer-dashboard/products/${product.id}`} style={linkStyle}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline CSS styles
const containerStyle = { padding: '20px' };
const headingStyle = { fontSize: '24px', marginBottom: '20px' };
const listStyle = { listStyleType: 'none', padding: '0' };
const itemStyle = { marginBottom: '10px' };
const linkStyle = { textDecoration: 'none', color: '#007BFF' };

export default ProductManagement;
