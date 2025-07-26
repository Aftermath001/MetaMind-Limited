import React from "react";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const services = [
    {
      title: "Real Estate",
      description:
        "We partner with real estate and construction teams ready to move beyond spreadsheets, delays, and rising costs. Our custom-built solutions streamline project management, cost tracking, and team collaboration—designed to fit your exact workflow.",
    },
    {
      title: "Healthcare",
      description:
        "Revolutionize patient care with tailored software and mobile apps. We help healthcare providers elevate patient experiences, simplify operations, and drive better health outcomes through innovative technology.",
    },
    {
      title: "Education",
      description:
        "Our custom app development empowers modern learning with flexible, accessible solutions. By integrating AI and gamification, we help educators boost engagement, retention, and student success.",
    },
    {
      title: "Finance & Logistics",
      description:
        "We develop secure, high-performance software for banks and fintech companies worldwide. Our solutions enhance operational efficiency, reliability, and user experience—keeping your business agile and competitive in a dynamic market.Our custom software gives logistics teams complete visibility across operations—from vehicle tracking and inventory scanning to full end-to-end supply chain management. Stay connected, efficient, and in control.",
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          We Provide IT Services to Various Industries
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
