import React, { useContext, useEffect, useState } from "react";
import Button from "../component/Button";
import pfp from "../assets/pfp.png";
import { BiEditAlt } from "react-icons/bi";
import Header from "../component/Header";
import { useNavigate } from "react-router";
import { ProfileContext } from "../profile";

const UploadAvatar = () => {
  const context = useContext(ProfileContext)
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/info");
  };

  const handleChange = function loadFile(event) {
    if (event.target.files.length > 0) {
      const fileUrl = URL.createObjectURL(event.target.files[0]);
      setFile(fileUrl);
      context.handleChange('avatar', event.target.files[0])
    }
  };

  useEffect(() => {
    if(context.profile.avatar) {
      setFile(URL.createObjectURL(context.profile.avatar))
    }
  }, []);

  return (
    <div className="container relative h-screen py-12 flex flex-col justify- md:pt-16 md:pb-16">
      <Header step={1} />

      <div className="flex flex-col text-left mb-6 text-sm">
        <p className="text-light-grey mb-1">
          Step {`1`} of {`3`}
        </p>
        <h4 className="text-xl md:text-[24px] text-primary font-medium w-[230px] md:w-[300px] md:mx-auto md:mb-4 mb-2">
          Upload profile picture
        </h4>
      </div>

      <div className="absolute z-10 -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] text-center">
        <img
          className="w-[140px] h-[140px] object-cover relative -z-10 mx-auto border-red-400 border-[1.21px] border-dashed p-2 rounded-full -mb-6"
          src={!file ? pfp : file}
          alt="avatar icon"
        />

        <input
          name="upload"
          type="file"
          onChange={handleChange}
          id="upload"
          accept="image/*"
          style={{ display: "none" }}
        />
        <label
          htmlFor="upload"
          className="flex w-max mx-auto cursor-pointer bg-primary p-2 rounded-[20px] border-[8px] border-white"
        >
          <BiEditAlt className="text-white w-6 h-6" />
        </label>
      </div>

      {file && (
        <Button onClick={handleClick} title={`Next step`} />
      )}
    </div>
  );
};

export default UploadAvatar;
