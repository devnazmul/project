import React from "react";
import BlogHeroImage from "../../assets/blogHero.svg";

export default function BlogHeroSec() {
  return (
    <div className="lg:px-36 px-6 flex lg:flex-row flex-col-reverse">
      <div>
        <h1 className="lg:text-[50px] text-3xl font-semibold text-primaryPurple">Your Blog Title Here.</h1>
        <p className="lg:pr-36 pr-0 mt-3">
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
