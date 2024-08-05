import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaYahoo, FaFacebook, FaLeaf, FaUser } from 'react-icons/fa';

// Simulated function to fetch user data (replace with actual API call)
const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        password: '',
      });
    }, 500); // Simulate a delay
  });
};

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch user data when component mounts
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserData();
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setPhone(data.phone);
        setPassword(data.password);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    loadUserData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (!firstName || !lastName || !email || !phone || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError('Invalid phone number.');
      return;
    }

    // Handle registration logic here

    // Clear error if registration succeeds
    setError('');

    // After successful registration, redirect based on userType
    if (userType === 'farmer') {
      navigate('/farmer-profile');
    } else if (userType === 'customer') {
      navigate('/customer-profile');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', maxWidth: '900px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div style={{ flex: 1, padding: '16px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/path-to-your-photo.png" alt="Registration" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
        <div style={{ flex: 1, padding: '16px', backgroundColor: '#f9f9f9' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#333' }}>Register</h1>

          {error && <p style={{ color: 'red', marginBottom: '16px' }}>{error}</p>}

          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '24px' }}>
            <div onClick={() => setUserType('farmer')} style={{ textDecoration: 'none', color: '#fff', flex: 1, marginRight: '8px' }}>
              <div style={{ backgroundColor: '#388e3c', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <FaLeaf style={{ fontSize: '24px', marginRight: '8px' }} />
                <div>
                  <h2 style={{ fontSize: '18px', fontWeight: '600' }}>Register as a Farmer</h2>
                  <p>Manage your products and connect with customers.</p>
                </div>
              </div>
            </div>
            <div onClick={() => setUserType('customer')} style={{ textDecoration: 'none', color: '#fff', flex: 1, marginLeft: '8px' }}>
              <div style={{ backgroundColor: '#ff5722', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <FaUser style={{ fontSize: '24px', marginRight: '8px' }} />
                <div>
                  <h2 style={{ fontSize: '18px', fontWeight: '600' }}>Register as a Customer</h2>
                  <p>Browse and purchase products from farmers.</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px', backgroundColor: '#f5f5f5', color: '#333', borderRadius: '8px', marginBottom: '8px', border: '1px solid #ddd', cursor: 'pointer' }}>
              <FaGoogle style={{ marginRight: '8px', color: '#db4437' }} /> Sign up with Google
            </button>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px', backgroundColor: '#f5f5f5', color: '#333', borderRadius: '8px', marginBottom: '8px', border: '1px solid #ddd', cursor: 'pointer' }}>
              <FaYahoo style={{ marginRight: '8px', color: '#720e9e' }} /> Sign up with Yahoo
            </button>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px', backgroundColor: '#f5f5f5', color: '#333', borderRadius: '8px', marginBottom: '8px', border: '1px solid #ddd', cursor: 'pointer' }}>
              <FaFacebook style={{ marginRight: '8px', color: '#3b5998' }} /> Sign up with Facebook
            </button>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <label style={{ flex: 1 }}>
                First Name:
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '4px' }}
                />
              </label>
              <label style={{ flex: 1 }}>
                Last Name:
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '4px' }}
                />
              </label>
            </div>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '4px' }}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '4px' }}
              />
            </label>
            <label>
              Password:
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '4px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '8px', top: '8px', border: 'none', background: 'none', cursor: 'pointer' }}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </label>
            <button
              type="submit"
              style={{ padding: '12px', backgroundColor: '#4caf50', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#388e3c'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4caf50'}
            >
              Register
            </button>
          </form>
          <p style={{ marginTop: '16px', textAlign: 'center' }}>
            Already registered? <Link to="/login" style={{ color: '#4caf50', textDecoration: 'underline' }}>Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
