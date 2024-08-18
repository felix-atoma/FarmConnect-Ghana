import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaBox, FaShoppingCart, FaClipboardList, FaEnvelope } from 'react-icons/fa';

const CustomerDashboard = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to handle logout logic
  const handleLogout = () => {
    // Logic for logging out (e.g., clearing tokens, redirecting)
    console.log('Logging out...');
    // Example: Clear user data and redirect to the home page
    // Clear authentication tokens or state here if needed
    navigate('/'); // Redirect to home page
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
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton> {/* Logout button */}
      </Sidebar>
      <Main>
        <Outlet /> {/* Render nested routes here */}
      </Main>
    </DashboardContainer>
  );
};

// Styled components
const DashboardContainer = styled.div`
  display: flex;
  background-color: #ffffff; /* White background for the dashboard */
`;

const Sidebar = styled.nav`
  width: 250px;
  background-color: #f4f4f4; /* Light gray background for the sidebar */
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  flex: 1;
`;

const NavItem = styled.li`
  margin-bottom: 20px;
`;

const SectionCard = styled.div`
  background-color: #ffffff; /* White background for cards */
  border: 1px solid #e0e0e0; /* Light gray border */
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.div`
  font-size: 1.5em;
  color: #71b34a; /* Green color for icons */
`;

const SectionTitle = styled.h3`
  font-size: 1.2em;
  color: #4a4a4a; /* Dark gray color for section titles */
  margin: 0;
`;

const SubNavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SubNavItem = styled.li`
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #71b34a; /* Green color for links */
  display: block;
  padding: 10px 0;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: #ffffff; /* White text on hover */
    background-color: #f7931e; /* Orange background on hover */
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #ffffff; /* White background for the main content area */
`;

const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #ff4d4d; /* Red background for logout button */
  color: white;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #e60000; /* Darker red on hover */
  }
`;

export default CustomerDashboard;
