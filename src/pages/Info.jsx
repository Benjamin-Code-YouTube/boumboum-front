import React from "react";
import Button from "../component/Button";
import Header from "../component/Header";
import { useNavigate } from "react-router";
import Form from "../component/Form";

export default function Info() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add-songs");
  };

  return (
    <div className="container relative h-screen py-8 flex flex-col md:pt-16 md:pb-16">
      <Header step={2} />

      <div className="flex flex-col text-left mb-6">
        <p className="text-light-grey text-sm mb-1">
          Step {"2"} of {`3`}
        </p>
        <h4 className="text-xl md:text-[24px] text-primary font-medium w-[230px] md:w-[300px] md:mx-auto md:mb-4 mb-2">
          Tell us more about you
        </h4>
      </div>

      <Form />

      <Button onClick={handleClick} title={`Next step`} />
    </div>
  );
}
