import React from "react";
import { motion } from "framer-motion";

const FadeInSlideUpText = () => {
  return (
    <motion.div
     className=""
    >
      <motion.h4
        style={{
          opacity: 0, // Start with 0 opacity
        }}
        className="flex text-[22px] text-center md:text-[28px] text-primary font-bold w-[230px] md:w-[250px] mx-auto pt-4 mb-4 md:mb-8"
        initial={{ y: "80%", opacity: 0 }} // Initially, the text is fully off-screen below with 0 opacity
        animate={{ y: 0, opacity: 1 }} // Animate to y: 0 (slide up) and opacity: 1 (fade in)
        transition={{ duration: 2, ease: "easeInOut", delay: 4.5 }} // Adjust the duration and easing function as needed
      >
        Get ready for an incredible musical adventure!
      </motion.h4>
    </motion.div>
  );
};

export default FadeInSlideUpText;
