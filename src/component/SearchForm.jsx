import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchForm = ({ handleCloseSearch }) => {
  const [formData, setFormData] = useState({
    search: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className="flex items-center pb-2 justify-between border-0 border-[#DEDEDE] border-b-[2px] mb-3">
      <input
        name="search"
        type="text"
        className="bg-transparent text-primary text-sm outline-none block w-full pr-2.5 pt-2.5 pb-2.5"
        value={formData.search}
        placeholder="Search custom songs"
        onChange={handleInputChange}
        onFocus={handleCloseSearch}
      />
      <button onClick={handleCloseSearch} className="bg-primary rounded-xl p-2">
        <IoSearch className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default SearchForm;
