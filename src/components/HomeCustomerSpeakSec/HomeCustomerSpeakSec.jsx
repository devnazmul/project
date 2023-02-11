import React from "react";
import image1 from "../../assets/Ellipse 1.svg";
import image2 from "../../assets/Ellipse 2.svg";
import image3 from "../../assets/Ellipse 3.svg";
import CustomerTestimonialCard from "./CustomerTestimonialCard";
export default function HomeCustomerSpeakSec() {
  return (
    <div className="serviceMobileSecGleass px-5 lg:px-36 pt-10 lg:pt-36 mt-20 text-black flex flex-col justify-between items-center relative mb-20">
      <h2 className="text-primaryPurple text-4xl font-semibold text-center mb-5">Customer Speaks</h2>
      <p className="text-center">Free text customers says about us</p>
      <div className="mt-28 grid grid-cols-1 gap-5 w-full sm:grid-cols-2 lg:grid-cols-3">
        <CustomerTestimonialCard custom_class={`w-full px-5 pt-24 pb-10 mb-14`} image={image1} name='Aadhila' message='Excellent experience with free text. It is just like Urban Clap for Bike Service and Repair. I had booked Honda Active service and the job was done in a very professional manner or just simply awesome.' />
        <CustomerTestimonialCard custom_class={`w-full px-5 pt-24 pb-10 mb-14`} image={image2} name='Chetana' message='Excellent experience with free text. It is just like Urban Clap for Bike Service and Repair. I had booked Honda Active service and the job was done in a very professional manner or just simply awesome.' />
        <CustomerTestimonialCard custom_class={`w-full px-5 pt-24 pb-10 mb-14`} image={image3} name='Viraj Silva' message='Excellent experience with free text. It is just like Urban Clap for Bike Service and Repair. I had booked Honda Active service and the job was done in a very professional manner or just simply awesome.' />
      </div>
    </div>
  );
}
