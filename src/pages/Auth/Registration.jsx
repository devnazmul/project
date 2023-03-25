import axios from "axios";
import { RecaptchaVerifier } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import OTPInput from "react-otp-input";
import "react-phone-input-2/lib/style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { apiUserRegistration } from "../../apis/auth";
import { apiGetAllCities } from "../../apis/citiy";
import { apiGetAllStates } from "../../apis/state";
import loginBottomImage from "../../assets/login-bottom.png";
import loginTopImage from "../../assets/login-top.png";
import registrationImage from "../../assets/registrationImage.png";
import PurpleNewmorfButton from "../../components/Buttons/PurpleNewmorfButton";
import { useAuth } from "../../context/AuthProvider";
import { auth } from "../../firebase.config";
import useToken from "../../hooks/useToken";

export default function Registration() {
  const [isPassRevealed, setIsPassRevealed] = useState(false);

  //  CONTEXT
  const { isLoading, createUser } = useAuth();

  // GEO LOCATION
  const [position, setPosition] = useState({});

  // OTP
  const [OTPPopup, setOTPPopup] = useState(false);
  const [otp, setOtp] = useState("");

  // LOADING
  const [isOTPLoading, setIsOTPLoading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);

  // DATA
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);

  // REACT ROUTER
  const navigate = useNavigate();
  const location = useLocation();

  // REACT FORM HOOK
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const from = location?.state?.from?.pathname || "/";
  const selectedState = watch("state_id");

  // FORM DATA
  const [formData, setFormData] = useState({});

  //user email
  const [createdUserEmail, setCreatedUserEmal] = useState('');

  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate(from, { replace: true });
  }

  // getting all state
  useEffect(() => {
    getGeoLocation();
    setIsLoadingData(true);

    axios.get("https://website.bikefixup.com/api/states")
      .then(res => {
        const allState = res.data.states
        // console.log(allState);
        const helloState = allState.map(state => state.name)
        setAllStates(helloState);
      })
  }, []);
  console.log(allStates);

  useEffect(() => {
    if (selectedState > 0) {
      apiGetAllCities(parseInt(selectedState)).then((res) => {
        setAllCities(res.data.data);
      });
    }
    setAllCities([]);
  }, [selectedState]);

  // OTP FUNCTIONALITY =======================================
  const onCapchaVeryfy = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignup();
          },
          "expired-callback": () => { },
        },
        auth
      );
    }
  };

  const onSignup = (data) => {
    console.log(data)
    // setIsOTPLoading(true);
    onCapchaVeryfy();

    const appVerifier = window.recaptchaVerifier;

    /*  createUser(data.phone, appVerifier)
       .then((confirmationResult) => {
         window.confirmationResult = confirmationResult;
         // setIsOTPLoading(false);
         // setOTPPopup(true);
         toast.success("The OTP is send.");
       })
       .catch((error) => {
         console.log({ error });
         toast.error("The OTP is not send! Try again.");
       });
     // setIsOTPLoading(false); */
  };

  const onOTVerify = () => {
    setIsOTPLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        await apiUserRegistration(formData)
          .then((res) => {
            setIsOTPLoading(false);
          })
          .catch((err) => {
            if (err) {
              toast.error("Somthing in wrong! Try again.");
              setIsOTPLoading(false);
              setOTPPopup(false);
            }
          });
      });
  };
  // END OTP FUNCTIONALITY =======================================

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  // GET GEO LOCATION
  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };


  const onSubmit = (data) => {
    // console.log(data);
    data.phone = `+${data.phone}`;
    data.active_state = 1;
    data.latitude = position?.lat;
    data.longitude = position?.lng;
    // setFormData(data);
    onSignup(data);
  };

  if (isLoading) {
    return <h1>Loading..</h1>;
  }


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
              <OTPInput
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
              extra_class={`px-10 py-2 my-1 sm:mt-2 text-white font-semibold`}
            />
          </div>
        </div>
      </Popup>

      <div className="h-full backdrop-filter-blur bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-white  rounded-3xl overflow-hidden w-full loginGlass text-slate-200 relative">
        <div className="rounded-3xl h-full max-w-full w-full px-2 sm:px-20 md:py-4 flex  flex-col md:flex-row justify-center items-center">
          <div className="w-full h-full flex justify-around items-center">
            <img
              className="hidden lg:block h-[450px]"
              src={registrationImage}
              alt=""
            />
            <div className="loginGlass h-[580px] w-[400px] md:w-[500px] sm:h-[450px] px-5 md:py-2 border-l border-t border-white relative">
              <div className="relative py-2">
                <img
                  className="absolute -top-[100px] -left-[140px] rotate-45 w-[290px] -z-10"
                  src={loginTopImage}
                  alt="element"
                />
                <img
                  className="absolute -bottom-[70px] -right-[50px] w-[290px] -z-10"
                  src={loginBottomImage}
                  alt="element"
                />
                {/* CROSS BUTTON  */}
                <Link to={"/"} className="absolute -right-2 top-1 md:top-0">
                  <RxCrossCircled className="text-2xl text-black font-semibold" />
                </Link>
                <h1 className="text-2xl sm:text-3xl text-center font-semibold text-black ">
                  Create Account
                </h1>
                <p className="text-[13px] md:text-sm text-center mt-2 sm:my-5 text-black">
                  Create an account and access services easily
                </p>
                <form
                  className="relative z-10 flex flex-col justify-center w-full items-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    {...register("name", {
                      required: "*Name is required!",
                    })}
                    className={`outline-none formGlassInput py-2 px-5 text-black mt-2 w-full placeholder:text-black ${errors?.name && "border border-red-600"
                      }`}
                    name="name"
                    placeholder={"Name"}
                    type="text"
                  />
                  {errors?.name && (
                    <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                      {errors?.name?.message}
                    </span>
                  )}

                  <div className="sm:flex gap-2 w-full">
                    <span className="block w-full">
                      <input
                        {...register("email", {
                          required: "* Email is required!",
                        })}
                        className={`outline-none formGlassInput py-2 px-5 text-black mt-2 w-full placeholder:text-black ${errors?.email && "border border-red-600"
                          }`}
                        name="email"
                        placeholder={"email"}
                        type="email"
                      />
                      {errors?.email && (
                        <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                          {errors?.email?.message}
                        </span>
                      )}
                    </span>

                    <span className="block w-full">
                      <input
                        {...register("phone", {
                          required: "* Phone number is required!",
                        })}
                        className={`outline-none formGlassInput py-2 px-5 text-black mt-2 w-full placeholder:text-black ${errors?.phone && "border border-red-600"
                          }`}
                        name="phone"
                        step="any"
                        placeholder={"phone number"}
                        type="number"
                      />
                      {errors?.phone && (
                        <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                          {errors?.phone?.message}
                        </span>
                      )}
                    </span>
                  </div>

                  <div className="sm:flex sm:gap-2 w-full">
                    <span>
                      <select
                        name="state_id"
                        {...register("state_id", {
                          required: "* State is required!",
                          min: 1,
                        })}
                        type="select"
                        placeholder="select state"
                        className={`outline-none formGlassInput placeholder:text-black w-full mt-2 sm:w-[175px] md:w-[225px] text-black px-4 py-[8px] ${errors?.state_id && "border border-red-600"
                          }`}
                      >
                        <option value="">Select a state</option>
                        {allStates?.map((opt, i) => (
                          <option key={i} value={opt.id}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors?.state_id && (
                        <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                          {errors?.state_id?.message}
                        </span>
                      )}
                    </span>

                    <span>
                      <select
                        name="city_id"
                        {...register("city_id", {
                          required: "* City is required!",
                          min: 1,
                        })}
                        type="select"
                        placeholder="select city"
                        className={`outline-none formGlassInput placeholder:text-black w-full mt-2 sm:w-[175px] md:w-[225px] text-black px-4 py-[8px] ${errors?.city_id && "border border-red-600"
                          }`}
                      >
                        <option value="">Select a city</option>
                        {allCities?.map((opt, i) => (
                          <option key={i} value={opt.id}>
                            {opt.name}
                          </option>
                        ))}
                      </select>
                      {errors?.city_id && (
                        <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                          {errors?.city_id?.message}
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="w-full">
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
                        className={`outline-none formGlassInput py-2 px-5 text-black mt-2 w-full placeholder:text-black  ${errors?.password && "border border-red-600"
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

                  <PurpleNewmorfButton
                    type="submit"
                    title={"Submit"}
                    isLoading={isOTPLoading}
                    extra_class={`px-10 py-2 my-3 font-semibold`}
                  />
                </form>
                <p className="text-center z-30 block text-black text-sm">
                  Already have an account?{" "}
                  <button
                    onClick={() => {
                      navigate("/login");
                    }}
                    className="text-primaryPurple"
                  >
                    Log In
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
