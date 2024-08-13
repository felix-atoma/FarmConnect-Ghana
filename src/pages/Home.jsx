import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSms, FaMapMarkerAlt } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import SDGsSection from './SDGSection';
import HeroSection from './HeroSection';
import Testimonials from './Testimonials';
const Home = () => {
  const [showCard, setShowCard] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleSmsClick = () => {
    console.log('SMS button clicked');
    setShowCard(!showCard);
    console.log('Show card state:', !showCard);
  };

  const handleContactSupportClick = () => {
    navigate('/message-holder');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', searchQuery);
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/product/${encodeURIComponent(suggestion)}`);
    setSearchQuery('');
    setSuggestions([]);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ 
          backgroundColor: '#71B34A', 
          height: '33vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          borderRadius: '8px',
          marginBottom: '20px',
          padding: '20px'
        }}>
          <div 
            onClick={() => navigate('/regions')} 
            style={{ 
              marginBottom: '10px', 
              cursor: 'pointer', 
              color: '#FFFFFF', 
              display: 'flex', 
              alignItems: 'center',
              gap: '5px',
              fontSize: '1.2rem'
            }}
          >
            <FaMapMarkerAlt />
            Find Regions
          </div>

          <h2 style={{ color: '#FFFFFF', marginBottom: '10px' }}>Search for every farming produce in Ghana</h2>
          <form onSubmit={handleSearchSubmit} style={{ 
            display: 'flex', 
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            position: 'relative'
          }}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="I am looking for..."
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
            {suggestions.length > 0 && (
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '10px 0 0',
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                position: 'absolute',
                top: '100%',
                left: 0,
                zIndex: 1
              }}>
                {suggestions.map((suggestion, index) => (
                  <li 
                    key={index} 
                    style={{
                      padding: '10px',
                      borderBottom: '1px solid #ddd',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                    }}
                    onClick={() => handleSuggestionClick(suggestion)}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F7931E'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>
      </header>

      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
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
       <HeroSection/>
      {/* SDGs Section */}
      <SDGsSection />
      <Testimonials/>
    </div>
  );
};

export default Home;
