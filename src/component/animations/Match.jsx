import React from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Button from "../Button";
import texture from "../../assets/texture.png";
import vynl from "../../assets/vynl.png";
import avatar from "../../assets/avatar.png";
import stylusR from "../../assets/stylusR.png";
import stylusL from "../../assets/stylusL.png";
import logo from "../../assets/zoom_logo_only.png";
import profile from "../../assets/Profile.png";

const Match = ({ isVisible, handleMatch }) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const fadeInTransition = {
    duration: 1,
  };

  const rotationVariants = {
    initial: { rotate: 0 },
    rotateFull: { rotate: 360 },
  };

  const rotationTransition = {
    duration: 6,
    ease: "linear",
    repeat: Infinity,
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={fadeInTransition}
      className="py-4 bg-white fixed z-[11] top-0 left-0 w-full h-screen"
    >
      <div
        onClick={handleMatch}
        className="container flex items-center justify-end space-x-2"
      >
        <p className="text-sm">Close</p>
        <div className="border-[1px] border-border-grey rounded-full p-1">
          <IoClose className="w-4 h-4 " />
        </div>
      </div>

      <div className="relative z-10">
        <img className="mt-[40px] mb-4 w-12 mx-auto" src={logo} alt="logo" />
        <p className="text-center text-lg font-medium text-primary">
          Your hearts Boum Boum
        </p>
        <p className="text-center text-light-grey text-xs">It’s a match !</p>
      </div>

      <div className="-mt-4">
        <img src={texture} alt="shapes" />
        <div className="relative z-10 flex justify-between -mt-[110px]">
          <img className="w-[150px] -ml-16" src={stylusL} alt="shapes" />
          <img className="w-[150px] -mr-16" src={stylusR} alt="shapes" />
        </div>

        <div className="flex items-center justify-between -mt-[60px]">
          <motion.div
            initial="initial"
            animate="rotateFull"
            variants={rotationVariants}
            transition={rotationTransition}
            className="relative -ml-8"
          >
            <img
              className="rounded-full w-[50px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10"
              src={avatar}
              alt="avatar"
            />
            <img alt="Rotating vynl" className="w-[170px]" src={vynl} />
          </motion.div>
          <motion.div
            initial="initial"
            animate="rotateFull"
            variants={rotationVariants}
            transition={rotationTransition}
            className="relative -mr-8"
          >
            <img
              className="rounded-full w-[50px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10"
              src={profile}
              alt="avatar"
            />
            <img alt="Rotating vynl" className="w-[170px]" src={vynl} />
          </motion.div>
        </div>
      </div>

      <div className="">
        <Button
          paddingB={"bottom-8"}
          onClick={handleMatch}
          title={`Contact your match`}
        />
      </div>
      <a
        href="#"
        className="absolute bottom-2 -translate-x-[50%] left-[50%] mt-[30px] underline font-medium text-xs text-center text-light-grey"
      >
        Or continue to swap
      </a>
    </motion.div>
  );
};

export default Match;
