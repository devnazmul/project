import React from "react";
import image11 from "../../assets/Vector-10.svg";
import image12 from "../../assets/Vector-11.svg";
import image13 from "../../assets/Vector-12.svg";
import image14 from "../../assets/Vector-13.svg";
import image15 from "../../assets/Vector-3.svg";
import image5 from "../../assets/Vector-4.svg";
import image6 from "../../assets/Vector-5.svg";
import image7 from "../../assets/Vector-6.svg";
import image8 from "../../assets/Vector-7.svg";
import image9 from "../../assets/Vector-8.svg";
import image10 from "../../assets/Vector-9.svg";
import image2 from "../../assets/Vector1.svg";
import image3 from "../../assets/Vector2.svg";
import image4 from "../../assets/Vector3.svg";
import USPSCard from "./USPSCard";
export default function PartnersUSPSec() {
  return (
    <div
      className="
      px-5 text-black py-5
      xl:py-8 xl:px-36 
     "
    >
      <h2 className="text-center font-semibold text-4xl text-primaryPurple mb-2">
        Our USPS
      </h2>
      <div className="w-100 flex justify-center mb-7">
        <div className="w-100 sm:w-5/12">
          <p className="text-center">
            consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem
            ipsum dolor sit amet
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3  md:gap-4">
        <USPSCard image={image2} text={`Pioneer in Products`} />
        <USPSCard image={image14} text={`Live Telecast during Service & Repairing for Android Users, Pioneer in Such Facility`} />
        <USPSCard image={image3} text={`Customer Centric Business`} />
        <USPSCard image={image4} text={`CRM - support, Call Centre technology`} />
        <USPSCard image={image15} text={`Nominal Charges for every 2 wheeler`} />
        <USPSCard image={image5} text={`Insurance Claims co- ordination`} />
        <USPSCard image={image6} text={`Customer Retention Assistance `} />
        <USPSCard image={image7} text={`New concept called ‘mobile workshop’ for Home Service`} />
        <USPSCard image={image8} text={`A brand with two core values - Trust & Relationship`} />
        <USPSCard image={image9} text={`services Quality - Attitude, Empathy & Appearance`} />
        <USPSCard image={image10} text={`In House Professional Training Academy `} />
        <USPSCard image={image11} text={`Contact Centre Management`} />
        <USPSCard image={image12} text={`quality audits of network`} />
        <USPSCard image={image13} text={`EV sell & service`} />
      </div>
    </div>
  );
}
