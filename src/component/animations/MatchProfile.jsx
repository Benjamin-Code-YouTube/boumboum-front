import React from "react";
import { motion } from "framer-motion";
import pfp1 from "../../assets/pfp1.png";
import pfp from "../../assets/img1.png";
import gas from "../../assets/gas.png";
import { MdOutlineClose } from "react-icons/md";
import Button from "../Button";

const MatchProfile = ({ isVisible, handleMessage, handleMatchVisible }) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const fadeInTransition = {
    duration: 1,
  };

  const handleClick = () => {
    handleMessage();
    handleMatchVisible();
  };

  const lists = [
    { name: "Flex", title: "Arma Jackson", img: pfp },
    { name: "Gas", title: "Mister V", img: gas },
  ];

  if (!isVisible) return null;
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={fadeInTransition}
      className="py-8 bg-white fixed z-[11] top-0 left-0 w-full h-screen"
    >
      <div className="w-[80%] mx-auto">
        <div className="relative bg-white custom__shadow p-6 rounded-[15px] mb-9">
          <button
            onClick={handleMessage}
            className="bg-white custom__shadow rounded-full p-2 absolute -top-2 -right-2 "
          >
            <div className="border-[1px] border-[#DEDEDE] rounded-full p-1">
              <MdOutlineClose />
            </div>
          </button>

          <img
            className="w-[80px] rounded-[10px] mx-auto mb-4"
            src={pfp1}
            alt="profile"
          />
          <h4 className="text-center text-primary font-semibold mb-2">
            Bradley Lawlor
          </h4>
          <p className="text-xs text-center text-light-grey">
            Lorem Ipsum is simply dummy text of the lorem Ipsum is simply dummy
            text of the
          </p>
        </div>
      </div>

      <div className="overflow-scroll scrollbar-hide">
        <div className="w-max mx-auto overflow-x-scroll flex items-center -mr-[100px]">
          {lists.map((item, index) => (
            <div key={index} className="mr-6">
              <img
                className="w-[170px] rounded-[30px] mx-auto mb-6"
                src={item.img}
                alt="profile"
              />
              <p className="text-sm text-center font-medium text-black">
                {item.name}
              </p>
              <p className="text-xs text-center font-medium text-[#7E7E7E]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={handleClick} title={`Contact your match`} />
    </motion.div>
  );
};

export default MatchProfile;
