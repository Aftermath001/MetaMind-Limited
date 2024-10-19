import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { motion } from "framer-motion";

const Banner = () => {
  const navigate = useNavigate();

  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const buttonVariant = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="flex bg-[url('/src/assets/assets_frontend/airplane-plane.jpg')] bg-cover bg-center rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10"
      initial="hidden"
      animate="visible"
    >
      {/* Left Side */}
      <motion.div
        className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5"
        variants={textVariant}
      >
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p>With Safari Nursing Agency</p>
        </div>
        <motion.button
          onClick={() => {
            navigate("/contact");
            scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6"
          variants={buttonVariant}
          whileHover="hover"
        >
          Contact Us
        </motion.button>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="hidden md:block md:mw-1/2 lg:w-[370px] relative"
        variants={imageVariant}
      >
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt="appointment img"
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
