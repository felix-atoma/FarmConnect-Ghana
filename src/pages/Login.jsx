// src/components/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" className="form-input mt-1 block w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" id="password" className="form-input mt-1 block w-full" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
