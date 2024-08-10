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

const TermsAndConditions = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Terms of Use</h1>
      
      {/* Acceptance of the Terms */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>ACCEPTANCE OF THE TERMS</h2>
        <ol style={listStyle}>
          <li style={listItemStyle}>By accessing or using FarmConnect Ghana, you agree to be bound by these terms.</li>
          <li style={listItemStyle}>If you do not agree with any part of these terms, you must not use our services.</li>
          <li style={listItemStyle}>We may update these terms from time to time and will notify you of any changes.</li>
        </ol>
      </section>

      {/* Important Disclaimers */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>IMPORTANT DISCLAIMERS</h2>
        <ol style={listStyle}>
          <li style={listItemStyle}>We do not guarantee the accuracy of information on FarmConnect Ghana.</li>
          <li style={listItemStyle}>The service is provided on an 'as-is' basis without warranties of any kind.</li>
          <li style={listItemStyle}>We are not responsible for any loss or damage arising from the use of our services.</li>
        </ol>
      </section>

      {/* Account Registration */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>ACCOUNT REGISTRATION</h2>
        <ol style={listStyle}>
          <li style={listItemStyle}>You must provide accurate and complete information when registering an account.</li>
          <li style={listItemStyle}>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li style={listItemStyle}>You must notify us immediately of any unauthorized use of your account.</li>
        </ol>
      </section>

      {/* Service */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>SERVICE</h2>
        <ol style={listStyle}>
          <li style={listItemStyle}>We provide a platform to connect farmers with customers for agricultural transactions.</li>
          <li style={listItemStyle}>We may modify or discontinue our services at any time without notice.</li>
          <li style={listItemStyle}>We are not responsible for any transactions or agreements made between users.</li>
        </ol>
      </section>

      {/* Posting of Announcements by Users */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>POSTING OF ANNOUNCEMENTS BY USERS</h2>
        <ol style={listStyle}>
          <li style={listItemStyle}>Users are responsible for the content of their announcements.</li>
          <li style={listItemStyle}>We reserve the right to remove any content that violates our terms.</li>
          <li style={listItemStyle}>Users must ensure their announcements comply with applicable laws and regulations.</li>
        </ol>
      </section>

      {/* Fees */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>FEES</h2>
        <p style={paragraphStyle}>We may charge fees for certain services on FarmConnect Ghana. The fees will be communicated to you before you incur any charges. By using paid services, you agree to pay the applicable fees.</p>
      </section>

      {/* Indemnity */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>INDEMNITY</h2>
        <p style={paragraphStyle}>You agree to indemnify and hold FarmConnect Ghana, its affiliates, and their respective officers, directors, employees, and agents harmless from any claims, liabilities, damages, losses, or expenses arising from your use of our services or any breach of these terms.</p>
      </section>

      {/* Limitation of Liability */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>LIMITATION OF LIABILITY</h2>
        <p style={paragraphStyle}>In no event shall FarmConnect Ghana be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of our services or any inability to use our services.</p>
      </section>

      {/* Governing Law and Jurisdiction */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>GOVERNING LAW AND JURISDICTION</h2>
        <p style={paragraphStyle}>These terms shall be governed by and construed in accordance with the laws of Ghana. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Ghana.</p>
      </section>

      {/* Miscellaneous Provisions */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>MISCELLANEOUS PROVISIONS</h2>
        <p style={paragraphStyle}>If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable. Our failure to enforce any provision of these terms does not constitute a waiver of that provision.</p>
      </section>

      {/* Contact */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>CONTACT</h2>
        <p style={paragraphStyle}>If you have any questions or concerns about these terms, please contact us at [contact information].</p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
