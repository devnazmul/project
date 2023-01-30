import React from "react";
import PurpleNewmorfButton from "../Buttons/PurpleNewmorfButton";

export default function PlanCard({
  oldPrice,
  currentPrice,
  duration,
  customClass,
  limit,
}) {
  return (
    <div className={`palnGlass  mx-5 ${customClass}`}>
      <div className="planCardHead px-3 py-10 text-center w-full">
        <span className="inline-block relative font-medium">
          <span className="inline-block absolute top-[50%] bg-red-700 w-full h-[2px]"></span>
          ${oldPrice}
        </span>
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-[60px] text-primaryPurple font-bold">
            <span>$</span>
            {currentPrice}
          </span>
          <p className="text-right">For {duration}</p>
        </div>
      </div>
      <div className=" px-5 py-5 text-white">
        <div className="border-b border-white py-2 mb-2">
          <p className="text-sm text-center">
            10% OFF (Upto 200 on each invoice)
          </p>
        </div>
        <div className="border-b border-white py-2 mb-2">
          <p className="text-sm text-center">
            10% OFF (Upto 200 on each invoice)
          </p>
        </div>
        <div className="border-b border-white py-2 mb-2">
          <p className="text-sm text-center">
            10% OFF (Upto 200 on each invoice)
          </p>
        </div>
        <div className="border-b border-white py-2 mb-2">
          <p className="text-sm text-center">
            10% OFF (Upto 200 on each invoice)
          </p>
        </div>
        <div className="border-b border-white py-2 mb-2">
          <p className="text-sm text-center">
            10% OFF (Upto 200 on each invoice)
          </p>
        </div>
        <div className="border-b border-white py-2 mb-2">
          <p className="text-sm text-center">
            10% OFF (Upto 200 on each invoice)
          </p>
        </div>
        <div className="border-b border-white py-2 mb-2">
          <p className="text-sm text-center">
            10% OFF (Upto 200 on each invoice)
          </p>
        </div>
      </div>
      <div className="text-center font-semibold text-primaryPurple">{limit}</div>
      <div className="w-full flex justify-center items-center my-10">
        <PurpleNewmorfButton
          extra_class={`w-6/12 px-5 py-2 text-white`}
          handler={() => {}}
          title={`Buy Now`}
        />
      </div>
    </div>
  );
}
