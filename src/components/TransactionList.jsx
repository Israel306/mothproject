import React, { useState } from "react";
import TransactionItem from "../components/TransactionItem";
import { FaSearch } from "react-icons/fa"; // Make sure to install react-icons
import debit from "/src/assets/debit.svg";
import credit from "/src/assets/credit.svg";
import filter from "/src/assets/filter.svg";
import searchbar from "/src/assets/searchbar.png";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([
    {
      name: "Cash Transfer",
      time: "July 06 at 8:00 PM",
      amount: "-9.99",
      type: "sent",
    },
    {
      name: "Wallet Topup",
      time: "July 06 at 8:00 PM",
      amount: "+9.99",
      type: "received",
    },
    {
      name: "Wallet Topup",
      time: "July 06 at 8:00 PM",
      amount: "+9.99",
      type: "received",
    },
    {
      name: "Cash Transfer",
      time: "July 06 at 8:00 PM",
      amount: "-9.99",
      type: "sent",
    },
    {
      name: "Wallet Topup",
      time: "July 06 at 8:00 PM",
      amount: "+9.99",
      type: "received",
    },
    {
      name: "Wallet Topup",
      time: "July 06 at 8:00 PM",
      amount: "+9.99",
      type: "received",
    },
    {
      name: "Cash Transfer",
      time: "July 06 at 8:00 PM",
      amount: "-9.99",
      type: "sent",
    },
    {
      name: "Wallet Topup",
      time: "July 06 at 8:00 PM",
      amount: "+9.99",
      type: "received",
    },
    {
      name: "Cash Transfer",
      time: "July 06 at 8:00 PM",
      amount: "-9.99",
      type: "sent",
    },

    {
      name: "Cash Transfer",
      time: "July 06 at 8:00 PM",
      amount: "-9.99",
      type: "sent",
    },
    {
      name: "Wallet Topup",
      time: "July 06 at 8:00 PM",
      amount: "+9.99",
      type: "received",
    },
    {
      name: "Cash Transfer",
      time: "July 06 at 8:00 PM",
      amount: "-9.99",
      type: "sent",
    },

    // Add more transactions as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortAsc, setSortAsc] = useState(true);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const handleSortChange = () => {
    setSortAsc(!sortAsc);
  };

  const filteredTransactions = transactions
    .filter((transaction) => {
      if (filterType === "all") return true;
      return transaction.type === filterType;
    })
    .filter((transaction) =>
      transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortAsc) {
        return parseFloat(a.amount) - parseFloat(b.amount);
      } else {
        return parseFloat(b.amount) - parseFloat(a.amount);
      }
    });

  return (
    <div className="">
      <div className="flex flex-col w-full">
        <h1 className="px-5 mt-5 md:mt">History</h1>
        <div className="border-[1px] border-[#E1E1E1] mt-5"></div>
      </div>
      <div className=" h-full min-h-[100vh]">
        <div className="container-w">
          <div className="flex justify-between items-center mb-4 pt-10 ">
            <h1 className="text-[18px] text-white ">Transaction List</h1>
            <div className="flex flex-col-reverse md:flex-row items-end md:items-center gap-2  ">
              <button className=" text-white " onClick={handleSortChange}>
                <img src={filter} alt="Filter" className="h-5 w-5" />
              </button>

              <div className="flex items-center border-[0.5px] border-black rounded-lg p-1">
                <FaSearch className="text-black" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="bg-transparent border-none text-black focus:outline-none ml-2"
                />
              </div>
            </div>
          </div>

          {/* Category Line */}
          <div className="flex justify-around text-black py-2 mb-4">
            <button
              className={`px-5 py-1 rounded-xl ${
                filterType === "all" ? "bg-black text-white" : ""
              }`}
              onClick={() => handleFilterChange("all")}
            >
              All
            </button>
            <button
              className={`px-5 py-1 rounded-xl ${
                filterType === "sent" ? "bg-black text-white" : ""
              }`}
              onClick={() => handleFilterChange("sent")}
            >
              Sent
            </button>
            <button
              className={`px-5 py-1 rounded-xl ${
                filterType === "received" ? "bg-black text-white" : ""
              }`}
              onClick={() => handleFilterChange("received")}
            >
              Received
            </button>
          </div>

          {/* Transaction Items */}
          <div className="space-y-4">
            {filteredTransactions.map((transaction, index) => (
              <TransactionItem
                key={index}
                time={transaction.time}
                name={transaction.name}
                amount={transaction.amount}
                imgSrc={transaction.type === "received" ? credit : debit}
                amountColor={
                  transaction.type === "received"
                    ? "text-green-500"
                    : "text-red-500"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
