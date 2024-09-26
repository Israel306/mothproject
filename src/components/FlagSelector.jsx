import React, { useState } from "react";

const flags = [
  {
    country: "United States",
    src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
  {
    country: "United Kingdom",
    src: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    country: "Canada",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
  },

  {
    country: "Nigeria",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
  },
];

const FlagSelector = () => {
  const [selectedFlag, setSelectedFlag] = useState(flags[0]);

  return (
    <div className="flex items-center border border-gray-400 p-4 rounded-xl bg-white w-full">
      <div className="flex items-center mr-4">
        <img
          src={selectedFlag.src}
          alt={selectedFlag.country}
          className="w-8 h-8 mr-2"
        />
        <select
          value={selectedFlag.country}
          onChange={(e) =>
            setSelectedFlag(
              flags.find((flag) => flag.country === e.target.value)
            )
          }
          className="border-none bg-transparent text-gray-600"
        >
          {flags.map((flag) => (
            <option key={flag.country} value={flag.country}>
              {flag.country}
            </option>
          ))}
        </select>
      </div>
      <span className="mx-2">|</span>
      <input
        type="text"
        placeholder="Enter Amount"
        className="border-none outline-none flex-grow bg-transparent text-gray-600"
      />
    </div>
  );
};

export default FlagSelector;
