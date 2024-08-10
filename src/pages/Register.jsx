import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaSeedling, FaShoppingCart } from 'react-icons/fa';

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [role, setRole] = useState(searchParams.get('role') || ''); 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://farm-connect-api.onrender.com/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          phone,
          role,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('Registration Response:', data);

      const userRole = data.role;

      if (userRole === 'farmer') {
        navigate('/farmer-dashboard');
      } else if (userRole === 'customer') {
        navigate('/customer-dashboard');
      } else {
        navigate('/');
      }

      
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000); // Hide success message after 3 seconds
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div
        style={{
          flex: 1,
          backgroundImage: 'url(src/assets/ladyImage.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0.5rem',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            backgroundColor: '#FFFFFF',
            padding: '10px',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p style={{ margin: 0, color: '#4A4A4A', fontSize: '0.875rem', maxWidth: '300px' }}>
            {role === 'farmer'
              ? `"As a farmer, joining FarmConnect Ghana has greatly increased my market reach and sales. The platform is intuitive and connects me with buyers effectively."`
              : `"FarmConnect Ghana has made it easy for me to find fresh produce from local farmers. The user interface is smooth, and the delivery service is top-notch!"`}
          </p>
          <p style={{ margin: 0, color: '#7D7D7D', fontSize: '0.75rem', marginTop: '5px' }}>
            - Happy User
          </p>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: '#F7F9FC' }}>
        <div
          style={{
            maxWidth: '400px',
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ marginRight: '10px' }}>
              {role === 'farmer' ? <FaSeedling size={24} color="#4A4A4A" /> : <FaShoppingCart size={24} color="#4A4A4A" />}
            </div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              Register
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  display: 'block',
                  color: '#4A4A4A',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                }}
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.375rem',
                  boxSizing: 'border-box',
                  backgroundColor: '#F9FAFB',
                  transition: 'border-color 0.3s ease',
                }}
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onFocus={(e) => e.target.style.borderColor = '#71B34A'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  display: 'block',
                  color: '#4A4A4A',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                }}
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.375rem',
                  boxSizing: 'border-box',
                  backgroundColor: '#F9FAFB',
                  transition: 'border-color 0.3s ease',
                }}
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onFocus={(e) => e.target.style.borderColor = '#71B34A'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  display: 'block',
                  color: '#4A4A4A',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                }}
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.375rem',
                  boxSizing: 'border-box',
                  backgroundColor: '#F9FAFB',
                  transition: 'border-color 0.3s ease',
                }}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={(e) => e.target.style.borderColor = '#71B34A'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  display: 'block',
                  color: '#4A4A4A',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                }}
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.375rem',
                  boxSizing: 'border-box',
                  backgroundColor: '#F9FAFB',
                  transition: 'border-color 0.3s ease',
                }}
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onFocus={(e) => e.target.style.borderColor = '#71B34A'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  display: 'block',
                  color: '#4A4A4A',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                }}
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.375rem',
                  boxSizing: 'border-box',
                  backgroundColor: '#F9FAFB',
                  transition: 'border-color 0.3s ease',
                }}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={(e) => e.target.style.borderColor = '#71B34A'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#71B34A',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '0.375rem',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
            >
              Register
            </button>
          </form>
          {isSuccess && (
            <p style={{ color: '#4CAF50', textAlign: 'center', marginTop: '20px' }}>
              Registration successful!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
