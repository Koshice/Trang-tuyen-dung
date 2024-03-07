import React from 'react';
import '../css/styles.css';

interface FooterProps {
  position?: 'fixed' | 'absolute' | 'relative';
}

const Footer: React.FC<FooterProps> = ({ position }) => {
  const footerStyle: React.CSSProperties = {
    position: position || 'relative',
  };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="footer-content">
        <p>Alta Software - Training Team - 04/2023</p>
      </div>
    </footer>
  );
};

export default Footer;
