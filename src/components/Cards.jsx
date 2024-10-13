import React, { useState } from "react";
import { Link } from "react-router-dom";
import cards from "/src/assets/cards.svg";
import newcard from "/src/assets/newcard.svg";
import cardwithdraw from "/src/assets/cardwithdraw.svg";
import cardtopup from "/src/assets/cardtopup.svg";
import { GiSwipeCard } from "react-icons/gi";
import { AiOutlineDollar } from "react-icons/ai";
import { SlLock } from "react-icons/sl";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import TransactionItem from "./TransactionItem";
import debit from "/src/assets/debit.svg";
import credit from "/src/assets/credit.svg";

const CardDashboard = ({ selectedCountry }) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [activeSelector, setActiveSelector] = useState("Moth Virtual Card");
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  const balance = 500.0; // Example balance

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const openWithdrawModal = () => {
    setIsWithdrawModalOpen(true);
  };

  const closeWithdrawModal = () => {
    setIsWithdrawModalOpen(false);
  };

  return (
    <div className="rounded-xl md:p-10 flex flex-col w-full">
      {/* Cards Header Section */}
      <div className="flex justify-between md:gap-0 gap-2 items-center w-full mb-5">
        <h1>Cards</h1>
        <div className="flex justify-end bg-[#767680] py-1 px-2 rounded-xl">
          <div className="flex md:space-x-4">
            {/* Selector Buttons */}
            <button
              className={`px-4 py-2  rounded-xl ${
                activeSelector === "Moth Virtual Card"
                  ? "bg-white"
                  : "bg-[#767680] text-white"
              }`}
              onClick={() => setActiveSelector("Moth Virtual Card")}
            >
              Moth Virtual Card
            </button>
            <button
              className={`px-4 py-2 rounded-xl ${
                activeSelector === "Debit/Credit Card"
                  ? "bg-white"
                  : "bg-[#767680] text-white"
              }`}
              onClick={() => setActiveSelector("Debit/Credit Card")}
            >
              Debit/Credit Card
            </button>
          </div>
        </div>
      </div>

      <div className="border-[1px] border-[#E1E1E1] "></div>

      {/* Card Image */}
      <img src={newcard} className="mb-5 mt-5" alt="New Card" />

      {/* Show Card Details Button */}
      <p className="flex items-center justify-center mb-5">Show Card Details</p>

      {/* Card Balance Section */}
      <div className="flex flex-col justify-center bg-white drop-shadow-lg p-5 rounded-xl">
        <div className="flex justify-between">
          <img
            src={cardwithdraw}
            alt="Card Withdraw"
            onClick={openWithdrawModal}
          />
          <img src={cardtopup} alt="Card Top Up" />
        </div>
        <p className="text-center text-sm mb-4">Current Balance</p>
        <div className="flex justify-center items-center gap-3">
          <h1>{isBalanceVisible ? `$${balance.toFixed(2)}` : "*****"}</h1>
          <button
            onClick={toggleBalanceVisibility}
            className="flex items-center justify-center mt-2"
          >
            {isBalanceVisible ? (
              <FaEyeSlash className="mr-2" />
            ) : (
              <FaEye className="mr-2" />
            )}
          </button>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div className="mt-10 rounded-lg bg-white p-4 w-full drop-shadow-lg">
        <div className="flex flex-row items-center justify-between">
          <p className="text-sm">Recent Transactions</p>
          <Link to="/dashboard" state={{ activeMenu: "History" }}>
            <p className="text-sm">View All</p>
          </Link>
        </div>

        {/* Transactions */}
        <TransactionItem
          imgSrc={debit}
          name="Withdrawal from Card"
          time="July 06 at 8:00pm"
          amount="-9.99"
          amountColor="text-[#ED4141]"
        />
        <TransactionItem
          imgSrc={credit}
          name="Funded Card"
          time="July 06 at 8:00pm"
          amount="+9.99"
          amountColor="text-[#40BE3E]"
        />
        <TransactionItem
          imgSrc={credit}
          name="Funded Card"
          time="July 06 at 8:00pm"
          amount="+9.99"
          amountColor="text-[#40BE3E]"
        />
      </div>

      {/* Withdraw Modal */}
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
    </div>
  );
};

