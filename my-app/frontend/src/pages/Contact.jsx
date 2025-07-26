import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets_frontend/assets';

const Contact = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      {/* Heading */}
      <motion.div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          CONTACT <span className='text-gray-700 dark:text-white font-semibold'>US</span>
        </p>
      </motion.div>

      {/* Office Info + Image */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <motion.img
          className='w-full md:max-w-[200px]'
          src={assets.contact_image}
          alt='contact'
          whileHover={{ scale: 1.05 }}
        />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600 dark:text-white'>OUR OFFICE</p>
          <p className='text-gray-500 dark:text-gray-300'>NAIROBI, KENYA</p>
          <p className='text-gray-500 dark:text-gray-300'>
            Tel: (+254) 797 246 096 / (+254) 799 949 392
          </p>
          <motion.button
            className='border border-black dark:border-white px-8 py-4 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500'
            onClick={() => window.open('https://wa.me/254797246096', '_blank')}
            whileHover={{ scale: 1.1 }}
          >
            WhatsApp Us
          </motion.button>
        </div>
      </div>

      {/* Contact Form */}
      <motion.form
        action="https://formspree.io/f/mnnvdalw"
        method="POST"
        className='flex flex-col gap-4 max-w-md mx-auto'
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          required
          className='border p-2 bg-white dark:bg-primary text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-300 rounded-md'
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          required
          className='border p-2 bg-white dark:bg-primary text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-300 rounded-md'
        />
        <textarea
          name='message'
          placeholder='Your Message'
          required
          className='border p-2 bg-white dark:bg-primary text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-300 rounded-md h-32 resize-none'
        />
        <motion.button
          type='submit'
          className='bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md font-medium hover:opacity-90 transition-all'
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
