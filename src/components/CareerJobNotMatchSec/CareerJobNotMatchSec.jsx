import React from "react";
import PurpleNewmorfButton from "../Buttons/PurpleNewmorfButton";

export default function CareerJobNotMatchSec() {
  return (
    <div className="w-full xl:py-8 px-5 xl:px-36 text-black my-10">
      <h2 className="text-3xl text-center font-semibold">Can't Find Your <span className="text-primaryPurple">Position?</span></h2>
      <p className="
      mt-5 
      text-justify
      sm:text-center 
      md:px-10
      lg:px-20
      xl:px-36
      ">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
      </p>
      <div className="w-full flex justify-center items-center">
        <PurpleNewmorfButton extra_class={`px-10 py-2 mt-10 text-white font-medium`} handler=''  title={'Upload CV'} />
      </div>
    </div>
  );
}
