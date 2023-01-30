import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import leftBgElement from "../assets/001.svg";
import rightBgElement from "../assets/002.svg";
import rightBgBallElement from "../assets/003.svg";
import GradientBorder from "../components/Borders/GradientBorder";
import TransparentBgButton from "../components/Buttons/TransparentBgButton";
import WhiteNewmorfButton from "../components/Buttons/WhiteNewmorfButton";

export default function MainLayout() {
  const [isLogin, setIsLogin] = useState(false);
  const [isNavOpened, setIsNavOpened] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <div className="bg-gradient-to-l from-[#B8EBF4] to-[#D1A7C2] py-10 px-10">
      <div className="backdrop-filter-blur bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-white  rounded-3xl overflow-hidden w-full  text-slate-200 relative">
        <img
          className="absolute top-[150px] w-[290px] -z-10"
          src={leftBgElement}
          alt=""
        />
        <img
          className="absolute top-[190px] right-0 w-[250px] -z-10"
          src={rightBgBallElement}
          alt=""
        />
        <img
          className="absolute top-[150px] right-0 w-[200px] -z-10"
          src={rightBgElement}
          alt=""
        />
        <div className="">
          {/* HEADER  */}
          <header className="h-[121px] flex flex-col align-middle justify-between py-5 px-36">
            {/* BRANDING  */}
            <div className="flex justify-between items-center text-black">
              {/* LOGO  */}
              <span className="text-[#000000] font-poppins font-semibold text-[36px] tracking-[0.3px]">
                <span className="text-[#AC262C]">Bike</span>Fixup
              </span>
              {/* CONTACT NUMBER  */}
              <span>+91-11-1111-1111 / www.bikefixup.in</span>
              {/* BUTTONS  */}
              {!isLogin ? (
                <div>
                  <TransparentBgButton title={"Sign Up"} />
                  <WhiteNewmorfButton handler={handleLogin} title={"Login"} />
                </div>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => {
                      setIsNavOpened(!isNavOpened);
                    }}
                    className={`w-12 h-12 rounded-full bg-cyan-800`}
                  >
                    <span className="text-xl text-white">D</span>
                  </button>

                  {isNavOpened && (
                    <div className={`userNav w-[250px] absolute right-0 z-50`}>
                      <ul>
                        <li>
                          <NavLink
                            className={`px-7 py-3 w-full userNavLink block font-semibold`}
                            to={"/"}
                          >
                            Profile
                          </NavLink>
                          <NavLink
                            className={`px-7 py-3 w-full userNavLink block font-semibold`}
                            to={"/"}
                          >
                            My Booking
                          </NavLink>
                          <NavLink
                            className={`px-7 py-3 w-full userNavLink block font-semibold`}
                            to={"/"}
                          >
                            My Vehicles
                          </NavLink>
                          <NavLink
                            className={`px-7 py-3 w-full userNavLink block font-semibold`}
                            to={"/"}
                          >
                            Become Partner
                          </NavLink>
                          <div>
                            <button
                              onClick={handleLogout}
                              className="px-7 py-3 w-full userNavLink block font-semibold text-right text-primaryPurple"
                            >
                              Log out
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* NAV LINKS  */}
            <nav className="text-black">
              <ul className="flex font-[20px]">
                <li className="mr-5">
                  <NavLink to={`/`}>
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
                  <NavLink to={`/about`}>
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
                  <NavLink to={`/partners`}>
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
                  <NavLink to={`/franchise`}>
                    {({ isActive }) => (
                      <>
                        {isActive ? (
                          <span className=" relative flex flex-col text-primaryPurple font-semibold justify-center items-center">
                            Franchise
                            <span className="absolute block bg-primaryPurple w-7 h-[3px] -bottom-[6px]"></span>
                          </span>
                        ) : (
                          <span className=" flex flex-col justify-center items-center">
                            Franchise
                            <span className="block bg-transparent w-7 h-[3px] -bottom-[6px]"></span>
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="mr-5">
                  <NavLink to={`/career`}>
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
                  <NavLink to={`/blog`}>
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
                  <NavLink to={`/contact`}>
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
          </header>

          {/* MAIN SECTION  */}
          <Outlet />
        </div>

        <footer className="w-full bg-white h-[120px] flex px-36 justify-between items-center">
          <span className="text-black font-[16px]">www.bikefixup.in</span>
          <span className="text-black flex justify-between items-center w-2/12">
            <a href="https://google.com">
              <FaFacebookSquare className="text-[30px]" />
            </a>
            <a href="https://google.com">
              <RiWhatsappFill className="text-[30px]" />
            </a>
            <a href="https://google.com">
              <AiFillInstagram className="text-[30px]" />
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
