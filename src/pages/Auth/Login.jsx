import axios from "axios";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import OtpInput from "react-otp-input";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { apiUserLogin } from "../../apis/auth";
import loginBottomImage from "../../assets/login-bottom.png";
import loginTopImage from "../../assets/login-top.png";
import loginImage from "../../assets/login.svg";
import PurpleNewmorfButton from "../../components/Buttons/PurpleNewmorfButton";
import FormInput from "../../components/Forms/FormInput";
import { useAuth } from "../../context/AuthProvider";
import { auth } from "../../firebase.config";


export default function Login() {
  const { userSignin, token, setToken, setUser } = useAuth();
  const [userResponseData, setuserResponseData] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const [isOTPLoading, setIsOTPLoading] = useState(false);
  const [isPassRevealed, setIsPassRevealed] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");

  // OTP
  const [OTPPopup, setOTPPopup] = useState(false);
  const [otp, setOtp] = useState("");

  // POPUPS
  const [changePasswordPopup, setChangePasswordPopup] = useState(false);

  // REACT FORM HOOK
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // OTP FUNCTIONALITY =======================================
  const onCapchaVeryfy = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignin();
          },
          "expired-callback": () => { },
        },
        auth
      );
    }
  };

  const onSignin = (data) => {
    setIsOTPLoading(true);
    onCapchaVeryfy();

    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, data.phone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setIsOTPLoading(false);
        setOTPPopup(true);
        toast.success("The OTP is send.");
      })
      .catch((error) => {
        toast.error("The OTP is not send! refresh the page & try again.");
      });

    setIsOTPLoading(false);
  }

  const onOTVerify = () => {
    setIsOTPLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log("hit");
        localStorage.setItem("data", JSON.stringify(userResponseData));
        setIsOTPLoading(false);
      })
      .catch((err) => {
        if (err) {
          toast.error("Somthing in wrong! Try again.");
          setIsOTPLoading(false);
          setOTPPopup(false);
        }
      });
  }

  // END OTP FUNCTIONALITY =======================================
  const handleOtpChange = (value) => {
    setOtp(value);
  }

  //user form submit
  const onSubmit = (data) => {
    data.phone = `+${data.phone}`;
    const { phone, password } = data;

    // userLogin 
    axios.post("https://website.bikefixup.com/api/auth/login", {
      phone,
      password
    })
      .then(res => {
        console.log(res.data)
        const token = res.data.access_token;
        localStorage.setItem('access_token', token);
        setToken(token);
        const user = res.data.user;
        setUser(user)
      }).catch(err => console.log(err));
  }

  const submitRecoveryMail = () => {
    console.log({ recoveryEmail });
  }


  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [navigate]);

  return (

    <div className="bg-gradient-to-l from-[#83e9fb] to-[#f591d2] sm:px-5 sm:py-5 md:px-10 md:py-10 h-screen">
      <div id="recaptcha-container"></div>
      <Popup className="otp-popup" open={OTPPopup}>
        <div className="flex justify-center items-center h-full w-full">
          <div className="relative w-[400px] p-5 rounded-lg shadow-xl bg-gradient-to-tr from-pink-500 to-cyan-300">
            <button
              onClick={() => setOTPPopup(false)}
              className="absolute top-0 right-0 sm:right-1 sm:top-1"
            >
              <RxCrossCircled className="text-2xl text-[#000] font-semibold" />
            </button>
            <h1 className="text-black font-semibold text-xl mb-2">
              OTP Verification
            </h1>
            <p className="text-[13px] text-white px-1 sm:px-3">
              We already sended a OTP to your phone Please enter your code
              and verify your account.
            </p>
            <div className="flex justify-center items-center h-[100px] sm:h-[130px]">
              <OtpInput
                value={otp}
                onChange={handleOtpChange}
                numInputs={6}
                className={`otp-container`}
              />
            </div>
            <PurpleNewmorfButton
              isLoading={isOTPLoading}
              handler={onOTVerify}
              title={"Verify"}
              extra_class={`px-10 py-2 my-1 sm:my-2 text-white font-semibold`}
            />
          </div>
        </div>
      </Popup>

      <Popup className="otp-popup" open={changePasswordPopup}>
        <div className="flex justify-center items-center h-full w-full">
          <div className="relative w-[400px] p-5 rounded-lg shadow-xl bg-gradient-to-tr from-pink-500 to-cyan-300">
            <button
              onClick={() => setChangePasswordPopup(false)}
              className="absolute top-0 right-0 sm:right-1 sm:top-1"
            >
              <RxCrossCircled className="text-2xl text-[#000] font-semibold" />
            </button>
            <h1 className="text-black font-semibold text-xl mb-2">
              Recovery Password
            </h1>
            <p className="text-[13px] text-white px-1 sm:px-3">
              We will send you a password recovery link to your email
              address.
            </p>
            <div className="flex justify-center items-center h-[100px] sm:h-[130px]">
              <FormInput
                handler={(e) => setRecoveryEmail(e.target.value)}
                name={"recEmail"}
                extra_class={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black`}
                placeholder={"enter your email"}
                type="email"
              />
            </div>
            <PurpleNewmorfButton
              isLoading={isLoading}
              handler={submitRecoveryMail}
              title={"Verify"}
              extra_class={`px-10 py-2 my-1 sm:my-2 text-white font-semibold`}
            />
          </div>
        </div>
      </Popup>

      <div className="h-full backdrop-filter-blur bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-white  rounded-3xl overflow-hidden w-full loginGlass text-slate-200 relative">
        <div className="rounded-3xl h-full max-w-full w-full px-2 sm:px-20 py-4 flex  flex-col md:flex-row justify-center items-center">
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
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <span className="w-full block mt-5">
                    {/* <input
                        {...register("email", {
                          required: "* Phone is required!",
                        })}
                        className={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black ${errors?.phone && "border border-red-600"
                          }`}
                        step="any"
                        placeholder={"email"}
                        type="text"
                      /> */}
                    <input
                      {...register("phone", {
                        required: "* Phone is required!",
                      })}
                      className={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black ${errors?.phone && "border border-red-600"
                        }`}
                      step="any"
                      placeholder={"+91 ___"}
                      type="number"
                    />
                    {errors?.phone && (
                      <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                        {errors?.phone?.message}
                      </span>
                    )}
                  </span>

                  <div className="w-full mt-5 block">
                    <span className="w-full block relative">
                      <input
                        {...register("password", {
                          required: "* Password is required!",
                          minLength: {
                            value: 8,
                            message:
                              "* Password must be contain at least 8 character",
                          },
                        })}
                        name="password"
                        type={`${isPassRevealed ? "text" : "password"}`}
                        placeholder="password"
                        className={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black  ${errors?.password && "border border-red-600"
                          }`}
                      />
                      <RiEyeCloseLine
                        onClick={() => setIsPassRevealed(!isPassRevealed)}
                        className={`${isPassRevealed ? "hidden" : "block"
                          } mt-0.5 absolute right-4 top-1/2 -translate-y-1.5 text-black z-40 cursor-pointer`}
                      />
                      <RiEyeFill
                        onClick={() => setIsPassRevealed(!isPassRevealed)}
                        className={`${!isPassRevealed ? "hidden" : "block"
                          } mt-0.5 absolute right-4 top-1/2 -translate-y-1.5 text-black z-40 cursor-pointer`}
                      />
                    </span>
                    {errors?.password && (
                      <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                        {errors?.password?.message}
                      </span>
                    )}
                  </div>

                  <button
                    className="self-start text-left text-primaryPurple mt-5 mb-2 pl-2"
                    onClick={() => setChangePasswordPopup(true)}
                  >
                    Forgot password?
                  </button>

                  <PurpleNewmorfButton
                    type="submit"
                    title={"Submit"}
                    isLoading={isOTPLoading}
                    extra_class={`px-10 py-2 my-3 font-semibold`}
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
