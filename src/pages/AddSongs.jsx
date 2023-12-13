import React, { useContext, useEffect, useState } from "react";
import Button from "../component/Button";
import Header from "../component/Header";
import SearchSlideFromR from "../component/animations/SearchSlideFromR";
import { useNavigate } from "react-router";
import SearchForm from "../component/SearchForm";
import SongList from "../component/SongList";
import { client } from "../api";
import { ProfileContext } from "../profile";

const AddSongs = ({ albums, openSearch, handleCloseSearch }) => {
  const context = useContext(ProfileContext)
  const [limitReach, setLimitReach] = useState(false);
  const [songs, setSongs] = useState([])
  const [selectedSongs, setSelectedSongs] = useState([])

  const navigate = useNavigate();

  const handleClick = async () => {
    const formData = new FormData(); 
    formData.append('dateOfBirth', context.profile.dateOfBirth)
    formData.append('description', context.profile.description)
    formData.append('preferedGenderId', context.profile.preferedGenderId)
    formData.append('avatar', context.profile.avatar)
    selectedSongs.forEach(song => {
      formData.append('trackIds', song.trackId)
    })

    const response = await client.post('profile', {
      body: formData,
    }).json()

    if(response.status) {
      navigate('/start-matching')
    }
  };

  const handleLimit = () => {
    setLimitReach(!limitReach);
  };

  useEffect(() => {
    (async () => {
      const listSongs = await client.get('spotify/tracks').json()
      setSongs(listSongs)
    })()
  }, [])

  console.log(context.profile)

  useEffect(() => {
    context.profile.trackIds && setSelectedSongs(context.profile.trackIds)
  }, [context.profile.trackIds]);


  return (
    <div className="container relative h-screen py-8 flex flex-col md:pt-16 md:pb-16 grd__op">
      <SearchSlideFromR
        albums={songs}
        openSearch={openSearch}
        handleCloseSearch={handleCloseSearch}
        onSelectedChange={(songs) => {
          context.handleChange('trackIds', songs)
        }}
        selectedSongs={selectedSongs}
      />
      <Header step={3} />

      <div className="flex flex-col text-left mb-6">
        <p className="text-light-grey text-sm mb-1">
          Step {"3"} of {`3`}
        </p>
        <h4 className="text-xl md:text-[24px] text-primary font-medium w-[230px] md:w-[300px] md:mx-auto md:mb-4">
          Add favorites songs
        </h4>
        <p className="text-light-grey text-xs">
          Here are your most listened songs
        </p>
      </div>

      <SearchForm handleCloseSearch={handleCloseSearch} />

      <SongList albums={songs} handleLimit={handleLimit} onSelectedChange={(songs) => {
        context.handleChange('trackIds', songs)
      }} selected={selectedSongs} />

      <div className="mb-10">
        {selectedSongs.length > 0 && <p className="text-xl md:text-[24px] text-primary font-medium w-[230px] md:w-[300px] md:mx-auto mb-4">Songs selected</p>}
      {selectedSongs.map((song) => (
        <div
        key={song.trackId}
        className="mb-2 grid grid-flow-col items-center justify-between p-3 rounded-xl border border-[#DEDEDE]"
      >
        <div className="flex items-center space-x-2">
          <img
            className="w-12 h-12 rounded-[10px] shadow-lg"
            src={song.image}
            alt="album"
          />
          <div className="mr-2 text-left">
            <h4 className="text-sm font-semibold">{song.name}</h4>
            <p className="text-xs">{song.artists[0].name}</p>
          </div>
        </div>
      </div>
      ))}
      </div>

      <Button
        onClick={handleClick}
        title={selectedSongs.length < 4 ? `You must choose 4 songs` : `Finish`}
        limit={limitReach ? true : false}
      />
    </div>
  );
};

export default AddSongs;
