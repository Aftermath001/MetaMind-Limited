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
      <motion.div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </motion.div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <motion.img className='w-full md:max-w-[200px]' src={assets.contact_image} alt='contact image' whileHover={{ scale: 1.05 }} />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>Kakamega, Kakamega County</p>
          <p className='text-gray-500'>Tel: (+254) 797 246 096</p>
          <motion.button 
            className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'
            onClick={() => window.open('https://wa.me/797 246 096', '_blank')}
            whileHover={{ scale: 1.1 }}
          >
            WhatsApp Us
          </motion.button>
        </div>
      </div>

      <motion.form className='flex flex-col gap-4 max-w-md mx-auto' initial="hidden" animate="visible" variants={formVariants}>
        <input type='text' name='name' placeholder='Your Name' required className='border p-2' />
        <input type='email' name='email' placeholder='Your Email' required className='border p-2' />
        <textarea name='message' placeholder='Your Message' required className='border p-2' />
        <motion.button type='submit' className='bg-black text-white px-4 py-2' whileHover={{ scale: 1.05 }}>
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;


// import React, { useRef } from 'react';
// import { assets } from '../assets/assets_frontend/assets';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
//       .then((result) => {
//           console.log(result.text);
//           alert('Message sent successfully!');
//       }, (error) => {
//           console.log(error.text);
//           alert('Failed to send the message. Please try again.');
//       });
//   };

//   return (
//     <div>
//       <div className='text-center text-2xl pt-10 text-gray-500'>
//         <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
//       </div>

//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
//         <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt='contact image' />

//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
//           <p className='text-gray-500'>Kabarnet <br />Baringo County</p>
//           <p className='text-gray-500'>Tel:(+254) 798 567 828 <br />Email:safari.agency@yahoo.com</p>
//           <p className='font-semibold text-lg text-gray-600'>Careers at Safari Nursing Agency</p>
//           <p className='text-gray-500'>Learn more about our teams and job openings.</p>
//           <button 
//             className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'
//             onClick={() => window.open('https://wa.me/798 567 828', '_blank')}
//           >
//             WhatsApp Us
//           </button>
//         </div>
//       </div>

//       {/* <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 max-w-md mx-auto'> */}
//       <form  className='flex flex-col gap-4 max-w-md mx-auto'>
//         <input type='text' name='name' placeholder='Your Name' required className='border p-2' />
//         <input type='email' name='email' placeholder='Your Email' required className='border p-2' />
//         <textarea name='message' placeholder='Your Message' required className='border p-2' />
//         <button type='submit' className='bg-black text-white px-4 py-2'>Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;



