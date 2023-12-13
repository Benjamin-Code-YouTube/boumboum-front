import React, { useContext, useState } from "react";
import { IoMdMale, IoMdFemale } from "react-icons/io";
import { MdOutlineQuestionMark } from "react-icons/md";
import { ProfileContext } from "../profile";

const Form = () => {

  const context = useContext(ProfileContext)

  const [formData, setFormData] = useState({
    description: "",
    dateOfBirth: null,
    preferedGenderId: 1,
  });

  const genders = [
    { title: "Male", icon: <IoMdMale className="w-4 h-4" />, id: 1 },
    { title: "Female", icon: <IoMdFemale className="w-4 h-4" />, id: 2 },
    {
      title: "No specific",
      icon: <MdOutlineQuestionMark className="w-4 h-4" />,
      id: 3,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    context.handleChange(name, value)
  };

  const handleOnclick = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      preferedGenderId: value,
    }));

    context.handleChange('preferedGenderId', value)
  };

  return (
    <form className="w-full mx-auto">
      {/* <div>
        <label htmlFor="fullName" className="text-light-grey text-xs">
          Full Name
        </label>
        <input
          name="fullName"
          type="text"
          className="mb-6 border-0 border-[#DEDEDE] border-b-[2px] text-primary text-xs outline-none block w-full pr-2.5 pt-2.5 pb-2.5"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </div> */}

      <div>
        <label htmlFor="date" className="text-light-grey text-xs">
          Date of birth
        </label>
        <input
          name="dateOfBirth"
          type="date"
          className="uppercase mb-6 border-0 border-[#DEDEDE] border-b-[2px] text-primary text-xs outline-none block w-full pr-2.5 pt-2.5 pb-2.5"
          value={context.profile.dateOfBirth}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-6">
        <label className="text-light-grey text-xs">Choose Gender</label>
        <div className="flex pt-2 space-x-2">
          {genders.map((gender, index) => (
            <div
              key={index}
              onClick={() => handleOnclick(gender.id)}
              className={`flex items-center space-x-2 ${
                context.profile.preferedGenderId === gender.id &&
                "bg-primary text-white transition ease-in duration-150"
              } hover:bg-primary hover:text-white cursor-pointer text-primary transition ease-in duration-75 text-sm rounded-lg p-2.5`}
            >
              <div>{gender.icon}</div>
              <div className="text-xs">{gender.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="brief" className="text-light-grey text-xs">
          Brief Description
        </label>
        <input
          name="description"
          type="text"
          className="mb-6 border-0 border-[#DEDEDE] border-b-[2px] text-primary text-xs outline-none block w-full pr-2.5 pt-2.5 pb-2.5"
          value={context.profile.description}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default Form;
