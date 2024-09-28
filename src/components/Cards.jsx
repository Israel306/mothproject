import React, { useState, useEffect } from "react";
import cards from "/src/assets/cards.svg";
import { GiSwipeCard } from "react-icons/gi";
import { AiOutlineDollar } from "react-icons/ai";
import { SlLock } from "react-icons/sl";
import BankSelect from "./BankSelect";

export default function Cards() {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState("");

  // Function to open the request modal
  const openCardModal = () => {
    setIsCardModalOpen(true);
  };

  const countries = [
    { code: "US", name: "United States Dollar", flag: "🇺🇸", amount: "500" },
    { code: "NG", name: "Nigeria Naira", flag: "🇳🇬" },
    { code: "CA", name: "Canada Canadian Dollar", flag: "🇨🇦" },
    { code: "UK", name: "United Kingdom Pounds", flag: "🇬🇧" },
  ];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  // Function to close the request modal
  const closeCardModal = () => {
    setIsCardModalOpen(false);
    setStep(1);
  };

  const handleNextClick = () => {
    setStep(2); // Proceed to the Review & Confirm step
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <h1>Cards</h1>
        <div className="border-[1px] border-[#E1E1E1] mt-5"></div>
        <div className="flex items-center justify-center">
          <img src={cards} alt="" />
        </div>
        <div className=" bg-white rounded-xl p-10 flex flex-col w-full shadow-lg ">
          <h1 className="flex items-center justify-center ">
            Create your instant credit & debit cards
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-5 w-full mt-10">
            <div className="flex flex-row items-center gap-5 w-full">
              <div className="flex items-center justify-center rounded-full bg-[#C1E8EB] h-10 w-10">
                <GiSwipeCard className="h-6 w-6" />
              </div>
              <div className="flex flex-col ">
                <p className="text-[#6C6C70] text-[13px]">Card Creation Free</p>
                <p className="font-bold">$2</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 w-full">
              <div className="flex items-center justify-center rounded-full bg-[#F2F0E0] h-10 w-10">
                <AiOutlineDollar className="h-6 w-6" />
              </div>
              <div className="flex flex-col ">
                <p className="text-[#6C6C70] text-[13px]">Transaction Fees</p>
                <p className="font-bold">None</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 w-full">
              <div className="flex items-center justify-center rounded-full bg-[#EEDDFC] h-10 w-10">
                <SlLock className="h-6 w-6" />
              </div>
              <div className="flex flex-col ">
                <p className="text-[#6C6C70] text-[13px]">Security</p>
                <p className="font-bold">100% Guaranted</p>
              </div>
            </div>
          </div>
          <button
            className="mt-10 bg-black rounded-lg p-3 text-white"
            onClick={openCardModal}
          >
            Create my virtual card
          </button>
        </div>
      </div>
      {isCardModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg relative w-full max-w-md md:w-1/3 lg:max-w-lg xl:max-w-xl mx-4">
            {step === 1 && (
              <>
                <h2 className="text-center text-2xl font-bold mb-4">
                  Create Card
                </h2>
                <form className="w-full">
                  {/* Step 1 fields */}
                  <div className="flex flex-col space-y-2 mb-5">
                    <label htmlFor="choose-wallet" className="text-sm">
                      Choose Wallet
                    </label>
                    <select
                      id="choose-wallet"
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      className="p-2 border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
                    >
                      <option value="" disabled>
                        Select a country
                      </option>
                      {countries.map((country) => (
                        <option
                          key={country.code}
                          value={country.code}
                          className="flex items-center"
                        >
                          {country.flag} {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col space-y-2 mb-5">
                    <label htmlFor="amount" className="text-sm ">
                      Amount
                    </label>
                    <input
                      id="amount"
                      placeholder="$ 50.00"
                      type="text"
                      className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                    />
                  </div>

                  <p className="text-sm text-[#6C6C70] mb-[40px]">
                    You need to fund with at least $5
                  </p>
                </form>
                <button
                  type="button"
                  className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl mt-5"
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </>
            )}

            <button
              onClick={closeCardModal}
              className="absolute top-[-20px] md:right-[-35px] right-[-20px] bg-white border border-gray-300 rounded-full h-8 w-8 flex justify-center items-center"
            >
              <span className="text-black text-xl">×</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
