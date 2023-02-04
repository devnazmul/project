import React from "react";

export default function PartnersAfterSaleSec() {
  return (
    <div
      className="
      px-5 text-black my-10
      xl:py-8 xl:px-36 
      "
    >
      <h3 className="text-center font-semibold text-3xl">
        After Sales <span className="text-primaryPurple">Support</span>
      </h3>
      <p className="text-center md:px-40">
        We have designed two types of mobile application to make service &
        workshop operation smooth.
      </p>
      <div className="lg:flex ">
        <div className="partnerAfterSaleSupGlassCard w-full my-5 p-5 min-h-[300px] lg:w-1/2 mx-1">
          <h1 className="uppercase text-lg text-center font-semibold mb-5">
            FRANCHISE PARTNER CAN USE APPLICATION FOR
          </h1> 
          <ul className="ml-10 list-disc">
            <li>Making Job Cards</li>
            <li>Issue Service Invoice</li>
            <li>To track stock of available parts & oil</li>
            <li>To monitor workshop Performance</li>
            <li>To Collect Data Of Serviced Vehicles</li>
          </ul>
        </div>
        <div className="partnerAfterSaleSupGlassCard w-full  my-5 p-5 min-h-[300px] lg:w-1/2 mx-1">
          <h1 className="uppercase text-lg text-center font-semibold mb-5">COUSTOMER CAN USE APPLICATION FOR</h1>
          <ul className="ml-10 list-disc">
            <li>Customer use their unique ID to booking their vehicle service and they can purchase AMC without walk in to Dr Garage.</li>
            <li>Customer can use their application for To Book Service at nearest workshop.</li>
            <li>To Purchase Annual Maintenance Contract</li>
            <li>To issue new insurance policy for vehicle</li>
            <li>To give feedback of vehicle service</li>
            <li>To track vehicle service history</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
