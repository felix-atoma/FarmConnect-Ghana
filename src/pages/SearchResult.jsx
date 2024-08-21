// src/components/SearchResults.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import allProducts from '../services/AllProductsData';

const filterProducts = (searchQuery, category, minPrice, maxPrice) => {
  return allProducts.filter(product => {
    const matchesCategory = category ? product.type === category : true;
    const matchesName = searchQuery ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    const matchesPrice = (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);

    return matchesCategory && matchesName && matchesPrice;
  });
};

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const searchQuery = queryParams.get('query') || '';
  const category = queryParams.get('category') || '';
  const minPrice = parseInt(queryParams.get('minPrice') || '0', 10);
  const maxPrice = parseInt(queryParams.get('maxPrice') || 'Infinity', 10);

  const filteredProducts = filterProducts(searchQuery, category, minPrice, maxPrice);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Search Results</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <li key={product.id} onClick={() => handleProductClick(product)} className="border rounded p-4 cursor-pointer">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p>Price: GHS {product.price}</p>
            </li>
          ))
        ) : (
          <p>No products found matching your criteria.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResults;
