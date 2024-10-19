
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-black p-1 m-4 text-center">
      <div className="footer-content flex justify-center align-middle flex-wrap ">
        <div className="footer-social flex gap-5">
          <a href="https://facebook.com" className="footer-icon text-black  text-[2rem] hover:text-blue-600 "  target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="footer-icon text-black  text-[2rem] hover:text-blue-600 " target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="footer-icon text-black  text-[2rem] hover:text-blue-600 "  target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="footer-icon text-black  text-[2rem] hover:text-blue-600 " target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom mt-[1rem] text-[0.875rem]">
        <p>&copy; {new Date().getFullYear()} ScholarLift. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
