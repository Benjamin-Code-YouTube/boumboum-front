import React, { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/gas.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import heart from "../assets/heart.png";
import { LuMessageSquare } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import Match from "../component/animations/Match";
import ProfileSlideFromLeft from "../component/animations/ProfileSlideFromLeft";
import MatchsSlideFromRight from "../component/animations/MatchsSlideFromRight";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { EffectCoverflow, Navigation } from "swiper";
import { Pagination } from "swiper/modules";
import SearchSlideFromR from "../component/animations/SearchSlideFromR";

const Home = ({ albums, openSearch, handleCloseSearch }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [pfVisible, setPfVisible] = useState(false);
  const [matchVisible, setMatchVisible] = useState(false);

  const [currentSlide, setCurrentSlide] = useState();

  const handleMatch = () => {
    setIsVisible(!isVisible);
  };

  const handleProfile = () => {
    setPfVisible(!pfVisible);
  };
  const handleMatchVisible = () => {
    setMatchVisible(!matchVisible);
  };

  const slideVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  const [lists, setLists] = useState([
    { title: "Flex", name: "Ama Jackson", img: img1 },
    { title: "Gas", name: "Mister V", img: img2 },
    { title: "Feel Good", name: "Julien Granel", img: img3 },
    { title: "All allong", name: "KO KO MO", img: img4 },
    { title: "Jessica", name: "Jhonson", img: img5 },
  ]);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };
  return (
    <div className="h-screen overflow-hidden">
      <Match isVisible={isVisible} handleMatch={handleMatch} />

      <SearchSlideFromR
        albums={albums}
        openSearch={openSearch}
        handleCloseSearch={handleCloseSearch}
      />

      <ProfileSlideFromLeft
        albums={albums}
        pfVisible={pfVisible}
        handleProfile={handleProfile}
        openSearch={openSearch}
        handleCloseSearch={handleCloseSearch}
      />
      <MatchsSlideFromRight
        matchVisible={matchVisible}
        handleMatchVisible={handleMatchVisible}
      />
      <motion.img
        className="fixed w-[600px] opacity-80 h-screen object-cover"
        src={!currentSlide ? lists[0].img : lists[currentSlide].img}
        alt="image"
        key={currentSlide}
        initial="hidden"
        animate="visible"
        variants={slideVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <div className="fixed z-[5] w-[600px] h-screen object-cover backdrop-blur-[8px]"></div>
      <div className="pb-5"></div>
      <div className="container relative z-10">
        <div className="flex justify-between mb-12">
          <div className="bg-white flex space-x-2 items-center rounded-lg  py-1.5 px-2.5">
            <img className="w-6 rounded-[8px]" src={img1} alt="" />
            <p onClick={handleProfile} className="text-xs">
              Profile
            </p>
          </div>
          <div
            onClick={handleMatchVisible}
            className="bg-white flex space-x-2 items-center rounded-lg py-1.5 px-2.5"
          >
            <p className="text-xs">Matchs</p>
            <div className="border-[1px] border-[#DEDEDE] rounded-full p-1">
              <LuMessageSquare />
            </div>
          </div>
        </div>
        <div className="bg-white mx-4 shadow-md h-[400px] rounded-[20px] p-4 mb-8"></div>
        <div className="bg-white mx-2 shadow-lg h-[400px] rounded-[20px] p-4 mb-8 -mt-[445px]"></div>

        <div className="bg-white shadow-lg h-[400px] rounded-[20px] p-4 mb-8 -mt-[445px]">
          <div className="relative w-6 h-6 mx-auto rounded-[8px] overflow-hidden">
            <img className="w-full mx-auto mb-1" src={img1} alt="" />
            <div className="absolute top-0 w-6 h-6 backdrop-blur-sm"></div>
          </div>
          <p className="text-xs mb-8 text-center font-medium text-primary">
            Jasica Jhonson
          </p>

          <Swiper
            onSlideChange={handleSlideChange}
            pagination={{ dynamicBullets: true }}
            modules={[Pagination]}
            centeredSlides={false}
            slidesPerView={1}
          >
            {lists.map((item, index) => (
              <SwiperSlide key={index} className="">
                <img
                  className="w-[200px] mx-auto mb-4 rounded-[10px]"
                  src={item.img}
                  alt="slide"
                />
                <p className="text-sm text-center font-medium text-black">
                  {item.title}
                </p>
                <p className="text-xs text-center font-medium text-[#7E7E7E] mb-8">
                  {item.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="mt-4 bg-border-grey rounded-full mx-auto w-2 h-2 transition ease-in duration-150"></div> */}
        </div>

        <div className="relative pt-5">
          <div className="grd__op absolute backdrop-blur-md -translate-x-[50%] w-[800px] h-[800px] top-10 left-[50%] rounded-full bg-white"></div>
          <div className="relative z-10 flex justify-center space-x-6 items-center">
            <div className="bg-white p-4 rounded-full custom__shadow">
              <IoClose className="w-6 h-6" />
            </div>
            <div
              onClick={handleMatch}
              className="bg-white cursor-pointer p-4 rounded-full custom__shadow"
            >
              <img className="w-6 h-6" src={heart} alt="heart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
