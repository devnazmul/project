import React from "react";
import { Outlet } from "react-router-dom";
// import leftBgElement from "../assets/blobanimation-1.svg";
import leftBgElement from "../assets/001.svg";
import rightBgElement from "../assets/002.svg";

// import rightBgBallElement from "../assets/003.svg";
import rightBgBallElement from "../assets/blobanimation.svg";
import Footer from "../components/Footer/Footer";

import Header from "../components/Header/Header";

export default function MainLayout() {

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
          {/* HEADER  */}
          <Header/>
          {/* MAIN SECTION  */}
          <Outlet />
          {/* FOOTER SECTION  */}
          <Footer />
      </div>
    </div>
  );
}
