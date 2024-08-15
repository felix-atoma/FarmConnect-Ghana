import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UnifiedSearchComponent from '../pages/UnfiedSearchComponent'
import ProductList from '../components/farmers/ProductList';
import { FaMapMarkerAlt } from 'react-icons/fa';
import DatabaseImagesSection from  '../components/farmers/DataBaseImageSection'
import ImageCarousel from '../pages/CarouselItems';

// Example images for the carousel with correct import
import tomato from '../assets/tomato.webp';
import salad from '../assets/salad.webp';
import vegetable from '../assets/vegetable.jpeg';
import pepper from '../assets/pepper.webp';
import mart from '../assets/mart.jpeg';
import laitua from '../assets/laitua.jpeg';
import ginger from '../assets/ginger.jpeg';
import cucumber from '../assets/cocumber.jpeg';
import carrot from '../assets/carot.jpeg';
import tomatomato from '../assets/tomatomato.webp';

const carouselImages = [
  tomato,
  salad,
  vegetable,
  pepper,
  mart,
  laitua,
  ginger,
  cucumber,
  carrot,
  tomatomato
];

const products = [
  { name: 'Tomato', price: 'GHS 10', image: tomato },
  { name: 'Salad', price: 'GHS 15', image: salad },
  { name: 'Vegetable', price: 'GHS 12', image: vegetable },
  { name: 'Pepper', price: 'GHS 8', image: pepper },
  { name: 'Mart', price: 'GHS 20', image: mart },
  { name: 'Laitua', price: 'GHS 18', image: laitua },
  { name: 'Ginger', price: 'GHS 25', image: ginger },
  { name: 'Cucumber', price: 'GHS 5', image: cucumber },
  { name: 'Carrot', price: 'GHS 7', image: carrot },
  { name: 'Tomatomato', price: 'GHS 9', image: tomatomato }
];

const Home = () => {
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState(null);

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

  const handleIconClick = (iconType) => {
    setActiveIcon(iconType);
    navigate('/register');
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('.icon-overlay').style.opacity = '1';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('.icon-overlay').style.opacity = '0';
  };

  return (
    <div style={{ 
      backgroundColor: '#FFFFFF', 
      minHeight: '100vh',
      padding: '20px'
    }}>
      <header style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '40px',
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
              fontSize: '1.5rem', 
              color: '#71B34A'
            }}
          >
            <FaMapMarkerAlt />
            Find Regions
          </div>

          <h2 style={{ 
            marginBottom: '20px',
            fontSize: '2rem' 
          }}>
            Search for every farming produce in Ghana
          </h2>
          <UnifiedSearchComponent onSearch={handleSearch} />
        </div>
      </header>

      {/* Carousel Component */}
      <div style={{ 
        marginBottom: '20px',
        border: '1px solid #ddd',
        boxSizing: 'border-box'
      }}>
        <ImageCarousel images={carouselImages} />
      </div>

      {/* Title and Category Links */}
      <div style={{ 
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <h2 style={{ 
          marginBottom: '20px',
          fontSize: '2rem'
        }}>Featured Products</h2>
        <div>
          <a href="#all" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>All</a>
          <a href="#category1" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>Category 1</a>
          <a href="#category2" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>Category 2</a>
          <a href="#category3" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>Category 3</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>Category 4</a>
        </div>
      </div>

      {/* Product Image Cards */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px' 
      }}>
        {products.map((product, index) => (
          <div 
            key={index}
            style={{ 
              position: 'relative',
              width: 'calc(20% - 20px)',
              height: '250px',
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              marginBottom: '20px',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ 
                width: '100%',
                height: '70%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease'
              }}
            />
            <div 
              style={{ 
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                padding: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                boxSizing: 'border-box',
                zIndex: 1
              }}
            >
              <h3 style={{ 
                margin: '0',
                fontSize: '1rem',
                color: '#333'
              }}>{product.name}</h3>
              <p style={{ 
                margin: '0',
                fontSize: '1rem',
                color: '#333'
              }}>{product.price}</p>
            </div>
            <div 
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                zIndex: 1
              }}
              className="icon-overlay"
            >
              <button 
                onClick={() => handleIconClick('cart')}
                style={{ 
                  background: 'transparent',
                  border: 'none',
                  color: activeIcon === 'cart' ? '#71B34A' : '#FFFFFF',
                  fontSize: '1.5rem',
                  margin: '5px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
              >
                &#128722; {/* Cart icon */}
              </button>
              <button 
                onClick={() => handleIconClick('heart')}
                style={{ 
                  background: 'transparent',
                  border: 'none',
                  color: activeIcon === 'heart' ? '#71B34A' : '#FFFFFF',
                  fontSize: '1.5rem',
                  margin: '5px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
              >
                &#9825; {/* Heart icon */}
              </button>
              <button 
                onClick={() => handleIconClick('share')}
                style={{ 
                  background: 'transparent',
                  border: 'none',
                  color: activeIcon === 'share' ? '#71B34A' : '#FFFFFF',
                  fontSize: '1.5rem',
                  margin: '5px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
              >
                &#128257; {/* Share icon */}
              </button>
            </div>
          </div>
        ))}
      </div>

      <DatabaseImagesSection />
      <ProductList />
    </div>
  );
};

export default Home;
