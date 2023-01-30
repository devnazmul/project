import React from "react";
import bajajImage from "../../assets/bajaj.png";
import heroImage from "../../assets/heroHonda.png";
import hondaImage from "../../assets/honda.png";
import jawaImage from "../../assets/jawa.png";
import ktmImage from "../../assets/ktm.png";
import mahindraImage from "../../assets/mahindra.png";
import royalInfieldImage from "../../assets/royalInfield.png";
import sujukiImage from "../../assets/sujuki.png";
import tvsImage from "../../assets/tvs.png";
import yamahaImage from "../../assets/yamaha.png";

export default function AboutBrandsSec() {
  return (
    <div className="aboutGlass py-8 px-32 my-10">
      <div className="grid grid-cols-5 gap-1 px-32">
        <div className="w-[100px] h-[100px]">
          <img className="object-contain w-full h-full" src={bajajImage} alt="" />
        </div>
        <div className="w-[100px] h-[100px]">
          <img className="object-contain w-full h-full" src={hondaImage} alt="" />
        </div>
        <div className="w-[100px] h-[100px]">
          <img className="object-contain w-full h-full" src={heroImage} alt="" />
        </div>
        <div className="w-[100px] h-[100px]">
          <img className="object-contain w-full h-full" src={yamahaImage} alt="" />
        </div>
        <div className="w-[100px] h-[100px]">
          <img className="object-contain w-full h-full" src={mahindraImage} alt="" />
        </div>
        <div className="w-[100px] h-[100px]">
          <img className="object-contain w-full h-full" src={royalInfieldImage} alt="" />
        </div>
        <div className="w-[100px] h-[100px]">
          <img className="object-contain w-full h-full" src={jawaImage} alt="" />
        </div>
        <div className="w-[100px] h-[100px]">
          <img className="object-contain w-full h-full" src={tvsImage} alt="" />
        </div>
        <div className="w-[100px] h-[100px]">
          <img className="object-contain w-full h-full" src={ktmImage} alt="" />
        </div>
        <div className="w-[100px] h-[100px]">
          <img className="object-contain w-full h-full" src={sujukiImage} alt="" />
        </div>
      </div>
    </div>
  );
}
