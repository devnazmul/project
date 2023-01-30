import React from "react";
import location from "../../assets/location.svg";

export default function Location() {
  return (
    <div className="serviceMobileSecGleass px-36 py-[28px] mt-20 text-black flex justify-between items-center relative h-96">
      <div>
        <h2 className="text-primaryPurple text-4xl font-semibold mb-8">
          Our Presence
        </h2>
        <span className="pr-96 inline-block leading-5 font-semibold">
          <span className="mr-10 inline-block my-4">Delhi</span>
          <span className="mr-10 inline-block my-4">Noida</span>
          <span className="mr-10 inline-block my-4">Gurgaon</span>
          <span className="mr-10 inline-block">Lucknow</span>
          <span className="mr-10 inline-block my-4">Ghaziabad</span>
          <span className="mr-10 inline-block my-4">Hyderabad</span>
          <span className="mr-10 inline-block my-4">Jaipur</span>
          <span className="mr-10 inline-block my-4">spa</span>
          <span className="mr-10 inline-block my-4">Bubhneswar</span>
        </span>
      </div>
      <img className="w-[500px] absolute right-16 -bottom-20" src={location} alt="" />
    </div>
  );
}
