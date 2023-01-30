import React from "react";
import teamImage from "../../assets/team.png";

export default function AboutOurTeamSec() {
  return (
    <div className="pr-32 flex my-20 relative items-center text-black">
      <div className={`aboutOurTeamGlass w-8/12 pl-32 h-[450px] pr-52 py-20 `}>
        <h3 className="text-4xl font-semibold">Our team</h3>
        <p className="text-justify pt-7">
          Bikefixup is India's leading bike service provider, spread into a
          number of cities and states providing you with 500+ best quality
          services for your bikes like repair, servicing, maintenance,
          inspection, and a lot more. 
          <br />
          <br />
          Our Team is Dedicated to Enthrall you and
          make you trust us with our top-notch service. We promise a lifelong
          delightful experience with us.
        </p>
      </div>
      <div className="absolute right-[132px] h-[350px] overflow-hidden w-[500px] rounded-3xl">
        <img className="h-full object-cover" src={teamImage} alt="" />
      </div>
    </div>
  );
}
