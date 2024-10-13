import React, { useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import copy from "/src/assets/copy.svg";
import transactionsuccess from "/src/assets/transactionsuccess.png";

export default function CardDetails() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [isTopUpModalOpen, setIsTopUpModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const openTopUpModal = () => {
    setIsTopUpModalOpen(true);
  };

  const closeTopUpModal = () => {
    setIsTopUpModalOpen(false); // Changed from setIsWithdrawModalOpen to setIsTopUpModalOpen
  };

  const handleConfirmation = () => {
    setStep(2); // Proceed to the Review & Confirm step
  };

  const handleSuccess = () => {
    setStep(3); // Proceed to the Review & Confirm step
  };

  const handleTopUpSuccess = () => {
    // After generating the receipt, navigate back to the home page
    setIsTopUpModalOpen(false);
    setStep(1);
  };

  const countries = [
    { code: "US", name: "United States", flag: "🇺🇸", placeholder: "$ 50" },
    { code: "CA", name: "Canada", flag: "🇨🇦", placeholder: "$ 50" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧", placeholder: "£ 50" },

    // Add more countries as needed
  ];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const toggleBalance = () => {
    setBalanceVisible(!balanceVisible);
  };

  return (
    <div className="p-8 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="bg-white border border-gray-300 rounded-2xl p-2"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-[#007AFF] text-white rounded-full p-2 px-4"
          onClick={openTopUpModal}
        >
          <p className="text-[12px]">Moth Up +</p>
        </button>
      </div>
      <div className="flex items-center mt-5">
        <span className="text-2xl font-bold text-white">
          {balanceVisible ? "$50,344.00" : "***"}
        </span>
        <button onClick={toggleBalance} className="ml-2 text-white underline">
          {balanceVisible ? <IoMdEye /> : <IoMdEyeOff />}
        </button>
      </div>
      {/* Modal */}
      {isTopUpModalOpen && (
        <div className="fixed inset-0   flex justify-center items-center bg-opacity-50 z-50">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg relative w-full max-w-md md:w-1/3 lg:max-w-lg xl:max-w-xl mx-4">
            {step === 1 && (
              <div className="md:p-8 p-3">
                <div>
                  <h1 className="text-black text-center text-2xl font-bold mb-4">
                    Fund Wallet
                  </h1>
                </div>
                <div className="container-w">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[#6C6C70] mb-5">
                      Wallet Balance $50,344.00
                    </p>
                  </div>

                  <form className="w-full">
                    <div className="flex flex-col space-y-2 mb-5">
                      <label htmlFor="enter-amount" className="text-sm">
                        Balance to Top Up
                      </label>
                      <div className="border flex items-center p-2 rounded-xl">
                        {/* Dropdown for selecting country */}
                        <select
                          className="bg-transparent outline-none mr-2"
                          value={selectedCountry.code}
                          onChange={(e) =>
                            setSelectedCountry(
                              countries.find(
                                (country) => country.code === e.target.value
                              )
                            )
                          }
                        >
                          {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.flag} {country.code}
                            </option>
                          ))}
                        </select>
                        {/* Input field */}
                        <input
                          placeholder={selectedCountry.placeholder}
                          type="text"
                          className="w-full p-2 outline-none border-l border-gray-200"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2 mb-6">
                      <label
                        htmlFor="payment"
                        className="text-sm text-gray-600"
                      >
                        Payment Method
                      </label>
                      <div className="border p-2 rounded-xl w-full">
                        <select
                          id="payment"
                          className="bg-transparent outline-none w-full"
                          defaultValue="Select Payment Method"
                        >
                          <option value="" disabled>
                            Select Payment Method
                          </option>
                          <option value="Bank Transfer">Wells Fargo</option>
                          <option value="Bank Transfer">Chase</option>
                          <option value="Bank Transfer">Bank Of America</option>
                          <option value="Bank Transfer">TD Bank</option>
                          <option value="Bank Transfer">Citi Bank</option>
                          <option value="Bank Transfer">U.S Bank</option>
                          <option value="Bank Transfer">PNC</option>
                          <option value="Bank Transfer">Capital One</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2 mb-5">
                      <label htmlFor="enter-amount" className="text-sm">
                        Amount to Top Up
                      </label>
                      <div className="border flex items-center p-2 rounded-xl">
                        {/* Dropdown for selecting country */}
                        <select
                          className="bg-transparent outline-none mr-2"
                          value={selectedCountry.code}
                          onChange={(e) =>
                            setSelectedCountry(
                              countries.find(
                                (country) => country.code === e.target.value
                              )
                            )
                          }
                        >
                          {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.flag} {country.code}
                            </option>
                          ))}
                        </select>
                        {/* Input field */}
                        <input
                          placeholder={selectedCountry.placeholder}
                          type="text"
                          className="w-full p-2 outline-none border-l border-gray-200"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2 mb-5">
                      <label htmlFor="amount" className="text-sm">
                        Amount you will receive
                      </label>
                      <input
                        id="amount"
                        placeholder="$ 50.00"
                        type="text"
                        className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                      />
                    </div>

                    <div className="flex flex-col space-y-2 mb-6">
                      <label
                        htmlFor="payment"
                        className="text-sm text-gray-600"
                      >
                        Financial Institution
                      </label>
                      <div className="border p-2 rounded-xl">
                        <select
                          id="payment"
                          className="bg-transparent outline-none w-full"
                          defaultValue="Select a Bank"
                        >
                          <option value="" disabled>
                            Select a Bank
                          </option>
                          <option value="Bank Transfer">Bank</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
                <button
                  type="button"
                  className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl mt-5"
                  onClick={handleConfirmation}
                >
                  Done
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="md:p-8 p-3">
                <h2 className="text-center text-2xl font-bold mb-4">
                  Confirm Transaction
                </h2>
                <p className="text-center mb-4 text-sm text-gray-600">
                  USD Balance Deposit
                </p>

                <h2 className="text-center mb-4">$50.00</h2>

                <div className="border-b border-b-[#E1E1E1] mt-2"></div>

                <div className="flex justify-between  mt-5 ">
                  <h2 className="leading-8 text-[#6C6C70]">Amount to pay</h2>
                  <h2 className="leading-8">$50.00</h2>
                </div>
                <div className="border-dashed border border-b-[#E1E1E1] mt-2"></div>

                <div className="flex justify-between  mt-5 ">
                  <h2 className="leading-8 text-[#6C6C70]">Transaction fee</h2>
                  <h2 className="leading-8">$0.00</h2>
                </div>
                <div className="border-dashed border border-b-[#E1E1E1] mt-2"></div>

                <div className="flex justify-between  mt-5 ">
                  <h2 className="leading-8 text-[#6C6C70]">
                    Amount you will receive
                  </h2>
                  <h2 className="leading-8">$50.00</h2>
                </div>
                <div className="border-dashed border border-b-[#E1E1E1] mt-2"></div>

                <div className="flex justify-between  mt-5  ">
                  <h2 className="leading-8 text-[#6C6C70]">Payment Method</h2>
                  <h2 className="leading-8">Bank Transfer</h2>
                </div>
                <div className="border-dashed border border-b-[#E1E1E1] mt-2 mb-10"></div>

                {/* Add review details or summary here */}
                <button
                  type="button"
                  className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl mt-5"
                  onClick={handleSuccess}
                >
                  Make Payment
                </button>
              </div>
            )}

            {step === 3 && (
              <>
                <h2 className="text-center text-2xl font-bold mb-4">
                  Successful
                </h2>
                {/* Step 2 fields */}
                <p className="text-center mb-10">
                  $50.00 has been added to your USD wallet
                </p>
                <div className="flex justify-center mb-[60px]">
                  <img src={transactionsuccess}></img>
                </div>
                <button
                  type="button"
                  className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl mt-5"
                  onClick={handleTopUpSuccess}
                >
                  Done
                </button>
              </>
            )}

            <button
              onClick={closeTopUpModal}
              className="absolute top-[-20px] md:right-[-35px] right-[-20px] bg-white border border-gray-300 rounded-full h-8 w-8 flex justify-center items-center"
            >
              <span className="text-black text-xl">×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
