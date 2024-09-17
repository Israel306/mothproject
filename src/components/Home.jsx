import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import CardDetails from "./CardDetails";
import send from "/src/assets/send.svg";
import request from "/src/assets/request.svg";
import swap from "/src/assets/swap.svg";
import withdraw from "/src/assets/withdraw.svg";
import debit from "/src/assets/debit.svg";
import credit from "/src/assets/credit.svg";
import TransactionItem from "./TransactionItem";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start">
        <h1>Welcome back, Matt👋🏻</h1>
        <div className="bg-black w-full mt-10 rounded-lg">
          <CardDetails />
        </div>
        <p className="mt-10 font-bold">Quick Actions</p>
        <div className="mt-5 grid grid-cols-2 gap-10 w-full">
          {/* Send Action */}
          <div className="bg-[#C1E8EB] p-6 flex flex-row gap-5 items-center rounded-2xl border">
            <img className="h-14 w-14" src={send} alt="send icon" />
            <div className="flex flex-col">
              <p className="font-bold">Send</p>
              <p className="mt-2">
                Transfer from your wallet to another bank account
              </p>
            </div>
          </div>

          {/* Request Action */}
          <div className="bg-[#F2F0E0] p-6 flex flex-row gap-5 items-center rounded-2xl border">
            <img className="h-14 w-14" src={request} alt="request icon" />
            <div className="flex flex-col">
              <p className="font-bold">Request</p>
              <p className="mt-2">Request money via your custom Moth link</p>
            </div>
          </div>

          {/* Swap Action */}
          <div className="bg-[#EEDDFC] p-6 flex flex-row gap-5 items-center rounded-2xl border">
            <img className="h-14 w-14" src={swap} alt="swap icon" />
            <div className="flex flex-col">
              <p className="font-bold">Swap</p>
              <p className="mt-2">
                Convert currencies with to see rates in real time
              </p>
            </div>
          </div>

          {/* Withdraw Action */}
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
    </>
  );
}
