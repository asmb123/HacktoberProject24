"use client";

import Link from 'next/link';
import './Navbar.css';
import { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import useAuth from '@/contexts/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const {isLoggedIn} = useAuth();

  return (
    <div className='navbar'>
      <div className="logo">ScholarLift</div>
      <div className={`options ${isMenuOpen ? 'open' : ''}`}>
        <div className="option">About Us</div>
        <div className="option">List</div>
        <div className="option">Start</div>
        <div className="option">Stories</div>
        <div className="option">Contact Us</div>
        <div className="option"><Link href={isLoggedIn ? '/profile' : '/login'}><CgProfile size={35} /></Link></div>
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
