import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaSeedling, FaShoppingCart } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder="Password"
        style={{
          width: '100%',
          padding: '0.75rem 2.5rem 0.75rem 0.75rem',
          border: '1px solid #D1D5DB',
          borderRadius: '0.375rem',
          boxSizing: 'border-box',
          backgroundColor: '#F9FAFB',
          transition: 'border-color 0.3s ease',
        }}
      />
      <div
        onClick={handleTogglePassword}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          color: '#4A4A4A',
        }}
      >
        {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
      </div>
    </div>
  );
};

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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

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
          phone,
          password,
          role,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('Registration Response:', data);

      if (response.status === 201 && role === 'farmer') {
        navigate('/farmer-dashboard');
      } else if (response.status === 201 && role === 'customer') {
        navigate('/customer-dashboard');
      } else {
        navigate('/');
      }

      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div
        style={{
          flex: 1,
          backgroundImage: 'url(src/assets/LadyImage2.jpg)',
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
                htmlFor="role"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
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
                value={role}
                onChange={(e) => setRole(e.target.value)}
                onFocus={(e) => e.target.style.borderColor = '#71B34A'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                onMouseOver={(e) => e.target.style.borderColor = '#F7931E'}
                onMouseOut={(e) => e.target.style.borderColor = '#D1D5DB'}
              >
                <option value="">Select Role</option>
                <option value="farmer">Farmer</option>
                <option value="customer">Customer</option>
              </select>
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
                onMouseOver={(e) => e.target.style.borderColor = '#F7931E'}
                onMouseOut={(e) => e.target.style.borderColor = '#D1D5DB'}
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
                onMouseOver={(e) => e.target.style.borderColor = '#F7931E'}
                onMouseOut={(e) => e.target.style.borderColor = '#D1D5DB'}
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
                onMouseOver={(e) => e.target.style.borderColor = '#F7931E'}
                onMouseOut={(e) => e.target.style.borderColor = '#D1D5DB'}
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
                type="text"
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
                onMouseOver={(e) => e.target.style.borderColor = '#F7931E'}
                onMouseOut={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
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
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    position: 'relative',
  }}
  disabled={isLoading}
  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#F7931E'}
  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#71B34A'}
>
  {isLoading ? (
    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        aria-hidden="true"
        role="status"
        className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5c0-27.55-22.45-50-50-50S0 22.95 0 50.5 22.45 100 50 100s50-22.45 50-50z"
          fill="#E5E5E5"
        />
        <path
          d="M93.97 50.5c0-24.8-20.24-45.03-45.03-45.03S3.91 25.7 3.91 50.5 24.15 95.53 49.95 95.53 93.97 75.3 93.97 50.5z"
          fill="#00BFFF"
        />
      </svg>
      Processing...
    </span>
  ) : (
    'Register'
  )}
</button>

            {isSuccess && (
              <p style={{ color: '#4A4A4A', fontSize: '0.875rem', textAlign: 'center', marginTop: '10px' }}>
                Registration successful!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
