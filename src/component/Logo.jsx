import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <img className="w-11 mr-2" src={logo} alt="logo" />
      <h4 className="text-primary font-bold">BoumBoum</h4>
    </div>
  );
};

export default Logo;
