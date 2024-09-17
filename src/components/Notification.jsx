import React from "react";
import notification from "/src/assets/notification.svg";
import atm from "/src/assets/atm.png";
import mothcoin from "/src/assets/mothcoin.png";
import googleplay from "/src/assets/googleplay.svg";
import appstore from "/src/assets/appstore.svg";

export default function Notification() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-end">
          <div className="flex items-center justify-center rounded-full bg-white h-12 w-12">
            <img className="h-8 w-8" src={notification} alt="" />
          </div>
        </div>
        <div className="mt-5 rounded-lg bg-white border p-4">
          <p className="text-[#6C6C70] mb-2">Today</p>
          <div className="flex flex-row items-center gap-2 border-[#E1E1E1] border-b-[1px] py-2">
            <div className="flex items-center justify-center rounded-full bg-[#EEDDFC] h-10 w-10">
              <img className="h-6 w-6" src={notification} alt="" />
            </div>
            <div className="flex flex-col ">
              <p className="font-bold">Amara Ayana requested $500</p>
              <p className="text-[#6C6C70]">July 06 at 8:00pm</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 border-[#E1E1E1] border-b-[1px] py-2 mt-5">
            <div className="flex items-center justify-center rounded-full bg-[#EEDDFC] h-10 w-10">
              <img className="h-6 w-6" src={notification} alt="" />
            </div>
            <div className="flex flex-col ">
              <p className="font-bold">Moth Finance</p>
              <p className="text-[12px]">
                Mastercard funding is back online. You can now...
              </p>
              <p className="text-[#6C6C70]">July 06 at 8:00pm</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 border-[#E1E1E1] border-b-[1px] py-2 mt-5">
            <div className="flex items-center justify-center rounded-full bg-[#EEDDFC] h-10 w-10">
              <img className="h-6 w-6" src={notification} alt="" />
            </div>
            <div className="flex flex-col ">
              <p className="font-bold">KYC Document Updated</p>
              <p className="text-[#6C6C70]">July 06 at 8:00pm</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <img className="w-full" src={atm} alt="" />
        </div>
        <div className="mt-5">
          <img className="w-full" src={mothcoin} alt="" />
        </div>
        <div className="mt-5 flex flex-row items-center gap-2">
          <img className="w-full" src={googleplay} alt="" />
          <img className="w-full" src={appstore} alt="" />
        </div>
      </div>
    </>
  );
}
