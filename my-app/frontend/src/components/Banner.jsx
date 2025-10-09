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
      className="relative w-full h-[500px] md:h-[600px] lg:h-[400px] overflow-hidden rounded-lg flex flex-col md:flex-row items-center justify-between px-4 md:px-16 bg-tertiary dark:bg-primary"
      initial="hidden"
      animate="visible"
    >
      {/* Aurora Background */}
      <Aurora
        colorStops={["#000000", "#B8860B", "#FFD700", "#FFFFFF"]}
        blend={0.7}
        amplitude={1.3}
        speed={0.45}
      />

      {/* Left Side Content */}
      <motion.div
        className="flex-1 z-10 py-8 sm:py-10 md:py-16 text-center md:text-left"
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
          className="flex items-center justify-center md:justify-start gap-2 bg-secondary text-primary px-8 py-3 rounded-full text-sm mt-6 hover:bg-yellow-400 transition"
          variants={buttonVariant}
          whileHover="hover"
        >
          Contact Us
        </motion.button>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        className="relative z-10 flex justify-center items-center md:w-1/2 lg:w-[250px] h-full"
        variants={imageVariant}
      >
        <img
          src={assets.appointment_img}
          alt="appointment img"
          className="object-contain h-full w-auto max-w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
