import React from "react";
import AboutSimpleCard from "./AboutSimpleCard";

export default function AboutOneStopSec() {
  return (
    <div className="aboutOneStepGlass px-6 lg:px-32 py-8 text-black">
      <h3 className="text-center font-semibold lg:text-3xl text-2xl mb-6 lg:mb-10">
        What makes us a one stop ?
      </h3>
      <div className="flex justify-between lg:flex-row flex-col">
        <AboutSimpleCard
          title={`Service Quality Assurance`}
          paragraph={`We at Bikefixup use only originally manufactured products to provide the best possible bike service experience to our customer.Customer satisfaction is our top-most priority, and we provide that satisfaction in term of quality service. We have 500+ happy customer.`}
        />
        <AboutSimpleCard
          title={`Price Transparency`}
          paragraph={`We at Bikefixup believes in transparent price policy to provide the best prices of all spare parts.Our competitive prices will never let you down because we have our tie-ups with spare parts whole seller who provides best prices in market.     `}
        />
      </div>
    </div>
  );
}
