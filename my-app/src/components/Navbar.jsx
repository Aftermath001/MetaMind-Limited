import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        className='h-12 w-12 lg:h-16 lg:w-16 rounded-full object-cover mb-0 cursor-pointer'
        src={assets.logo}
        alt='Logo'
      />

      {/* Full Menu (Hidden on small screens) */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-05 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/services'>
          <li className='py-1'>SERVICES</li>
          <hr className='border-none outline-none h-05 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/portfolio'>
          <li className='py-1'>PROJECTS</li>
          <hr className='border-none outline-none h-05 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-05 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-05 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      {/* Hamburger Icon (Visible on small screens) */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-2xl'>
          {showMenu ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu (Visible when showMenu is true) */}
      {showMenu && (
        <ul className='absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 border-t border-t-gray-400'>
          <NavLink to='/' onClick={toggleMenu}>
            <li className='py-1'>HOME</li>
          </NavLink>
          <NavLink to='/services' onClick={toggleMenu}>
            <li className='py-1'>SERVICES</li>
          </NavLink>
          <NavLink to='/about' onClick={toggleMenu}>
            <li className='py-1'>ABOUT</li>
          </NavLink>
          <NavLink to='/contact' onClick={toggleMenu}>
            <li className='py-1'>CONTACT</li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
