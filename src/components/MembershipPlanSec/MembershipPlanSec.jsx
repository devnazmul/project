import React from "react";
import PlanCard from "./PlanCard";

export default function MembershipPlanSec() {
  return (
    <div className="px-10 py-5 text-black">
      <h2 className="lg:text-[50px] text-xl font-semibold text-center">
        Choose your own plan
      </h2>
      <div className="w-full flex justify-center items-center lg:mt-24 mt-8">
        <div class="flex lg:flex-row flex-col w-full lg:justify-between gap-16 lg:gap-0">
          <PlanCard
            customClass={"w-11/12"}
            oldPrice={800}
            currentPrice={1899}
            duration={"06 Month"}
            limit={`Upto 125CC`}
          />
          <PlanCard
            customClass={"w-11/12 scale-110"}
            oldPrice={800}
            currentPrice={1899}
            duration={"12 Month"}
            limit={`CC No Bar`}
          />
          <PlanCard
            customClass={"w-11/12"}
            oldPrice={800}
            currentPrice={1899}
            duration={"12 Month"}
            limit={`Upto 180CC`}
          />
        </div>
      </div>
      <div className="w-full text-center mt-24 mb-10">
        <h4 className="text-3xl font-bold">For More Details</h4>
        <p>+91 0000000</p>
        <p>bikefixup@gmail.com</p>
      </div>
    </div>
  );
}
