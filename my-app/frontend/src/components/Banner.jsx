// Banner.jsx
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { motion } from "framer-motion";
import Aurora from "./Aurora";

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
      className="relative w-full h-[500px] md:h-[600px] lg:h-[400px] overflow-hidden rounded-lg flex items-center justify-between px-4 md:px-16"
      initial="hidden"
      animate="visible"
    >
      {/* Aurora Background */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* Left Side Content */}
      <motion.div
        className="flex-1 z-10 py-8 sm:py-10 md:py-16"
        variants={textVariant}
      >
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-primary dark:text-tertiary">
          <p>Book Appointment</p>
          <p>With MetaMind Limited</p>
        </div>
        <motion.button
          onClick={() => {
            navigate("/contact");
            scrollTo(0, 0);
          }}
          className="flex items-center gap-2 bg-secondary px-8 py-3 rounded-full text-primary text-sm m-auto md:m-0 mt-6"
          variants={buttonVariant}
          whileHover="hover"
        >
          Contact Us
        </motion.button>
      </motion.div>

      {/* Right Side Image (Optional) */}
      <motion.div
        className="hidden md:block md:w-1/2 lg:w-[370px] relative z-10"
        variants={imageVariant}
      >
        {/* Uncomment if image is needed */}
        {/* <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt="appointment img"
        /> */}
      </motion.div>
    </motion.div>
  );
};

export default Banner;
