import React, { useState, useEffect } from "react";

// Sample API endpoint (replace with your actual API endpoint)
const API_URL = "https://api.example.com/banks";

const BankSelect = () => {
  const [bankList, setBankList] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);

  // Fetch the bank list from API
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBankList(data.banks); // Assuming the API returns a JSON with a 'banks' array
      } catch (error) {
        console.error("Error fetching bank data:", error);
      }
    };

    fetchBanks();
  }, []);

  const handleChange = (e) => {
    const bankName = e.target.value;
    const bank = bankList.find((b) => b.name === bankName);
    setSelectedBank(bank);
  };

  return (
    <div className="w-full">
      <select
        id="enter-amount"
        className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
        onChange={handleChange}
      >
        <option value="" disabled selected>
          Select a Bank
        </option>
        {bankList.length > 0 ? (
          bankList.map((bank) => (
            <option key={bank.id} value={bank.name}>
              {bank.name}
            </option>
          ))
        ) : (
          <option value="" disabled>
            Loading banks...
          </option>
        )}
      </select>
      {selectedBank && (
        <div className="mt-4 flex items-center">
          <img
            src={selectedBank.logo}
            alt={selectedBank.name}
            className="w-12 h-12 mr-4"
          />
          <span>{selectedBank.name}</span>
        </div>
      )}
    </div>
  );
};

export default BankSelect;
