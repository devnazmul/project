import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/login.svg";
import PurpleNewmorfButton from "../../components/Buttons/PurpleNewmorfButton";
import FormInput from "../../components/Forms/FormInput";
import { useAuth } from "../../context/AuthProvider";

export default function Login() {
  const { setIsLogin, isLogin } = useAuth();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  if (isLogin) {
    return navigate(from, { replace: true });
  }
  return (
    <div className=" rounded-3xl h-full max-w-full w-full px-20 py-4 flex  flex-col md:flex-row justify-center items-center">
      <div className="hidden loginGlass">
        <img className="h-[450px]" src={loginImage} alt="" />
      </div>
      <div className="loginGlass h-[450px] px-5 py-4 border-l border-t border-white relative">
        {/* <button
          onClick={() => setLoginPopup(false)}
          className="absolute right-2 top-2 text-white border-2 border-white h-7 w-7 rounded-full"
        >
          x
        </button> */}
        <div>
          <h1 className="text-4xl text-center font-semibold">Login</h1>
          <p className="text-center my-5">
            welcome Back Please login to your account
          </p>
          <form
            className="flex flex-col justify-center w-full items-center"
            action=""
          >
            <FormInput
              extra_class={`py-3 px-2 my-3 w-full placeholder:text-black`}
              name="phone"
              placeholder={"phone number"}
              type="text"
            />
            <FormInput
              extra_class={`py-3 px-2 my-3 w-full placeholder:text-black`}
              name="password"
              placeholder={"password"}
              type="text"
            />
            <div className=" w-full">
              <button className="text-left text-primaryPurple">
                Forgot password?
              </button>
            </div>
            <PurpleNewmorfButton
              handler={() => {
                setIsLogin(true);
                // setLoginPopup(false);
              }}
              extra_class={`w-1/2 py-2 px-2 text-white font-semibold my-5`}
              title={`Login`}
            />
          </form>
          <p className="text-center">
            Don't have an account?{" "}
            <button className="text-primaryPurple">Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
}
