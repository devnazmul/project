import React from "react";
import PurpleNewmorfButton from "../Buttons/PurpleNewmorfButton";
import FormInput from "./FormInput";

export default function FormDiv() {
  return (
    <div className="heroFormGlassDiv px-10 py-3">
      <h2 className="text-primaryPurple text-center font-semibold text-2xl mb-[24px] mt-[32px]">
        Book Bike Service
      </h2>
      <FormInput extra_class={`w-full h-[45px] px-[27px] py-2 mb-[15px] text-black`} placeholder={"Your Name"} />
      <FormInput extra_class={`w-full h-[45px] px-[27px] py-2 mb-[15px] text-black`} placeholder={"Phone Number"} />
      <FormInput extra_class={`w-full h-[45px] px-[27px] py-2 mb-[15px] text-black`} placeholder={"E-mail"} />
      <FormInput extra_class={`w-full h-[45px] px-[27px] py-2 mb-[15px] text-black`} placeholder={"Address"} />
      <FormInput extra_class={`w-full h-[45px] px-[27px] py-2 mb-[15px] text-black`} placeholder={"City"} />
      <div className="flex justify-center items-center">
        <PurpleNewmorfButton
          extra_class={`text-center w-8/12 px-10 py-2 mt-5`}
          title={"Book Now"}
        />
      </div>
      <p className="text-center text-[14px] text-black mt-[10px] mb-[20px]">or Call +9100 8574 7564 </p>
    </div>
  );
}
