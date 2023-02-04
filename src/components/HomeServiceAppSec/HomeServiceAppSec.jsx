import React from "react";
import bikeImage from "../../assets/bike-1.svg";
import addServiceImage4 from "../../assets/mobileService-1.svg";
import addServiceImage2 from "../../assets/Vector-1.svg";
import addServiceImage3 from "../../assets/Vector-2.svg";
import addServiceImage1 from "../../assets/Vector.svg";

export default function HomeServiceAppSec() {
  return (
    <div className="serviceMobileSecGleass px-5 py-5 xl:px-36 xl:py-[28px] flex justify-center align-top flex-col lg:flex-row relative h-auto ">
      <div className="w-full">
        <div className="text-black appServiceSecLeftCard h-full w-full px-10 sm:px-32 py-10 md:px-10 mb-10 flex justify-around md:justify-between flex-col md:flex-row lg:flex-col md:items-start">
          <div className="md:w-full flex flex-col justify-center items-center z-50 md:mx-5 lg:mx-0">
            <img className="mb-[10px] w-[50px]" src={addServiceImage1} alt="" />
            <h4 className="text-center text-2xl md:text-xl font-semibold mb-1">
              Less Time Consuming
            </h4>
            <p className="text-center text-sm mx-0 ">
              Now, you will get your bike serviced/repaired in commenced time
            </p>
          </div>
          <div className="md:w-full flex flex-col justify-center items-center  z-50 md:mx-5 lg:mx-0">
            <img className="mb-[10px] w-[50px]" src={addServiceImage2} alt="" />
            <h4 className="text-center text-2xl md:text-xl font-semibold mb-1">
              Easy Service Appointments
            </h4>
            <p className="text-center text-sm mx-0  ">
              You can book your bike service from home, office or anywhere on
              move
            </p>
          </div>
          <div className="md:w-full flex flex-col justify-center items-center z-50 md:mx-5 lg:mx-0">
            <img className="mb-[10px] w-[50px]" src={addServiceImage3} alt="" />
            <h4 className="text-center text-2xl md:text-xl font-semibold mb-1">
              Sit & Relax
            </h4>
            <p className="text-center  text-sm mx-0 ">
              While bike is being serviced/repaired, Sit back and relax at your
              place
            </p>
          </div>
        </div>
      </div>
      <div className="w-full pl-10 text-black z-50 mb-32 md:mb-0">
        <div className="md:mt-0">
          <h3 className="text-3xl font-semibold text-left text-black space-x-0 pr-5">
            Doorstep Bike{" "}
            <span className="text-primaryPurple">Service App</span>
          </h3>
          <p className="my-5 pr-32 md:pr-56 lg:pr-10">
            No time to go to a bike workshop? No worries! With one tap in the
            app.
          </p>
        </div>
      </div>
      <img
        className="absolute right-0 bottom-0 w-[250px] md:w-[280px] lg:w-[550px] xl:w-[600px]"
        src={bikeImage}
        alt=""
      />
      <img
        className="absolute right-0 -bottom-[70px] md:-bottom-[60px] lg:-bottom-[120px]  xl:-bottom-[150px] w-[250px] md:w-[280px] lg:w-[550px] xl:w-[600px]"
        src={addServiceImage4}
        alt=""
      />
    </div>
  );
}
