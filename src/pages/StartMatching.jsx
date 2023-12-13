import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/zoom_logo_only.png";
import logoText from "../assets/logo_text.svg";
import Button from "../component/Button";
import { useNavigate } from "react-router";

const StartMatching = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  const rotationVariants = {
    initial: { rotate: 0 },
    rotateLeft: { rotate: 360 },
    rotateBack: { rotate: 0 },
  };

  const rotationTransition = {
    duration: 10,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse", // reverse the animation on repeat
  };
  return (
    <motion.div className="">
      <motion.div
        initial="initial"
        animate="rotateLeft"
        variants={rotationVariants}
        transition={rotationTransition}
        className="grd fixed bg-cover blur-3xl w-[500px] h-full"
      ></motion.div>

      <div className="relative z-10">
        <img className="mt-[130px] mb-4 w-10 mx-auto" src={logo} alt="logo" />
        <img className="w-28 mx-auto" src={logoText} alt="logo" />
      </div>

      <motion.div
        className="mt-[50px]"
        initial={{ y: "-140px", opacity: 1 }} // Initially, the image is fully off-screen above with 0 opacity
        animate={{ y: "0px", opacity: 1 }} // Animate to y: 0 (slide down) and opacity: 1 (fade in)
        transition={{ duration: 1, ease: "easeInOut" }} // Adjust the duration and easing function as needed
      >
        <p className="container relative z-10 font-medium text-lg text-center text-primary">
          Welcome music lover
        </p>
        <p className="relative z-10 text-xs text-center text-light-grey">
          Let’s try to find your music mate
        </p>
      </motion.div>
      <Button onClick={handleClick} title={`Start matching`} />
    </motion.div>
  );
};

export default StartMatching;
