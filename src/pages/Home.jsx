import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSms, FaMapMarkerAlt } from 'react-icons/fa';
import HeroSection from './HeroSection';
import SDGsSection from './SDGSection';
import ProductList from '../components/farmers/ProductList';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const agriculturalItems = [
    'Tomatoes', 'Potatoes', 'Onions', 'Cabbage', 'Carrots', 'Lettuce', 'Spinach', 'Beans', 
    'Corn', 'Garlic', 'Ginger', 'Peppers', 'Eggplants', 'Cucumbers', 'Pumpkins', 'Zucchini', 
    'Sweet Potatoes', 'Radishes', 'Beets', 'Okra', 'Kale', 'Broccoli', 'Cauliflower', 
    'Green Beans', 'Brussels Sprouts', 'Turnips', 'Squash', 'Chard', 'Asparagus', 
    'Artichokes', 'Cattle', 'Goats', 'Sheep', 'Pigs', 'Chickens', 'Turkeys', 'Ducks', 
    'Geese', 'Rabbits', 'Horses', 'Donkeys', 'Alpacas', 'Llamas', 'Bees', 'Fish', 
    'Pigeons', 'Quail', 'Guinea Fowl', 'Emus', 'Ostriches'
  ];

  useEffect(() => {
    if (searchQuery) {
      const filteredSuggestions = agriculturalItems.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', { searchQuery, category, minPrice, maxPrice, sortOrder });
    // Implement search logic
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/product/${encodeURIComponent(suggestion)}`);
    setSearchQuery('');
    setSuggestions([]);
  };

  const handleSmsClick = () => {
    console.log('SMS button clicked');
    // Implement SMS logic
  };

  return (
    <div style={{ 
      backgroundColor: '#FFFFFF', // White background for the entire page
      minHeight: '100vh',
      padding: '20px'
    }}>
      <header style={{ 
        backgroundColor: '#FFFFFF', // White background for header
        padding: '20px', 
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
              fontSize: '1.2rem'
            }}
          >
            <FaMapMarkerAlt />
            Find Regions
          </div>

          <h2 style={{ marginBottom: '20px' }}>Search for every farming produce in Ghana</h2>
          <form onSubmit={handleSearchSubmit} style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            width: '100%',
            maxWidth: '600px'
          }}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by name..."
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
                cursor: 'pointer'
              }}
            >
              Search
            </button>
            {suggestions.length > 0 && (
              <ul style={{ 
                position: 'absolute', 
                top: '100%', 
                left: '0', 
                width: '100%', 
                backgroundColor: '#FFFFFF', 
                border: '1px solid #ddd', 
                borderRadius: '4px', 
                marginTop: '10px', 
                padding: '0', 
                listStyle: 'none', 
                zIndex: '10'
              }}>
                {suggestions.map((suggestion, index) => (
                  <li 
                    key={index} 
                    onClick={() => handleSuggestionClick(suggestion)}
                    style={{ 
                      padding: '10px', 
                      cursor: 'pointer', 
                      borderBottom: '1px solid #ddd'
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>
      </header>
      <HeroSection style={{ marginBottom: '20px' }} />
      <SDGsSection style={{ marginBottom: '20px' }} />
      <ProductList style={{ marginBottom: '20px' }} />
      <div className="fixed-button">
        <button
          onClick={handleSmsClick}
          style={{
            backgroundColor: '#F7931E',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
          }}
        >
          <FaSms size={24} />
        </button>
      </div>
    </div>
  );
};

export default Home;
