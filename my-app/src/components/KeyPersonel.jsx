import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets_frontend/assets";

const KeyPersonel = () => {
  const ceo = {
    name: "ALVIN ADAMS",
    description: `Alvin Adams is the Director and Co-founder of MetaMind Limited. 
            With years of experience in the industry, he has led the company to new heights. `,
    achievements: [
      "5+ Years of Experience in the Software Industry",
      "Founded MetaMind in 2024",
      "Over 20+ successful projects completed",
    ],
  };

  const ceo2 = {
    name: "JOE OTUYA",
    description: `Joe Otuya is he Director and Co-founder of MetaMind Limited. 
            With years of experience in the industry, he has led the company to new heights.  `,
    achievements: [
      "5+ Years of Experience in the Software Industry",
      "Founded MetaMind in 2024",
      "Over 20+ successful projects completed",
    ],
  };

  return (
    <motion.div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="flex flex-col lg:flex-row items-center lg:space-x-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* CEO Image */}
          <motion.div className="w-full lg:w-1/3 mb-8 lg:mb-0" whileHover={{ scale: 1.05 }}>
            <img className="w-full md:max-w-[360px] rounded-lg shadow-lg" src={assets.director1} alt="Dr. Hillary Kelum" />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <motion.div className="flex flex-col lg:flex-row items-center lg:space-x-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* CEO Image */}
          <motion.div className="w-full lg:w-1/3 mb-8 lg:mb-0" whileHover={{ scale: 1.05 }}>
            <img className="w-full md:max-w-[360px] rounded-lg shadow-lg" src={assets.director2} alt="Dr. Hillary Kelum" />
          </motion.div>

          {/* CEO Description */}
          <motion.div className="w-full lg:w-2/3">
            <motion.h2 className="text-3xl font-semibold text-primary mb-4">
              {ceo2.name}
            </motion.h2>
            <motion.p className="text-lg text-gray-700 mb-6">
              {ceo2.description}
            </motion.p>

            <h3 className="text-2xl font-semibold text-secondary mb-4">
              Achievements:
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
              {ceo2.achievements.map((achievement, index) => (
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
