import React from "react";
import girl from "../assets/girl.png";
import logo from "../assets/logo.png";
import Button from "../component/Button";
import spotify from "../assets/spotify.png";

const Getready = () => {
  return (
    <div className="relative h-screen grd__desktop">
      <img className="absolute -translate-x-[50%] left-[50%]" src={girl} alt="girl" />
      <div className="relative z-10 top-[60%] text-center">
        <div className="flex justify-center items-center">
          <img className="w-11 mr-2" src={logo} alt="logo"/>
          <h4 className="text-primary font-bold">BoumBoum</h4>
        </div>

        <h4 className="text-2xl md:text-[28px] text-primary font-bold w-[230px] md:w-[250px] mx-auto py-4 md:mb-4">
          Get ready for an incredible musical adventure!
        </h4>

        <Button
          onClick={() => alert("clicked!")}
          title={`Login With Spotify`}
          icon={spotify}
        />
      </div>
    </div>
  );
};

export default Getready;
