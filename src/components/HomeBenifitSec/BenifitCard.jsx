import React from "react";

export default function BenifitCard({ img, highlightText, text }) {
  return (
    <div className="benifitSectionCardGlass appServiceSecLeftCard pl-3 pr-2 lg:px-10 py-2 flex justify-around items-center min-h-20">
      <img className="mr-5" src={img} alt="" />
      <div className="w-full">
        <h4 className="text-lg font-semibold text-primaryPurple">{highlightText}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
