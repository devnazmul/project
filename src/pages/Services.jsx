import React from "react";
import { Link, useParams } from "react-router-dom";
import image1 from "../assets/service-1.svg";
import image2 from "../assets/service-2.svg";
import image3 from "../assets/service-3.svg";
import image4 from "../assets/service-4.svg";
import serviceBanner from "../assets/service-banner.png";
import surf1 from "../assets/surface1.png";
// import leftBgElement from "../assets/blobanimation-1.svg";
import leftBgElement from "../assets/001.svg";
import rightBgElement from "../assets/002.svg";

// import rightBgBallElement from "../assets/003.svg";
import rightBgBallElement from "../assets/blobanimation.svg";
import ServiceLink from "../components/Cads/ServiceLink";
import Footer from "../components/Footer/Footer";

export default function Services() {
  const { id } = useParams();
  console.log(id);
  const serv = new Array(10);
  return (
    <div className=" bg-gradient-to-l from-[#83e9fb] to-[#f591d2] px-5 py-5 md:px-10 md:py-10">
      <div className=" backdrop-filter-blur bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-white  rounded-3xl overflow-hidden w-full  text-slate-200 relative">
        <img
          className="absolute top-[150px] w-[290px] -z-10"
          src={leftBgElement}
          alt="element"
        />
        <img
          className="absolute top-[190px] right-0 w-[250px] -z-10"
          src={rightBgBallElement}
          alt="element"
        />
        <img
          className="absolute top-[150px] right-0 w-[200px] -z-10"
          src={rightBgElement}
          alt="element"
        />
        {/* HEADER  */}
        <div className="md:h-[170px] flex flex-col align-middle justify-between py-5 px-5 xl:px-36 servicePageNav relative">
          <Link to={"/"} className="absolute text-black top-1/2 -translate-y-1/2">
            Back
          </Link>
          <div className="flex justify-center items-center">
            <ServiceLink
              to={"/sevices/1"}
              icon={image1}
              text={"General Service"}
            />
            <ServiceLink to={"/sevices/2"} icon={image3} text={"Engine Work"} />
            <ServiceLink to={"/sevices/3"} icon={image4} text={"Body Work"} />
            <ServiceLink to={"/sevices/4"} icon={image2} text={"Repair Work"} />
          </div>
        </div>
        {/* HEADER SECTION  */}
        <div className="lg:flex xl:py-8 px-5 xl:px-36">
          <img className="w-[100%] h-[auto]" src={serviceBanner} alt="" />
        </div>

        <div className="text-black">
          <div className="w-[100%]">
            {Array.from({ length: 10 }, (_, index) => (
              <div
                className={`h-[300px] items-center flex w-[100%] my-[50px] gap-7 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                key={index}
              >
                <div
                  className={`overflow-hidden ${
                    index % 2 === 0 ? "rounded-r-3xl" : "rounded-l-3xl"
                  }`}
                >
                  <img
                    className="w-[400px] h-[90%] object-cover"
                    src="https://bikeadvice.in/wp-content/uploads/2020/07/Royal-Enfield-Service-on-Wheels-2-1280x720.jpeg"
                    alt=""
                  />
                </div>

                <div className="servCard flex flex-col justify-between h-[320px]  w-[700px]">
                  <div className=" h-[100%] px-12 py-5">
                    <div className="flex items-center justify-start gap-5 mb-5">
                      <img className="w-[50px]" src={surf1} alt="" />{" "}
                      <h3 className="text-xl text-primaryPurple font-semibold">
                        General Services
                      </h3>
                    </div>
                    <div className="border-red-50">
                      <ul className="flex-wrap list-disc">
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                      </ul>
                    </div>
                  </div>
                  <p className="px-7 py-1">
                    Any other additional problem with be reported post vehicle
                    inspection
                  </p>
                  <div className="servFooter h-[100px] flex justify-between items-center px-10">
                    <div className="text-sm text-blue-500  ">
                      Inspection Charge
                    </div>
                    <div className="servBtuuon flex flex-col">
                      <button className="servBuyBtn py-1 px-4">
                        <span>₹</span>199
                      </button>
                      <span className="text-black text-sm mt-2">
                        Click to Add
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER SECTION  */}
        <Footer />
      </div>
    </div>
  );
}
