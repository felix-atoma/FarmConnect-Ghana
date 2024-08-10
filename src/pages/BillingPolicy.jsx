import React from 'react';

const containerStyle = {
  padding: '20px',
  backgroundColor: '#F9F9F9',
  color: '#333333',
};

const titleStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#71B34A', // Green color for titles
  marginBottom: '20px',
};

const sectionStyle = {
  marginBottom: '30px',
};

const subtitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#F7931E', // Orange color for subtitles
  marginBottom: '15px',
};

const paragraphStyle = {
  marginBottom: '15px',
};

const listStyle = {
  marginLeft: '20px',
};

const listItemStyle = {
  marginBottom: '10px',
};

const BillingPolicy = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Billing Policy</h1>
      <p style={paragraphStyle}>This Billing Policy outlines the terms and conditions related to payments and billing for FarmConnect Ghana. Please read this policy carefully to understand your billing obligations and rights.</p>
      
      {/* Billing Terms */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>1. Billing Terms</h2>
        <p style={paragraphStyle}>All fees and charges are detailed on the FarmConnect Ghana platform and are subject to change. We will notify you of any changes to billing terms, and it is your responsibility to review the billing terms periodically.</p>
      </section>

      {/* Payment Methods */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>2. Payment Methods</h2>
        <p style={paragraphStyle}>We accept various payment methods for our services:</p>
        <ol style={listStyle}>
          <li style={listItemStyle}>Credit and Debit Cards: Visa, MasterCard, American Express, and other major cards.</li>
          <li style={listItemStyle}>Bank Transfers: Payments can be made directly to our bank account.</li>
          <li style={listItemStyle}>Online Payment Systems: Such as PayPal and other third-party processors.</li>
        </ol>
      </section>

      {/* Billing Cycle */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>3. Billing Cycle</h2>
        <p style={paragraphStyle}>Our billing cycle is based on the subscription plan you choose. Charges will be billed at the start of each billing period, which may be monthly or annually. You will be notified in advance of any upcoming charges.</p>
      </section>

      {/* Refund Policy */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>4. Refund Policy</h2>
        <p style={paragraphStyle}>Refunds are provided under the following circumstances:</p>
        <ol style={listStyle}>
          <li style={listItemStyle}>If the service is not delivered as described.</li>
          <li style={listItemStyle}>If there is a technical issue that prevents you from accessing the service for an extended period.</li>
          <li style={listItemStyle}>Refund requests must be submitted within 30 days of the charge.</li>
        </ol>
        <p style={paragraphStyle}>To request a refund, please contact our support team with your transaction details and reason for the request.</p>
      </section>

      {/* Billing Disputes */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>5. Billing Disputes</h2>
        <p style={paragraphStyle}>If you believe there is an error in your bill, please contact us within 30 days of receiving the bill. We will review and resolve the dispute in a timely manner.</p>
      </section>

      {/* Changes to Billing Policy */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>6. Changes to Billing Policy</h2>
        <p style={paragraphStyle}>We may update this Billing Policy from time to time. Any changes will be posted on this page, and we will notify you of significant changes. Your continued use of our services constitutes acceptance of any changes.</p>
      </section>

      {/* Contact Us */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>7. Contact Us</h2>
        <p style={paragraphStyle}>If you have any questions or concerns about our billing policy, please contact us at [contact information].</p>
      </section>
    </div>
  );
};

export default BillingPolicy;
