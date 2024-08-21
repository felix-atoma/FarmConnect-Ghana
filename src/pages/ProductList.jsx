// src/components/ProductsList.jsx
import React, { useState } from 'react';
import { products } from '../services/ProductData'
import UnifiedSearchComponent from './UnifiedSearchComponent';

const ProductsList = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (filters) => {
    const { searchQuery, category, description, minPrice, maxPrice, sortOrder } = filters;

    const filtered = products.filter(product => {
      return (
        (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (category === '' || product.category === category) &&
        (description === '' || product.description?.toLowerCase().includes(description.toLowerCase())) &&
        (minPrice === '' || product.price >= parseFloat(minPrice)) &&
        (maxPrice === '' || product.price <= parseFloat(maxPrice))
      );
    });

    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <UnifiedSearchComponent onSearch={handleSearch} />
      <div>
        {filteredProducts.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: GHS {product.price}</p>
            <p>Category: {product.category}</p>
            {/* Render other product details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
