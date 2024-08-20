import React, { useContext, useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUser, FaBox, FaShoppingCart, FaClipboardList, FaEnvelope } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components'; // Import styled-components
import GhanaImage from '../assets/ghana-1758953_640.webp'; // Ensure the path is correct

// Container for the entire dashboard layout
const DashboardContainer = styled.div`
  display: flex;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

// Sidebar navigation styling
const Sidebar = styled.nav`
  width: 250px;
  background-color: #343a40;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

// List of navigation items
const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  flex: 1;
`;

// Individual navigation item styling
const NavItem = styled.li`
  margin-bottom: 20px;
`;

// Card styling for each section in the sidebar
const SectionCard = styled.div`
  background-color: #495057;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

// Icon styling within each section card
const Icon = styled.div`
  font-size: 1.5em;
  color: #71b34a;
  margin-bottom: 10px;
`;

// Title of each section card
const SectionTitle = styled.h3`
  font-size: 1.2em;
  color: #f8f9fa;
  margin: 0;
`;

// Sub-list for each section
const SubNavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
`;

// Individual sub-navigation item styling
const SubNavItem = styled.li`
  margin-bottom: 10px;
`;

// Styled link component
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #71b34a;
  display: block;
  padding: 8px 0;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: #ffffff;
    background-color: #f7931e;
  }
`;

// Main content area styling
const Main = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  border-left: 1px solid #e0e0e0;
  overflow-y: auto;
  min-height: 100vh;
`;

// Header at the top of the main content area
const PageHeader = styled.div`
  margin-bottom: 20px;
  border-bottom: 2px solid #71b34a;
  padding-bottom: 10px;
  h1 {
    font-size: 1.8em;
    color: #333;
    margin: 0;
  }
`;

// Container for the main content inside the dashboard
const ContentContainer = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

// Container for the image
const PhotoContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  background-color: #e0e0e0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

// Image styling
const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Logout button styling
const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #ff4d4d;
  color: white;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #e60000;
  }
`;

const CustomerDashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    // Hide the image when there's content
    setShowImage(location.pathname === '/dashboard');
  }, [location.pathname]);

  const handleLogout = () => {
    logout(); // Clear authentication state
    navigate('/'); // Redirect to the home page
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <NavList>
          {/* Customer Profile Section */}
          <NavItem>
            <SectionCard>
              <Icon><FaUser /></Icon>
              <SectionTitle>Customer Profile</SectionTitle>
              <SubNavList>
                <SubNavItem><StyledLink to="profile/create">Create Profile</StyledLink></SubNavItem>
                <SubNavItem><StyledLink to="profile/update">Update Profile</StyledLink></SubNavItem>
              </SubNavList>
            </SectionCard>
          </NavItem>

          {/* Order Management Section */}
          <NavItem>
            <SectionCard>
              <Icon><FaClipboardList /></Icon>
              <SectionTitle>Order Management</SectionTitle>
              <SubNavList>
                <SubNavItem><StyledLink to="order-management/order-history">Order History</StyledLink></SubNavItem>
                <SubNavItem><StyledLink to="order-management/new-order">Create New Order</StyledLink></SubNavItem>
                <SubNavItem><StyledLink to="order-management/cancel-order">Cancel Order</StyledLink></SubNavItem>
                <SubNavItem><StyledLink to="order-management/update-status">Update Order Status</StyledLink></SubNavItem>
              </SubNavList>
            </SectionCard>
          </NavItem>

          {/* Cart Section */}
          <NavItem>
            <SectionCard>
              <Icon><FaShoppingCart /></Icon>
              <SectionTitle>Cart</SectionTitle>
              <SubNavList>
                <SubNavItem><StyledLink to="cart/add-item">Add Item to Cart</StyledLink></SubNavItem>
                <SubNavItem><StyledLink to="cart/view-items">View Cart Items</StyledLink></SubNavItem>
                <SubNavItem><StyledLink to="cart/remove-item">Remove Item from Cart</StyledLink></SubNavItem>
              </SubNavList>
            </SectionCard>
          </NavItem>

          {/* Messages Section */}
          <NavItem>
            <SectionCard>
              <Icon><FaEnvelope /></Icon>
              <SectionTitle>Messages</SectionTitle>
              <SubNavList>
                <SubNavItem><StyledLink to="messages">Messages</StyledLink></SubNavItem>
              </SubNavList>
            </SectionCard>
          </NavItem>
        </NavList>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Sidebar>
      <Main>
        <PageHeader>
          <h1>Dashboard</h1>
        </PageHeader>
        <ContentContainer>
          {showImage && (
            <PhotoContainer>
              <Photo src={GhanaImage || 'fallback-image-url.jpg'} alt="Ghana landscape" />
            </PhotoContainer>
          )}
          <Outlet />
        </ContentContainer>
      </Main>
    </DashboardContainer>
  );
};

export default CustomerDashboard;
