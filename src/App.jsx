import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import PrivateRoute from './components/common/PrivateRouter'
import FarmerProfile from './components/farmers/FarmerProfile';
import CustomerProfile from './components/customers/CustomerProfile';
import CustomerCommunication from './components/farmers/CustomerCommumication'
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
import OurResources from './pages/Ressources'
import HotLinks from './pages/HotLinks';
import AboutFarmConnectGhana from './pages/About';
import Careers from './pages/Careers';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BillingPolicy from './pages/BillingPolicy';
import CopyrightInfringementPolicy from './pages/CopyRightInfringment'
import SafetyTips from './pages/SafetyTips';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import FarmConnectGhana from './pages/FarmConnectGhana';
import SearchResults from './pages/Serach';

const rootStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const App = () => (
  <AuthProvider>
    <CartProvider>
      <Router>
        <div style={rootStyle}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/support" element={<Support />} />
              <Route path="/apps" element={<OurApps />} />
              <Route path="/resources" element={<OurResources />} />
              <Route path="/hot-links" element={<HotLinks />} />
              <Route path="/about" element={<AboutFarmConnectGhana />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/billing" element={<BillingPolicy />} />
              <Route path="/copyright" element={<CopyrightInfringementPolicy />} />
              <Route path="/safety" element={<SafetyTips />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/farmconnectghana" element={<FarmConnectGhana />} />

              <Route
                path="/farmer-dashboard"
                element={
                  <PrivateRoute>
                    <FarmerDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/customer-dashboard"
                element={
                  <PrivateRoute>
                    <CustomerDashboard />
                  </PrivateRoute>
                }
                
                
              />

              {/* Other routes */}
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/produce-details" element={<ProduceDetails />} />
              <Route path="/farmer-profile" element={<FarmerProfile />} />
              <Route path="/customer-profile" element={<CustomerProfile />} />
              <Route path="/customer-communication" element={<CustomerCommunication />} />
              <Route path="/purchase-inquiries" element={<PurchaseInquiries />} />
              <Route path="/product-management" element={<ProductManagement />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/initial-screen" element={<InitialScreen />} />
              <Route path="/message-holder" element={<MessageHolder />} />
              <Route path="/regions" element={<Regions />} />
              <Route path="/regions-page" element={<RegionsPage />} />
              <Route path="/district-detail" element={<DistrictDetail />} />
              <Route path="/search-results" element={<SearchResults />} />

              {/* Redirect unknown paths to home */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  </AuthProvider>
);

export default App;