const Cards = () => {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);

  const countries = [
    { code: "US", name: "United States Dollar", flag: "🇺🇸", amount: "500" },
    { code: "NG", name: "Nigeria Naira", flag: "🇳🇬" },
    { code: "CA", name: "Canada Canadian Dollar", flag: "🇨🇦" },
    { code: "UK", name: "United Kingdom Pounds", flag: "🇬🇧" },
  ];

  const openCardModal = () => {
    setIsCardModalOpen(true);
  };

  const closeCardModal = () => {
    setIsCardModalOpen(false);
  };

  const handleNextClick = () => {
    setIsCardModalOpen(false);
    setShowDashboard(true);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        {!showDashboard && (
          <div className="bg-white rounded-xl md:p-10 p-5 flex flex-col w-full shadow-lg">
            <h1>Cards</h1>
            <div className="border-[1px] border-[#E1E1E1] mt-5"></div>
            <div className="flex items-center justify-center">
              <img src={cards} alt="Cards" />
            </div>
            <h1 className="flex items-center justify-center">
              Create your instant credit & debit cards
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-5 w-full mt-10">
              <div className="flex items-center gap-5 w-full">
                <div className="rounded-full bg-[#C1E8EB] h-10 w-10 flex justify-center items-center">
                  <GiSwipeCard className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[#6C6C70] text-[13px]">
                    Card Creation Fee
                  </p>
                  <p className="font-bold">$2</p>
                </div>
              </div>
              <div className="flex items-center gap-5 w-full">
                <div className="rounded-full bg-[#F2F0E0] h-10 w-10 flex justify-center items-center">
                  <AiOutlineDollar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[#6C6C70] text-[13px]">Transaction Fees</p>
                  <p className="font-bold">$2</p>
                </div>
              </div>
              <div className="flex items-center gap-5 w-full">
                <div className="rounded-full bg-[#F4E1E9] h-10 w-10 flex justify-center items-center">
                  <SlLock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[#6C6C70] text-[13px]">Security Fee</p>
                  <p className="font-bold">$0.5</p>
                </div>
              </div>
            </div>
            <button
              onClick={openCardModal}
              className="bg-black text-white rounded-xl py-2 px-8 mt-10"
            >
              Create Card
            </button>
          </div>
        )}
        {showDashboard && <CardDashboard selectedCountry={selectedCountry} />}
      </div>
      {/* Card Modal */}
      {isCardModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg relative w-full max-w-md md:w-1/3 lg:max-w-lg xl:max-w-xl mx-4">
            <button
              onClick={closeCardModal}
              className="absolute top-[-20px] md:right-[-35px] right-[-20px] bg-white border border-gray-300 rounded-full h-8 w-8 flex justify-center items-center"
            >
              <span className="text-black text-xl">×</span>
            </button>
            <h1 className="text-center font-semibold mb-4">Create Card</h1>

            {/* Card Type Selection */}
            <div className="w-full flex flex-col items-center ">
              {/* Label for the select dropdown */}
              <label
                htmlFor="wallet"
                className="w-full text-left text-sm text-gray-700  mb-2"
              >
                Choose Wallet
              </label>

              <select
                id="wallet"
                value={selectedCountry}
                onChange={handleCountryChange}
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-black mb-5"
              >
                <option value="">Choose Wallet</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>

              <div className="flex flex-col space-y-2 mb-5 w-full">
                <label htmlFor="amount" className="text-sm">
                  Amount
                </label>
                <input
                  id="amount"
                  placeholder="$ 50.00"
                  type="text"
                  className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                />
              </div>

              <p className="text-sm w-full">
                You need to fund with at least 5$
              </p>

              <button
                onClick={handleNextClick}
                className="bg-black text-white rounded-xl py-2 px-8 mt-4 w-full"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
