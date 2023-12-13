import React from "react";
import logo from "../assets/logo.png";

const StartScreen = () => {
  return (
    <div className="relative h-screen grd">
      <img className="absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%]" src={logo} />
    </div>
  );
};

export default StartScreen;
