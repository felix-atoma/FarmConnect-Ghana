// src/components/Customer/ProductSearch.jsx
import React, { useState } from 'react';

const ProductSearch = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    type: '',
    location: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSearch} style={formStyle}>
      <input
        type="text"
        name="type"
        value={searchParams.type}
        onChange={handleChange}
        placeholder="Type"
        style={inputStyle}
      />
      <input
        type="text"
        name="location"
        value={searchParams.location}
        onChange={handleChange}
        placeholder="Location"
        style={inputStyle}
      />
      <input
        type="number"
        name="minPrice"
        value={searchParams.minPrice}
        onChange={handleChange}
        placeholder="Min Price"
        style={inputStyle}
      />
      <input
        type="number"
        name="maxPrice"
        value={searchParams.maxPrice}
        onChange={handleChange}
        placeholder="Max Price"
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Search</button>
    </form>
  );
};

// Inline CSS styles
const formStyle = { display: 'flex', flexDirection: 'column', gap: '10px' };
const inputStyle = { padding: '10px', borderRadius: '5px', border: '1px solid #ddd' };
const buttonStyle = { padding: '10px', borderRadius: '5px', backgroundColor: '#71B34A', color: '#fff', border: 'none' };

export default ProductSearch;
