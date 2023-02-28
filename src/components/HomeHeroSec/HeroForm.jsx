import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PurpleNewmorfButton from "../Buttons/PurpleNewmorfButton";
import FormDiv from "../Forms/FormDiv";

export default function HeroForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();

  // REACT FORM HOOK
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // FORM SUBMITION
  const onSubmit = (data) => {
    console.log({ data });
  };
  return (
    <div>
      <FormDiv>
        <h2 className="text-primaryPurple text-center font-semibold text-2xl mb-[24px] mt-[32px]">
          Book Bike Service
        </h2>
        <input
          {...register("name", {
            required: "* Name is required!",
          })}
          name="name"
          type={"text"}
          placeholder="Your Name"
          className={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black  ${
            errors?.name && "border border-red-600"
          }`}
        />
        {errors?.phone && (
          <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
            {errors?.name?.message}
          </span>
        )}
        <input
          {...register("phone", {
            required: "* Phone Number is required!",
          })}
          name="phone"
          type={"text"}
          placeholder="Phone Number"
          className={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black  ${
            errors?.phone && "border border-red-600"
          }`}
        />
        {errors?.phone && (
          <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
            {errors?.phone?.message}
          </span>
        )}
        <input
          {...register("email", {
            required: "* E-mail Number is required!",
          })}
          name="email"
          type={"email"}
          placeholder="E-mail"
          className={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black  ${
            errors?.email && "border border-red-600"
          }`}
        />
        {errors?.email && (
          <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
            {errors?.phone?.message}
          </span>
        )}
        <input
          {...register("address", {
            required: "* Address Number is required!",
          })}
          name="address"
          type={"text"}
          placeholder="Address"
          className={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black  ${
            errors?.address && "border border-red-600"
          }`}
        />
        {errors?.address && (
          <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
            {errors?.phone?.message}
          </span>
        )}
        <input
          {...register("email", {
            required: "* E-mail Number is required!",
          })}
          name="email"
          type={"text"}
          placeholder="E-mail"
          className={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black  ${
            errors?.email && "border border-red-600"
          }`}
        />
        {errors?.phone && (
          <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
            {errors?.phone?.message}
          </span>
        )}
        <div className="flex justify-center items-center">
          <PurpleNewmorfButton
            extra_class={`text-center w-8/12 px-10 py-2 mt-5`}
            title={"Book Now"}
          />
        </div>
        <p className="text-center text-[14px] text-black mt-[10px] mb-[20px]">
          or Call +9100 8574 7564{" "}
        </p>
      </FormDiv>
    </div>
  );
}
