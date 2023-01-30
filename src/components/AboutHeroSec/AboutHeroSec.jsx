import React from "react";
import heroImage from "../../assets/aboutHero.svg";

export default function AboutHeroSec() {
  return (
    <div className="flex justify-between text-black">
      <div className="w-5/12 relative">
        <img
          className="absolute top-32 -right-14 bottom-10 z-50 w-[420px]"
          src={heroImage}
          alt=""
        />
      </div>
      <div className="aboutHeroGlass w-7/12 py-10 pl-20 pr-32">
        <h1 className="text-[100px] leading-none font-bold">
          About <br /> <span className="text-primaryPurple">Us</span>{" "}
        </h1>
        <h2 className="text-primaryPurple text-4xl font-semibold my-5">
          Welcome at
          <span className="text-black">
            <span className="text-primaryRed"> Bike</span>fixup{" "}
          </span>
        </h2>
        <p className="mb-5 text-justify">
          How painful is it to service your motorcycle? Let us break it down for
          you. Not sure which services station to trust? Don’t want to spend too
          much time in the workshop? Are you looking for a assemblage pick-up
          and drop-off services?
          <br />
          <br />
          we’re here to make sure that no one is inconvenienced while getting
          their bike serviced. this will allow bike owner to obtain convenient
          bike service while relaxing with their families or working. Bikefixup
          is a full-service preventive maintenance and automotive repair
          company. We perform high quality, guaranteed services you can trust at
          a fair price.
        </p>
      </div>
    </div>
  );
}
