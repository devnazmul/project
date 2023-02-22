import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/login.svg";
import PurpleNewmorfButton from "../../components/Buttons/PurpleNewmorfButton";
import FormInput from "../../components/Forms/FormInput";
import { useAuth } from "../../context/AuthProvider";
// import leftBgElement from "../assets/blobanimation-1.svg";
import loginBottomImage from "../../assets/login-bottom.png";
import loginTopImage from "../../assets/login-top.png";
// import rightBgBallElement from "../assets/003.svg";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { RxCrossCircled } from "react-icons/rx";
import Popup from "reactjs-popup";
import { auth } from "../../firebase.config";

export default function Login() {
  const { setIsLogin, isLogin } = useAuth();
  const [OTPPopup, setOTPPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("8801924521771");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";


  const onCapchaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            handelLogin();
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        },
        auth
      );
    }
  };

  const handelLogin = () => {
    // setLoading(true)
    onCapchaVerify();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+" + phone;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setIsLoading(false);
        setOTPPopup(true);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };
  if (isLogin) {
    return navigate(from, { replace: true });
  }
  return (
    <div className="bg-gradient-to-l from-[#83e9fb] to-[#f591d2] px-5 py-5 md:px-10 md:py-10 h-screen">
      <div id="recaptcha-container"></div>
      <Popup open={OTPPopup}>OTP</Popup>
      <div className="h-full backdrop-filter-blur bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-white  rounded-3xl overflow-hidden w-full loginGlass text-slate-200 relative">
        <div className="rounded-3xl h-full max-w-full w-full px-20 py-4 flex  flex-col md:flex-row justify-center items-center">
          <div className="w-full h-full flex justify-around items-center">
            <img
              className="hidden lg:block h-[450px]"
              src={loginImage}
              alt=""
            />
            <div className="loginGlass h-[450px] px-5 py-5 border-l border-t border-white relative">
              <div className="relative">
                <img
                  className="absolute -top-[100px] -left-[140px] rotate-45 w-[290px] -z-10"
                  src={loginTopImage}
                  alt="element"
                />
                <img
                  className="absolute -bottom-[100px] -right-[50px] w-[290px] -z-10"
                  src={loginBottomImage}
                  alt="element"
                />
                {/* CROSS BUTTON  */}
                <Link to={"/"} className="absolute -right-2 -top-2">
                  <RxCrossCircled className="text-2xl text-black font-semibold" />
                </Link>
                <h1 className="text-3xl text-center font-semibold text-black">
                  Login
                </h1>
                <p className="text-sm text-center my-5 text-black">
                  welcome Back Please login to your account
                </p>
                <form
                  className="relative z-10 flex flex-col justify-center w-full items-center"
                  action=""
                >
                  <FormInput
                    extra_class={`py-3 px-3 text-black my-3 w-full placeholder:text-black`}
                    name="phone"
                    placeholder={"phone number"}
                    type="text"
                  />
                  <FormInput
                    extra_class={`py-3 px-3 text-black my-3 w-full placeholder:text-black`}
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
                    handler={handelLogin}
                    isLoading={isLoading}
                    extra_class={`w-1/2 py-2 px-2 text-white font-semibold my-5`}
                    title={"Login"}
                  />
                </form>
                <p className="text-center z-30 block text-black">
                  Don't have an account?{" "}
                  <button
                    onClick={() => {
                      navigate("/registration");
                    }}
                    className="text-primaryPurple"
                  >
                    Sign Up 
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
