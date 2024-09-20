import React from "react";
import SliderHero from "../../components/SliderHero";
import ProgressBar from "../../components/ProgressBar";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import Flag from "react-world-flags";
import logo from "/src/assets/logo.svg";

// Example country data, replace with actual data if necessary
const countries = [
  { label: "Nigeria", value: "+234", flag: "NG" },
  { label: "United States", value: "+1", flag: "US" },
];

export default function Signup() {
  const navigate = useNavigate();

  const handleNext = () => {
    // Navigate to the OTP page after form completion
    navigate("/otp");
  };

  // Custom rendering for country options with flag
  const customSingleValue = ({ data }) => (
    <div className="flex items-center">
      <Flag
        code={data.flag}
        alt={data.label}
        style={{ width: 20, height: 20, marginRight: 10 }}
      />
      <span>{data.label}</span>
    </div>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Slider for larger screens */}
        <div className="md:w-[50%] h-screen fixed hidden md:block">
          <SliderHero />
        </div>

        {/* Signup Form Section */}
        <div className="md:w-[50%] ml-auto h-[100vh] overflow-y-auto bg-white">
          <img className="block md:hidden mb-5 p-5" src={logo} alt="" />
          <div className="flex items-center justify-center">
            <div className="flex flex-col w-full p-5 md:p-20">
              <h1 className="text-black mb-5">Sign up</h1>
              <p className="text-black">
                Let's get started, please enter your details
              </p>

              {/* Progress Bar */}
              <ProgressBar step={1} />

              {/* Form Content */}
              <form className="w-full mt-10">
                {/* First Name */}
                <div className="mb-5">
                  <label htmlFor="first-name" className="mb-2 text-sm">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    placeholder="Enter first name"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                  />
                </div>

                {/* Middle Name (Optional) */}
                <div className="mb-5">
                  <label htmlFor="middle-name" className="mb-2 text-sm">
                    Middle Name (Optional)
                  </label>
                  <input
                    id="middle-name"
                    placeholder="Enter middle name"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                  />
                </div>

                {/* Last Name */}
                <div className="mb-5">
                  <label htmlFor="last-name" className="mb-2 text-sm">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    placeholder="Enter last name"
                    type="text"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                  />
                </div>

                {/* Phone Number with Country Selector */}
                <div className="mb-5">
                  <label className="mb-2 text-sm">Phone Number</label>
                  <div className="flex items-center border border-[#CCCCCC] p-3 rounded-xl w-full">
                    <Select
                      options={countries}
                      getOptionLabel={(option) => (
                        <div className="flex items-center">
                          <Flag
                            code={option.flag}
                            alt={option.label}
                            style={{ width: 20, height: 20, marginRight: 10 }}
                          />
                          <span>{option.label}</span>
                        </div>
                      )}
                      components={{ SingleValue: customSingleValue }}
                      className="bg-transparent w-1/2"
                    />
                    <input
                      placeholder="Enter phone number"
                      type="text"
                      className="bg-transparent w-1/2 text-[16px] font-medium p-3 border-none"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-5">
                  <label htmlFor="password" className="mb-2 text-sm">
                    Password
                  </label>
                  <input
                    id="password"
                    placeholder="Enter Password"
                    type="password"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                  />
                </div>

                {/* Password Requirements */}
                <div>
                  <p className="text-black text-sm">At least:</p>
                  <div className="mt-5 flex flex-wrap gap-2 md:gap-4 w-full text-center">
                    {[
                      "8 characters",
                      "An uppercase letter",
                      "A lowercase letter",
                      "A special character",
                      "A number",
                    ].map((requirement, index) => (
                      <div
                        key={index}
                        className="rounded-full bg-[#EEDDFC] p-1 md:p-3"
                      >
                        <p className="text-[10px]">{requirement}</p>
                      </div>
                    ))}
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="mt-10 flex flex-row items-start md:items-center gap-2">
                    <input
                      className="h-4 w-4 rounded-full"
                      type="checkbox"
                      id="agreement"
                    />
                    <label
                      htmlFor="agreement"
                      className="text-black text-center text-[10px]"
                    >
                      I agree to the{" "}
                      <span className="text-[#005BFE]">Terms of Service</span>{" "}
                      and <span className="text-[#005BFE]">Privacy Policy</span>
                    </label>
                  </div>

                  {/* Next Button */}
                  <button
                    type="button"
                    className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl mt-5"
                    onClick={handleNext}
                  >
                    Next
                  </button>

                  {/* Login Prompt */}
                  <p className="text-black mt-10 text-center text-sm">
                    Already have an account?{" "}
                    <span className="text-[#005BFE]">
                      <Link to="/">Log in</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
