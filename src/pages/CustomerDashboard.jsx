import { Link } from 'react-router-dom';

// Inside CustomerProfile component
const CustomerProfile = () => {
  return (
    <div>
      <h1>Customer Profile</h1>
      <nav>
        <ul>
          <li><Link to="/customer-dashboard/profile"> Customer Profile</Link></li>
          <li><Link to="/customer-dashboard/orders">Order History</Link></li>
          <li><Link to="/customer-dashboard/inquiries">Inquiries</Link></li>
          <li><Link to="/customer-dashboard/messages">Messages</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default CustomerProfile;
