import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FarmerDashboard from './pages/FarmerDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import OrderConfirmation from './pages/OrderConfirmation';
import FeedbackPage from './pages/FeedbackPage';
import PrivateRoute from './components/common/PrivateRouter';
import FarmerProfile from './components/farmers/FarmerProfile';
import CustomerProfile from './components/customers/CustomerProfile';
import CustomerCommunication from './components/farmers/CustomerCommumication';
import PurchaseInquiries from './components/farmers/PurchaseInquiries';
import ProductManagement from './components/farmers/ProductManagement';
import CartPage from './pages/CartPage';
import InitialScreen from './pages/InitialScreen';
import MessageHolder from './pages/MessageHolder';
import Regions from './pages/Regions';
import RegionsPage from './pages/RegionsPage';
import DistrictDetail from './pages/DistrictDetail';
import ProductList from './components/farmers/ProductList';
import ProduceDetails from './pages/ProductDetails';

// New pages
import Support from './pages/Support';
import OurApps from './pages/OurApps';
import OurResources from './pages/Ressources';
import HotLinks from './pages/HotLinks';
import AboutFarmConnectGhana from './pages/About';
import Careers from './pages/Careers';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BillingPolicy from './pages/BillingPolicy';
import CopyrightInfringementPolicy from './pages/CopyRightInfringment';
import SafetyTips from './pages/SafetyTips';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import FarmConnectGhana from './pages/FarmConnectGhana';

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
                <Route path="/farmer-dashboard" element={<PrivateRoute><FarmerDashboard /></PrivateRoute>} />
                <Route path="/customer-dashboard" element={<PrivateRoute><CustomerDashboard /></PrivateRoute>} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:produceName" element={<ProduceDetails />} />
                <Route path="/orders/confirmation/:orderId" element={<OrderConfirmation />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/farmer-profile" element={<FarmerProfile />} />
                <Route path="/customer-profile" element={<CustomerProfile />} />
                <Route path="/customer-communication" element={<CustomerCommunication />} />
                <Route path="/product-management" element={<ProductManagement />} />
                <Route path="/purchase-inquiries" element={<PurchaseInquiries />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/initial-screen" element={<InitialScreen />} />
                <Route path="/message-holder" element={<MessageHolder />} />
                <Route path="/regions" element={<Regions />} />
                <Route path="/regions-page" element={<RegionsPage />} />
                <Route path="/district" element={<DistrictDetail />} />
                <Route path="/support" element={<Support />} />
                <Route path="/our-apps" element={<OurApps />} />
                <Route path="/our-resources" element={<OurResources />} />
                <Route path="/hot-links" element={<HotLinks />} />
                <Route path="/about-farm-connect-ghana" element={<AboutFarmConnectGhana />} />
                <Route path="/we-are-hiring" element={<Careers />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/billing-policy" element={<BillingPolicy />} />
                <Route path="/copyright-infringement-policy" element={<CopyrightInfringementPolicy />} />
                <Route path="/safety-tips" element={<SafetyTips />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/farm-connect-ghana" element={<FarmConnectGhana />} />
                <Route path="*" element={<div>404 Not Found</div>} />
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
