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

const PrivacyPolicy = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Privacy Policy</h1>
      <p style={paragraphStyle}>This Privacy Policy explains how FarmConnect Ghana collects, uses, and protects your personal information when you use our services. We are committed to ensuring your privacy and protecting your data.</p>
      
      {/* Introduction */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>1. Introduction</h2>
        <p style={paragraphStyle}>Welcome to FarmConnect Ghana. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your personal information. By using our services, you agree to the collection and use of information in accordance with this policy.</p>
      </section>

      {/* Information We Collect */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>2. Information We Collect</h2>
        <p style={paragraphStyle}>We collect various types of information to provide and improve our services:</p>
        <ol style={listStyle}>
          <li style={listItemStyle}>Personal Information: Includes your name, email address, phone number, and other details you provide when you register or use our services.</li>
          <li style={listItemStyle}>Usage Data: Information about how you interact with our services, such as IP addresses, browser types, and pages visited.</li>
          <li style={listItemStyle}>Cookies and Tracking Technologies: We use cookies and similar technologies to track your activity and improve user experience.</li>
        </ol>
      </section>

      {/* How We Use Your Information */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>3. How We Use Your Information</h2>
        <p style={paragraphStyle}>We use the information we collect for various purposes:</p>
        <ol style={listStyle}>
          <li style={listItemStyle}>To Provide and Maintain Our Services: Including user support and customer service.</li>
          <li style={listItemStyle}>To Improve Our Services: Analyzing usage patterns to enhance our offerings.</li>
          <li style={listItemStyle}>To Communicate With You: Sending updates, promotional materials, and other relevant information.</li>
          <li style={listItemStyle}>To Ensure Security: Protecting against fraudulent activities and unauthorized access.</li>
        </ol>
      </section>

      {/* How We Share Your Information */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>4. How We Share Your Information</h2>
        <p style={paragraphStyle}>We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:</p>
        <ol style={listStyle}>
          <li style={listItemStyle}>With Service Providers: Third-party companies that help us operate and improve our services.</li>
          <li style={listItemStyle}>For Legal Reasons: To comply with legal obligations or protect our rights and safety.</li>
          <li style={listItemStyle}>With Your Consent: If you have given us permission to share your information.</li>
        </ol>
      </section>

      {/* Data Security */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>5. Data Security</h2>
        <p style={paragraphStyle}>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee absolute security.</p>
      </section>

      {/* Your Rights */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>6. Your Rights</h2>
        <p style={paragraphStyle}>You have the following rights regarding your personal information:</p>
        <ol style={listStyle}>
          <li style={listItemStyle}>Access: You can request access to the personal information we hold about you.</li>
          <li style={listItemStyle}>Correction: You can request correction of any inaccurate or incomplete information.</li>
          <li style={listItemStyle}>Deletion: You can request deletion of your personal information, subject to certain exceptions.</li>
          <li style={listItemStyle}>Opt-Out: You can opt-out of receiving promotional communications from us.</li>
        </ol>
      </section>

      {/* Changes to This Policy */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>7. Changes to This Policy</h2>
        <p style={paragraphStyle}>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this policy periodically for any changes.</p>
      </section>

      {/* Contact Us */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>8. Contact Us</h2>
        <p style={paragraphStyle}>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [contact information].</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
