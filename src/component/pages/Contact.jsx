import React from 'react';

const Contact = () => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add box shadow
  };

  return (
    <div style={containerStyles}>
      <h2>Contact Us</h2>
      <p>Email: soubhikmahato86@gmail.com</p>
      <p>Phone: +91 8617387835</p>
    </div>
  );
};

export default Contact;
