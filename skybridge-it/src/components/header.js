import { useState } from 'react';
import './header.css';
import LogoIcon from '../skbrglogo.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2 className="gradient-heading">SkyBridge</h2>
           {/*<img 
            src={LogoIcon}
            alt="Skybridge IT Logo" 
            className="logo-icon" 
            />*/}
         
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('services')}
          >
            Services
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </nav>
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;