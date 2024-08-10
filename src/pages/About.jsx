import React from 'react';
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  padding: '20px',
  backgroundColor: '#FFFFFF',
};

const sectionStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '40px',
};

const sectionReverseStyle = {
  ...sectionStyle,
  flexDirection: 'row-reverse',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '20px',
};

const buttonStyle = {
  backgroundColor: '#F7931E', // Orange background for button
  color: '#FFFFFF', // White text color
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  fontWeight: 'bold',
};

const titleStyle = {
  margin: '20px 0 10px 0',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#71B34A', // Green title color
};

const paragraphStyle = {
  margin: '10px 0',
  color: '#333333', // Dark gray text for better readability
};

const listStyle = {
  margin: '10px 0',
  paddingLeft: '20px',
  color: '#333333',
};

const AboutFarmConnectGhana = () => {
  const navigate = useNavigate();

  const handleGoPremium = () => {
    navigate('/register'); // Redirect to the registration page
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>About FarmConnect Ghana</h1>
      <p style={paragraphStyle}>FarmConnect Ghana is a revolutionary platform designed to bridge the gap between Ghanaian farmers and consumers. Our mission is to enhance the agricultural supply chain by providing a seamless interface for farmers and customers to connect, trade, and collaborate.</p>
      
      {/* Table of Contents */}
      <div style={sectionStyle}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={titleStyle}>Table of Contents</h2>
          <ul style={listStyle}>
            <li>1. About the App</li>
            <li>2. How to Use the App</li>
            <li>3. How to Register</li>
            <li>4. How to Contact Farmers and Buy</li>
            <li>5. Safety</li>
            <li>6. Go Premium</li>
          </ul>
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img src="path/to/about-app-image.jpg" alt="About App" style={imageStyle} />
        </div>
      </div>

      {/* How to Use the App */}
      <div style={sectionReverseStyle}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={titleStyle}>How to Use the App</h2>
          <p style={paragraphStyle}>Using the FarmConnect Ghana app is simple and intuitive. Once you’ve registered, you can browse through various products, contact farmers, and make purchases directly through the app. Our user-friendly interface ensures that you can find what you need quickly and easily.</p>
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img src="path/to/how-to-use-image.jpg" alt="How to Use" style={imageStyle} />
        </div>
      </div>

      {/* How to Register */}
      <div style={sectionStyle}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={titleStyle}>How to Register</h2>
          <p style={paragraphStyle}>To register, follow these steps:</p>
          <ol style={listStyle}>
            <li>Download the FarmConnect Ghana app from the App Store or Google Play.</li>
            <li>Open the app and click on 'Register'.</li>
            <li>Fill in your details including name, email, phone number, and choose a secure password.</li>
            <li>Verify your email address by clicking on the verification link sent to your inbox.</li>
            <li>Log in to your account and start exploring the app!</li>
          </ol>
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img src="path/to/register-image.jpg" alt="How to Register" style={imageStyle} />
        </div>
      </div>

      {/* How to Contact Farmers and Buy */}
      <div style={sectionReverseStyle}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={titleStyle}>How to Contact Farmers and Buy</h2>
          <p style={paragraphStyle}>Contacting farmers and making purchases is straightforward:</p>
          <ol style={listStyle}>
            <li>Search for the produce you’re interested in.</li>
            <li>Select the farmer and view their profile and product details.</li>
            <li>Use the contact form to send inquiries or place an order.</li>
            <li>Track your order status and communicate with the farmer through the app.</li>
          </ol>
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img src="path/to/contact-farmers-image.jpg" alt="Contact Farmers" style={imageStyle} />
        </div>
      </div>

      {/* Safety */}
      <div style={sectionStyle}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={titleStyle}>Safety</h2>
          <p style={paragraphStyle}>Ensuring safety is a top priority at FarmConnect Ghana. We have implemented several measures to protect our users:</p>
          <ol style={listStyle}>
            <li><b>Secure Transactions:</b> All transactions are encrypted to ensure your data is protected.</li>
            <li><b>Verified Farmers:</b> We verify all farmers before they can list their produce.</li>
            <li><b>Customer Reviews:</b> Users can leave reviews to help others make informed decisions.</li>
            <li><b>Support:</b> Our support team is available to assist with any issues or concerns.</li>
          </ol>
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img src="path/to/safety-image.jpg" alt="Safety" style={imageStyle} />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button style={buttonStyle} onClick={handleGoPremium}>Go Premium</button>
      </div>
    </div>
  );
};

export default AboutFarmConnectGhana;
