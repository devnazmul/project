import React, { useEffect, useState } from "react";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext
} from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiWhatsappFill
} from "react-icons/ri";
import * as yup from "yup";
import { apiGetAllCities } from "../../apis/citiy";
import { apiGetAllStates } from "../../apis/state";
import HomeBookSuccess from "../../assets/HomeBookSuccess.png";
import PurpleNewmorfButton from "../Buttons/PurpleNewmorfButton";

const schema = yup.object().shape({
  // VALIDATION SCHEMA
  // STEP 1
  name: yup.string().min(2).required("* Name is required"),
  phone: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8, "Phone must be is 8 digit")
    .required("* Phone number is required"),
  email: yup
    .string()
    .email("Field should contain a valid e-mail")
    .max(255)
    .required("* E-mail is required"),
  address: yup.string().max(255).required("* Address is required"),
  state_id: yup.number().required("* State is required"),
  city_id: yup.number().required("* City is required"),

  // STEP 2

  brand_id: yup.number().required("* Brand is required"),
  model_id: yup.number().required("* Brand is required"),
  cc_id: yup.number().required("* Brand is required"),
});

function getSteps() {
  return ["User info", "Vechicle Info", "last"];
}
const StepOne = () => {
  const {
    control,
    formState: { errors },
    watch,
    setError,
    clearErrors,
    setValue,
  } = useFormContext();

  // DATA
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);

  const state = watch("state_id");

  useEffect(() => {
    // GET ALL STATE
    apiGetAllStates()
      .then((res) => {
        setAllStates(res.data.data);
      })
      .catch((err) => {
        toast.error("something was wrong!");
      });
  }, []);

  useEffect(() => {
    // GET CITY BY STATE ID
    if (state > 0) {
      apiGetAllCities(parseInt(state)).then((res) => {
        setAllCities(res.data.data);
      });
    }
    setAllCities([]);
  }, [state]);

  return (
    <>
      <Controller
        control={control}
        name="name"
        rules={{
          required: "* Name is required",
        }}
        render={({ field }) => (
          <>
            <input
              name="name"
              type={"text"}
              placeholder="Your Name"
              className={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black  mt-2 ${
                errors?.name && "border border-red-600"
              }`}
              {...field}
            />
            {errors?.phone && (
              <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                {errors?.name?.message}
              </span>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="phone"
        rules={{
          required: "* Phone is required",
        }}
        render={({ field }) => (
          <>
            <input
              name="phone"
              type={"number"}
              placeholder="Phone Number"
              className={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black  mt-2 ${
                errors?.phone && "border border-red-600"
              }`}
              {...field}
            />
            {errors?.phone && (
              <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                {errors?.phone?.message}
              </span>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{
          required: "* Email is required",
        }}
        render={({ field }) => (
          <>
            <input
              name="email"
              type={"email"}
              placeholder="E-mail"
              className={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black  mt-2 ${
                errors?.email && "border border-red-600"
              }`}
              {...field}
            />
            {errors?.email && (
              <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                {errors?.email?.message}
              </span>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="address"
        rules={{
          required: "* Address is required",
        }}
        render={({ field }) => (
          <>
            <input
              name="address"
              type={"text"}
              placeholder="Address"
              className={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black  mt-2 ${
                errors?.address && "border border-red-600"
              }`}
              {...field}
            />
            {errors?.address && (
              <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                {errors?.address?.message}
              </span>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="state_id"
        rules={{
          required: "* State is required",
        }}
        render={({ field }) => (
          <>
            <select
              defaultValue={0}
              name="state_id"
              type="select"
              placeholder="select state"
              className={`outline-none formGlassInput placeholder:text-black w-full mt-2 text-black px-4 py-[8px] ${
                errors?.state_id && "border border-red-600"
              }`}
              {...field}
            >
              <option value="">Select a state</option>
              {allStates?.map((opt, i) => (
                <option key={i} value={opt.id}>
                  {opt.name}
                </option>
              ))}
            </select>
            {errors?.state_id && (
              <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                {errors?.state_id?.message}
              </span>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="city_id"
        rules={{
          required: "* City is required",
        }}
        render={({ field }) => (
          <>
            <select
              name="city_id"
              type="select"
              placeholder="select city"
              className={`outline-none formGlassInput placeholder:text-black w-full mt-2 text-black px-4 py-[8px] ${
                errors?.city_id && "border border-red-600"
              }`}
              {...field}
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
          </>
        )}
      />
    </>
  );
};
const StepTwo = () => {
  const {
    control,
    formState: { errors },
    watch,
    setError,
    clearErrors,
    setValue,
  } = useFormContext();

  // DATA
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);

  const state = watch("state_id");

  // useEffect(() => {
  //   // GET ALL STATE
  //   apiGetAllStates()
  //     .then((res) => {
  //       setAllStates(res.data.data);
  //     })
  //     .catch((err) => {
  //       toast.error("something was wrong!");
  //     });
  // }, []);

  // useEffect(() => {
  //   // GET CITY BY STATE ID
  //   if (state > 0) {
  //     apiGetAllCities(parseInt(state)).then((res) => {
  //       setAllCities(res.data.data);
  //     });
  //   }
  //   setAllCities([]);
  // }, [state]);

  return (
    <div className="max-h-96 min-h-80">
      <Controller
        control={control}
        name="brand_id"
        rules={{
          required: "* Brand is required",
        }}
        render={({ field }) => (
          <>
            <select
              name="brand_id"
              type="select"
              placeholder="Select vehicle brand"
              className={`outline-none formGlassInput placeholder:text-black w-full mt-2 text-black px-4 py-[8px] ${
                errors?.brand_id && "border border-red-600"
              }`}
              {...field}
            >
              <option value="">Select a brand</option>
              {/* {allStates?.map((opt, i) => ( */}
              <option
                //  key={i} value={opt.id}
                value={1}
              >
                ksdf
                {/* {opt.name} */}
              </option>
              {/* ))} */}
            </select>
            {errors?.brand_id && (
              <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                {errors?.brand_id?.message}
              </span>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="model_id"
        rules={{
          required: "* Model is required",
        }}
        render={({ field }) => (
          <>
            <select
              name="model_id"
              type="select"
              placeholder="Select vehicle model"
              className={`outline-none formGlassInput placeholder:text-black w-full mt-2 text-black px-4 py-[8px] ${
                errors?.model_id && "border border-red-600"
              }`}
              {...field}
            >
              <option value="">Select a model</option>
              {/* {allStates?.map((opt, i) => ( */}
              <option
                //  key={i} value={opt.id}
                value={1}
              >
                ksdf
                {/* {opt.name} */}
              </option>
              {/* ))} */}
            </select>
            {errors?.model_id && (
              <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                {errors?.model_id?.message}
              </span>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="cc_id"
        rules={{
          required: "* CC is required",
        }}
        render={({ field }) => (
          <>
            <select
              name="cc_id"
              type="select"
              placeholder="Select vehicle cc"
              className={`outline-none formGlassInput placeholder:text-black w-full mt-2 text-black px-4 py-[8px] ${
                errors?.cc_id && "border border-red-600"
              }`}
              {...field}
            >
              <option value="">Select a cc</option>
              {/* {allStates?.map((opt, i) => ( */}
              <option
                //  key={i} value={opt.id}
                value={1}
              >
                ksdf
                {/* {opt.name} */}
              </option>
              {/* ))} */}
            </select>
            {errors?.cc_id && (
              <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                {errors?.cc_id?.message}
              </span>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="description"
        rules={{
          required: "* Description is required",
        }}
        render={({ field }) => (
          <>
            <textarea
              name="description"
              type={"textarea"}
              placeholder="Description"
              rows={5}
              className={`outline-none formGlassInput py-2 px-5 text-black w-full placeholder:text-black  mt-2 ${
                errors?.description && "border border-red-600"
              }`}
              {...field}
            ></textarea>
            {errors?.description && (
              <span className="text-left pl-2 block w-full text-red-600 text-[11px]">
                {errors?.description?.message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};
const StepThree = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96">
      <img src={HomeBookSuccess} alt="thanks" />
      <h2 className="text-2xl glassText my-2">Thanks You</h2>
      <hr className="text-white bg-white h-0.5 my-2 w-full " />
      <div className="flex gap-2 items-center justify-center">
        <a href="#">
          <RiFacebookBoxFill className="text-3xl" />
        </a>
        <a href="#">
          <RiInstagramFill className="text-3xl" />
        </a>
        <a href="#">
          <RiWhatsappFill className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    case 2:
      return <StepThree />;
    default:
      return "unknown step";
  }
}

export default function HeroForm() {
  const [step, setStep] = useState(1);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  // LOADING
  const [isLoadingData, setIsLoadingData] = useState(false);

  // REACT FORM HOOK
  const methods = useForm({
    customError: "",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      state_id: "",
      city_id: "",
      brand_id: "",
      model_id: "",
      cc_id: "",
      description: "",
    },
  });

  // FORM SUBMITION
  const onSubmitStep = (data) => {
    console.log("click");
    setStep(step + 1);
  };

  const onSubmit = (data) => {
    console.log("sub");
    console.log("Form data:", data);
  };

  const handleNext = (data) => {
    if (activeStep === steps.length - 1) {
      console.log({ data });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleNext)}
          className={`heroFormGlassDiv px-5 py-2 md:px-10 md:py-3`}
        >
          <h2 className="text-primaryPurple text-center font-semibold text-2xl mb-[24px] mt-[32px]">
            Book Bike Service
          </h2>
          <div>{getStepContent(activeStep)}</div>
          <div className="w-full flex justify-center items-center flex-col">
            {activeStep === 2 ? (
              <button
                className="my-2 border-b text-white border-white"
                onClick={()=>{
                  methods.reset()
                  setActiveStep(0);
                }}
              >
                Back
              </button>
            ) : (
              <PurpleNewmorfButton
                extra_class={`mt-5 px-10 py-2`}
                type={"submit"}
                title={"Book Now"}
              />
            )}

            {activeStep === 1 && (
              <button
                className="my-2 border-b text-white border-white"
                onClick={handleBack}
              >
                Back
              </button>
            )}
            {activeStep === 0 && (
              <p className="text-center text-[14px] text-black mt-[10px] mb-[20px]">
                or Call +9100 8574 7564{" "}
              </p>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
