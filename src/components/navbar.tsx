"use client";

import Link from 'next/link';
import './Navbar.css';
import { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import Profile1 from './Profile1';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar flex justify-between items-center bg-[rgb(36,36,36)]  h-[10vh] fixed top-0 w-[100%] p-[1.5rem] z-[999]  '>
      <div className="logo rounded-[14px] text-white h-[60px] w-[120px]  flex justify-center text-[1.5rem] font-extrabold ml-[1.5rem] ">ScholarLift</div>
      <div className={`options flex justify-between items-center gap-[1rem] ${isMenuOpen ? 'open' : ''}`}>
        <div className="option text-[1rem] h-[40px] flex justify-center items-center min-w-[60px] p-[5px] font-bold text-white cursor-pointer ">About Us</div>
        <div className="option hover:bg-[#4379f2] hover:rounded-[10px] hover:shadow-[rgba(255, 255, 255, 0.35)_0px_5px_15px] text-[1rem] h-[40px] flex justify-center items-center min-w-[60px] p-[5px] font-bold text-white cursor-pointer">List</div>
        <div className="option  hover:bg-[#4379f2] hover:rounded-[10px] hover:shadow-[rgba(255, 255, 255, 0.35)_0px_5px_15px] text-[1rem] h-[40px] flex justify-center items-center min-w-[60px] p-[5px] font-bold text-white cursor-pointer">Start</div>
        <div className="option hover:bg-[#4379f2] hover:rounded-[10px] hover:shadow-[rgba(255, 255, 255, 0.35)_0px_5px_15px] text-[1rem] h-[40px] flex justify-center items-center min-w-[60px] p-[5px] font-bold text-white cursor-pointer">Stories</div>
        <div className="option hover:bg-[#4379f2] hover:rounded-[10px] hover:shadow-[rgba(255, 255, 255, 0.35)_0px_5px_15px] text-[1rem] h-[40px] flex justify-center items-center min-w-[60px] p-[5px] font-bold text-white cursor-pointer">Contact Us</div>
        <div className="option hover:bg-[#4379f2] hover:rounded-[10px] hover:shadow-[rgba(255, 255, 255, 0.35)_0px_5px_15px] text-[1rem] h-[40px] flex justify-center items-center min-w-[60px] p-[5px] font-bold text-white cursor-pointer"><Link href={'/profile'}><Profile1/></Link></div>

      </div>
      <div className="hamburger hidden  flex-col justify-between cursor-pointer" onClick={toggleMenu}>
        <div className="bar w-[25px] h-[3px] bg-white my-[3px] mx-0 "></div>
        <div className="bar w-[25px] h-[3px] bg-white my-[3px] mx-0 "></div>
        <div className="bar w-[25px] h-[3px] bg-white my-[3px] mx-0 "></div>
      </div>
    </div>
  );
};

export default Header;
