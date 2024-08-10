
import React, { useState, useEffect } from 'react';
import AuthService from '../../services/Auth' 

const PurchaseInquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    
    const fetchInquiries = async () => {
      const data = await AuthService.getInquiries(); // Replace with actual API call
      setInquiries(data);
    };

    fetchInquiries();
  }, []);

  const handleResponse = async (inquiryId, response) => {
    await AuthService.respondToInquiry(inquiryId, response); // Replace with actual API call
    const updatedInquiries = await AuthService.getInquiries(); // Refresh inquiries
    setInquiries(updatedInquiries);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Purchase Inquiries</h1>
      <ul style={inquiriesListStyle}>
        {inquiries.map(inquiry => (
          <li key={inquiry.id} style={inquiryItemStyle}>
            <p><strong>Product:</strong> {inquiry.productName}</p>
            <p><strong>Customer:</strong> {inquiry.customerName}</p>
            <p><strong>Message:</strong> {inquiry.message}</p>
            <textarea
              placeholder="Your response..."
              onBlur={(e) => handleResponse(inquiry.id, e.target.value)}
              style={responseTextareaStyle}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline CSS styles
const containerStyle = { padding: '20px' };
const headingStyle = { fontSize: '24px', marginBottom: '20px' };
const inquiriesListStyle = { listStyleType: 'none', padding: '0' };
const inquiryItemStyle = { padding: '10px', borderBottom: '1px solid #ddd' };
const responseTextareaStyle = { width: '100%', padding: '10px', marginTop: '10px' };

export default PurchaseInquiries;
