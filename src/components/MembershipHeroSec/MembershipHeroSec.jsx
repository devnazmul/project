import React from "react";
import membershipHeroImage from '../../assets/membershipHero.svg';


export default function MembershipHeroSec() {
  return (
    <div className="px-32 py-7 text-black">
      <h1 className="text-[50px] text-center font-semibold">
        <span>
          Bike<span className="text-primaryRed">Flxup</span>
        </span>{" "}
        Online Membership
      </h1>
      <div className="flex my-10 justify-between">
        <img className="w-[450px]" src={membershipHeroImage} alt={"Online Membership"} />
        <div className="heroGlass py-5 px-10">
          <h3 className="text-3xl mb-5 text-primaryPurple font-semibold">
            Save Thousands Annually on <br /> Your Vehicle Servicing
          </h3>
          <p>
            BikeFixup provides top-notch service and benefits to make your
            vehicle maintenance more affordable, convenient & stress-free. With
            our wide service network, we offer premium and smart maintenance,
            discounts and special offers, priority roadside assistance and the
            flexibility to choose service according to your convenience.
            <br />
            <br />
            Become a member and avail 1st free service as well additional
            benefits
          </p>
        </div>
      </div>
    </div>
  );
}
