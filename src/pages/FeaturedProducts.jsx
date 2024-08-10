import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Sample region data
const regions = [
  { name: 'Greater Accra Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Ashanti Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Eastern Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Central Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Northern Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Upper East Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Upper West Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Savannah Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Volta Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Oti Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Bono East Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'North East Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Bono Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Western North Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Western Region', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Ahafo Region', imageUrl: 'https://via.placeholder.com/200' }
];

const ITEMS_PER_PAGE = 4;

const FeaturedProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentRegions = regions.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(regions.length / ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h2>Featured Regions</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {currentRegions.map((region, index) => (
          <div
            key={index}
            style={{ 
              width: '200px', 
              backgroundColor: '#F5F5F5', 
              padding: '10px', 
              borderRadius: '8px',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <img src={region.imageUrl} alt={region.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{region.name}</h3>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          style={{ backgroundColor: '#71B34A', color: '#FFFFFF', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          style={{ backgroundColor: '#71B34A', color: '#FFFFFF', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
