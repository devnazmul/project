import React from "react";
import HeroForm from "./HeroForm";
import HeroService from "./HeroService";

export default function HeroSecttion() {
  return (
    <div className="flex py-8 px-36">
      <div className="w-8/12 pr-20">
        <HeroService />
      </div>
      <div className="w-4/12">
        <HeroForm />
      </div>
    </div>
  );
}
