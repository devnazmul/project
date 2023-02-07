import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import loginImage from "../../assets/login.svg";
import { useAuth } from "../../context/AuthProvider";
import PurpleNewmorfButton from "../Buttons/PurpleNewmorfButton";
import TransparentBgButton from "../Buttons/TransparentBgButton";
import WhiteNewmorfButton from "../Buttons/WhiteNewmorfButton";
import FormInput from "../Forms/FormInput";
import NavLinks from "./NavLinks";
import ResponsiveNavLinks from "./ResponsiveNavLinks";

export default function Header() {
  const { isLogin, setIsLogin } = useAuth();

  const [loginPopup, setLoginPopup] = useState(false);

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
    <header className="md:h-[121px] flex flex-col align-middle justify-between py-5 px-5 xl:px-36">
      <Popup className="LoginPopup" open={loginPopup}>
        <div className=" rounded-3xl h-full max-w-full w-full px-20 py-4 flex  flex-col md:flex-row justify-center items-center">
          <div className="hidden loginGlass">
            <img className="h-[450px]" src={loginImage} alt="" />
          </div>
          <div className="loginGlass h-[450px] px-5 py-4 border-l border-t border-white relative">
            <button
              onClick={() => setLoginPopup(false)}
              className="absolute right-2 top-2 text-white border-2 border-white h-7 w-7 rounded-full"
            >
              x
            </button>
            <div>
              <h1 className="text-4xl text-center font-semibold">Login</h1>
              <p className="text-center my-5">
                welcome Back Please login to your account
              </p>
              <form
                className="flex flex-col justify-center w-full items-center"
                action=""
              >
                <FormInput
                  extra_class={`py-3 px-2 my-3 w-full placeholder:text-black`}
                  name="phone"
                  placeholder={"phone number"}
                  type="text"
                />
                <FormInput
                  extra_class={`py-3 px-2 my-3 w-full placeholder:text-black`}
                  name="password"
                  placeholder={"password"}
                  type="text"
                />
                <div className=" w-full">
                  <button className="text-left text-primaryPurple">
                    Forgot password?
                  </button>
                </div>
                <PurpleNewmorfButton
                  handler={() => {
                    setIsLogin(true)
                    setLoginPopup(false)
                }}
                  extra_class={`w-1/2 py-2 px-2 text-white font-semibold my-5`}
                  title={`Login`}
                />
              </form>
              <p className="text-center">
                Don't have an account?{" "}
                <button className="text-primaryPurple">Sign Up</button>
              </p>
            </div>
          </div>
        </div>
      </Popup>
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
                responsiveTogleIsOpened ? "rotate-45 translate-y-3" : "rotate-0"
              }`}
            ></span>
            <span
              className={`block transition-all duration-300 h-[2px] w-7 bg-white my-2 ${
                responsiveTogleIsOpened ? "translate-x-96" : "translate-x-0"
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
                    handler={() => setLoginPopup(true)}
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
                  <button title={"logout"} onClick={() => setIsLogin(false)}>
                    <IoLogOutOutline className="text-primaryRed text-2xl" />
                  </button>
                </div>
              )}
            </div>

            {/* RESPONSIVE NAVLINKS  */}
            <ResponsiveNavLinks />
          </div>

          {/* RESPONSIVE NAV END  */}
        </div>

        {!isLogin ? (
          <div className="hidden md:block">
            <TransparentBgButton title={"Sign Up"} />
            <WhiteNewmorfButton
              handler={() => setLoginPopup(true)}
              title={"Login"}
            />
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
      <NavLinks />
    </header>
  );
}
