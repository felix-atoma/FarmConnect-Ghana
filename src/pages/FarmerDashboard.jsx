// src/pages/FarmerDashboard.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import MapContainer from '../components/farmers/MapComponent';
import styled from 'styled-components';

const FarmerDashboard = () => {
  const farmLocation = { lat: 37.7749, lng: -122.4194 }; // Example location

  return (
    <DashboardContainer>
      <Sidebar>
        <NavList>
          <NavItem><StyledLink to="profile">Farmer Profile</StyledLink></NavItem>
          <NavItem><StyledLink to="products">Manage Products</StyledLink></NavItem>
          <NavItem><StyledLink to="inquiries">Purchase Inquiries</StyledLink></NavItem>
          <NavItem><StyledLink to="orders">Order Management</StyledLink></NavItem>
          <NavItem><StyledLink to="communication">Customer Communication</StyledLink></NavItem>
          <NavItem><StyledLink to="feedback">Feedback</StyledLink></NavItem>
        </NavList>
      </Sidebar>
      <Main>
        <MapContainer location={farmLocation} /> {/* Embed the map component */}
        <Outlet /> {/* This is where the nested routes will be rendered */}
      </Main>
    </DashboardContainer>
  );
};

// Styled components
const DashboardContainer = styled.div`
  display: flex;
`;

const Sidebar = styled.nav`
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: block;
  padding: 10px 0;

  &:hover {
    color: #007bff; /* Change color on hover */
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

export default FarmerDashboard;
