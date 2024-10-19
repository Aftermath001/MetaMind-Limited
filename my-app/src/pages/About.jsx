import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets_frontend/assets";
import KeyPersonel from "../components/KeyPersonel";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div className="text-center text-2xl pt-10 text-gray-500" variants={itemVariants}>
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </motion.div>

      <motion.div className="my-10 flex flex-col md:flex-row gap-12" variants={itemVariants}>
        <motion.img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="about_image"
          whileHover={{ scale: 1.05 }}
        />
        <motion.div className="flex flex-col gap-6 md:w-2/4 text-sm text-gray-600">
          <motion.b className="text-gray-800">Our Mission</motion.b>
          <motion.p>
            Our mission is to empower nurses by providing them with access to international and local job opportunities...
          </motion.p>

          <motion.b className="text-gray-800">Our Vision</motion.b>
          <motion.p>
            To be a leading nurse recruitment agency that connects skilled nurses with life-changing career opportunities...
          </motion.p>
        </motion.div>
      </motion.div>

      <KeyPersonel />

      <motion.div className="text-xl my-4" variants={itemVariants}>
        <p>WHY CHOOSE US</p>
      </motion.div>

      <motion.div className="flex flex-col md:flex-row mb-20" variants={containerVariants}>
        {["INTEGRITY", "COMPASSION", "INNOVATION", "DIVERSITY"].map((value, index) => (
          <motion.div
            key={index}
            className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer"
            variants={itemVariants}
          >
            <b>{value}:</b>
            <p>{`We prioritize ${value.toLowerCase()} in all our dealings.`}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
