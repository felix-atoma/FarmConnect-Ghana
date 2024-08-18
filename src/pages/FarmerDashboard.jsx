import React, { useContext } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { FaUser, FaBox, FaClipboardList, FaEnvelope } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext'
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  background-color: #ffffff;
`;

const Sidebar = styled.nav`
  width: 250px;
  background-color: #f4f4f4;
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
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.div`
  font-size: 1.5em;
  color: #71b34a;
`;

const SectionTitle = styled.h3`
  font-size: 1.2em;
  color: #4a4a4a;
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
  color: #71b34a;
  display: block;
  padding: 10px 0;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: #ffffff;
    background-color: #f7931e;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
`;

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

const FarmerDashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear authentication state
    navigate('/'); // Redirect to the home page
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <NavList>
          {/* Farmer Profile Section */}
          <NavItem>
            <SectionCard>
              <Icon><FaUser /></Icon>
              <SectionTitle>Farmer Profile</SectionTitle>
              <SubNavList>
                <SubNavItem><StyledLink to="profile/create">Create Profile</StyledLink></SubNavItem>
                <SubNavItem><StyledLink to="profile/update">Update Profile</StyledLink></SubNavItem>
              </SubNavList>
            </SectionCard>
          </NavItem>

          {/* Product Management Section */}
          <NavItem>
            <SectionCard>
              <Icon><FaBox /></Icon>
              <SectionTitle>Product Management</SectionTitle>
              <SubNavList>
                <SubNavItem><StyledLink to="product-management/all">All Products</StyledLink></SubNavItem>
                <SubNavItem><StyledLink to="product-management/add">Add Product</StyledLink></SubNavItem>
                <SubNavItem><StyledLink to="product-management/edit">Edit Product</StyledLink></SubNavItem>
                <SubNavItem><StyledLink to="product-management/delete">Delete Product</StyledLink></SubNavItem>
              </SubNavList>
            </SectionCard>
          </NavItem>

          {/* Order Management Section */}
          <NavItem>
            <SectionCard>
              <Icon><FaClipboardList /></Icon>
              <SectionTitle>Order Management</SectionTitle>
              <SubNavList>
                <SubNavItem><StyledLink to="order-management/my-orders">My Orders</StyledLink></SubNavItem>
                <SubNavItem><StyledLink to="order-management/update-status">Update Order Status</StyledLink></SubNavItem>
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
        <Outlet />
      </Main>
    </DashboardContainer>
  );
};

export default FarmerDashboard;
