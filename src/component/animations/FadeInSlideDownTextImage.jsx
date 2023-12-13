import React from "react";
import { motion } from "framer-motion";
import girl from "../../assets/girl.png";
import Logo from "../Logo";

const FadeInSlideDownTextImage = () => {
  return (
    <motion.div className="relative">
      <motion.div
        src={girl} // Replace with your image source
        alt="Fade In Slide Down Image"
        style={{
          opacity: 0, // Start with 0 opacity
        }}
        className="mx-auto"
        initial={{ y: "80px", opacity: 0 }} // Initially, the image is fully off-screen above with 0 opacity
        animate={{ y: "0px", opacity: 1 }} // Animate to y: 0 (slide down) and opacity: 1 (fade in)
        transition={{ duration: 2, ease: "easeInOut" }} // Adjust the duration and easing function as needed
      >
        <Logo />
      </motion.div>
    </motion.div>
  );
};

export default FadeInSlideDownTextImage;
