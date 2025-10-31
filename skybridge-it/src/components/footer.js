import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="gradient-heading">SkyBridge</h3>
            <p>Your trusted IT solutions partner for innovative technology services and digital transformation.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <a href="#services">Network Solutions</a>
            <a href="#services">Cloud Services</a>
            <a href="#services">Cybersecurity</a>
            <a href="#services">IT Support</a>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 info@skybridge.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Business Ave, City, State</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Skybridge IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;