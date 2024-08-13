import React from 'react';
import CarouselComponent from './CarouselItems';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: '#f7f7f7', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#2f855a', color: '#ffffff', padding: '16px', textAlign: 'center', width: '100%' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Welcome to FarmConnect Ghana</h1>
        <p style={{ fontSize: '1.125rem', marginTop: '8px' }}>Empowering Farmers, Connecting Markets, and Supporting Growth</p>
      </header>

      {/* Full-Screen Carousel with Text */}
      <section style={{ position: 'relative', width: '100%', height: 'calc(100vh - 80px)', overflow: 'hidden' }}>
        <CarouselComponent />
      </section>

      {/* Get Started Button */}
      <div style={{ textAlign: 'center', padding: '20px', width: '100%' }}>
        <Link to="/register">
          <button style={{
            backgroundColor: '#38a169', // Green color
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginTop: '20px', // Added margin to ensure spacing from carousel
          }} 
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ed8936'} // Orange color on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#38a169'} // Back to green color
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
