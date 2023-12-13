import React from "react";
import { motion } from "framer-motion";
import spotify from "../../assets/spotify.png";
import Button from "../Button";

const FadeInSlideUpButton = () => {
  const handleClick = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/signin`
  };
  return (
    <motion.div
      initial={{ y: "100px", opacity: 0 }} // Initially, the button is fully off-screen below with 0 opacity
      animate={{ y: "10px", opacity: 1 }} // Animate to y: 0 (slide up) and opacity: 1 (fade in)
      transition={{ duration: 2, ease: "easeInOut", delay: 4.5 }} // Adjust the duration and easing function as needed
      className="mt-16"
    >
      <Button
        onClick={handleClick}
        title={`Login With Spotify`}
        icon={spotify}
      />
    </motion.div>
  );
};

export default FadeInSlideUpButton;
