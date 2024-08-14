// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:10000',
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken'); // Or from cookies/session
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default api;
