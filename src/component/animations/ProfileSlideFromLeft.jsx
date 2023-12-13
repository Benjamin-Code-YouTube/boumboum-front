import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import pfp from "../../assets/img1.png";
import Tab from "../Tab";

const ProfileSlideFromLeft = ({
  pfVisible,
  handleProfile,
  albums,
  openSearch,
  handleCloseSearch,
}) => {
  const slideVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  const slideTransition = {
    duration: 0.5,
    ease: "easeOut",
  };

  if (!pfVisible) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideVariants}
      transition={slideTransition}
      className="container py-4 bg-white fixed z-[11] top-0 left-0 w-full h-screen"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs text-primary font-semibold">Profile</p>
        <div onClick={handleProfile} className="flex items-center space-x-2">
          <p className="text-xs text-primary">Retour</p>
          <div className="border-[1px] border-border-grey rounded-full p-1">
            <IoIosArrowRoundForward className="w-5 h-5" />
          </div>
        </div>
      </div>

      <img
        className="w-16 rounded-xl mt-4 mx-auto mb-2"
        src={pfp}
        alt="profile"
      />
      <p className="text-primary text-xs text-center font-medium mb-8">
        Hey Benjamin
      </p>

      <Tab
        albums={albums}
        openSearch={openSearch}
        handleCloseSearch={handleCloseSearch}
      />
    </motion.div>
  );
};

export default ProfileSlideFromLeft;
