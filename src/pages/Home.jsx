import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapContainer from '../components/common/MapContainer';
import { FaSms, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaUser } from 'react-icons/fa';
import { MdMessage, MdClose } from 'react-icons/md';

const Home = () => {
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();

  const locations = [
    { lat: 5.6037, lng: -0.1870 }, 
    { lat: 5.6038, lng: -0.1871 }
  ];
  const center = { lat: 5.6037, lng: -0.1870 };

  const handleSmsClick = () => {
    setShowCard(!showCard);
    console.log('SMS Clicked, Show Card:', !showCard);
  };

  const handleContactSupportClick = () => {
    navigate('/message-holder');
  };

  const handleFarmerDashboardClick = () => {
    navigate('/farmer-dashboard'); // Replace with the actual route for the farmer dashboard
  };

  const handleCustomerDashboardClick = () => {
    navigate('/customer-dashboard'); // Replace with the actual route for the customer dashboard
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <h1>Welcome to FarmConnect Ghana</h1>
      <MapContainer locations={locations} center={center} />
      
      <div
        onClick={handleSmsClick}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#71B34A',
          borderRadius: '50%',
          padding: '10px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 1000, // Ensure it is above other content
        }}
      >
        <FaSms size={24} color="#FFFFFF" />
        <div style={{ color: '#FFFFFF', fontSize: '0.75rem', textAlign: 'center', marginTop: '5px' }}>
          Support Team
        </div>
      </div>
      
      {showCard && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            backgroundColor: '#FFFFFF',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            width: '300px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000, // Ensure it is above other content
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: '50px' }}></div> {/* Placeholder for logo if needed */}
            <MdClose 
              size={24} 
              style={{ cursor: 'pointer' }} 
              onClick={() => setShowCard(false)} 
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src="https://via.placeholder.com/50" alt="Support Team" style={{ borderRadius: '50%', marginRight: '10px' }} />
              <img src="https://via.placeholder.com/50" alt="Support Team" style={{ borderRadius: '50%', marginRight: '10px' }} />
              <img src="https://via.placeholder.com/50" alt="Support Team" style={{ borderRadius: '50%' }} />
            </div>
            <h3>Hello, [User's Name]!</h3>
            <p>How may we help you?</p>
          </div>
          <div
            style={{
              backgroundColor: '#71B34A',
              color: '#FFFFFF',
              padding: '10px',
              borderRadius: '0.5rem',
              cursor: 'pointer',
            }}
            onClick={handleContactSupportClick} 
          >
            <MdMessage size={20} /> Contact Support
          </div>
        </div>
      )}

      {/* Social Media Sidebar */}
      <div
        style={{
          position: 'fixed',
          right: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#71B34A', // Green background
          borderRadius: '0.5rem',
          padding: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 1000, // Ensure it is above other content
        }}
      >
        <a
          href="https://facebook.com/yourprofile" // Replace with your Facebook profile link
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '10px 0', color: '#3b5998' }} // Facebook color
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://twitter.com/yourprofile" // Replace with your Twitter profile link
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '10px 0', color: '#1DA1F2' }} // Twitter blue
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://instagram.com/yourprofile" // Replace with your Instagram profile link
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '10px 0', color: '#C13584' }} // Instagram pink
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '10px 0', color: '#0077B5' }} // LinkedIn blue
        >
          <FaLinkedin size={30} />
        </a>
      </div>

      {/* Dashboard Selection Cards */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        zIndex: 1000 // Ensure it is above other content
      }}>
        <div 
          onClick={handleFarmerDashboardClick}
          style={{
            backgroundColor: '#71B34A',
            color: '#FFFFFF',
            padding: '20px',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <FaHome size={24} color="#FFFFFF" />
          <span>Farmer Dashboard</span>
        </div>
        <div 
          onClick={handleCustomerDashboardClick}
          style={{
            backgroundColor: '#FFA500',
            color: '#FFFFFF',
            padding: '20px',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <FaUser size={24} color="#FFFFFF" />
          <span>Customer Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
