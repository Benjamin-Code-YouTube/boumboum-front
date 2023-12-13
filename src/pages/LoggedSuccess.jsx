import React, { useEffect } from "react";
import Button from "../component/Button";
import success from "../assets/success.png";
import { useNavigate } from "react-router";
import FadeInSlideDownTextImage from "../component/animations/FadeInSlideDownTextImage";
import { client } from "../api";

const LoggedSuccess = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload-avatar");
  };

  useEffect(() => {
    (async () => {
      const profile = await client.get('profile').json()
      if(profile.data) {
        //navigate('/start-matching')
      }
    })();
  }, []);

  return (
    <div className="relative h-screen grd__desktop py-8 flex flex-col justify-between md:pt-12 md:pb-16">
      <FadeInSlideDownTextImage />
      <div className="absolute z-10 -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] text-center">
        <img className="w-[200px] mx-auto" src={success} alt="success icon" />
        <h4 className="text-xl md:text-[28px] text-primary font-medium w-[230px] md:w-[300px] mx-auto md:mb-4 mb-2">
          Logged In Successful!
        </h4>
        <p className="text-light-grey md:w-[300px] text-sm md:text-base w-full">
          You have been logged in successfully. please enter the your details to
          complete your profile
        </p>
      </div>
      <Button onClick={handleClick} title={`Continue`} />
    </div>
  );
};

export default LoggedSuccess;
