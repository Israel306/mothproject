import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.svg";
import home from "/src/assets/home.svg";
import card from "/src/assets/card.svg";
import history from "/src/assets/history.svg";
import profile from "/src/assets/profile.svg";
import logout from "/src/assets/logout.svg";
import Home from "../../../components/Home";
import Notification from "../../../components/Notification";
import Cards from "../../../components/Cards";
import { FiMenu, FiX } from "react-icons/fi";
import notification from "/src/assets/notification.svg";
import atm from "/src/assets/atm.png";
import mothcoin from "/src/assets/mothcoin.png";
import googleplay from "/src/assets/googleplay.svg";
import appstore from "/src/assets/appstore.svg";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (window.innerWidth <= 768) setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleNotificationPanel = () => {
    setNotificationOpen(!notificationOpen);
  };

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
    <div className="w-full h-screen lg:grid lg:grid-cols-[250px_1fr_450px]">
      {/* Sidebar */}
      <div
        className={`fixed  overflow-y-auto inset-y-0 left-0 z-30 w-64 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-black p-10 lg:static lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-between`}
      >
        {/* Top Section */}
        <div>
          <img
            className="h-12 w-12 md:h-16 md:w-16 mb-20"
            src={logo}
            alt="logo"
          />
          <div className="flex flex-col gap-10">
            {/* Menu Items */}
            {["Home", "Card", "History", "Profile"].map((menu) => (
              <div
                key={menu}
                className={`flex items-center gap-4 p-4 cursor-pointer ${
                  activeMenu === menu
                    ? "bg-[#202021] text-white rounded-xl border border-[#202021]"
                    : "text-[#6C6C70]"
                }`}
                onClick={() => handleMenuClick(menu)}
              >
                <img
                  src={
                    menu === "Home"
                      ? home
                      : menu === "Card"
                      ? card
                      : menu === "History"
                      ? history
                      : profile
                  }
                  alt={menu.toLowerCase()}
                  className={activeMenu === menu ? "filter-white" : ""}
                />
                <p>{menu}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="mt-auto flex items-center gap-4 text-white cursor-pointer">
          <img className="h-6 w-6" src={logout} alt="logout" />
          <Link to="/">
            <p>Log Out</p>
          </Link>
        </div>
      </div>

      {/* Hamburger Button */}
      <button
        className="absolute top-5 left-5 z-40 lg:hidden"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? (
          <FiX className="text-white h-6 w-6" />
        ) : (
          <FiMenu className="text-black h-6 w-6" />
        )}
      </button>

      {/* Notification Button */}
      <button
        className="absolute top-5 right-5 z-40 lg:hidden flex items-center justify-center rounded-full bg-white h-12 w-12"
        onClick={toggleNotificationPanel}
      >
        <img className="h-6 w-6" src={notification} alt="notification" />
      </button>

      {/* Main Content */}
      <div className="bg-white py-14 px-5 md:px-10 overflow-y-auto h-screen">
        {renderContent()}
      </div>

      {/* Notification Panel */}
      <div
        className={`fixed  overflow-y-auto inset-y-0 right-0 z-20 w-96 lg:w-full bg-[#F6F6F6] p-10 transition-transform duration-300 ease-in-out ${
          notificationOpen ? "translate-x-0" : "translate-x-full"
        } lg:static lg:translate-x-0`}
      >
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row justify-end">
            <button
              className="lg:flex items-center justify-center rounded-full bg-white h-12 w-12 hidden"
              onClick={toggleNotificationPanel}
            >
              <img className="h-6 w-6" src={notification} alt="notification" />
            </button>
          </div>
          <div className="mt-5 rounded-lg bg-white border p-4">
            <p className="text-[#6C6C70] mb-2">Today</p>
            {[
              "Amara Ayana requested $500",
              "Moth Finance",
              "KYC Document Updated",
            ].map((notificationText, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-2 border-[#E1E1E1] border-b-[1px] py-2 mt-5"
              >
                <div className="flex items-center justify-center rounded-full bg-[#EEDDFC] h-10 w-10">
                  <img
                    className="h-6 w-6"
                    src={notification}
                    alt="notification icon"
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold">{notificationText}</p>
                  <p className="text-[#6C6C70]">July 06 at 8:00pm</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <img className="w-full" src={atm} alt="ATM" />
          </div>
          <div className="mt-5">
            <img className="w-full" src={mothcoin} alt="Mothcoin" />
          </div>
          <div className="mt-5 flex flex-col lg:flex-row items-center gap-2">
            <img className="w-full" src={googleplay} alt="Google Play" />
            <img className="w-full" src={appstore} alt="App Store" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
