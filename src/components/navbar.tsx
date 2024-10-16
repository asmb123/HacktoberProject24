"use client";

import './Navbar.css';
import {useState} from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className="logo">ScholarLift</div>
      <div className={`options ${isMenuOpen ? 'open' : ''}`}>
        <div className="option">About Us</div>
        <div className="option">List</div>
        <div className="option">Start</div>
        <div className="option">Stories</div>
        <div className="option">Contact Us</div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
