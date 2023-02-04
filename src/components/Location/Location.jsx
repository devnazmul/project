import React from "react";
import location from "../../assets/location.svg";

export default function Location() {
  return (
    <div className="serviceMobileSecGleass px-5 lg:px-36 lg:py-[28px] mt-20 text-black flex justify-center lg:justify-between items-start relative h-96 pt-5 text-center">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-primaryPurple text-4xl font-semibold mv-14 lg:mb-8">
          Our Presence
        </h2>
        <div className="flex flex-col w-full">
          <span className="lg:pr-80 pr-0 inline-block lg:leading-5 leading-3 font-semibold w-full">
            <span className="lg:mr-10 mr-3 inline-block my-4">Delhi</span>
            <span className="lg:mr-10 mr-3 inline-block my-4">Noida</span>
            <span className="lg:mr-10 mr-3 inline-block my-4">Gurgaon</span>
            <span className="lg:mr-10 mr-3 inline-block">Lucknow</span>
            <span className="lg:mr-10 mr-3 inline-block my-4">Ghaziabad</span>
            <span className="lg:mr-10 mr-3 inline-block my-4">Hyderabad</span>
            <span className="lg:mr-10 mr-3 inline-block my-4">Jaipur</span>
            <span className="lg:mr-10 mr-3 inline-block my-4">spa</span>
            <span className="lg:mr-10 mr-3 inline-block my-4">Bubhneswar</span>
          </span>
        </div>
        <img
          className="w-[200px] lg:w-[400px] lg:absolute right-16 -bottom-20"
          src={location}
          alt=""
        />
      </div>
    </div>
  );
}
