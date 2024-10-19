import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets_frontend/assets";

const KeyPersonel = () => {
  const ceo = {
    name: "Dr. Hillary Kelum",
    description: `Dr. Hillary Kelum is the founder and CEO of Safari Nursing Agency...`,
    achievements: [
      "5+ Years of Experience in Healthcare Industry",
      "Founded Safari Nursing Agency in 2024",
      "Helped place over 1,000 nurses in international positions",
      "Certified Mentor and Trainer in Global Nursing",
    ],
  };

  return (
    <motion.div className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="flex flex-col lg:flex-row items-center lg:space-x-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* CEO Image */}
          <motion.div className="w-full lg:w-1/3 mb-8 lg:mb-0" whileHover={{ scale: 1.05 }}>
            <img className="w-full md:max-w-[360px]" src={assets.maindoc} alt="profile_pic" />
          </motion.div>

          {/* CEO Description */}
          <motion.div className="w-full lg:w-2/3">
            <motion.h2 className="text-3xl font-semibold text-primary mb-4">
              {ceo.name}
            </motion.h2>
            <motion.p className="text-lg text-gray-700 mb-6">
              {ceo.description}
            </motion.p>

            <h3 className="text-2xl font-semibold text-secondary mb-4">
              Achievements:
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
              {ceo.achievements.map((achievement, index) => (
                <motion.li key={index} initial={{ x: -50 }} animate={{ x: 0, transition: { delay: 0.2 * index } }}>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default KeyPersonel;
