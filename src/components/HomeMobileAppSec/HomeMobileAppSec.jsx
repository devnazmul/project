import React from "react";
import lrftBgImage from "../../assets/004.svg";
import phoneImage from "../../assets/phone.svg";

import appStoreImage from "../../assets/appstore.svg";
import playStoreImage from "../../assets/playstore.svg";
import QrCodeImage from "../../assets/QR.svg";

export default function HomeMobileAppSec() {
 
  return (
    <div className="py-[100px] relative flex justify-between px-36">
      {/* IMAGE SECTION  */}
      <div className="absolute w-10/12">
        <img
          style={{ width: "600px" }}
          className="absolute -left-[6rem] top-0"
          src={lrftBgImage}
          alt=""
        />
      </div>
      <div className="w-10/12">
        <div className="relative h-[650px] w-[295px] top-[50%] -translate-y-[50%]">
          <div className="absolute top-[50%] -translate-y-[50%] right-1 w-[290px] h-[600px] rounded-[50px] bg-[#C62829]" />
          <img
            className="absolute top-[50%] -translate-y-[50%] right-1 h-[650px]"
            src={phoneImage}
            alt="phone"
          />
        </div>
      </div>

      {/* TEXT SECTION  */}
      <div className="4/12 mobileSectionGlass py-[80px] px-[40px]">
        <h2 className="text-[40px] font-semibold text-center text-black space-x-0 ">
          Download the mobile app and get lots of{" "}
          <span className="text-primaryPurple">offers</span>
        </h2>
        <p className="text-center text-black my-[40px]">
          Get professional periodic two-wheeler service, doorstep bike repair,
          engine care, engine repair, genuine spare parts, and much more done at
          affordable prices in India.
        </p>
        <div className="flex justify-center items-center mb-10">
          <img className="w-[200px] mx-5" src={playStoreImage} alt="" />
          <img className="w-[200px] mx-5" src={appStoreImage} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={QrCodeImage} alt="" />
          <div className=" pl-8">
            <h4 className="text-black text-[20px] font-semibold">
              SCAN QR CODE TO DOWNLOAD
            </h4>
            <p className="text-black">
              Download the Bikefixup app & get up to 10% off on bike services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
