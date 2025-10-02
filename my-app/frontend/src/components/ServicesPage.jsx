import React from "react";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const services = [
    {
      title: "Custom Website Design & Development",
      description:
        "Professional, mobile-responsive websites tailored to your brand and business goals in Kenya.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Build powerful online stores with secure payment gateways (including M-Pesa integration) for the Kenyan market.",
    },
    {
      title: "Web Application Development",
      description:
        "Develop custom web apps, portals, and platforms to streamline your operations or offer unique services.",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centric designs focusing on intuitive navigation and engaging experiences for your target audience.",
    },
    {
      title: "API Development & Integration",
      description:
        "Connect your systems, automate workflows, and integrate third-party services seamlessly.",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Ongoing support, updates, and security to keep your website running smoothly and securely.",
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
    <div className="py-12 bg-tertiary dark:bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary dark:text-tertiary mb-8">
          Our Web & Software Services
        </h2>

        <motion.div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              variants={itemVariant}
            >
              <h3 className="text-xl font-semibold mb-3 text-secondary dark:text-gold">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
