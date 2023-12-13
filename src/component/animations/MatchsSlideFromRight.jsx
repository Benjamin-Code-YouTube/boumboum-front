import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import pfp from "../../assets/pfp1.png";
import { FiMessageSquare } from "react-icons/fi";
import MatchProfile from "./MatchProfile";

const MatchsSlideFromRight = ({ matchVisible, handleMatchVisible }) => {
  const [isVisible, setIsVisible] = useState();
  const slideVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  const slideTransition = {
    duration: 0.5,
    ease: "easeOut",
  };

  const allMatchs = [
    { title: "Bradley Lawlor", img: pfp },
    { title: "Bradley Lawlor", img: pfp },
    { title: "Bradley Lawlor", img: pfp },
    { title: "Bradley Lawlor", img: pfp },
    { title: "Bradley Lawlor", img: pfp },
    { title: "Bradley Lawlor", img: pfp },
    { title: "Bradley Lawlor", img: pfp },
  ];

  const handleMessage = () => {
    setIsVisible(!isVisible);
  };

  if (!matchVisible) return null;
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideVariants}
      transition={slideTransition}
      className={`container py-4 bg-white fixed ${
        isVisible ? "" : "overflow-scroll"
      } z-[11] top-0 left-0 w-full h-screen`}
    >
      <MatchProfile
        isVisible={isVisible}
        handleMessage={handleMessage}
        handleMatchVisible={handleMatchVisible}
      />

      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-primary font-semibold">Matchs</p>
        <div
          onClick={handleMatchVisible}
          className="flex items-center space-x-2"
        >
          <p className="text-xs text-primary">Retour</p>
          <div className="border-[1px] border-border-grey rounded-full p-1">
            <IoIosArrowRoundForward className=" w-5 h-5" />
          </div>
        </div>
      </div>

      <div>
        {allMatchs.map((match, index) => (
          <div
            onClick={handleMessage}
            key={index}
            className="flex cursor-pointer justify-between items-center px-4 py-4 rounded-[10px] custom__shadow mb-2"
          >
            <img className="w-12" src={match.img} alt="profile" />
            <h4 className="font-semibold text-sm -ml-12">{match.title}</h4>
            <div className=" bg-primary p-2 rounded-[10px]">
              <FiMessageSquare className="text-white" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MatchsSlideFromRight;
