// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FarmerDashboard from './pages/FarmerDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import ProductDetailPage from './pages/ProductDetailPage';
import OrderConfirmation from './pages/OrderConfirmation';
import FeedbackPage from './pages/FeedbackPage';
import PrivateRoute from './components/common/PrivateRouter';
import FarmerProfile from './components/farmers/FarmerProfile';
import CustomerProfile from './components/customers/CustomerProfile';
import CustomerCommunication from './components/farmers/CustomerCommumication';
import PurchaseInquiries from './components/farmers/PurchaseInquiries';
import ProductManagement from './components/farmers/ProductManagement';
import Footer from './components/common/Footer';
import CartPage from './pages/CartPage';

const rootStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: 1,
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div style={rootStyle}>
            <Navbar />
            <main style={mainStyle}>
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
                <Route path="/product-management" element={<ProductManagement />} />
                <Route path="/purchase-inquiries" element={<PurchaseInquiries />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
