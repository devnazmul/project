import React from "react";
import HeroForm from "./HeroForm";
import HeroService from "./HeroService";

export default function HeroSecttion() {
  return (
    <div className="lg:flex xl:py-8 px-5 xl:px-36">
      <div className="lg:w-8/12 lg:pr-20">
        <HeroService />
      </div>
      <div className="mt-10 lg:mt-0 w-full mx-0 lg:w-4/12">
        <HeroForm />
      </div>
    </div>
  );
}
