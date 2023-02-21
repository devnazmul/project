import React from "react";
import heroImage from "../../assets/aboutHero.svg";

export default function AboutHeroSec() {
  return (
    <div className="lg:justify-between lg:flex-row flex-col text-black flex xl:py-8 px-5 xl:px-36">
      <div className="w-full lg:w-5/12 lg:relative flex items-center justify-center">
        <img
          className="lg:absolute lg:top-32 lg:-right-14 lg:bottom-10 z-50 w-[200px] lg:w-[420px]"
          src={heroImage}
          alt=""
        />
      </div>
      <div className="aboutHeroGlass w-full lg:w-7/12 lg:py-10 pl-6 lg:pl-20 lg:pr-32 px-5 mt-5 text-center lg:text-left">
        <h1 className="text-3xl lg:text-[80px] leading-none font-bold mt-4">
          About <span className="text-primaryPurple">Us</span>{" "}
        </h1>
        <h2 className="text-primaryPurple text-xl lg:text-4xl font-semibold lg:my-5 my-2">
          Welcome at
          <span className="text-black text-sm lg:text-4xl">
            <span className="text-primaryRed mr-1"> Bike</span>fixup{" "}
          </span>
        </h2>
        <p className="mb-5 text-justify lg:block w-full">
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
