import React from "react";
import bikeImage from "../../assets/bike-1.svg";
import addServiceImage4 from "../../assets/mobileService-1.svg";
import addServiceImage2 from "../../assets/Vector-1.svg";
import addServiceImage3 from "../../assets/Vector-2.svg";
import addServiceImage1 from "../../assets/Vector.svg";

export default function HomeServiceAppSec() {
  return (
    <div className="serviceMobileSecGleass px-36 py-[28px] flex justify-center align-top relative h-screen">
      <img
        className="absolute right-0 bottom-0 w-[600px]"
        src={bikeImage}
        alt=""
      />
      <img
        className="absolute right-0 -bottom-32 w-[600px]"
        src={addServiceImage4}
        alt=""
      />
      <div className="w-6/12 flex justify-end">
        <div className="rounded-[30px] text-black appServiceSecLeftCard h-full w-[400px] px-10 py-5 flex justify-around flex-col">
          <div className="flex flex-col justify-center items-center">
            <img className="mb-[10px] w-[50px]" src={addServiceImage1} alt="" />
            <h4 className="text-center text-2xl font-semibold mb-1">Less Time Consuming</h4>
            <p className="text-center">
              Now, you will get your bike serviced/repaired in commenced time
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="mb-[10px] w-[50px]" src={addServiceImage2} alt="" />
            <h4 className="text-center text-2xl font-semibold mb-1">Easy Service Appointments</h4>
            <p className="text-center">
              You can book your bike service from home, office or anywhere on
              move
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="mb-[10px] w-[50px]" src={addServiceImage3} alt="" />
            <h4 className="text-center text-2xl font-semibold mb-1">Sit & Relax</h4>
            <p className="text-center">
              While bike is being serviced/repaired, Sit back and relax at your
              place
            </p>
          </div>
        </div>
      </div>
      <div className="w-6/12 pl-10 text-black z-50">
        <div>
          <h3 className="text-[40px] font-semibold text-left text-black space-x-0 pr-5">
            Doorstep Bike{" "}
            <span className="text-primaryPurple">Service App</span>
          </h3>
          <p className="my-5">
            No time to go to a bike workshop? No worries! With one tap in the
            app.
          </p>
        </div>
      </div>
    </div>
  );
}
