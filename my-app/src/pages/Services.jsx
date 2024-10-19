import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Training and Education",
      description: `We offer comprehensive training programs for nurses looking to enhance their skills, gain specialized certifications, or prepare for major exams like the NCLEX-RN. Our courses are tailored to the current global healthcare landscape, helping nurses stay competitive in the industry.`,
      icon: "📚", 
    },
    {
      title: "International Nurse Placement",
      description: `We specialize in connecting nurses from Kenya and other countries to job opportunities abroad, including the U.S., U.K., Canada, and Australia. Our team supports every step of the process, from visa applications to job placements, ensuring a smooth transition for our nurses.`,
      icon: "🌍",
    },
    {
      title: "Local Staffing Solutions",
      description: `We provide local healthcare institutions with skilled nurses for both short- and long-term assignments. Our staffing solutions are flexible, ensuring that hospitals and clinics in Kenya get the qualified help they need to deliver top-tier healthcare services.`,
      icon: "🏥",
    },
    {
      title: "Digital Health Integration",
      description: `Incorporating the latest digital health tools, we help healthcare institutions embrace telemedicine and remote consultations. Our integration services ensure that you stay aligned with the growing global trends in healthcare technology, optimizing patient care and accessibility.`,
      icon: "💻",
    },
    {
      title: "IELTS Coaching",
      description: `Join Us for a transforming Educational Experience that will increase your grades, inspire confidence and uncover your entire potential.`,
      icon: "🕒 ",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <motion.div className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-center text-primary mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>

        {/* Service Cards Section */}
        <motion.div
          className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h2 className="text-2xl font-semibold text-primary">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section for Benefits and Call to Action */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-lg py-16 px-8 text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <p className="text-lg mb-10">
            Safari Nursing Agency is committed to helping nurses advance their
            careers both locally and internationally. With our comprehensive
            services, we ensure that healthcare professionals are equipped with
            the skills, knowledge, and opportunities to succeed globally.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary py-2 px-4 md:py-3 md:px-8 rounded-full text-base md:text-lg font-bold hover:bg-gray-200 transition-colors"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
