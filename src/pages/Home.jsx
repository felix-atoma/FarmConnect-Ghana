import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UnifiedSearchComponent from '../pages/UnfiedSearchComponent';
import ImageCarousel from '../pages/CarouselItems'; // Ensure this component is correctly implemented
import { FaMapMarkerAlt, FaCartPlus, FaHeart, FaInfoCircle } from 'react-icons/fa';
import Support from '../pages/Support'

// Example images for the carousel with correct import
import tomato from '../assets/tomato.webp';
import salad from '../assets/salad.webp';
import vegetable from '../assets/vegetable.jpeg';
import pepper from '../assets/pepper.webp';
import mart from '../assets/mart.jpeg';
import laitua from '../assets/laitua.jpeg';
import ginger from '../assets/ginger.jpeg';
import cucumber from '../assets/cocumber.jpeg'; // Fixed typo
import carrot from '../assets/carot.jpeg'; // Fixed typo
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
  { name: 'Laitus', price: 'GHS 18', image: laitua },
  { name: 'Ginger', price: 'GHS 25', image: ginger },
  { name: 'Cucumber', price: 'GHS 5', image: cucumber },
  { name: 'Carrot', price: 'GHS 7', image: carrot },
  { name: 'Tomato', price: 'GHS 9', image: tomatomato }
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
      <style>{`
        @keyframes dance {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          50% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
        .icon-overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.3);
        }
        .icon-overlay button {
          background: transparent;
          border: none;
          color: #FFFFFF;
          font-size: 1.5rem;
          margin: 5px;
          cursor: pointer;
          transition: color 0.3s ease, border 0.3s ease;
        }
        .icon-overlay button:hover {
          color: #71B34A;
          animation: dance 1s infinite;
          border: 2px solid #71B34A;
        }
        .product-card {
          position: relative;
          width: calc(20% - 20px);
          box-sizing: border-box;
          margin-bottom: 20px;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .product-card:hover {
          transform: scale(1.05);
        }
        .product-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .product-info {
          padding: 10px;
          text-align: center;
          background: #FFFFFF;
          color: #000000; /* Text color set to black */
          font-size: 0.9rem;
        }
      `}</style>
      
      {/* Header with Full-Page Background Image */}
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0', textAlign :'center' }}>
            Find Fresh Farm Produce & <br /> Get Them Directly From <br /> Farm To Your Kitchen
          </h1>
      <div style={{ 
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <UnifiedSearchComponent onSearch={handleSearch} />
      </div>
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
        }}>Available Products</h2>
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
          }}>Fruits</a>
          <a href="#category2" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>Vegetables</a>
          <a href="#category3" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>Roots and Tubers</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>Cereals and grains</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>Legumes</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>Herbs and Spices</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>Nuts and Seeds</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>Animal producuct</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>Dairy products</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: '#71B34A',
            fontSize: '1rem'
          }}>Dairy products</a>
        </div>
      </div>

      {/* Product Image Cards */}
      <div 
        style={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
        {products.map((product, index) => (
          <div 
            key={index} 
            className="product-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
            <div className="icon-overlay">
              <button onClick={() => handleIconClick('cart')}>
                <FaCartPlus />
              </button>
              <button onClick={() => handleIconClick('heart')}>
                <FaHeart />
              </button>
              <button onClick={() => handleIconClick('info')}>
                <FaInfoCircle />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Support/>
    </div>
  );
};

export default Home;
