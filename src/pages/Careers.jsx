import React, { useState } from 'react';

// Styles for the page
const containerStyle = {
  padding: '20px',
  backgroundColor: '#FFFFFF',
};

const sectionStyle = {
  marginBottom: '40px',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#71B34A', // Green color for titles
  marginBottom: '10px',
};

const paragraphStyle = {
  marginBottom: '20px',
  color: '#333333', // Dark gray text for readability
};

const buttonStyle = {
  backgroundColor: '#F7931E', // Orange background for buttons
  color: '#FFFFFF', // White text color
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'inline-block',
  marginTop: '10px',
};

const cardStyle = {
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#F9F9F9',
  maxWidth: '600px',
  margin: '0 auto',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const formFieldStyle = {
  marginBottom: '15px',
  position: 'relative',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #CCCCCC',
};

const fileInputStyle = {
  display: 'none',
};

const fileButtonStyle = {
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '30px',
  height: '30px',
  backgroundColor: '#71B34A', // Green background for file upload icon
  color: '#FFFFFF',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: 'none',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const regionOptions = [
  'Greater Accra Region',
  'Ashanti Region',
  'Western Region',
  'Central Region',
  'Eastern Region',
  'Northern Region',
  'Western North Region',
  'Volta Region',
  'Upper East Region',
  'Upper West Region',
  'Oti Region',
  'Western North Region',
];

const Careers = () => {
  const [file, setFile] = useState(null);
  const [region, setRegion] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  // Scroll to form section
  const scrollToForm = () => {
    document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>We Are Hiring</h1>
      <p style={paragraphStyle}>Find out about career opportunities at FarmConnect Ghana and join our dynamic team!</p>
      
      {/* Job Vacancy */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Commission Sales Executive</h2>
        <button style={buttonStyle} onClick={scrollToForm}>Apply</button>
        <p style={paragraphStyle}>Join our sales team to drive growth and build relationships with our clients. We are looking for motivated individuals with a passion for sales and a desire to make a difference in the agricultural sector.</p>
      </section>

      {/* Detailed Description */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>About the Role</h2>
        <p style={paragraphStyle}>The Commission Sales Executive role offers an exciting opportunity to contribute to FarmConnect Ghana's success by engaging with potential clients, building partnerships, and driving sales growth. This position is ideal for individuals who thrive in a dynamic environment and are passionate about making a positive impact.</p>
      </section>

      {/* Duties */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Duties</h2>
        <ul style={paragraphStyle}>
          <li>Develop and maintain client relationships.</li>
          <li>Achieve sales targets and contribute to revenue growth.</li>
          <li>Identify and pursue new business opportunities.</li>
          <li>Provide exceptional customer service and support.</li>
          <li>Report on sales activities and performance.</li>
        </ul>
      </section>

      {/* Requirements */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Requirements</h2>
        <ul style={paragraphStyle}>
          <li>Proven sales experience.</li>
          <li>Excellent communication and interpersonal skills.</li>
          <li>Self-motivated and results-driven.</li>
          <li>Ability to work independently and as part of a team.</li>
          <li>Knowledge of the agricultural industry is a plus.</li>
        </ul>
      </section>

      {/* Benefits */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Benefits</h2>
        <ul style={paragraphStyle}>
          <li>Competitive commission-based compensation.</li>
          <li>Flexible working hours.</li>
          <li>Opportunities for career growth and development.</li>
          <li>Work with a passionate and innovative team.</li>
          <li>Access to training and resources.</li>
        </ul>
      </section>

      {/* How to Apply */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>How to Apply</h2>
        <p style={paragraphStyle}>To apply, please complete the form below and attach your resume or any relevant documents. We look forward to hearing from you!</p>
      </section>

      {/* Join Us Form */}
      <section style={sectionStyle} id="apply-form">
        <h2 style={titleStyle}>Join Us</h2>
        <div style={cardStyle}>
          <form style={formStyle}>
            <div style={formFieldStyle}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" style={inputStyle} />
            </div>
            <div style={formFieldStyle}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" style={inputStyle} />
            </div>
            <div style={formFieldStyle}>
              <label htmlFor="region">Region:</label>
              <select id="region" value={region} onChange={handleRegionChange} style={inputStyle}>
                <option value="">Select your region</option>
                {regionOptions.map((regionOption, index) => (
                  <option key={index} value={regionOption}>{regionOption}</option>
                ))}
              </select>
            </div>
            <div style={formFieldStyle}>
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" style={inputStyle} />
            </div>
            <div style={formFieldStyle}>
              <label htmlFor="document" style={{ display: 'flex', alignItems: 'center' }}>
                Attach Document
                <input type="file" id="document" style={fileInputStyle} onChange={handleFileChange} />
                <label htmlFor="document" style={fileButtonStyle}>
                  <span role="img" aria-label="upload" style={{ fontSize: '20px' }}>📎</span>
                </label>
              </label>
            </div>
            <button type="submit" style={buttonStyle}>Submit Application</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;
