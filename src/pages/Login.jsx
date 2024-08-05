import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/Auth'; // Ensure correct import path
import { FaUserLock } from 'react-icons/fa'; // Import an icon from react-icons

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await AuthService.login(formData);

      if (result.success) {
        // Redirect based on user type
        if (result.userType === 'customer') {
          navigate('/customer-dashboard');
        } else if (result.userType === 'farmer') {
          navigate('/farmer-dashboard');
        }
      } else {
        alert(result.message || 'Login failed!');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed!');
    }
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundColor: '#fff',
    padding: '2rem'
  };

  const formStyle = {
    width: '40%',
    maxWidth: '500px',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const headingStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#71B34A',
    fontSize: '2rem',
    marginBottom: '1rem'
  };

  const iconStyle = {
    marginRight: '0.5rem',
    fontSize: '2.5rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem'
  };

  const buttonStyle = {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#71B34A', // Green color
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#F7931E' // Orange color on hover
  };

  const photoStyle = {
    width: '50%',
    maxWidth: '600px',
    backgroundColor: '#F2F2F2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  };

  const imgStyle = {
    maxWidth: '100%',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)'
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <div style={headingStyle}>
          <FaUserLock style={iconStyle} />
          <span>Login</span>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Login
          </button>
        </form>
      </div>
      <div style={photoStyle}>
        <img src="/path/to/your/photo.jpg" alt="Login" style={imgStyle} />
      </div>
    </div>
  );
};

export default Login;
