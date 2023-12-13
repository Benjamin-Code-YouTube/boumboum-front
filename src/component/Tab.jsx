import React, { useState } from "react";
import "./Button.css";
import SongList from "../component/SongList";
import SearchForm from "./SearchForm";
import Form from "../component/Form";

const Tab = ({ albums, openSearch, handleCloseSearch }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [limitReach, setLimitReach] = useState(false);

  const handleLimit = () => {
    setLimitReach(!limitReach);
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="">
      <div className="tab-header flex items-center justify-center mb-4">
        <button
          className={`${
            activeTab === 1 ? "btn_custom_tab bg-primary text-white" : ""
          } w-full text-light-grey text-xs text-center bg-border-grey py-3 px-4 rounded-l-lg`}
          onClick={() => handleTabClick(1)}
        >
          Songs
        </button>
        <button
          className={`${
            activeTab === 2 ? "btn_custom_tab bg-primary text-white" : ""
          } w-full text-light-grey text-xs text-center bg-border-grey py-3 px-4 rounded-r-lg`}
          onClick={() => handleTabClick(2)}
        >
          Informations
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && (
          <div>
            <SearchForm
              albums={albums}
              openSearch={openSearch}
              handleCloseSearch={handleCloseSearch}
            />
            <div className="relative overflow-y-auto h-[400px]">
              <SongList albums={albums} handleLimit={handleLimit} />
            </div>
          </div>
        )}
        {activeTab === 2 && <Form />}
      </div>
    </div>
  );
};

export default Tab;
