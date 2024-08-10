import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

const DistrictDetail = () => {
  const { region, district } = useParams();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', searchQuery);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ 
        backgroundColor: '#71B34A', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#FFFFFF' }}>Search for everything in {district}</h2>
        <form onSubmit={handleSearchSubmit} style={{ 
          display: 'flex', 
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            style={{ 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #ddd', 
              flex: '1' 
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#71B34A',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <MdSearch size={20} style={{ marginRight: '5px' }} />
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default DistrictDetail;
