import React, { useState } from 'react';
import axios from 'axios';

const UpdateFarmerProfile = () => {
  const [formData, setFormData] = useState({
    farmName: '',
    farmAddress: '',
    products: '',
    farmType: '',
    bankAccountDetails: '',
    about: '',
    farmPhotos: [],
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'farmPhotos') {
      setFormData((prev) => ({
        ...prev,
        [name]: Array.from(files),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((file) => formDataToSend.append(key, file));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.put('/api/farmer/profile', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Failed to update profile.');
      } else {
        setError('An error occurred.');
      }
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 bg-white max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Update Farmer Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="farmName" className="block text-sm font-medium text-gray-700">Farm Name</label>
          <input
            type="text"
            id="farmName"
            name="farmName"
            value={formData.farmName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="farmAddress" className="block text-sm font-medium text-gray-700">Farm Address</label>
          <input
            type="text"
            id="farmAddress"
            name="farmAddress"
            value={formData.farmAddress}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="products" className="block text-sm font-medium text-gray-700">Products (comma separated IDs)</label>
          <input
            type="text"
            id="products"
            name="products"
            value={formData.products}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="farmType" className="block text-sm font-medium text-gray-700">Farm Type</label>
          <input
            type="text"
            id="farmType"
            name="farmType"
            value={formData.farmType}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bankAccountDetails" className="block text-sm font-medium text-gray-700">Bank Account Details</label>
          <input
            type="text"
            id="bankAccountDetails"
            name="bankAccountDetails"
            value={formData.bankAccountDetails}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="about" className="block text-sm font-medium text-gray-700">About</label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="farmPhotos" className="block text-sm font-medium text-gray-700">Farm Photos</label>
          <input
            type="file"
            id="farmPhotos"
            name="farmPhotos"
            accept="image/*"
            multiple
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 disabled:bg-gray-400"
        >
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
        {message && <p className="mt-4 text-green-600">{message}</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </form>
    </div>
  );
};

export default UpdateFarmerProfile;
