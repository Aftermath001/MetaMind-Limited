import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 dark:border-b-gray-600'>
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        className='h-12 w-12 lg:h-16 lg:w-16 rounded-full object-cover mb-0 cursor-pointer'
        src={assets.logo}
        alt='Logo'
      />

      {/* Full Menu (Hidden on small screens) */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/' className='text-primary dark:text-tertiary'>
          <li className='py-1'>HOME</li>
        </NavLink>
        <NavLink to='/services' className='text-primary dark:text-tertiary'>
          <li className='py-1'>SERVICES</li>
        </NavLink>
        <NavLink to='/portfolio' className='text-primary dark:text-tertiary'>
          <li className='py-1'>PROJECTS</li>
        </NavLink>
        <NavLink to='/about' className='text-primary dark:text-tertiary'>
          <li className='py-1'>ABOUT</li>
        </NavLink>
        <NavLink to='/contact' className='text-primary dark:text-tertiary'>
          <li className='py-1'>CONTACT</li>
        </NavLink>
      </ul>

      {/* Toggle Button for Light/Dark Mode */}
      <button
        onClick={toggleTheme}
        className='hidden md:block bg-secondary dark:bg-primary text-primary dark:text-secondary py-1 px-4 rounded-lg font-medium'
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Hamburger Icon (Visible on small screens) */}
      <div className='md:hidden flex items-center gap-2'>
        <button
          onClick={toggleTheme}
          className='bg-secondary dark:bg-primary text-primary dark:text-secondary py-1 px-2 rounded-lg text-xs font-medium'
        >
          {isDarkMode ? '☀' : '🌙'}
        </button>
        <button onClick={toggleMenu} className='text-2xl'>
          {showMenu ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu (Visible when showMenu is true) */}
      {showMenu && (
        <ul className='absolute top-16 left-0 w-full bg-white dark:bg-primary flex flex-col items-center gap-4 py-4 border-t border-t-gray-400 dark:border-t-gray-600'>
          <NavLink to='/' onClick={toggleMenu} className='text-primary dark:text-tertiary'>
            <li className='py-1'>HOME</li>
          </NavLink>
          <NavLink to='/services' onClick={toggleMenu} className='text-primary dark:text-tertiary'>
            <li className='py-1'>SERVICES</li>
          </NavLink>
          <NavLink to='/portfolio' onClick={toggleMenu} className='text-primary dark:text-tertiary'>
            <li className='py-1'>PROJECTS</li>
          </NavLink>
          <NavLink to='/about' onClick={toggleMenu} className='text-primary dark:text-tertiary'>
            <li className='py-1'>ABOUT</li>
          </NavLink>
          <NavLink to='/contact' onClick={toggleMenu} className='text-primary dark:text-tertiary'>
            <li className='py-1'>CONTACT</li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
