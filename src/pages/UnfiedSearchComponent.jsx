import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const UnifiedSearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ searchQuery, category, description, minPrice, maxPrice, sortOrder });
  };

  return (
    <div style={{ 
      backgroundColor: '#FFFFFF', 
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          backgroundColor: '#F7931E',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 20px',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'left'
        }}
      >
        Search <FaSearch />
      </button>

      {isExpanded && (
        <form onSubmit={handleSearch} style={{ marginTop: '20px' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name..."
            style={{ 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #ddd', 
              width: '100%',
              marginBottom: '10px'
            }}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Search by description..."
            style={{ 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #ddd', 
              width: '100%',
              marginBottom: '10px'
            }}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd', marginBottom: '10px', width: '100%' }}
          >
            <option value="">Select Category</option>
            <option value="vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="meat">Meat</option>
            {/* Add more categories as needed */}
          </select>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min Price"
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd', marginBottom: '10px', width: '100%' }}
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max Price"
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd', marginBottom: '10px', width: '100%' }}
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd', marginBottom: '10px', width: '100%' }}
          >
            <option value="asc">Sort Ascending</option>
            <option value="desc">Sort Descending</option>
          </select>
          <button
            type="submit"
            style={{ 
              backgroundColor: '#F7931E', 
              color: '#FFFFFF', 
              border: 'none', 
              borderRadius: '4px', 
              padding: '10px 20px', 
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Search
          </button>
        </form>
      )}
    </div>
  );
};

export default UnifiedSearchComponent;
