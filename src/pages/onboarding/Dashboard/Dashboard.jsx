import React, { useState } from "react";
import logo from "/src/assets/logo.svg";
import home from "/src/assets/home.svg";
import card from "/src/assets/card.svg";
import history from "/src/assets/history.svg";
import profile from "/src/assets/profile.svg";
import logout from "/src/assets/logout.svg";
import Home from "../../../components/Home";

import Notification from "../../../components/Notification";
import Cards from "../../../components/Cards";

function Dashboard() {
  // State to track the active menu
  const [activeMenu, setActiveMenu] = useState("Home");

  // Function to handle click and set active menu
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  // Function to render the middle content based on the active menu
  const renderContent = () => {
    switch (activeMenu) {
      case "Home":
        return <Home />;
      case "Card":
        return <Cards />;
      case "History":
        return <History />;
      case "Profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div
        className="grid grid-cols-3 w-full h-screen"
        style={{ gridTemplateColumns: "20% 50% 30%" }}
      >
        {/* Sidebar */}
        <div className="bg-black h-screen flex flex-col justify-between p-10">
          {/* Top Section: Logo and Menu */}
          <div>
            <img className="h-16 w-16 mb-20" src={logo} alt="logo" />

            <div className="flex flex-col gap-10">
              {/* Home Menu */}
              <div
                className={`flex items-center gap-4 p-4 cursor-pointer ${
                  activeMenu === "Home"
                    ? "bg-[#202021] text-white rounded-xl border border-[#202021]"
                    : "text-[#6C6C70]"
                }`}
                onClick={() => handleMenuClick("Home")}
              >
                <img
                  src={home}
                  alt="home"
                  className={activeMenu === "Home" ? "filter" : ""}
                />
                <p>Home</p>
              </div>

              {/* Card Menu */}
              <div
                className={`flex items-center gap-4 p-4 cursor-pointer ${
                  activeMenu === "Card"
                    ? "bg-[#202021] text-white rounded-xl border border-[#202021]"
                    : "text-[#6C6C70]"
                }`}
                onClick={() => handleMenuClick("Card")}
              >
                <img
                  src={card}
                  alt="card"
                  className={activeMenu === "Card" ? "filter-white" : ""}
                />
                <p>Cards</p>
              </div>

              {/* History Menu */}
              <div
                className={`flex items-center gap-4 p-4 cursor-pointer ${
                  activeMenu === "History"
                    ? "bg-[#202021] text-white rounded-xl border border-[#202021]"
                    : "text-[#6C6C70]"
                }`}
                onClick={() => handleMenuClick("History")}
              >
                <img
                  src={history}
                  alt="history"
                  className={activeMenu === "History" ? "filter-white" : ""}
                />
                <p>History</p>
              </div>

              {/* Profile Menu */}
              <div
                className={`flex items-center gap-4 p-4 cursor-pointer ${
                  activeMenu === "Profile"
                    ? "bg-[#202021] text-white rounded-xl border border-[#202021]"
                    : "text-[#6C6C70]"
                }`}
                onClick={() => handleMenuClick("Profile")}
              >
                <img
                  src={profile}
                  alt="profile"
                  className={activeMenu === "Profile" ? "filter-white" : ""}
                />
                <p>Profile</p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Log Out */}
          <div className="flex items-center gap-4 text-white cursor-pointer">
            <img className="h-6 w-6" src={logout} alt="logout" />
            <p>Log Out</p>
          </div>
        </div>

        {/* Middle Content */}
        <div className="bg-white p-10 overflow-y-auto h-screen">
          {renderContent()}
        </div>

        {/* Right Content */}
        <div className="bg-[#F6F6F6] p-10">
          <Notification />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
