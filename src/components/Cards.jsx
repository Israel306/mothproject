import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const balance = 500.0; // Example balance

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <div className="rounded-xl md:p-10  flex flex-col w-full">
      <img src={newcard} className="mb-5" alt="New Card" />
      <p className="flex items-center justify-center mb-5">Show Card Details</p>
      <div className="flex flex-col justify-center bg-white drop-shadow-lg p-5 rounded-xl">
        <div className="flex justify-between">
          <img src={cardwithdraw} alt="Card Withdraw" />
          <img src={cardtopup} alt="Card Top Up" />
        </div>
        <p className="text-center text-sm mb-4">Current Balance</p>
        <div className="flex  justify-center items-center gap-3">
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
            {isBalanceVisible ? "" : ""}
          </button>
        </div>
      </div>

      <div className="mt-10 rounded-lg  bg-white p-4 w-full drop-shadow-lg">
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
    </div>
  );
};

export default function Cards() {
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
    setShowDashboard(true); // Show dashboard when "Next" is clicked
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <h1>Cards</h1>
        <div className="border-[1px] border-[#E1E1E1] mt-5"></div>

        {/* Only render this section if showDashboard is false */}
        {!showDashboard && (
          <div className="bg-white rounded-xl md:p-10  p-5 flex flex-col w-full shadow-lg">
            <div className="flex items-center justify-center">
              <img src={cards} alt="Cards" />
            </div>
            <h1 className="flex items-center justify-center">
              Create your instant credit & debit cards
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-5 w-full mt-10">
              <div className="flex flex-row items-center gap-5 w-full">
                <div className="flex items-center justify-center rounded-full bg-[#C1E8EB] h-10 w-10">
                  <GiSwipeCard className="h-6 w-6" />
                </div>
                <div className="flex flex-col ">
                  <p className="text-[#6C6C70] text-[13px]">
                    Card Creation Free
                  </p>
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
                  <p className="font-bold">100% Guaranteed</p>
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
        )}
      </div>

      {isCardModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg relative w-full max-w-md md:w-1/3 lg:max-w-lg xl:max-w-xl mx-4">
            <>
              <h2 className="text-center text-2xl font-bold mb-4">
                Create Card
              </h2>
              <form className="w-full">
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
            <button
              onClick={closeCardModal}
              className="absolute top-[-20px] md:right-[-35px] right-[-20px] bg-white border border-gray-300 rounded-full h-8 w-8 flex justify-center items-center"
            >
              <span className="text-black text-xl">×</span>
            </button>
          </div>
        </div>
      )}

      {showDashboard && <CardDashboard selectedCountry={selectedCountry} />}
    </>
  );
}
