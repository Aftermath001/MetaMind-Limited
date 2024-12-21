import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-tertiary dark:bg-primary"
    >
      <motion.div
        className="text-center text-3xl pt-10 text-primary dark:text-tertiary"
        variants={itemVariants}
      >
        <p>
          ABOUT <span className="text-gray-700 dark:text-gray-400 font-medium">US</span>
        </p>
      </motion.div>

      <motion.div
        className="my-10 flex flex-col md:flex-row gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={itemVariants}
      >
        <motion.div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-gray-600 dark:text-gray-300">
          <motion.div className="md:w-1/2">
            <motion.b className="text-gray-800 dark:text-gray-100 text-lg">
              Company History
            </motion.b>
            <motion.p>
              Metamind was founded in 2015 by a group of visionary consultants
              with a shared passion for innovation and excellence. Over the
              years, we have grown from a small startup into a renowned
              consultancy firm, helping businesses across various industries
              navigate complex challenges and achieve sustainable growth. Our
              journey began with a commitment to delivering personalized and
              impactful solutions, and this philosophy continues to drive us
              today.
            </motion.p>
          </motion.div>

          <motion.div className="md:w-1/2">
            <motion.b className="text-gray-800 dark:text-gray-100 text-lg">
              Mission Statement
            </motion.b>
            <motion.p>
              At Metamind, our mission is to empower businesses to unlock their
              full potential through innovative and tailored consulting
              solutions. We strive to be the catalyst for transformation,
              providing our clients with the tools, strategies, and insights
              needed to thrive in an ever-evolving marketplace. Our goal is to
              build lasting partnerships based on trust, excellence, and
              measurable success.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* <KeyPersonel /> */}

      <motion.div
        className="text-xl my-8 text-center text-primary dark:text-tertiary"
        variants={itemVariants}
      >
        <p className="font-bold">WHY CHOOSE US</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {["INNOVATIVE SOLUTIONS", "TAILORED APPROACH", "EXPERT TEAM", "RESULT-DRIVEN"].map(
          (value, index) => (
            <motion.div
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-lg px-10 py-8 flex flex-col gap-5 text-center text-[15px] hover:bg-primary dark:hover:bg-tertiary hover:text-white dark:hover:text-primary transition-all duration-300 text-gray-600 dark:text-gray-300 cursor-pointer"
              variants={itemVariants}
            >
              <b className="text-lg">{value}:</b>
              <p>{`We prioritize ${value.toLowerCase()} in all our dealings.`}</p>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default About;
