import React from "react";
import marketPotentialImage from "../../assets/PartnerMarketPotential.jpg";
export default function PartnersMarketPotentialSec() {
  return (
    <div
      className="
      px-5 text-black 
      xl:py-8 xl:px-36 
      "
    >
      <div className="partnerMarketPotential rounded-3xl py-2">
        <h2 className="text-2xl font-semibold text-center text-primaryPurple my-5">
          Market Potential
        </h2>
        <div className="">
          <div className="px-2 w-full lg:px-10">
            <div className="flex w-full flex-col items-center justify-between lg:flex-row sm:items-start ">

              <div className="flex justify-center items-center w-full mb-5 sm:mb-10 lg:mb-0">
                <img
                  className="rounded-xl w-100 sm:px-0 lg:w-[500px] lg:pr-5"
                  src={marketPotentialImage}
                  alt="market potential"
                />
              </div>
              
              <div className="text-justify w-full sm:py-0 lg:pr-10 lg:w-2/3 lg:pl-5">
                <p className="">
                  The market of local garages is uncontrolled and unregulated;
                  95% of them are usually roadside stores whereas many are
                  fly-bynight set-ups and are highly unreliable. A highly
                  fragmented market with a deeprooted practice of using spurious
                  spare parts, where the quality of the service is ascertained
                  only by the number of vehicles lying in the garage.
                </p>
                <ul className="list-disc pl-5 pr-2 font-semibold mt-2 mb-10">
                  <li>Hurdles Faced​</li>
                  <li>Genuineness is always a question.​</li>
                  <li>Lack of Transparency.​</li>
                  <li>Parts Quality.</li>
                  <li>High Charges at Authorized workshops.​</li>
                  <li>Good mechanics & Garages are hard to find.​</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
