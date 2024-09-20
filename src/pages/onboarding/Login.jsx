import React from "react";
import ScrollToTop from "../../components/ScrollToTop";
import SliderHero from "../../components/SliderHero";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <ScrollToTop /> {/* Ensure the ScrollToTop component is included */}
      <div className="flex flex-col md:flex-row">
        {/* Slider for larger screens */}
        <div className="md:w-[50%] hidden md:block">
          <SliderHero />
        </div>

        {/* Login Form Section */}
        <div className="md:w-[50%] bg-white">
          <div className="flex items-center justify-center md:mt-28">
            <div className="flex flex-col w-full p-5 md:p-20">
              <h1 className="text-black mb-5">Login</h1>
              <p className="text-black">
                Welcome back, please enter your details
              </p>

              <form action="" className="w-full mt-10">
                <div className="mb-5">
                  <label htmlFor="email" className="mb-2 block">
                    Email Address
                  </label>
                  <input
                    id="email"
                    placeholder="Email"
                    type="email"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="mb-2 block">
                    Password
                  </label>
                  <input
                    id="password"
                    placeholder="Password"
                    type="password"
                    className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                  />
                </div>

                <p className="text-[#007AFF] mb-10">Forgot Password?</p>

                <Link to="/dashboard">
                  <button
                    type="submit"
                    className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl"
                  >
                    Sign In
                  </button>
                </Link>
              </form>

              <div className="flex flex-col text-center mt-5">
                <p className="font-[300]">
                  Are you a new user?{" "}
                  <Link to="/signup" className="text-[#007AFF]">
                    Create your account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
