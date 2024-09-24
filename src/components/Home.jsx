import React, { useState } from "react";
import { Link } from "react-router-dom";
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

export default function Home() {
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);

  // Function to open the modal
  const openSendModal = () => {
    setIsSendModalOpen(true);
  };

  // Function to close the modal
  const closeSendModal = () => {
    setIsSendModalOpen(false);
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

          {/* Other Actions */}
          <div className="bg-[#F2F0E0] p-6 flex flex-row gap-5 items-center rounded-2xl border">
            <img className="h-14 w-14" src={request} alt="request icon" />
            <div className="flex flex-col">
              <p className="font-bold">Request</p>
              <p className="mt-2">Request money via your custom Moth link</p>
            </div>
          </div>
          <div className="bg-[#EEDDFC] p-6 flex flex-row gap-5 items-center rounded-2xl border">
            <img className="h-14 w-14" src={swap} alt="swap icon" />
            <div className="flex flex-col">
              <p className="font-bold">Swap</p>
              <p className="mt-2">
                Convert currencies with to see rates in real time
              </p>
            </div>
          </div>
          <div className="bg-[#ffffff] p-6 flex flex-row gap-5 items-center rounded-2xl border-[1px] border-[#E1E1E1]">
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
            <h2 className="text-center text-2xl font-bold mb-4">Send Money</h2>
            <form className="w-full">
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
                <label htmlFor="enter-amount" className="text-sm">
                  Select Bank
                </label>
                <div className="modal-content">
                  <BankSelect />
                  {/* Other form fields */}
                </div>
              </div>

              <div className="flex flex-col space-y-2 mb-5">
                <label htmlFor="enter-amount" className="text-sm">
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
                <label htmlFor="enter-amount" className="text-sm">
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
            >
              Next
            </button>

            <button
              onClick={closeSendModal}
              className="absolute top-[-20px] right-[-20px] bg-white border border-gray-300 rounded-full h-8 w-8 flex justify-center items-center"
            >
              <span className="text-black text-xl">×</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
