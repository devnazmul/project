import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import lrftBgImage from "../../assets/004.svg";
import appStoreImage from "../../assets/appstore.svg";
import playStoreImage from "../../assets/playstore.svg";
import QrCodeImage from "../../assets/QR.svg";
import slideImage1 from "../../assets/slider1.svg";
import slideImage2 from "../../assets/slider2.svg";
import slideImage3 from "../../assets/slider3.svg";
import slideImage4 from "../../assets/slider4.svg";
import slideImage5 from "../../assets/slider5.svg";
import slideImage6 from "../../assets/slider6.svg";
import slideImage7 from "../../assets/slider7.svg";
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
          mobileCase
          absolute 
          top-[50%] 
          md:top-[80%]
          xl:top-[85%]
          -translate-y-[50%] 
          translate-x-[50%] 
          md:translate-x-[110%]
          lg:translate-x-[150%]
          xl:translate-x-[40%]
          right-[50%]  
          w-[200px] 
          md:w-[250px]
          h-full 
          md:h-[500px]
          rounded-[30px] 
          bg-[#C62829]
          border-8
          flex
          justify-center
          items-center
          border-black
          overflow-hidden
          pt-5
          "
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper h-full w-full"
          >
            <SwiperSlide>
              <img src={slideImage1} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slideImage2} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slideImage3} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slideImage4} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slideImage5} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slideImage6} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slideImage7} alt=""/>
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>

      {/* TEXT SECTION  */}
      <div
        className="
      mobileSectionGlass 
      md:w-6/12 
      px-2
      py-5 
      sm:px-5 
      md:px-5 
      md:py-5 
      xl:w-auto 
      mt-10"
      >
        <h2
          className="
        text-[25px] 
        lg:text-[30px] 
        xl:text-[40px]
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
          my-[40px]
          md:my-[20px]
          "
        >
          Get professional periodic two-wheeler service, doorstep bike repair,
          engine care, engine repair, genuine spare parts, and much more done at
          affordable prices in India.
        </p>
        <div className="flex justify-center items-center mb-10 px-5">
          <img
            className="
            w-[100px] 
            mx-2 
            sm:w-[110px]
            md:w-[120px] 
            lg:w-[150px] 
            xl:w-[200px] "
            src={playStoreImage}
            alt=""
          />
          <img
            className="
            w-[100px] 
            mx-2 
            sm:w-[110px]
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
            <p
              className="
            text-black 
            textt-sm lg:text-[20px] 
            font-bold 
            lg:font-semibold"
            >
              SCAN QR CODE TO DOWNLOAD
            </p>
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
