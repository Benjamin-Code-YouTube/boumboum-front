import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ step }) => {
  const navigate = useNavigate();
  const [stage, setStage] = useState(1);

  useEffect(() => {
    const percent = () => {
      const num = 100 / 3;
      setStage(num * step);
    };

    percent();
  }, [step]);

  const goBack = () => {
    navigate(-1); // This function will navigate back to the previous page in the history
  };

  return (
    <div className="relative flex justify-center items-center mb-11">
      <button
        onClick={goBack}
        className="absolute left-0 shadow-md p-2 rounded-xl bg-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <div className="w-[127px] bg-gray-200 absolute z-10 -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] text-center rounded-full h-1.5">
        <div
          className="bg-primary h-1.5 rounded-full"
          style={{ width: stage + "%", transition: "ease-in 0.5s" }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
