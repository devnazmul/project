import React from "react";
import { MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function JobCircularCard({ image, title, location, details }) {
  return (
    <div className="overflow-hidden rounded-[20px] jobCardGlass text-black">
      <img className="w-full" src={image} alt={title} />
      <div className="px-5 py-5">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500 flex items-center">
          <MdLocationOn className="mr-2" /> {location}
        </p>
        <p className="mt-5 text-justify">{details}</p>
        <NavLink
        title="More Details"
          className="my-2 text-primaryPurple font-semibold text-center w-full block"
          to={"/"}
        >
          <span className="border-b-2 border-primaryPurple">More Details</span>
        </NavLink>
      </div>
    </div>
  );
}
