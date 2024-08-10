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

const CopyrightInfringementPolicy = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Copyright Infringement Policy</h1>
      <p style={paragraphStyle}>This policy outlines how FarmConnect Ghana addresses claims of copyright infringement. We take intellectual property rights seriously and aim to comply with applicable copyright laws.</p>
      
      {/* Reporting Infringement */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>1. Reporting Infringement</h2>
        <p style={paragraphStyle}>If you believe that your copyrighted work has been used on our platform in a way that constitutes copyright infringement, please follow these steps to report it:</p>
        <ol style={listStyle}>
          <li style={listItemStyle}>Send us a detailed written notice including your contact information, a description of the copyrighted work, and the location of the infringing material.</li>
          <li style={listItemStyle}>Include a statement that you have a good faith belief that the use of the material is not authorized by the copyright owner or law.</li>
          <li style={listItemStyle}>Provide a statement that the information in your notice is accurate and under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
          <li style={listItemStyle}>Email your notice to [copyright@farmconnectghana.com] or send it to our physical address listed on our contact page.</li>
        </ol>
      </section>

      {/* Review and Response */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>2. Review and Response</h2>
        <p style={paragraphStyle}>Upon receiving a valid notice of copyright infringement, we will:</p>
        <ol style={listStyle}>
          <li style={listItemStyle}>Review the notice to determine if it meets the requirements set forth in applicable copyright law.</li>
          <li style={listItemStyle}>Take appropriate action, which may include removing or disabling access to the infringing material.</li>
          <li style={listItemStyle}>Notify the party who posted the material of the claim and provide them with an opportunity to respond to the notice.</li>
        </ol>
      </section>

      {/* Counter-Notice */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>3. Counter-Notice</h2>
        <p style={paragraphStyle}>If you believe that your material was removed or disabled in error, you may submit a counter-notice. A valid counter-notice should include:</p>
        <ol style={listStyle}>
          <li style={listItemStyle}>Your contact information, a description of the material, and the location of the material prior to removal.</li>
          <li style={listItemStyle}>A statement under penalty of perjury that you believe the material was removed by mistake or misidentification.</li>
          <li style={listItemStyle}>A statement that you consent to the jurisdiction of the federal district court in which you reside.</li>
          <li style={listItemStyle}>Email your counter-notice to [copyright@farmconnectghana.com] or send it to our physical address.</li>
        </ol>
      </section>

      {/* Repeat Infringement */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>4. Repeat Infringement</h2>
        <p style={paragraphStyle}>FarmConnect Ghana may terminate the accounts of users who are found to be repeat infringers of copyright laws.</p>
      </section>

      {/* Contact Us */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>5. Contact Us</h2>
        <p style={paragraphStyle}>For further information or if you have questions about this policy, please contact us at [contact@farmconnectghana.com].</p>
      </section>
    </div>
  );
};

export default CopyrightInfringementPolicy;
