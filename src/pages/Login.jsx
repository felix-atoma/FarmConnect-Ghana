import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import fruitImage from '../assets/man.webp'; // Ensure this path is correct

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data); // Log successful login data
      const userRole = data.user.role;

      // Log the role and navigate accordingly
      console.log(`User role: ${userRole}`);

      // Redirect based on user role
      if (userRole === 'farmer') {
        navigate('/farmer-dashboard');
      } else if (userRole === 'customer') {
        navigate('/customer-dashboard');
      } else {
        navigate('/');
      }
    } catch (error) {
      setError(error.message || 'Login failed. Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <div style={{
          maxWidth: '400px',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '2rem',
          marginRight: '1rem',
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#4A4A4A' }}>Login</h2>
          <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{ display: 'block', color: '#4A4A4A', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <FaUser style={{ marginRight: '0.5rem', color: '#38A169' }} />
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="password" style={{ display: 'block', color: '#4A4A4A', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <FaLock style={{ marginRight: '0.5rem', color: '#ED8936' }} />
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#38A169',
                color: '#FFFFFF',
                borderRadius: '0.375rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ED8936')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#38A169')}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <p style={{ marginTop: '1rem', textAlign: 'center', color: '#4A4A4A' }}>
              Don't have an account?{' '}
              <a href="/register" style={{ color: '#38A169', fontWeight: 'bold', textDecoration: 'none' }}>
                Register
              </a>.
            </p>
          </form>
        </div>
      </div>
      
      <div style={{
        flex: '1',
        backgroundImage: `url(${fruitImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0.5rem',
        position: 'relative',
        minHeight: '100vh',
      }}>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          width: '80%',
          maxWidth: '300px',
        }}>
          <h2 style={{ color: '#4A4A4A', marginBottom: '10px' }}>Welcome Back!</h2>
          <p style={{ color: '#4A4A4A' }}>Log in to your account to continue.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
