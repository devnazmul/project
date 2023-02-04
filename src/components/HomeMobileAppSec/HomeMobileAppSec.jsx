import React from "react";
import lrftBgImage from "../../assets/004.svg";
import phoneImage from "../../assets/phone.svg";

import appStoreImage from "../../assets/appstore.svg";
import playStoreImage from "../../assets/playstore.svg";
import QrCodeImage from "../../assets/QR.svg";

export default function HomeMobileAppSec() {
  return (
    <div
      className="
    relative 
    justify-between 
    py-[100px] 
    px-10 
    md:flex  
    xl:px-36"
    >
      {/* IMAGE SECTION  */}
      <div className="absolute w-8/12 xl:w-10/12">
        <img
          style={{ width: "600px" }}
          className="absolute -left-[6rem] top-0"
          src={lrftBgImage}
          alt=""
        />
      </div>

      <div className="relative h-[400px] xl:w-full">
        <div
          className="
          absolute 
          top-[50%] 
          -translate-y-[50%] 
          translate-x-[50%] 
          right-[50%]  
          w-[200px] 
          h-full 
          rounded-[30px] 
          bg-[#C62829]"
        />
        <img
          className="
            absolute 
            top-[50%] 
            -translate-y-[50%] 
            translate-x-[50%] 
            right-[50%] 
            w-[200px]"
          src={phoneImage}
          alt="phone"
        />
      </div>

      {/* TEXT SECTION  */}
      <div
        className="
      mobileSectionGlass 
      md:w-10/12 
      px-5 py-5 
      md:px-5 
      md:py-5 
      lg:py-[80px] 
      lg:px-10 
      xl:px-[40px] 
      xl:w-auto 
      mt-10"
      >
        <h2
          className="
        text-[25px] 
        lg:text-[40px] 
        font-semibold 
        text-center
         text-black 
         space-x-0 "
        >
          Download the mobile app and get lots of{" "}
          <span className="text-primaryPurple">offers</span>
        </h2>
        <p
          className="
        text-center
         text-black
          my-[40px]"
        >
          Get professional periodic two-wheeler service, doorstep bike repair,
          engine care, engine repair, genuine spare parts, and much more done at
          affordable prices in India.
        </p>
        <div className="flex justify-center items-center mb-10">
          <img
            className="
            w-[110px] 
            mx-2 
            md:w-[120px] 
            lg:w-[150px] 
            xl:w-[200px] "
            src={playStoreImage}
            alt=""
          />
          <img
            className="
            w-[110px] 
            mx-2 
            md:w-[120px] 
            lg:w-[150px] 
            xl:w-[200px] "
            src={appStoreImage}
            alt=""
          />
        </div>
        <div
          className="
        flex 
        justify-center 
        items-center 
        flex-row 
        md:flex-col 
        lg:flex-row"
        >
          <img
            className="
            w-[100px] 
            lg:w-auto  
            md:mb-5"
            src={QrCodeImage}
            alt=""
          />
          <div
            className="
          pl-5 
          lg:pl-8"
          >
            <h4
              className="
            text-black 
            textt-sm lg:text-[20px] 
            font-bold 
            lg:font-semibold"
            >
              SCAN QR CODE TO DOWNLOAD
            </h4>
            <p
              className="
            text-black 
            text-sm 
            lg:text-md"
            >
              Download the Bikefixup app & get up to 10% off on bike services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
