import React from 'react';

const About = () => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add box shadow
  };
  return (
    <div style={containerStyles}>
      <h2>About Us</h2>
      <p>We are a passionate team of developers creating amazing web applications!</p>
    </div>
  );
};

export default About;
