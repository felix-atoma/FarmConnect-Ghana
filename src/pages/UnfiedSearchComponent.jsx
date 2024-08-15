import React, { useState } from 'react';

const UnifiedSearchComponent = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    searchQuery: '',
    category: '',
    description: '',
    minPrice: '',
    maxPrice: '',
    sortOrder: 'asc'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: '#FFFFFF',
      padding: '60px', // Ensure padding fits items well
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      border: '1px solid #ddd',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '4px', // Small gap between items
      justifyContent: 'center', // Center items horizontally
      width: '100%',
      maxWidth: '100%',
      margin: '0 auto',
      boxSizing: 'border-box'
    }}>
      <select 
        id="category" 
        name="category" 
        value={filters.category} 
        onChange={handleChange} 
        style={{
          padding: '4px',
          border: '1px solid #ddd',
          backgroundColor: '#F9F9F9',
          fontSize: '12px',
          boxSizing: 'border-box',
          width: '80px',
          marginRight: '4px',
        }}
      >
        <option value="">Cat</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
        {/* Add more categories as needed */}
      </select>

      <input 
        type="text" 
        id="searchQuery" 
        name="searchQuery" 
        value={filters.searchQuery} 
        onChange={handleChange} 
        placeholder="Name"
        style={{
          padding: '4px',
          border: '1px solid #ddd',
          backgroundColor: '#F9F9F9',
          fontSize: '12px',
          boxSizing: 'border-box',
          width: '80px',
          marginRight: '4px',
        }}
      />

      <input 
        type="text" 
        id="description" 
        name="description" 
        value={filters.description} 
        onChange={handleChange} 
        placeholder="Desc"
        style={{
          padding: '4px',
          border: '1px solid #ddd',
          backgroundColor: '#F9F9F9',
          fontSize: '12px',
          boxSizing: 'border-box',
          width: '80px',
          marginRight: '4px',
        }}
      />

      <input 
        type="number" 
        id="minPrice" 
        name="minPrice" 
        value={filters.minPrice} 
        onChange={handleChange} 
        placeholder="Min GHS"
        style={{
          padding: '4px',
          border: '1px solid #ddd',
          backgroundColor: '#F9F9F9',
          fontSize: '12px',
          boxSizing: 'border-box',
          width: '80px',
          marginRight: '4px',
        }}
      />

      <input 
        type="number" 
        id="maxPrice" 
        name="maxPrice" 
        value={filters.maxPrice} 
        onChange={handleChange} 
        placeholder="Max GHS"
        style={{
          padding: '4px',
          border: '1px solid #ddd',
          backgroundColor: '#F9F9F9',
          fontSize: '12px',
          boxSizing: 'border-box',
          width: '80px',
          marginRight: '4px',
        }}
      />

      <select 
        id="sortOrder" 
        name="sortOrder" 
        value={filters.sortOrder} 
        onChange={handleChange} 
        style={{
          padding: '4px',
          border: '1px solid #ddd',
          backgroundColor: '#F9F9F9',
          fontSize: '12px',
          boxSizing: 'border-box',
          width: '80px',
          marginRight: '4px',
        }}
      >
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>

      <button 
        type="submit" 
        style={{
          backgroundColor: '#71B34A',
          color: '#FFFFFF',
          padding: '4px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
          width: '80px',
          whiteSpace: 'nowrap'
        }}
      >
        Search
      </button>
    </form>
  );
};

export default UnifiedSearchComponent;
