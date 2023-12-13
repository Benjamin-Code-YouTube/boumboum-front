import React from "react";
import { motion } from "framer-motion";
import logoText from "../assets/logo_text.svg";

const TypingImage = () => {
  return (
    <motion.div
      style={{
        overflow: "hidden",
        position: "relative",
        // width: "100px", // Adjust the width as needed
        height: "14px", // Adjust the height as needed
      }}
      initial={{ width: "0px" }} // Initially, the image is fully off-screen to the right
      animate={{ width: "100px" }} // Animate to x: 0, revealing the image
      transition={{ duration: 2, ease: "easeInOut", delay: 4 }} // Adjust the duration and easing function as needed
    >
      <motion.img
        src={logoText}
        alt="Typing Image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "fit",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        initial={{ x: "100%" }} // Initially, the image is fully off-screen to the right
        animate={{ x: "0%" }} // Animate to x: 0, revealing the image
        transition={{ duration: 2, ease: "easeInOut", delay: 4 }} // Adjust the duration and easing function as needed
      />
    </motion.div>
  );
};

export default TypingImage;
