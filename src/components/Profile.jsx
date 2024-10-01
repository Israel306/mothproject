import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import TransactionItem from "../components/TransactionItem";
import { FaSearch } from "react-icons/fa"; // Make sure to install react-icons
import debit from "/src/assets/debit.svg";
import edit from "/src/assets/edit.svg";
import help from "/src/assets/help.svg";
import security from "/src/assets/security.svg";
import faq from "/src/assets/faq.svg";
import privacy from "/src/assets/privacy.svg";
import newdelete from "/src/assets/newdelete.svg";
import newprofile from "/src/assets/newprofile.svg";
import arror from "/src/assets/arror.svg"; // Fixed typo from "arror"
import credit from "/src/assets/credit.svg";
import backbutton from "/src/assets/backbutton.svg";
import filter from "/src/assets/filter.svg";
import searchbar from "/src/assets/searchbar.png";
import Card1 from "./Card1";
import AccordionItem from "./AccordingItem";

const Profile = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [curOpen, setCurOpen] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const openProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  const openFaqModal = () => {
    setIsFaqModalOpen(true);
  };

  const closeFaqModal = () => {
    setIsFaqModalOpen(false);
  };

  return (
    <div className="">
      <div className="flex flex-col w-full">
        <h1 className="px-5 mt-5 md:mt">Profile</h1>
        <div className="border-[1px] border-[#E1E1E1] mt-5 mb-10"></div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <img src={newprofile} alt="Profile" />
        </div>

        <div>
          <h2 className="mb-1">Matthew Boye</h2>
          <p className="text-sm text-[grey]">@mattboye</p>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 md:gap-3">
        <Card1
          icon={edit}
          icon2={arror}
          text="Edit Profile"
          content="Have any issue? Reach out to our team"
          onClick={openProfileModal}
        />

        <Card1
          icon={help}
          icon2={arror}
          text="Help Center"
          content="Have any issue? Reach out to our team"
        />
        <Card1 icon={security} text="Security" icon2={arror} />

        <Link to="/newp" state={{ activeMenu: "Profile" }}>
          <Card1 icon={faq} text="FAQs" icon2={arror} onClick={openFaqModal} />
        </Link>
        <Card1 icon={privacy} text="Privacy Policy" icon2={arror} />
        <Card1 icon={newdelete} text="Edit Profile" icon2={arror} />
      </div>

      {/* Modal rendering */}
      {isProfileModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={closeProfileModal} // Clicking outside modal content closes it
        >
          <div
            className="bg-white p-6 md:p-10 rounded-2xl shadow-lg relative w-full max-w-md md:w-1/3 lg:max-w-lg xl:max-w-xl mx-4"
            onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside content
          >
            <button
              onClick={closeProfileModal}
              className="absolute top-[-20px] md:right-[-35px] right-[-20px] bg-white border border-gray-300 rounded-full h-8 w-8 flex justify-center items-center"
            >
              <span className="text-black text-xl">×</span>
            </button>
            <h1 className="text-center text-2xl mb-4">Edit Profile</h1>
            <form className="w-full">
              <div className="flex flex-col space-y-2 mb-5">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  id="name"
                  placeholder="Matthew Boye"
                  type="text"
                  className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                />
              </div>
              <div className="flex flex-col space-y-2 mb-5">
                <label htmlFor="moth-tag" className="text-sm">
                  Moth Tag
                </label>
                <input
                  id="moth-tag"
                  placeholder="@matt"
                  type="text"
                  className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                />
              </div>
              <div className="flex flex-col space-y-2 mb-5">
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <input
                  id="email"
                  placeholder="mattboye@gmail.com"
                  type="text"
                  className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                />
              </div>
              <div className="flex flex-col space-y-2 mb-5">
                <label htmlFor="phone-number" className="text-sm">
                  Phone Number
                </label>
                <input
                  id="phone-number"
                  placeholder="08129786745"
                  type="text"
                  className="bg-transparent w-full text-[16px] font-medium p-3 border border-[#CCCCCC] rounded-xl"
                />
              </div>
            </form>
            <button
              type="button"
              className="bg-black text-white font-medium py-3 px-4 shadow-md w-full rounded-xl mt-5"
              onClick={closeProfileModal}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      {isFaqModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={closeFaqModal} // Clicking outside modal content closes it
        >
          <div
            className="bg-white p-6 md:p-10 rounded-2xl shadow-lg relative w-full max-w-md md:w-1/3 lg:max-w-lg xl:max-w-xl mx-4"
            onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside content
          >
            <button
              onClick={closeFaqModal}
              className="absolute top-[-20px] md:right-[-35px] right-[-20px] bg-white border border-gray-300 rounded-full h-8 w-8 flex justify-center items-center"
            >
              <span className="text-black text-xl">×</span>
            </button>
            <div
              className="flex items-center mb-4"
              style={{ cursor: "pointer" }}
            >
              <div>
                <img src={backbutton} alt="Back Button" />
              </div>
              <div>
                <h2>Back</h2>
              </div>
            </div>

            <h1 className="text-center text-2xl mb-8">
              Frequently Asked Questions (FAQs){" "}
            </h1>

            <div className="flex  items-center border-[0.5px] border-black rounded-lg p-1 mb-10">
              <FaSearch className="text-black ml-2" />
              <input
                type="text"
                placeholder="Search for help"
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-transparent border-none text-black focus:outline-none ml-3"
              />
            </div>

            <div className=" container-w text-">
              {data.map((faq, i) => (
                <AccordionItem
                  curOpen={curOpen}
                  onOpen={setCurOpen}
                  title={faq.question}
                  num={i}
                  key={i}
                >
                  <p className="text-sm text-[grey]">{faq.answer}</p>
                </AccordionItem>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

const data = [
  {
    question: "How do i send money?",
    answer:
      "To send money with Moth, you’ll first need to sign up. We’ll ask for your email address, and you’ll create a password. We’ll also need to verify you before you are able to send money. Check what information we need and how long verification takes here..",
  },
  {
    question: "Fees for sending money?",
    answer: <></>,
  },
  {
    question: "How do i change my password?",
    answer: "",
  },
  {
    question: "How do i convert my money?",
    answer: "",
  },

  {
    question: "Where can i use my Moth card?",
    answer: "",
  },

  {
    question: "How do i make withdrawals on my Moth card?",
    answer: "",
  },
];
