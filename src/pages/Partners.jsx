import React from "react";
import PartnersAfterSaleSec from "../components/PartnersAfterSaleSec/PartnersAfterSaleSec";
import PartnersHeroSec from "../components/PartnersHeroSec/PartnersHeroSec";
import PartnersMarketingActSec from "../components/PartnersMarketingActSec/PartnersMarketingActSec";
import PartnersMarketPotentialSec from "../components/PartnersMarketPotentialSec/PartnersMarketPotentialSec";
import PartnersUSPSec from "../components/PartnersUSPSec/PartnersUSPSec";
import PartnersWhyUsSec from "../components/PartnersWhyUsSec/PartnersWhyUsSec";

export default function Partners() {
  return <div>
    <PartnersHeroSec/>
    <PartnersMarketPotentialSec/>
    <PartnersWhyUsSec/>
    <PartnersMarketingActSec/>
    <PartnersAfterSaleSec/>
    <PartnersUSPSec/>
  </div>;
}
