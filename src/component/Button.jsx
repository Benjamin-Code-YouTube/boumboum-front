import React from "react";
import "./Button.css";

const Button = ({ onClick, title, icon, limit, paddingB }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        limit
          ? "bg-light-grey"
          : "btn_custom_bg rounded-[40px] bg-primary"
      } absolute z-10 ${
        !paddingB ? "bottom-4" : paddingB
      } -translate-x-[50%] left-[50%] w-[250px] md:w-[250px] rounded-xl px-4 py-3 mx-auto flex justify-center items-center text-[15px] text-center text-bold`}
    >
      <div className="blur-container backdrop-blur-4"></div>
      {!icon ? "" : <img className="w-4 mr-2 relative z-20" src={icon} alt="icon" />}
      <p className="text-white text-xs relative z-50">{title}</p>
    </button>
  );
};

export default Button;
