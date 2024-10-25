"use client";

import Link from 'next/link';
import './Navbar.css';
import { useState } from 'react';
import { CgProfile } from "react-icons/cg";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar flex justify-between items-center bg-redbg h-[10vh] fixed top-0 w-[100%] p-[1.5rem] z-[999]  '>
      <div className="logo rounded-[14px] text-white h-[40px] w-[120px] flex justify-center text-[1.5rem] font-extrabold ml-[1.5rem]"><Link href={'/'}>ScholarLift</Link></div>
      <div className={`options flex justify-between items-center gap-[1rem] ${isMenuOpen ? 'open' : ''}`}>
        <div className="option hover:bg-lightredbg hover:rounded-[10px] text-[1rem] h-[40px] flex justify-center items-center min-w-[60px] p-[5px] font-bold text-white hover:text-black cursor-pointer "><Link href={'/pages/aboutus'}>About Us</Link></div>
        <div className="option hover:bg-lightredbg hover:rounded-[10px] text-[1rem] h-[40px] flex justify-center items-center min-w-[60px] p-[5px] font-bold text-white hover:text-black cursor-pointer"><Link href={'/pages/start'}>Start</Link></div>
        <div className="option hover:bg-lightredbg hover:rounded-[10px] text-[1rem] h-[40px] flex justify-center items-center min-w-[60px] p-[5px] font-bold text-white hover:text-black cursor-pointer"><Link href={'/pages/stories'}>Stories</Link></div>
        <div className="option hover:bg-lightredbg hover:rounded-[10px] text-[1rem] h-[40px] flex justify-center items-center min-w-[60px] p-[5px] font-bold text-white hover:text-black cursor-pointer"><Link href={'/pages/contactus'}>Contact Us</Link></div>
        <div className="option hover:bg-lightredbg hover:rounded-[10px] text-[1rem] h-[40px] flex justify-center items-center min-w-[60px] p-[5px] font-bold text-white hover:text-black cursor-pointer"><Link href={'/pages/profile'}><CgProfile size={35} /></Link></div>

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
