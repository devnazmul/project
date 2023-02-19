import React from "react";
import { BiGlobe } from "react-icons/bi";
import { MdLocationOn, MdPhone } from "react-icons/md";
import contactHeroImage from "../../assets/contactHero.svg";
import PurpleNewmorfButton from "../Buttons/PurpleNewmorfButton";
import FormDiv from "../Forms/FormDiv";
import FormInput from "../Forms/FormInput";
export default function ContactHeroSec() {
  return (
    <div className="lg:px-32 px-6 lg:py-8 py-4 text-black">
      <h1 className="lg:text-4xl text-xl font-semibold text-center lg:mb-5 mb-2">
        Have Some Question?
      </h1>
      <p className="text-center mb-10 lg:text-base text-xs">
        Please feel free to talk to use you have ay questions.
        <br />
        We endeavor at answer withing 24 hours.
      </p>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-7/12 w-full lg:pr-20">
          <div>
            <img src={contactHeroImage} alt="" />
          </div>
          <div className="mt-10">
            <h3 className="font-semibold text-3xl mb-8">Get in touch</h3>
            <ul>
              <li className="my-5 text-md flex items-center justify-start">
                <MdLocationOn className="text-3xl mr-5 text-primaryPurple" /> {"Lorem ipsum dolor sit amet,"}
              </li>
              <li className="my-5 text-md flex items-center justify-start">
                <MdPhone className="text-3xl mr-5 text-primaryPurple" /> {"+91 0000000"}
              </li>
              <li className="my-5 text-md flex items-center justify-start">
                <BiGlobe className="text-3xl mr-5 text-primaryPurple" /> {"bikefixup@gmail.com"}
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-5/12 w-full">
          <FormDiv>
            <FormInput
              extra_class={`w-full mt-10 h-[45px] px-[27px] py-2 mb-[15px] text-black`}
              placeholder={"Name"}
            />
            <FormInput
              extra_class={`w-full h-[45px] px-[27px] py-2 mb-[15px] text-black`}
              placeholder={"Phone"}
            />
            <FormInput
              extra_class={`w-full h-[45px] px-[27px] py-2 mb-[15px] text-black`}
              placeholder={"E-mail"}
            />
            <FormInput
              row={10}
              component={"textarea"}
              type={"text"}
              extra_class={`w-full h-[200px] px-[27px] py-2 mb-[15px] text-black`}
              placeholder={"Message"}
            />
            <div className="flex justify-center items-center">
              <PurpleNewmorfButton
                extra_class={`text-center w-8/12 px-10 py-2 mt-5 text-white mb-10`}
                title={"Send"}
              />
            </div>
          </FormDiv>
        </div>
      </div>
    </div>
  );
}
