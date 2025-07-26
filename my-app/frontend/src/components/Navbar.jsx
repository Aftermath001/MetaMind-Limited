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
    <div className='relative flex items-center justify-between text-sm py-2 md:py-4 mb-5 border-b border-b-gray-400 dark:border-b-gray-600'>
      {/* Logo */}
      <div className='flex items-center p-0 m-0'>
        <img
          onClick={() => navigate('/')}
          className='h-32 w-32 object-cover rounded-full cursor-pointer'
          src={assets.logo}
          alt='Logo'
        />
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <li className='py-1'>
          <NavLink to='/' className='text-primary dark:text-tertiary'>
            HOME
          </NavLink>
        </li>
        <li className='py-1'>
          <NavLink to='/services' className='text-primary dark:text-tertiary'>
            SERVICES
          </NavLink>
        </li>
        {/* <li className='py-1'>
          <NavLink to='/portfolio' className='text-primary dark:text-tertiary'>
            PROJECTS
          </NavLink>
        </li> */}
        <li className='py-1'>
          <NavLink to='/about' className='text-primary dark:text-tertiary'>
            ABOUT
          </NavLink>
        </li>
        <li className='py-1'>
          <NavLink to='/contact' className='text-primary dark:text-tertiary'>
            CONTACT
          </NavLink>
        </li>
      </ul>

      {/* Desktop Theme Toggle */}
      <button
        onClick={toggleTheme}
        className='hidden md:block bg-secondary dark:bg-primary text-primary dark:text-secondary py-1 px-4 rounded-lg font-medium'
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Mobile Controls */}
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

      {/* Mobile Menu */}
      {showMenu && (
        <ul className='absolute top-20 left-0 w-full bg-white dark:bg-primary flex flex-col items-center gap-4 py-4 border-t border-t-gray-400 dark:border-t-gray-600 z-50 md:hidden'>
          <li onClick={toggleMenu}>
            <NavLink to='/' className='text-primary dark:text-tertiary'>
              HOME
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink to='/services' className='text-primary dark:text-tertiary'>
              SERVICES
            </NavLink>
          </li>
          {/* <li onClick={toggleMenu}>
            <NavLink to='/portfolio' className='text-primary dark:text-tertiary'>
              PROJECTS
            </NavLink>
          </li> */}
          <li onClick={toggleMenu}>
            <NavLink to='/about' className='text-primary dark:text-tertiary'>
              ABOUT
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink to='/contact' className='text-primary dark:text-tertiary'>
              CONTACT
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
