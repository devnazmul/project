import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RxCrossCircled } from "react-icons/rx";
import OTPInput from 'react-otp-input';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { getAllCities } from "../../apis/citiy";
import { getAllStates } from "../../apis/state";
import loginBottomImage from "../../assets/login-bottom.png";
import loginTopImage from "../../assets/login-top.png";
import registrationImage from "../../assets/registrationImage.png";
import PurpleNewmorfButton from "../../components/Buttons/PurpleNewmorfButton";
import { useAuth } from "../../context/AuthProvider";


export default function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { setIsLogin, isLogin } = useAuth();

  const [OTPPopup, setOTPPopup] = useState(true);
  const [otp, setOtp] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [phone, setPhone] = useState(`8801924521771`);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const selectedState = watch("state_id");

  useEffect(() => {
    setIsLoadingData(true);
    getAllStates().then((res) => {
      setAllStates(res.data.data);
      console.log(res.data.data);
      setIsLoadingData(false);
    });
  }, []);

  useEffect(() => {
    if (selectedState > 0) {
      getAllCities({ id: parseInt(selectedState) }).then((res) => {
        setAllCities(res.data.data);
      });
    }
    setAllCities([]);
  }, [selectedState]);

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const onSubmit = (data) => {
    console.log({ data });
  };

  if (isLogin) {
    return navigate(from, { replace: true });
  }
  return (
    <>
      {isLoadingData ? (
        <>Loading...</>
      ) : (
        <div className="bg-gradient-to-l from-[#83e9fb] to-[#f591d2] sm:px-5 sm:py-5 md:px-10 md:py-10 h-screen">
          <div id="recaptcha-container"></div>

          <Popup className="otp-popup" open={OTPPopup}>
            <div className="relative">
              <button
                onClick={() => setOTPPopup(false)}
                className="absolute right-1 top-1"
              >
                <RxCrossCircled className="text-2xl text-[#ffffff] font-semibold" />
              </button>
              <h1 className="text-gray-500 font-semibold text-xl mb-2">
                OTP Verification
              </h1>
              <p className="text-[13px] text-gray-600 px-3">We already sended a OTP to your phone Please enter your code and verify your account.</p>
              <div className="flex justify-center items-center h-[130px]">
                <OTPInput
                  value={otp}
                  onChange={handleOtpChange}
                  numInputs={6} 
                  className={`otp-container`}
                />
              </div>
              <PurpleNewmorfButton title={'Verify'} extra_class={`px-10 py-2 my-2 text-white font-semibold`} />
            </div>
          </Popup>

          <div className="h-full backdrop-filter-blur bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-white  rounded-3xl overflow-hidden w-full loginGlass text-slate-200 relative">
            <div className="rounded-3xl h-full max-w-full w-full px-2 sm:px-20 py-4 flex  flex-col md:flex-row justify-center items-center">
              <div className="w-full h-full flex justify-around items-center">
                <img
                  className="hidden lg:block h-[450px]"
                  src={registrationImage}
                  alt=""
                />
                <div className="loginGlass h-[550px] w-[400px] md:w-[500px] sm:h-[450px] px-5 py-1 md:py-2 border-l border-t border-white relative">
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
                    <p className="text-[13px] md:text-sm text-center my-2 sm:my-5 text-black">
                      Create an account and access services easily
                    </p>
                    <form
                      className="relative z-10 flex flex-col justify-center w-full items-center"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <input
                        {...register("name", { required: true })}
                        className={`outline-none formGlassInput py-2 px-5 text-black my-2 w-full placeholder:text-black ${
                          errors?.name && "border border-red-600"
                        }`}
                        name="name"
                        placeholder={"Name"}
                        type="text"
                      />

                      <div className="sm:flex gap-2">
                        <input
                          {...register("email", { required: true })}
                          className={`outline-none formGlassInput py-2 px-5 text-black my-2 w-full placeholder:text-black ${
                            errors?.email && "border border-red-600"
                          }`}
                          name="email"
                          placeholder={"email"}
                          type="email"
                        />
                        <input
                          {...register("phone", { required: true })}
                          className={`outline-none formGlassInput py-2 px-5 text-black my-2 w-full placeholder:text-black ${
                            errors?.phone && "border border-red-600"
                          }`}
                          name="phone"
                          step="any"
                          placeholder={"phone number"}
                          type="number"
                        />
                      </div>

                      <div className="sm:flex sm:gap-2 w-full">
                        <select
                          name="state_id"
                          {...register("state_id", { required: true, min: 1 })}
                          type="select"
                          placeholder="select state"
                          className={`outline-none formGlassInput placeholder:text-black w-full my-2 sm:w-[175px] md:w-[225px] text-black px-4 py-[8px] ${
                            errors?.state_id && "border border-red-600"
                          }`}
                        >
                          <option value="">Select a state</option>
                          {allStates?.map((opt, i) => (
                            <option key={i} value={opt.id}>
                              {opt.name}
                            </option>
                          ))}
                        </select>
                        <select
                          name="city_id"
                          {...register("city_id", { required: true, min: 1 })}
                          type="select"
                          placeholder="select city"
                          className={`outline-none formGlassInput placeholder:text-black w-full my-2 sm:w-[175px] md:w-[225px] text-black px-4 py-[8px] ${
                            errors?.city_id && "border border-red-600"
                          }`}
                        >
                          <option value="">Select a city</option>
                          {allCities?.map((opt, i) => (
                            <option key={i} value={opt.id}>
                              {opt.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <input
                        {...register("password", { required: true })}
                        type="password"
                        placeholder="password"
                        className={`outline-none formGlassInput py-2 px-5 text-black my-2 w-full placeholder:text-black  ${
                          errors?.password && "border border-red-600"
                        }`}
                      />

                      <PurpleNewmorfButton
                        type="submit"
                        title={"Submit"}
                        isLoading={isLoading}
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
      )}
    </>
  );
}
