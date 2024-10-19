import React from "react";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description:
        "Our strategic consulting service helps businesses define their vision, set achievable goals, and develop actionable plans to reach them. We analyze your current market position, identify growth opportunities, and create a roadmap for success.",
      benefits: [
        "Enhanced Decision-Making: Gain insights to make informed, strategic decisions.",
        "Competitive Advantage: Identify and capitalize on market opportunities.",
        "Sustainable Growth: Develop long-term strategies for continued success.",
      ],
      process: [
        "Assessment: Comprehensive analysis of your business and market position.",
        "Strategy Development: Crafting a customized strategic plan.",
        "Implementation Support: Guiding you through the execution of the plan.",
        "Monitoring and Adjustment: Regular reviews and adjustments to ensure success.",
      ],
      caseStudy: {
        challenge: "ABC Corp needed a new market entry strategy.",
        solution: "We conducted market research, developed a strategic plan, and assisted in execution.",
        result: "ABC Corp successfully entered a new market, increasing revenue by 30%.",
      },
    },
    {
      title: "IT and Digital Transformation",
      description:
        "We help businesses leverage technology to improve efficiency, enhance customer experiences, and drive innovation. Our services include IT strategy, digital transformation, and cybersecurity.",
      benefits: [
        "Increased Efficiency: Streamline operations through technology.",
        "Improved Customer Experience: Enhance your digital interactions with customers.",
        "Enhanced Security: Protect your business with robust cybersecurity measures.",
      ],
      process: [
        "IT Assessment: Evaluate current IT infrastructure and needs.",
        "Strategy Development: Design a comprehensive digital transformation plan.",
        "Implementation: Deploy new technologies and systems.",
        "Security Enhancement: Implement and maintain cybersecurity measures.",
      ],
      caseStudy: {
        challenge: "Outdated IT infrastructure.",
        solution: "Developed and executed a digital transformation strategy.",
        result: "Increased operational efficiency by 25% and improved customer satisfaction.",
      },
    },
    {
      title: "Financial Consulting",
      description:
        "Our financial consulting services help businesses optimize their financial performance. We offer financial planning, analysis, and risk management to ensure your business’s financial health.",
      benefits: [
        "Optimized Financial Performance: Improve profitability and cash flow.",
        "Risk Mitigation: Identify and manage financial risks.",
        "Strategic Planning: Develop financial strategies aligned with business goals.",
      ],
      process: [
        "Financial Assessment: Review and analyze financial statements and performance.",
        "Strategy Development: Create tailored financial strategies.",
        "Implementation Support: Assist in executing financial plans.",
        "Ongoing Review: Regularly monitor financial health and adjust strategies as needed.",
      ],
      caseStudy: {
        challenge: "Inefficient financial management.",
        solution: "Conducted financial analysis and implemented a new financial strategy.",
        result: "Improved cash flow management and increased profitability by 20%.",
      },
    },
    {
      title: "Operational Excellence",
      description:
        "We help businesses streamline their operations, improve efficiency, and reduce costs. Our services include process improvement, supply chain optimization, and Lean Six Sigma implementation.",
      benefits: [
        "Increased Efficiency: Streamline processes to enhance productivity.",
        "Cost Reduction: Identify and eliminate wasteful practices.",
        "Quality Improvement: Improve product and service quality through proven methodologies.",
      ],
      process: [
        "Operational Assessment: Evaluate current operations and identify improvement areas.",
        "Process Improvement: Design and implement process optimization strategies.",
        "Training and Implementation: Provide Lean Six Sigma training and support.",
        "Monitoring and Continuous Improvement: Regularly review processes and implement continuous improvements.",
      ],
      caseStudy: {
        challenge: "Inefficient supply chain management.",
        solution: "Optimized the supply chain and implemented Lean practices.",
        result: "Reduced operational costs by 15% and improved supply chain efficiency.",
      },
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
    <div className="py-12 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Our Services
        </h2>
        <p className="text-center text-lg text-gray-700 mb-12">
          Welcome to Metamind's Services page. We offer a range of specialized consultancy services designed to help your business thrive in today's competitive market. Our expert team provides strategic insights, innovative solutions, and practical guidance tailored to your unique needs. Explore our services below to discover how we can drive your business success.
        </p>

        {/* Container for animated service cards */}
        <motion.div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              variants={itemVariant}
            >
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <h4 className="font-semibold text-secondary">Benefits:</h4>
              <ul className="list-disc list-inside mb-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="text-gray-600">{benefit}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-secondary">Process:</h4>
              <ul className="list-disc list-inside mb-4">
                {service.process.map((step, i) => (
                  <li key={i} className="text-gray-600">{step}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-secondary">Case Study:</h4>
              <p className="text-gray-600 mb-1"><strong>Challenge:</strong> {service.caseStudy.challenge}</p>
              <p className="text-gray-600 mb-1"><strong>Solution:</strong> {service.caseStudy.solution}</p>
              <p className="text-gray-600"><strong>Result:</strong> {service.caseStudy.result}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-primary mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-700 mb-6">Contact us today to learn more about how Metamind can help you achieve your goals. Whether you need strategic guidance, technological innovation, financial optimization, or operational efficiency, our team of experts is here to assist you.</p>
          <a href="mailto:contact@metamind.com" className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-gold transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
