import React from "react";
import careerHeroImage from "../../assets/joinWIthUsHero.svg";
import FormInput from "../Forms/FormInput";

export default function CareerHeroSec() {
  return (
    <div
      className="
     flex flex-col-reverse text-black
     sm:flex-row sm:justify-between
     md:mt-5
     xl:py-8 px-5 xl:px-36 
     "
    >
      <div
        className=" 
      w-full 
      sm:w-[300px]
      md:w-[400px]
      "
      >
        <h1
          className="
        text-[50px] font-semibold pr-0 block leading-none mb-6
        sm:text=[60px]
        md:text-[70px]
        lg:text-[80px]
        "
        >
          Join with <span className="text-primaryPurple">Us</span>
        </h1>
        <p className="mb-5">
          We are hiring. Join us and help us reinvent the-two-wheeler service
          and maintenance.
        </p>
        <FormInput
          extra_class={`px-5 py-2 w-full`}
          placeholder={"Search"}
          type="text"
        />
      </div>
      <div
        className="
      w-full mb-10
      sm:w-1/2
      "
      >
        <img src={careerHeroImage} alt="" />
      </div>
    </div>
  );
}
