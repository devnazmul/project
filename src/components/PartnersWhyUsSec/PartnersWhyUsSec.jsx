import React from "react";
import whyUsImage from '../../assets/PartnerWhyUs.svg';
export default function PartnersWhyUsSec() {
  return (
    <div
      className="
      flex flex-col px-5 text-black my-10 justify-center items-center 
      md:flex-row
      xl:py-8 xl:px-36 
      "
    >
      <div>
        <h2 className="text-4xl font-semibold mb-5"><span className="text-primaryPurple">Why</span> Choose Us?</h2>
        <ul className="list-disc ml-5 pr-2">
          <li>Entire management team having experience in automobile sector.</li>
          <li>Providing online marketing as well as offline (door to door) marketing.</li>
          <li>0 Royalty Charges.</li>
          <li>Providing daily service booking after certain time period.</li>
          <li>Only brand in India having in-house tele calling dept.</li>
          <li>Having mobile applications for customers.</li>
          <li>Only brand in India providing full services to BS6 vehicles.</li>
          <li>ROI Period 12-18 Months*.</li>
        </ul>
      </div>
      <div>
        <img src={whyUsImage} alt="why bikefixup" />
      </div>
    </div>
  );
}
