import React from "react";

const SongList = ({ albums, onSelectedChange, selected }) => {

  const handleCheckboxChange = (album, checked) => {
    if(checked) {
      onSelectedChange([...selected, album])
    } else {
      onSelectedChange(selected.filter(al => al.trackId !== album.trackId))
    }
  };
  return (
    <div className="h-screen overflow-y-scroll pb-8">
      {albums.map((album, index) => (
        <div
          key={index}
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
            checked={selected.find(al => al.trackId === album.trackId)}
            onChange={(e) => handleCheckboxChange(album, e.target.checked)}
            type="checkbox"
            className={`outline-none w-4 h-4 text-red-600 bg-secondary border-secondary ${
              selected.find(al => al.trackId === album.trackId) ? "ring- ring-red-500-" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default SongList;
