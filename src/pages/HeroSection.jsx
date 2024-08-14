import React from 'react';
import CarouselComponent from './CarouselItems';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '' }}>
      {/* Header */}
      <header style={{ color: '#333333', padding: '16px', textAlign: 'center', width: '100%', backgroundColor: '#F4F4F4' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Welcome to FarmConnect Ghana</h1>
        <p style={{ fontSize: '1.125rem', marginTop: '8px' }}>Empowering Farmers, Connecting Markets, and Supporting Growth</p>
      </header>

      {/* Full-Screen Carousel with Text */}
      <section style={{ position: 'relative', width: '100%', height: 'calc(100vh - 80px)', overflow: 'hidden' }}>
        <CarouselComponent />
      </section>

      {/* Get Started Button */}
      <div style={{ textAlign: 'center', padding: '20px', width: '100%', marginTop: '20px' }}>
        <Link to="/register">
          <button style={{
            backgroundColor: '#F7931E', // Orange color
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }} 
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ed8936'} // Darker orange color on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F7931E'} // Back to original orange color
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
