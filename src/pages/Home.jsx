import React from "react";
import HomeBenifitSec from "../components/HomeBenifitSec/HomeBenifitSec";
import HomeCusromerSpeakSec from "../components/HomeCusromerSpeakSec/HomeCusromerSpeakSec";
import HeroSecttion from "../components/HomeHeroSec/HeroSecttion";
import HomeMobileAppSec from "../components/HomeMobileAppSec/HomeMobileAppSec";
import HomeServiceAppSec from "../components/HomeServiceAppSec/HomeServiceAppSec";
import Location from "../components/Location/Location";

export default function Home() {
  return (
    <div>
      <HeroSecttion />
      <HomeMobileAppSec />
      <HomeServiceAppSec />
      <HomeBenifitSec />
      <Location />
      <HomeCusromerSpeakSec />
    </div>
  );
}
