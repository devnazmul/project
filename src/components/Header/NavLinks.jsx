import React from "react";
import { NavLink } from "react-router-dom";
import GradientBorder from "../Borders/GradientBorder";

export default function NavLinks() {
  return (
    <nav className="text-black hidden md:block">
      <ul className="flex font-[20px]">
        <li className="mr-5">
          <NavLink title="Home" to={`/`}>
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className=" relative flex flex-col text-primaryPurple font-semibold justify-center items-center">
                    Home
                    <span className="absolute block bg-primaryPurple w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                ) : (
                  <span className=" flex flex-col justify-center items-center">
                    Home
                    <span className="block bg-transparent w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink title="About" to={`/about`}>
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className=" relative flex flex-col text-primaryPurple font-semibold justify-center items-center">
                    About
                    <span className="absolute block bg-primaryPurple w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                ) : (
                  <span className=" flex flex-col justify-center items-center">
                    About
                    <span className="block bg-transparent w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink title="membership" to={`/membership`}>
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className=" relative flex flex-col text-primaryPurple font-semibold justify-center items-center">
                    Membership
                    <span className="absolute block bg-primaryPurple w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                ) : (
                  <span className=" flex flex-col justify-center items-center">
                    Membership
                    <span className="block bg-transparent w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink title="partners" to={`/partners`}>
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className=" relative flex flex-col text-primaryPurple font-semibold justify-center items-center">
                    Partners
                    <span className="absolute block bg-primaryPurple w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                ) : (
                  <span className=" flex flex-col justify-center items-center">
                    Partners
                    <span className="block bg-transparent w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink title="career" to={`/career`}>
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className=" relative flex flex-col text-primaryPurple font-semibold justify-center items-center">
                    Career
                    <span className="absolute block bg-primaryPurple w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                ) : (
                  <span className=" flex flex-col justify-center items-center">
                    Career
                    <span className="block bg-transparent w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink title="blog" to={`/blog`}>
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className=" relative flex flex-col text-primaryPurple font-semibold justify-center items-center">
                    Blog
                    <span className="absolute block bg-primaryPurple w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                ) : (
                  <span className=" flex flex-col justify-center items-center">
                    Blog
                    <span className="block bg-transparent w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink title="contact" to={`/contact`}>
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className=" relative flex flex-col text-primaryPurple font-semibold justify-center items-center">
                    Contact
                    <span className="absolute block bg-primaryPurple w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                ) : (
                  <span className=" flex flex-col justify-center items-center">
                    Contact
                    <span className="block bg-transparent w-7 h-[3px] -bottom-[6px]"></span>
                  </span>
                )}
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <GradientBorder />
    </nav>
  );
}
