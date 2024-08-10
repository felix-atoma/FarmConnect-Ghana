import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MapContainer from '../components/common/MapContainer';
import { FaSms, FaMapMarkerAlt } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import MessageHolder from './MessageHolder';

const Home = () => {
  const [showCard, setShowCard] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [message, setMessage] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate();

  const locations = [
    { lat: 5.6037, lng: -0.1870 },
    { lat: 5.6038, lng: -0.1871 }
  ];
  const center = { lat: 5.6037, lng: -0.1870 };

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

  const handleFarmerDashboardClick = () => {
    navigate('/farmer-dashboard');
  };

  const handleCustomerDashboardClick = () => {
    navigate('/customer-dashboard');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', searchQuery);
  };

  const handleGeolocationClick = () => {
    navigate('/regions');
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
            onClick={handleGeolocationClick} 
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

      <section style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2>Featured Products</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div
            style={{ 
              width: '200px', 
              backgroundColor: '#F5F5F5', 
              padding: '10px', 
              borderRadius: '8px',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = '#E0E0E0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#F5F5F5';
            }}
            onClick={() => navigate('/product/produce-1')} // Example click handler
          >
            <img src="https://via.placeholder.com/200" alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
            <h3>Product 1</h3>
            <p>Description of Product 1.</p>
          </div>

          <div
            style={{ 
              width: '200px', 
              backgroundColor: '#F5F5F5', 
              padding: '10px', 
              borderRadius: '8px',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = '#E0E0E0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#F5F5F5';
            }}
            onClick={() => navigate('/product/produce-2')} // Example click handler
          >
            <img src="https://via.placeholder.com/200" alt="Product 2" style={{ width: '100%', borderRadius: '8px' }} />
            <h3>Product 2</h3>
            <p>Description of Product 2.</p>
          </div>
        </div>
      </section>

      <section>
        <MapContainer locations={locations} center={center} />
      </section>

      {showCard && <MessageHolder />}
      
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
    </div>
  );
};

export default Home;
