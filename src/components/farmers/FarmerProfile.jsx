import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSave, FaTimes, FaEdit } from 'react-icons/fa';

const FarmerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    farmName: 'Green Farm',
    location: 'Tamale, Ghana',
    contact: '+233 123 456 789',
    produce: 'Tomatoes, Lettuce',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Save logic here (e.g., API call)
    setIsEditing(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #4CAF50', paddingBottom: '20px' }}>
        <img src="/path-to-farmer-photo.jpg" alt="Farmer" style={{ width: '150px', height: '150px', borderRadius: '50%', marginRight: '20px', border: '2px solid #4CAF50' }} />
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#4CAF50' }}>
            {isEditing ? (
              <input
                type="text"
                name="farmName"
                value={formData.farmName}
                onChange={handleChange}
                style={{ fontSize: '28px', fontWeight: 'bold', border: 'none', background: 'transparent' }}
              />
            ) : (
              formData.farmName
            )}
          </h1>
          <p style={{ fontSize: '18px', color: '#555' }}>
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                style={{ fontSize: '18px', color: '#555', border: 'none', background: 'transparent' }}
              />
            ) : (
              `Location: ${formData.location}`
            )}
          </p>
          <p style={{ fontSize: '18px', color: '#555' }}>
            {isEditing ? (
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                style={{ fontSize: '18px', color: '#555', border: 'none', background: 'transparent' }}
              />
            ) : (
              `Contact: ${formData.contact}`
            )}
          </p>
          <p style={{ fontSize: '18px', color: '#555' }}>
            {isEditing ? (
              <input
                type="text"
                name="produce"
                value={formData.produce}
                onChange={handleChange}
                style={{ fontSize: '18px', color: '#555', border: 'none', background: 'transparent' }}
              />
            ) : (
              `Produce: ${formData.produce}`
            )}
          </p>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          {isEditing ? (
            <>
              <FaSave onClick={handleSave} style={{ color: '#4CAF50', marginRight: '10px', cursor: 'pointer' }} />
              <FaTimes onClick={() => setIsEditing(false)} style={{ color: '#F44336', cursor: 'pointer' }} />
            </>
          ) : (
            <FaEdit onClick={() => setIsEditing(true)} style={{ color: '#FFA500', cursor: 'pointer' }} />
          )}
        </div>
      </div>

      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4CAF50', marginBottom: '10px' }}>Product Listings</h2>
        <div>
          <div style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#F0F0F0' }}>
            <p><strong>Product:</strong> Fresh Tomatoes</p>
            <p><strong>Price:</strong> GHC 30</p>
            <p><strong>Available Quantity:</strong> 100 kg</p>
          </div>
          {/* Repeat for other products */}
        </div>
      </section>

      <div style={{ textAlign: 'center' }}>
        <Link to="/logout" style={{ padding: '10px 20px', backgroundColor: '#F44336', color: '#fff', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>Logout</Link>
      </div>
    </div>
  );
};

export default FarmerProfile;
