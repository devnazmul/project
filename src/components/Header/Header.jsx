import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import TransparentBgButton from "../Buttons/TransparentBgButton";
import WhiteNewmorfButton from "../Buttons/WhiteNewmorfButton";
import NavLinks from "./NavLinks";
import ResponsiveNavLinks from "./ResponsiveNavLinks";

export default function Header() {
  const { user, userLogOut } = useAuth();
  const navigate = useNavigate()

  const [loginPopup, setLoginPopup] = useState(false);

  const [isNavOpened, setIsNavOpened] = useState(false);
  const [responsiveTogleIsOpened, setResponsiveTogleIsOpened] = useState(false);


  const handleLogout = () => {
    userLogOut()
      .then(() => { })
      .catch(err => console.log(err));
    localStorage.removeItem('data')
  };

  const handleResponsiveToggleNav = () => {
    setResponsiveTogleIsOpened(!responsiveTogleIsOpened);
  };

  return (
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
              className={`block transition-all duration-300 h-[2px] w-7 bg-black my-2 ${responsiveTogleIsOpened ? "rotate-45 translate-y-3" : "rotate-0"
                }`}
            ></span>
            <span
              className={`block transition-all duration-300 h-[2px] w-7 bg-black my-2 ${responsiveTogleIsOpened ? "translate-x-96" : "translate-x-0"
                }`}
            ></span>
            <span
              className={`block transition-all duration-300 h-[2px] w-7 bg-black my-2 ${responsiveTogleIsOpened
                ? "-rotate-45 -translate-y-3"
                : "rotate-0"
                }`}
            ></span>
          </button>
          {/* BURGER ICON END  */}

          {/* RESPONSIVE NAV START  */}
          <div
            className={`${responsiveTogleIsOpened ? "right-0" : "-right-96"
              } transition-all duration-300 responsiveNav absolute bg-white  w-64 top-10 px-5 py-5 rounded-lg shadow-lg z-[100] flex flex-col`}
          >
            <div className="w-full mb-6">
              {
                user ?
                  (
                    <div className="w-full flex justify-between">
                      <button
                        title={"user profile"}
                        onClick={() => {
                          navigate('/profile/dashboard')
                        }}
                        className={`w-auto h-10 flex items-center`}
                      >
                        <span className="flex justify-center items-center w-10 h-10 rounded-full bg-cyan-800 text-xl text-white">
                          D
                        </span>
                        <span className="text-sm ml-2">Md Nazmul Islam</span>
                      </button>
                      <button type="button"
                        onClick={handleLogout}>
                        title={"logout"}
                        <IoLogOutOutline className="text-primaryRed text-2xl" />
                      </button>
                    </div>
                  ) :
                  (
                    <div className="flex justify-around items-center">
                      <TransparentBgButton handler={() => { navigate('/registration') }} title={"Sign Up"} />
                      <WhiteNewmorfButton handler={() => { navigate('/login') }} title={"Login"} />
                    </div>
                  )
              }
            </div>

            {/* RESPONSIVE NAVLINKS  */}
            <ResponsiveNavLinks />
          </div>

          {/* RESPONSIVE NAV END  */}
        </div>

        {
          user ?
            (
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
            )
            :
            (
              <div className="hidden md:block">
                {/* LOGIN AND SIGNUP BUTTONS  */}
                <TransparentBgButton handler={() => { navigate('/registration') }} title={"Sign Up"} />
                <WhiteNewmorfButton handler={() => { navigate('/login') }} title={"Login"} />
              </div>
            )
        }
      </div>
      {/* NAV LINKS  */}
      <NavLinks />
    </header>
  );
}
