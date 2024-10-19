import React from "react";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const services = [
    {
      title: "Training and Education",
      description:
        "Offering training programs for nurses to enhance their skills, gain certifications, or prepare for exams like the NCLEX-RN.",
    },
    {
      title: "International Nurse Placement",
      description:
        "Connecting nurses from countries like Kenya to job opportunities abroad, such as in the U.S., U.K., Canada, or Australia.",
    },
    {
      title: "Local Staffing Solutions",
      description:
        "Providing local healthcare institutions in Kenya with qualified nurses for short- or long-term assignments.",
    },
    {
      title: "Digital Health Integration",
      description:
        "Incorporating digital health tools or platforms for remote consultations or telemedicine, aligning with global healthcare trends.",
    },
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Our Services
        </h2>

        {/* Container for animated cards */}
        <motion.div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-tertiary rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              variants={itemVariant}
            >
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
