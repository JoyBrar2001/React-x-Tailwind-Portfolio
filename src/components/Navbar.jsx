import React, { useState } from 'react';

import { FaBars, FaTimes, FaGithub, FaLinkedin, FaLink } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo1.png';

const Navbar = () => {

  const [nav,setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-2xl'>

      <div>
        <img src={Logo} alt="Logo Here" className='w-[50px]' />
      </div>


      <ul className='hidden md:flex'>
        <li className='navbar-top-items'><a href="#home">Home</a></li>
        <li className='navbar-top-items'><a href="#about">About</a></li>
        <li className='navbar-top-items'><a href="#skills">Skills</a></li>
        <li className='navbar-top-items'><a href="#work">Work</a></li>
        <li className='navbar-top-items'><a href="#contact">Contact</a></li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!nav ? "hidden" : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li onClick={handleClick} className='py-6 text-4xl'>Home</li>
        <li onClick={handleClick} className='py-6 text-4xl'>About</li>
        <li onClick={handleClick} className='py-6 text-4xl'>Skills</li>
        <li onClick={handleClick} className='py-6 text-4xl'>Work</li>
        <li onClick={handleClick} className='py-6 text-4xl'>Contact</li>
      </ul>

      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='social-box bg-blue-600'>
            <a className='social-a' href="/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='social-box bg-[#333333]'>
            <a className='social-a' href="/">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='social-box bg-[#6fc2b0]'>
            <a className='social-a' href="/">
              Email me <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='social-box bg-[#565f69]'>
            <a className='social-a' href="/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default Navbar;
