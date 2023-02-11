import React from "react";

export default function CustomerTestimonialCard({
  image,
  name,
  message,
  custom_class,
}) {
  return (
    <div
      className={`text-center testimonialGlass relative ${custom_class}`}
    >
      <div className="absolute w-[150px] h-[150px] overflow-hidden object-cover -top-14 left-[50%] -translate-x-[50%]">
        <img className="" src={image} alt="" />
      </div>
      <h3 className="text-primaryPurple font-semibold text-xl my-4">{name}</h3>
      <p className="text-sm font-light">{message}</p>
    </div>
  );
}
