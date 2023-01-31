import React from "react";
import offerImage from "../../assets/offer.svg";
import image1 from "../../assets/service-1.svg";
import image2 from "../../assets/service-2.svg";
import image3 from "../../assets/service-3.svg";
import image4 from "../../assets/service-4.svg";
import ServiceCard from "../Cads/ServiceCard";

export default function HeroService() {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-4xl text-black">
          TWO WHEELER SERVICES MADE SMART
        </h1>
        <p className="text-black w-9/12 text-sm pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntLorem ipsum dolor sit amet
        </p>
      </div>

      <img className="h-auto w-full my-10" src={offerImage} alt="" />

      <div class="grid grid-cols-4 gap-4">
        <ServiceCard icon={image1} text={"General Service"} />
        <ServiceCard icon={image2} text={"Engine Work"} />
        <ServiceCard icon={image3} text={"Body Work"} />
        <ServiceCard icon={image4} text={"Repair Work"} />
      </div>
    </div>
  );
}