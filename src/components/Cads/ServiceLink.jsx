import React from "react";
import { NavLink } from "react-router-dom";

export default function ServiceLink({ icon, text, to }) {
  return (
    <NavLink
      title={text}
      className={({ isActive }) =>
        isActive
          ? "serviceCardActive  w-[120px] h-[120px] mx-1 flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5"
          : "serviceCard text-black w-[120px] h-[120px] mx-1 flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5"
      }
      to={to}
    >
      <img className="" src={icon} alt={text} />

      <span className="text-center mt-2 font-semibold hidden md:block">
        {text}
      </span>
    </NavLink>
  );
}
