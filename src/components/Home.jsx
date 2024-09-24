import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardDetails from "./CardDetails";
import send from "/src/assets/send.svg";
import request from "/src/assets/request.svg";
import swap from "/src/assets/swap.svg";
import withdraw from "/src/assets/withdraw.svg";
import debit from "/src/assets/debit.svg";
import credit from "/src/assets/credit.svg";
import TransactionItem from "./TransactionItem";
import bgimg3 from "/src/assets/bgimg3.png";
import BankSelect from "./BankSelect";
import transactionsuccess from "/src/assets/transactionsuccess.png";
import copy from "/src/assets/copy.svg";

export default function Home() {
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [step, setStep] = useState(1); // Step 1 represents the Send Money form
  const navigate = useNavigate();

  // Function to open the modal
  const openSendModal = () => {
    setIsSendModalOpen(true);
  };

  // Function to close the modal and reset the steps
  const closeSendModal = () => {
    setIsSendModalOpen(false);
    setStep(1); // Reset to step 1 when the modal is closed
  };

  // Function to open the request modal
  const openRequestModal = () => {
    setIsRequestModalOpen(true);
  };

  // Function to close the request modal
  const closeRequestModal = () => {
    setIsRequestModalOpen(false);
  };

  // Function to open the swap modal
  const openSwapModal = () => {
    setIsSwapModalOpen(true);
  };

  // Function to close the swap modal
  const closeSwapModal = () => {
    setIsSwapModalOpen(false);
  };

  // Function to open the swap modal
  const openWithdrawModal = () => {
    setIsWithdrawModalOpen(true);
  };

  // Function to close the swap modal
  const closeWithdrawModal = () => {
    setIsWithdrawModalOpen(false);
  };

  const handleNextClick = () => {
    setStep(2); // Proceed to the Review & Confirm step
  };

  const handleNext = () => {
    setStep(3); // Proceed to the Review & Confirm step
  };

  const handleEnterPin = () => {
    setStep(4); // Proceed to the Review & Confirm step
  };

  const handleGenerateReceipt = () => {
    // After generating the receipt, navigate back to the home page
    setIsSendModalOpen(false);
  };

  const inputRefs = useRef([]);

  // Handle input change to focus the next input
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (value.length >= 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle key down to navigate back on Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <>
      {/* Blur background if the modal is open */}
      <div
        className={`flex flex-col items-start ${
          isSendModalOpen ? "blur-sm" : ""
        }`}
      >
        <h1>Welcome back, Matt👋🏻</h1>
        <div className="relative md:pt-5 pt-5">
          <img
            src={bgimg3}
            className="md:h-[200px] h-[170px] md:w-screen rounded-2xl"
            alt="Background"
          />
          <div className="absolute inset-0 pt-5">
            <CardDetails />
          </div>
        </div>
        <p className="mt-10 font-bold">Quick Actions</p>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {/* Send Action */}
          <div
            className="bg-[#C1E8EB] p-6 flex flex-row gap-5 items-center rounded-2xl border cursor-pointer"
            onClick={openSendModal} // Open the modal when clicked
          >
            <img className="h-14 w-14" src={send} alt="send icon" />
            <div className="flex flex-col">
              <p className="font-bold">Send</p>
              <p className="mt-2">
                Transfer from your wallet to another bank account
              </p>
            </div>
          </div>

          <div
            className="bg-[#F2F0E0] p-6 flex flex-row gap-5 items-center rounded-2xl border cursor-pointer"
            onClick={openRequestModal} // Open the modal when clicked
          >
            <img className="h-14 w-14" src={request} alt="request icon" />
            <div className="flex flex-col">
              <p className="font-bold">Request</p>
              <p className="mt-2">Request money via your custom Moth link</p>
            </div>
          </div>

          <div
            className="bg-[#EEDDFC] p-6 flex flex-row gap-5 items-center rounded-2xl border cursor-pointer"
            onClick={openSwapModal} // Open the modal when clicked
          >
            <img className="h-14 w-14" src={swap} alt="swap icon" />
            <div className="flex flex-col">
              <p className="font-bold">Swap</p>
              <p className="mt-2">
                Convert currencies with to see rates in real time
              </p>
            </div>
          </div>

          <div
            className="bg-[#FFFFFF] p-6 flex flex-row gap-5 items-center rounded-2xl border cursor-pointer"
            onClick={openWithdrawModal} // Open the modal when clicked
          >
            <img className="h-14 w-14" src={withdraw} alt="withdraw icon" />
            <div className="flex flex-col">
              <p className="font-bold">Withdraw</p>
              <p className="mt-2">
                Withdraw money from your wallet to your bank account
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-lg border bg-white p-4 w-full">
          <div className="flex flex-row items-center justify-between">
            <p>Recent Transactions</p>
            <Link to="">
              <p>View All</p>
            </Link>
          </div>
          {/* Transactions */}
          <TransactionItem
            imgSrc={debit}
            name="Cash Transfer"
            time="January 3rd 9am"
            amount="500"
            amountColor="text-[#ED4141]"
          />
          <TransactionItem
            imgSrc={credit}
            name="Cash Received"
            time="January 2nd 11am"
            amount="1000"
            amountColor="text-[#40BE3E]"
          />
          <TransactionItem
            imgSrc={credit}
            name="A2C Topup"
            time="December 2nd 11am"
            amount="1000"
            amountColor="text-[#40BE3E]"
          />
          <TransactionItem
            imgSrc={credit}
            name="Cash Received"
            time="December 1st 11pm"
            amount="1000"
            amountColor="text-[#40BE3E]"
          />
          <TransactionItem
            imgSrc={credit}
            name="A2C Topup"
            time="December 1st 11am"
            amount="1000"
            amountColor="text-[#40BE3E]"
          />
          <TransactionItem
            imgSrc={debit}
            name="Cash Transfer"
            time="November 23rd 10pm"
            amount="1000"
            amountColor="text-[#ED4141]"
          />
          <TransactionItem
            imgSrc={debit}
            name="Cash Transfer"
            time="November 22nd 11am"
            amount="1000"
            amountColor="text-[#ED4141]"
          />
        </div>
      </div>

      {/* Send Modal */}
      {isSendModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg relative w-full max-w-md md:w-1/3 lg:max-w-lg xl:max-w-xl mx-4">
            {step === 1 && (
              <>
                <h2 className="text-center text-2xl font-bold mb-4">
                  Send Money
                </h2>
                <form className="w-full">
                  {/* Step 1 fields */}
                  <div className="flex flex-col space-y-2 mb-5">
                    <label htmlFor="enter-amount" className="text-sm">
                      Enter Amount
                    </label>
                    <input
                      id="enter-amount"
                      placeholder="Enter Amount"
                      type="text"
                      className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                    />
                  </div>

                  <div className="flex flex-col space-y-2 mb-5">
                    <label htmlFor="select-bank" className="text-sm">
                      Select Bank
                    </label>
                    <div className="modal-content">
                      <BankSelect />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 mb-5">
                    <label htmlFor="full-name" className="text-sm">
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      placeholder="Full Name"
                      type="text"
                      className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                    />
                  </div>

                  <div className="flex flex-col space-y-2 mb-5">
                    <label htmlFor="reason" className="text-sm">
                      Reason for payment
                    </label>
                    <input
                      id="reason"
                      placeholder="Enter note"
                      type="text"
                      className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                    />
                  </div>
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

            {step === 2 && (
              <>
                <div className=" text-black  w-full md:p-8 p-3 ">
                  <h1 className=" text-black text-center text-2xl font-bold mb-6">
                    Confirm Transaction
                  </h1>

                  <div className="flex justify-between  mt-5 ">
                    <h2 className="leading-8 text-[#6C6C70]">Sender Name</h2>
                    <h2 className="leading-8">Daisy Ngozi</h2>
                  </div>
                  <div className="border-b border-b-[#E1E1E1] mt-2"></div>

                  <div className="flex justify-between  mt-5 ">
                    <h2 className="leading-8 text-[#6C6C70]">Account Number</h2>
                    <h2 className="leading-8">0218986422</h2>
                  </div>
                  <div className="border-b border-b-[#E1E1E1] mt-2"></div>

                  <div className="flex justify-between  mt-5 ">
                    <h2 className="leading-8 text-[#6C6C70]">Bank Name</h2>
                    <h2 className="leading-8">Access Bank</h2>
                  </div>
                  <div className="border-b border-b-[#E1E1E1] mt-2"></div>

                  <div className="flex justify-between  mt-5 ">
                    <h2 className="leading-8 text-[#6C6C70]">Amount</h2>
                    <h2 className="leading-8">$500</h2>
                  </div>
                  <div className="border-b border-b-[#E1E1E1] mt-2"></div>

                  <div className="flex justify-between  mt-5 ">
                    <h2 className="leading-8 text-[#6C6C70]">Reason</h2>
                    <h2 className="leading-8">Design Services</h2>
                  </div>
                  <div className="border-b border-b-[#E1E1E1] mt-2"></div>

                  <div className="flex justify-between  mt-5 ">
                    <h2 className="leading-8 text-[#6C6C70]">
                      Recepient Receives
                    </h2>
                    <h2 className="leading-8">$491</h2>
                  </div>
                  <div className="border-b border-b-[#E1E1E1] mt-2"></div>
                </div>

                <button
                  type="button"
                  className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl mt-5"
                  onClick={handleNext}
                >
                  Next
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-center text-2xl font-bold mb-6">
                  Enter Pin
                </h2>
                {/* Step 3 fields */}
                <p className="text-center mb-[50px]">
                  Enter your Moth pin to complete transaction
                </p>
                {/* Add review details or summary here */}

                <div className="flex justify-center mb-[200px]">
                  <div className="flex space-x-2">
                    {[...Array(6)].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className="w-12 h-12 text-center border border-[#6C6C70] text-black bg-transparent focus:outline-none rounded-lg"
                        ref={(el) => (inputRefs.current[index] = el)}
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      />
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl mt-5"
                  onClick={handleEnterPin}
                >
                  Enter Pin
                </button>
              </>
            )}

            {step === 4 && (
              <>
                <div className=" text-black  w-full md:p-8 p-3 ">
                  <h1 className=" text-black text-center text-2xl font-bold mb-6">
                    Transaction Successful
                  </h1>

                  <div className="flex justify-center mb-10">
                    <img src={transactionsuccess}></img>
                  </div>

                  <div className="border-b border-b-[#E1E1E1]"></div>

                  <div className="flex justify-between  mt-5 ">
                    <h2 className="leading-8 text-[#6C6C70]">Ref Number</h2>
                    <h2 className="leading-8">59596060504</h2>
                  </div>

                  <div className="flex justify-between  mt-5 ">
                    <h2 className="leading-8 text-[#6C6C70]">Payment Time</h2>
                    <h2 className="leading-8">30-7-2023, 14:33:90</h2>
                  </div>

                  <div className="flex justify-between  mt-5 ">
                    <h2 className="leading-8 text-[#6C6C70]">Payment Method</h2>
                    <h2 className="leading-8">Bank Transfer</h2>
                  </div>

                  <div className="flex justify-between  mt-5 mb-5 ">
                    <h2 className="leading-8 text-[#6C6C70]">Sender Name</h2>
                    <h2 className="leading-8">Daisy Ngozi</h2>
                  </div>

                  <div className="border-b border-b-[#E1E1E1] border-dashed mt-2"></div>

                  <div className="flex justify-between  mt-5 ">
                    <h2 className="leading-8 text-[#6C6C70]">Amount</h2>
                    <h2 className="leading-8">$500</h2>
                  </div>

                  <div className="flex justify-between  mt-5 ">
                    <h2 className="leading-8 text-[#6C6C70]">
                      Transaction fee
                    </h2>
                    <h2 className="leading-8">$10</h2>
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl mt-5"
                  onClick={handleGenerateReceipt}
                >
                  Done
                </button>
              </>
            )}

            <button
              onClick={closeSendModal}
              className="absolute top-[-20px] md:right-[-35px] right-[-20px] bg-white border border-gray-300 rounded-full h-8 w-8 flex justify-center items-center"
            >
              <span className="text-black text-xl">×</span>
            </button>
          </div>
        </div>
      )}

      {isRequestModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center  bg-opacity-50 z-50">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg relative w-full max-w-md md:w-1/3 lg:max-w-lg xl:max-w-xl mx-4">
            <div className="md:p-8 p-3 ">
              <div className="">
                <h1 className="text-black text-center text-2xl font-bold mb-4">
                  Request Money
                </h1>
              </div>
              <div className="container-w">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-black">Get Paid Via a Link</p>
                  <p className="text-[#6C6C70] text-[18px] mt-2">
                    Share your link to get paid by anyone
                  </p>
                  <div className="rounded-full h-10 w-10 mt-5 flex items-center justify-center p-2 bg-[#007AFF]">
                    M
                  </div>
                  <h1 className="text-black text-[24px] mt-5">Matthew B.</h1>
                  <p className="text-[#6C6C70] text-[18px] mt-2">@matt</p>
                  <div className="bg-gray-200 rounded-3xl p-2 mt-5 flex items-center gap-2">
                    https://moth.me/math
                    <img className="h-6 w-6" src={copy} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={closeRequestModal}
              className="absolute top-[-20px] md:right-[-35px] right-[-20px] bg-white border border-gray-300 rounded-full h-8 w-8 flex justify-center items-center"
            >
              <span className="text-black text-xl">×</span>
            </button>
          </div>
        </div>
      )}

      {isSwapModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg relative w-full max-w-md md:w-1/3 lg:max-w-lg xl:max-w-xl mx-4">
            <button
              onClick={closeSwapModal}
              className="absolute top-[-20px] md:right-[-35px] right-[-20px] bg-white border border-gray-300 rounded-full h-8 w-8 flex justify-center items-center"
            >
              <span className="text-black text-xl">×</span>
            </button>
          </div>
        </div>
      )}

      {isWithdrawModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg relative w-full max-w-md md:w-1/3 lg:max-w-lg xl:max-w-xl mx-4">
            <button
              onClick={closeWithdrawModal}
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
