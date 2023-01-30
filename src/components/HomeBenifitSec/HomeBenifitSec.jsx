import React from "react";
import benifitImage1 from "../../assets/benifit-1.svg";
import benifitImage2 from "../../assets/benifit-2.svg";
import benifitImage3 from "../../assets/benifit-3.svg";
import benifitImage4 from "../../assets/benifit-4.svg";
import benifitImage5 from "../../assets/benifit-5.svg";
import BenifitCard from "./BenifitCard";

export default function HomeBenifitSec() {
  return (
    <div className="serviceMobileSecGleass px-36 py-[28px] align-top  mt-48 text-black">
      <div className="flex items-center justify-between px-28 mb-10 relative">
        <div>
            <img className="absolute -top-20 w-[250px]" src={benifitImage1} alt="" />
        </div>
        <div className="text-center mt-5">
            <h2 className="font-semibold text-2xl">Free Text Benefits</h2>
            <h5 className="font-medium text-xl"><span className="text-white">Rs.100</span> off services for first time</h5>
            <h2 className="font-semibold text-4xl text-primaryPurple">Get your bike serviced</h2>
        </div>
      </div>
      <div className="mt-20">
        <div class="grid grid-cols-2 gap-4">
            <BenifitCard img={benifitImage3} highlightText='10 days Free Service Guarantee' text={'10 days Unconditioned Warranty'} />
            <BenifitCard img={benifitImage2} highlightText='Free Pickup & Drop service' text={'Real time service'} />
            <BenifitCard img={benifitImage4} highlightText='Transparent & Competitive Pricing' text={'ave upto 40% on your bike service'} />
            <BenifitCard img={benifitImage5} highlightText='Trained & Experts Mechanics' text={'Only certified & mechanics'} />
        </div>
      </div>
    </div>
  );
}
