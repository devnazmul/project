import React from "react";
import teamImage from "../../assets/team.png";

export default function AboutOurTeamSec() {
  return (
    <div className="lg:pr-32 flex my-6 lg:my-20 relative items-center text-black">
      <div className={`aboutOurTeamGlass w-full lg:w-8/12 lg:pl-32 px-6 lg:h-[450px] lg:pr-52 py-20 `}>
        <h3 className="text-xl lg:text-4xl font-semibold">Our team</h3>
        <p className="text-justify pt-2 lg:pt-7 text-sm lg:text-base">
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
      <div className="absolute right-[-300px] lg:right-[132px] lg:h-[350px] h-[150px] overflow-hidden w-[500px] rounded-3xl ">
        <img className="h-full object-cover" src={teamImage} alt="" />
      </div>
    </div>
  );
}
