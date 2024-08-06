// src/components/Register.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaSeedling, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get('role'); // Get the role from query parameters

  const getTitle = () => {
    if (role === 'farmer') return 'Register as Farmer';
    if (role === 'customer') return 'Register as Customer';
    return 'Register'; // Default title
  };

  const getTestimonial = () => {
    if (role === 'farmer') {
      return `"As a farmer, joining FarmConnect Ghana has greatly increased my market reach and sales. The platform is intuitive and connects me with buyers effectively."`;
    } else if (role === 'customer') {
      return `"FarmConnect Ghana has made it easy for me to find fresh produce from local farmers. The user interface is smooth, and the delivery service is top-notch!"`;
    }
    return `"FarmConnect Ghana offers an excellent platform for connecting farmers and customers. It's a game-changer for anyone involved in agriculture!"`; // Default testimonial
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here (e.g., API call)
    console.log('Form submitted'); // Debug log
    console.log('Role:', role); // Debug log

    // Redirect based on role after successful registration
    if (role === 'farmer') {
      console.log('Redirecting to Farmer Dashboard'); // Debug log
      navigate('/farmer-dashboard'); // Redirect to Farmer Dashboard
    } else if (role === 'customer') {
      console.log('Redirecting to Customer Dashboard'); // Debug log
      navigate('/customer-dashboard'); // Redirect to Customer Dashboard
    } else {
      console.log('Redirecting to default profile'); // Debug log
      navigate('/profile'); // Redirect to default profile or another page
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Side - Image and Testimonial */}
      <div style={{ flex: 1, backgroundImage: 'url(/path-to-your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '0.5rem', position: 'relative' }}>
        {/* Image Container */}
        <div style={{ position: 'absolute', bottom: '20px', left: '20px', backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          {/* Testimonial */}
          <p style={{ margin: 0, color: '#4A4A4A', fontSize: '0.875rem', maxWidth: '300px' }}>
            {getTestimonial()}
          </p>
          <p style={{ margin: 0, color: '#7D7D7D', fontSize: '0.75rem', marginTop: '5px' }}>
            - Happy User
          </p>
        </div>
      </div>
      {/* Right Side - Form */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: '#F7F9FC' }}>
        <div style={{ maxWidth: '400px', width: '100%', backgroundColor: '#FFFFFF', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ marginRight: '10px' }}>
              {role === 'farmer' ? <FaSeedling size={24} color="#4A4A4A" /> : <FaShoppingCart size={24} color="#4A4A4A" />}
            </div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {getTitle()}
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', color: '#4A4A4A', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }} htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem', boxSizing: 'border-box' }}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', color: '#4A4A4A', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }} htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem', boxSizing: 'border-box' }}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', color: '#4A4A4A', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem', boxSizing: 'border-box' }}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', color: '#4A4A4A', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem', boxSizing: 'border-box' }}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#71B34A',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#F7931E'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#71B34A'}
              >
                Register
              </button>
            </div>
          </form>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ margin: 0, color: '#4A4A4A', fontSize: '0.875rem' }}>
              Already have an account? <Link to="/login" style={{ color: '#71B34A', textDecoration: 'none', fontWeight: 'bold' }}>Login here</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
