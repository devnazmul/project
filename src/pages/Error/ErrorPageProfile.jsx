import { NavLink, useRouteError } from "react-router-dom";
import LeftBottomImage from "../../assets/404-bottom-left-elements.svg";
import RightBottomImage from "../../assets/404-bottom-right.svg";
import notfoundImage from "../../assets/404.svg";

export default function ErrorPageProfile() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center items-end h-full">
      <div className="z-50 relative overflow-hidden w-full  text-slate-200  h-[500px]">
        <img
          className="absolute bottom-0 left-0 w-[200px] lg:w-[400px] -z-30"
          src={LeftBottomImage}
          alt=""
        />
        <img
          className="absolute bottom-0 right-0 w-[200px] lg:w-[400px] -z-30"
          src={RightBottomImage}
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex justify-center flex-col items-center ">
          <img src={notfoundImage} alt="not found" />
          <h1 className="text-2xl md:text-5xl text-primaryPurple font-semibold my-5 text-center ">
            Page not found.
          </h1>
          <p className="text-black mb-5 text-sm text-center">
            Sorry we can’t find the page you’re looking for...
          </p>
          <NavLink
          title="Back to home"
            className={`text-black border-b-2 border-black text-sm lg:text-lg hover:text-primaryPurple transition-all duration-150 hover:border-primaryPurple`}
            to={"/"}
          >
            Back to home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
