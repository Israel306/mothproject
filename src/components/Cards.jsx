import React from "react";
import cards from "/src/assets/cards.svg";
import { GiSwipeCard } from "react-icons/gi";
import { AiOutlineDollar } from "react-icons/ai";
import { SlLock } from "react-icons/sl";

export default function Cards() {
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
          <div className="flex flex-row items-center gap-5 w-full mt-10">
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
          <button className="mt-10 bg-black rounded-lg p-3  text-white">
            Create my virtual card
          </button>
        </div>
      </div>
    </>
  );
}
