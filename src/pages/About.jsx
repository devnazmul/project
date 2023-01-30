import React from "react";
import AboutBrandsSec from "../components/AboutBrandsSec/AboutBrandsSec";
import AboutHeroSec from "../components/AboutHeroSec/AboutHeroSec";
import AboutOurMissionSec from "../components/AboutOurMissionSec/AboutOurMissionSec";
import AboutOurTeamSec from "../components/AboutOurTeamSec/AboutOurTeamSec";

export default function About() {
  return <div>
    <AboutHeroSec />
    <AboutOurMissionSec />
    <AboutOurTeamSec />
    <AboutBrandsSec />
  </div>;
}
