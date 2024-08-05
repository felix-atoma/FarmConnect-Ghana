// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FarmerDashboard from './pages/FarmerDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import ProductDetailPage from './pages/ProductDetailPage';
import OrderConfirmation from './pages/OrderConfirmation';
import FeedbackPage from './pages/FeedbackPage';
import PrivateRoute from './components/common/PrivateRouter'; // Fixed import name
import FarmerProfile from './components/farmers/FarmerProfile';
import CustomerProfile from './components/customers/CustomerProfile';
import CustomerCommunication from './components/farmers/CustomerCommumication'; // Fixed import name
import PurchaseInquiries from './components/farmers/PurchaseInquiries';
import ProductManagement from './components/farmers/ProductManagement';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div id="root">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/farmer/dashboard" element={<PrivateRoute><FarmerDashboard /></PrivateRoute>} />
              <Route path="/customer/dashboard" element={<PrivateRoute><CustomerDashboard /></PrivateRoute>} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/orders/confirmation/:orderId" element={<OrderConfirmation />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/farmer-profile" element={<FarmerProfile />} />
              <Route path="/customer-profile" element={<CustomerProfile />} />
              <Route path="/customer-communication" element={<CustomerCommunication />} />
              <Route path="/products/:id" element={<ProductManagement />} />
              <Route path="/inquiries" element={<PurchaseInquiries />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
