import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'; // Import icons

const Login = () => {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#F7F9FC'
    }}>
      {/* Left Side - Form */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{
          maxWidth: '400px',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          marginRight: '20px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#4A4A4A'
          }}>
            Login
          </h2>
          <form>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{
                display: 'block',
                color: '#4A4A4A',
                fontSize: '0.875rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                <FaUser style={{ marginRight: '0.5rem', color: '#71B34A' }} />
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.375rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="password" style={{
                display: 'block',
                color: '#4A4A4A',
                fontSize: '0.875rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                <FaLock style={{ marginRight: '0.5rem', color: '#F7931E' }} />
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.375rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <button type="submit" style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#71B34A',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#F7931E'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#71B34A'}
            >
              Login
            </button>
            <p style={{
              marginTop: '1rem',
              textAlign: 'center',
              color: '#4A4A4A'
            }}>
              Don't have an account? <Link to="/register" style={{
                color: '#71B34A',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>Register</Link>.
            </p>
          </form>
        </div>
      </div>
      {/* Right Side - Photo */}
      <div style={{
        flex: 1,
        backgroundImage: 'url(/path-to-your-photo.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#4A4A4A', marginBottom: '10px' }}>Welcome Back!</h2>
          <p style={{ color: '#4A4A4A' }}>Log in to your account to continue.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
