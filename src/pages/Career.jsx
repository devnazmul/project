import React from "react";
import CareerHeroSec from "../components/CareerHeroSec/CareerHeroSec";
import CareerJobNotMatchSec from "../components/CareerJobNotMatchSec/CareerJobNotMatchSec";
import CareerJobs from "../components/CareerJobs/CareerJobs";

export default function Career() {
  return <div>
    <CareerHeroSec />
    <CareerJobs />
    <CareerJobNotMatchSec />
  </div>;
}
