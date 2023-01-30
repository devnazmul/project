import React from "react";
import image1 from "../../assets/Ellipse 1.svg";
import image2 from "../../assets/Ellipse 2.svg";
import image3 from "../../assets/Ellipse 3.svg";
import CustomerTestimonialCard from "./CustomerTestimonialCard";
export default function HomeCusromerSpeakSec() {
  return (
    <div className="serviceMobileSecGleass px-36 pt-36 mt-20 text-black flex flex-col justify-between items-center relative mb-20 pb-14">
      <h2 className="text-primaryPurple text-4xl font-semibold">Customer Speaks</h2>
      <p>Free text customers says about us</p>
      <div className="mt-28 flex justify-between items-center w-full">
        <CustomerTestimonialCard image={image1} name='Aadhila' message='Excellent experience with free text. It is just like Urban Clap for Bike Service and Repair. I had booked Honda Active service and the job was done in a very professional manner or just simply awesome.' />
        <CustomerTestimonialCard image={image2} name='Chetana' message='Excellent experience with free text. It is just like Urban Clap for Bike Service and Repair. I had booked Honda Active service and the job was done in a very professional manner or just simply awesome.' />
        <CustomerTestimonialCard image={image3} name='Viraj Silva' message='Excellent experience with free text. It is just like Urban Clap for Bike Service and Repair. I had booked Honda Active service and the job was done in a very professional manner or just simply awesome.' />
      </div>
    </div>
  );
}
