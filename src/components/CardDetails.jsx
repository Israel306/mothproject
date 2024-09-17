import React, { useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

export default function CardDetails() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("US");

  const countries = [
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
    { code: "NIG", name: "Nigeria", flag: "🇳🇬" },

    // Add more countries as needed
  ];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const toggleBalance = () => {
    setBalanceVisible(!balanceVisible);
  };

  return (
    <div className=" p-8 rounded-lg ">
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
        <button className="bg-[#007AFF] text-white rounded-full p-2 px-4">
          <p className="text-[12px]"> Top Up + </p>
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
    </div>
  );
}
