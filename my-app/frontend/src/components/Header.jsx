import React from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Header = () => {
  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } }
  };

  const buttonVariant = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'
      initial="hidden"
      animate="visible"
    >
      {/* Left Side */}
      <motion.div 
        className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'
        variants={textVariant}
      >
        <motion.p className='text-3xl md:text-4xl lg:text-5xl text-tertiary font-semibold leading-tight'>
          METAMIND <br /> LIMITED
        </motion.p>
        <motion.div className='flex flex-col md:flex-row items-center gap-3 text-tertiary text-sm font-light'>
          <p>
            At Metamind, we are dedicated to helping businesses navigate complex challenges and achieve sustainable growth through personalized and impactful solutions.
          </p>
        </motion.div>
        <motion.div
  className='flex items-center gap-2 bg-secondary px-8 py-3 rounded-full text-primary text-sm m-auto md:m-0'
  whileHover="hover"
  variants={buttonVariant}
>
  <Link to="/contact" className="flex items-center gap-2">
    Book Appointment Here<img className='w-3' src={assets.arrow_icon} alt='arrow-icon'/>
  </Link>
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div className='md:w-1/2 relative' variants={imageVariant}>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt='header img'/>
      </motion.div>
    </motion.div>
  );
};

export default Header;
