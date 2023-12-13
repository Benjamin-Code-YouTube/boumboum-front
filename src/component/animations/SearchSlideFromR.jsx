import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import musicIcon from "../../assets/music_icon.png";
import { motion } from "framer-motion";
import { client } from "../../api";

const SearchSlideFromR = ({ albums, openSearch, handleCloseSearch, onSelectedChange, selectedSongs }) => {
  const [filteredData, setFilteredData] = useState([]);

  // State to track the checked state of each album
  const [searchQuery, setSearchQuery] = useState("");

  const slideInVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  const handleSInputChange = (e) => {
    handleS();
    setSearchQuery(e.target.value);
  };

  const handleS = async (e) => {
    // Perform the search logic here

    const searchSong = await client.get(`spotify/track-by-name?name=${searchQuery}`).json()
    // Pass the filteredData to the parent component or perform other actions
    setFilteredData(searchSong.data);
  };

  const handleCheckboxChange = (album, checked) => {
    if(checked) {
      onSelectedChange([...selectedSongs, album])
    } else {
      onSelectedChange(selectedSongs.filter(al => al.trackId !== album.trackId))
    }
  };

  if (!openSearch) return null;

  return (
    <motion.div
      initial="hidden"
      animate={openSearch ? "visible" : "hidden"}
      exit="exit"
      variants={slideInVariants}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="fixed pt-8 top-0 left-0 w-full h-full z-[21] bg-white"
    >
      <div className="flex space-x-4 absolute w-[90%] left-[50%] -translate-x-[50%] z-20 items-center mb-3">
        <div className="flex pb-2 justify-between border-0 border-[#DEDEDE] border-b-[2px] items-center">
          <input
            name="search"
            type="text"
            className="bg-transparent border-l-[2px] h-4 border-secondary text-primary text-sm outline-none block w-full pr-2.5 pl-1"
            value={searchQuery}
            placeholder="Search custom songs"
            onChange={handleSInputChange}
          />
          <button
            onClick={handleCloseSearch}
            className="bg-primary rounded-xl px-2 py-1.5"
          >
            <MdClose className="w-5 h-5 text-white" />
          </button>
        </div>

        <p onClick={handleCloseSearch} className="text-sm text-light-grey">
          Cancel
        </p>
      </div>

      <motion.div initial="hidden" animate="visible" variants={list}>
        {filteredData.length === 0 ? (
          <div className="absolute z-20 -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] text-center">
            <img
              className="w-[120px] mx-auto p-2 mb-4"
              src={musicIcon}
              alt="success icon"
            />

            <p className="text-[#2F215F] md:w-[300px] text-sm md:text-base w-full">
              Your mate will love your songs choose wisely
            </p>
          </div>
        ) : (
          <div className="w-[90%] mx-auto top-24 relative z-20">
            {filteredData.map((album, index) => (
              <motion.div
                variants={item}
                key={index + album.name}
                className="mb-2 grid grid-flow-col items-center justify-between p-3 rounded-xl border border-[#DEDEDE]"
              >
                <div className="flex items-center space-x-2">
                  <img
                    className="w-12 h-12 rounded-[10px] shadow-lg"
                    src={album.image}
                    alt="album"
                  />
                  <div className="mr-2 text-left">
                    <h4 className="text-sm font-semibold">{album.name}</h4>
                    <p className="text-xs">{album.artists[0].name}</p>
                  </div>
                </div>
                <input
                  checked={selectedSongs.find(al => al.trackId === album.trackId)}
                  onChange={(e) => handleCheckboxChange(album, e.target.checked)}
                  type="checkbox"
                  value=""
                  className={`outline-none w-4 h-4 text-red-600 bg-secondary border-secondary ${
                    selectedSongs.find(al => al.trackId === album.trackId) ? "ring- ring-red-500-" : ""
                  }`}
                />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SearchSlideFromR;
