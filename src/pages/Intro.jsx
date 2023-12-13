import React from "react";
import logoIcon from "../assets/zoom_logo_only.png";
import { motion } from "framer-motion";
import TypingImage from "../component/TypingImage";

import FadeInSlideDownImage from "../component/animations/FadeInSlideDownImage";
import FadeInSlideUpText from "../component/animations/FadeInSlideUpText";
import FadeInSlideUpButton from "../component/animations/FadeInSlideUpButton";

const Intro = () => {
  return (
    <div className="relative h-screen grd__desktop">
      <FadeInSlideDownImage />
      <div className="relative z-10 top-[0%] text-center">


        <motion.div
          className="relative"
          initial={{ marginTop: "-40px" }}
          animate={{ marginTop: "-0px" }} // Adjust the scale factor as needed
          transition={{ duration: 3, ease: "easeInOut", delay: 4 }} // Adjust the duration and easing function as needed
        >
          <div className="flex items-center space-x-2 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] pb-8 md:pb-8">
            <motion.img
              initial={{ scale: 80,marginTop: "-200px" }}
              animate={{ scale: 1,marginTop: "0px" }} // Adjust the scale factor as needed
              transition={{ duration: 3, ease: "easeInOut", delay: "0.5" }} // Adjust the duration and easing function as needed
              className="w-[38px]"
              src={logoIcon}
              alt="logo"
            />

            <TypingImage />
          </div>
        </motion.div>

        <FadeInSlideUpText />

        <FadeInSlideUpButton />
      </div>
    </div>
  );
};

export default Intro;
