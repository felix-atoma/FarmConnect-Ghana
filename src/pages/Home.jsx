import React from 'react';
import { useNavigate } from 'react-router-dom';
import UnifiedSearchComponent from './UnfiedSearchComponent';
import HeroSection from './HeroSection';
import SDGsSection from './SDGSection';
import ProductList from '../components/farmers/ProductList';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import icon if it's not already imported

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (filters) => {
    const query = new URLSearchParams({
      query: filters.searchQuery,
      category: filters.category,
      description: filters.description,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
      sortOrder: filters.sortOrder
    }).toString();

    navigate(`/search?${query}`);
  };

  return (
    <div style={{ 
      backgroundColor: '#FFFFFF', 
      minHeight: '100vh',
      padding: '20px'
    }}>
      <header style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '40px', // Increased padding
        borderRadius: '8px', 
        marginBottom: '40px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div 
          style={{ 
            color: '#71B34A', 
            textAlign: 'center',
            marginBottom: '20px',
            width: '100%',
            maxWidth: '800px'
          }}
        >
          <div 
            onClick={() => navigate('/regions')} 
            style={{ 
              marginBottom: '10px', 
              cursor: 'pointer', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              gap: '5px',
              fontSize: '1.5rem', // Increased font size
              color: '#71B34A'
            }}
          >
            <FaMapMarkerAlt />
            Find Regions
          </div>

          <h2 style={{ 
            marginBottom: '20px',
            fontSize: '2rem' // Increased font size
          }}>
            Search for every farming produce in Ghana
          </h2>
          <UnifiedSearchComponent onSearch={handleSearch} />
        </div>
      </header>
      <HeroSection style={{ marginBottom: '20px' }} />
      <SDGsSection style={{ marginBottom: '20px' }} />
      <ProductList style={{ marginBottom: '20px' }} />
    </div>
  );
};

export default Home;
