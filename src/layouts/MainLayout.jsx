import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
// import leftBgElement from "../assets/blobanimation-1.svg";
import leftBgElement from "../assets/001.svg";
import rightBgElement from "../assets/002.svg";

// import rightBgBallElement from "../assets/003.svg";
import rightBgBallElement from "../assets/blobanimation.svg";

import GradientBorder from "../components/Borders/GradientBorder";
import TransparentBgButton from "../components/Buttons/TransparentBgButton";
import WhiteNewmorfButton from "../components/Buttons/WhiteNewmorfButton";

export default function MainLayout() {
  const [isLogin, setIsLogin] = useState(false);
  const [isNavOpened, setIsNavOpened] = useState(false);

  const [responsiveTogleIsOpened, setResponsiveTogleIsOpened] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  const handleResponsiveToggleNav = () => {
    setResponsiveTogleIsOpened(!responsiveTogleIsOpened);
  };

  return (
    <div className="bg-gradient-to-l from-[#83e9fb] to-[#f591d2] px-5 py-5 md:px-10 md:py-10">
      <div className=" backdrop-filter-blur bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-white  rounded-3xl overflow-hidden w-full  text-slate-200 relative">
        <img
          className="absolute top-[150px] w-[290px] -z-10"
          src={leftBgElement}
          alt="element"
        />
        <img
          className="absolute top-[190px] right-0 w-[250px] -z-10"
          src={rightBgBallElement}
          alt="element"
        />
        <img
          className="absolute top-[150px] right-0 w-[200px] -z-10"
          src={rightBgElement}
          alt="element"
        />

        <div className="">
          {/* HEADER  */}
          <header className="md:h-[121px] flex flex-col align-middle justify-between py-5 px-5 xl:px-36">
            {/* BRANDING  */}
            <div className="flex justify-between items-center text-black h-10 ">
              {/* LOGO  */}
              <span className="text-[#000000] font-poppins font-semibold text-xl sm:text-[28px] md:text-[36px] tracking-[0.3px]">
                <span className="text-[#AC262C]">Bike</span>Fixup
              </span>
              {/* CONTACT NUMBER  */}
              <span className="hidden lg:block">
                +91-11-1111-1111 / www.bikefixup.in
              </span>
              {/* BUTTONS  */}
              <div className="block md:hidden relative">
                {/* BURGER ICON START  */}
                <button title={"menu icon"} onClick={handleResponsiveToggleNav}>
                  <span
                    className={`block transition-all duration-300 h-[2px] w-7 bg-white my-2 ${
                      responsiveTogleIsOpened
                        ? "rotate-45 translate-y-3"
                        : "rotate-0"
                    }`}
                  ></span>
                  <span
                    className={`block transition-all duration-300 h-[2px] w-7 bg-white my-2 ${
                      responsiveTogleIsOpened
                        ? "translate-x-96"
                        : "translate-x-0"
                    }`}
                  ></span>
                  <span
                    className={`block transition-all duration-300 h-[2px] w-7 bg-white my-2 ${
                      responsiveTogleIsOpened
                        ? "-rotate-45 -translate-y-3"
                        : "rotate-0"
                    }`}
                  ></span>
                </button>
                {/* BURGER ICON END  */}

                {/* RESPONSIVE NAV START  */}
                <div
                  className={`${
                    responsiveTogleIsOpened ? "right-0" : "-right-96"
                  } transition-all duration-300 responsiveNav absolute bg-white  w-64 top-10 px-5 py-5 rounded-lg shadow-lg z-[100] flex flex-col`}
                >
                  <div className="w-full mb-6">
                    {!isLogin ? (
                      <div className="flex justify-around items-center">
                        <TransparentBgButton title={"Sign Up"} />
                        <WhiteNewmorfButton
                          handler={handleLogin}
                          title={"Login"}
                        />
                      </div>
                    ) : (
                      <div className="w-full flex justify-between">
                        <button
                          title={"user profile"}
                          onClick={() => {
                            setIsNavOpened(!isNavOpened);
                          }}
                          className={`w-auto h-10 flex items-center`}
                        >
                          <span className="flex justify-center items-center w-10 h-10 rounded-full bg-cyan-800 text-xl text-white">
                            D
                          </span>
                          <span className="text-sm ml-2">Md Nazmul Islam</span>
                        </button>
                        <button
                          title={"logout"}
                          onClick={() => setIsLogin(false)}
                        >
                          <IoLogOutOutline className="text-primaryRed text-2xl" />
                        </button>
                      </div>
                    )}
                  </div>
                  <NavLink
                    title="Home"
                    className={(navData) =>
                      `py-2 hover:shadow-lg ${
                        navData.isActive
                          ? " bg-[#84E8FA] text-black"
                          : "bg-[#fff] text-black"
                      } hover:bg-[#F492D3] hover:text-white rounded-lg px-5 border hover:translate-x-2 transition-all duration-150 border-white hover:border`
                    }
                    to={`/`}
                  >
                    Home
                  </NavLink>

                  <NavLink
                    title="About"
                    className={(navData) =>
                      `py-2 hover:shadow-lg ${
                        navData.isActive
                          ? " bg-[#84E8FA] text-black"
                          : "bg-[#fff] text-black"
                      } hover:bg-[#F492D3] hover:text-white rounded-lg px-5 border hover:translate-x-2 transition-all duration-150 border-white hover:border`
                    }
                    to={`/about`}
                  >
                    About
                  </NavLink>

                  <NavLink
                    title="Partners"
                    className={(navData) =>
                      `py-2 hover:shadow-lg ${
                        navData.isActive
                          ? " bg-[#84E8FA] text-black"
                          : "bg-[#fff] text-black"
                      } hover:bg-[#F492D3] hover:text-white rounded-lg px-5 border hover:translate-x-2 transition-all duration-150 border-white hover:border`
                    }
                    to={`/partners`}
                  >
                    Partners
                  </NavLink>

                  <NavLink
                    title="Franchise"
                    className={(navData) =>
                      `py-2 hover:shadow-lg ${
                        navData.isActive
                          ? " bg-[#84E8FA] text-black"
                          : "bg-[#fff] text-black"
                      } hover:bg-[#F492D3] hover:text-white rounded-lg px-5 border hover:translate-x-2 transition-all duration-150 border-white hover:border`
                    }
                    to={`/franchise`}
                  >
                    Franchise
                  </NavLink>

                  <NavLink
                    title="Career"
                    className={(navData) =>
                      `py-2 hover:shadow-lg ${
                        navData.isActive
                          ? " bg-[#84E8FA] text-black"
                          : "bg-[#fff] text-black"
                      } hover:bg-[#F492D3] hover:text-white rounded-lg px-5 border hover:translate-x-2 transition-all duration-150 border-white hover:border`
                    }
                    to={`/career`}
                  >
                    Career
                  </NavLink>

                  <NavLink
                    title="Blog"
                    className={(navData) =>
                      `py-2 hover:shadow-lg ${
                        navData.isActive
                          ? " bg-[#84E8FA] text-black"
                          : "bg-[#fff] text-black"
                      } hover:bg-[#F492D3] hover:text-white rounded-lg px-5 border hover:translate-x-2 transition-all duration-150 border-white hover:border`
                    }
                    to={`/blog`}
                  >
                    Blog
                  </NavLink>

                  <NavLink
                    title="Contact"
                    className={(navData) =>
                      `py-2 hover:shadow-lg ${
                        navData.isActive
                          ? " bg-[#84E8FA] text-black"
                          : "bg-[#fff] text-black"
                      } hover:bg-[#F492D3] hover:text-white rounded-lg px-5 border hover:translate-x-2 transition-all duration-150 border-white hover:border`
                    }
                    to={`/contact`}
                  >
                    Contact
                  </NavLink>
                </div>

                {/* RESPONSIVE NAV END  */}
              </div>

              {!isLogin ? (
                <div className="hidden md:block">
                  <TransparentBgButton title={"Sign Up"} />
                  <WhiteNewmorfButton handler={handleLogin} title={"Login"} />
                </div>
              ) : (
                <div className="relative hidden md:block">
                  <button
                    title={`profile`}
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
                            title="Profile"
                            className={`px-7 py-3 w-full userNavLink block font-semibold`}
                            to={"/profile/dashboard"}
                          >
                            Profile
                          </NavLink>
                          <NavLink
                            title="My Booking"
                            className={`px-7 py-3 w-full userNavLink block font-semibold`}
                            to={"/profile/my_bookings"}
                          >
                            My Booking
                          </NavLink>
                          <NavLink
                            title="My Vehicles"
                            className={`px-7 py-3 w-full userNavLink block font-semibold`}
                            to={"/profile/my_vehicles"}
                          >
                            My Vehicles
                          </NavLink>
                          <NavLink
                            title="Become Partner"
                            className={`px-7 py-3 w-full userNavLink block font-semibold`}
                            to={"/profile/become_partner"}
                          >
                            Become Partner
                          </NavLink>
                          <div>
                            <button
                              title={`logout`}
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
                  <NavLink title="franchise" to={`/franchise`}>
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
          </header>

          {/* MAIN SECTION  */}
          <Outlet />
        </div>

        <footer className="w-full bg-white h-[120px] flex px-5 xl:px-36 justify-between items-center">
          <span className="text-black font-[16px]">www.bikefixup.in</span>
          <span className="text-black flex justify-between items-center w-[100px] md:w-2/12">
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
