import React from "react";

export default function BenifitCard({ img, highlightText, text }) {
  return (
    <div className="benifitSectionCardGlass appServiceSecLeftCard px-10 py-2 flex justify-around items-center">
      <img src={img} alt="" />
      <div>
        <h4 className="text-lg font-semibold text-primaryPurple">{highlightText}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
