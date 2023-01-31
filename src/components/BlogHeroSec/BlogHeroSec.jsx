import React from "react";
import BlogHeroImage from "../../assets/blogHero.svg";

export default function BlogHeroSec() {
  return (
    <div className="px-36 flex ">
      <div>
        <h1 className="text-[50px] font-semibold text-primaryPurple">Your Blog Title Here.</h1>
        <p className="pr-36">
          consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem
          ipsum dolor sit amet
        </p>
      </div>
      <div>
        <img src={BlogHeroImage} alt="" />
      </div>
    </div>
  );
}
