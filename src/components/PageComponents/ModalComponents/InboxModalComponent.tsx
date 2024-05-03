"use client";
import Link from "next/link";
import { Navbar, Pagination, Modal, Button } from "flowbite-react";
import { useState } from "react";
import React from "react";
import "../../../app/css/LoginPageAndHome.css";
import ProfilePic from "../../../../public/images/Ellipse 16.png";
const InboxModalComponent = (props: {closeModal: () => void, openFriendsModal: () => void}) => {
  const [showModal, setOpenModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Inbox");
  const [tabOneActive, setTabOneActive] = useState(true);
  const [tabTwoActive, setTabTwoActive] = useState(false);
  const [tabThreeActive, setTabThreeActive] = useState(false);

  const handleContextChange = (tab: any) => {
    // setActiveTabContent(tab)
  };

  const handleTabChange = (tab: any) => {
    if (tab == "Inbox") {
      setTabOneActive(true);
      setTabTwoActive(false);
      setTabThreeActive(false);
    } else if (tab == "Sessions") {
      setTabOneActive(false);
      setTabTwoActive(true);
      setTabThreeActive(false);
    } else {
      setTabOneActive(false);
      setTabTwoActive(false);
      setTabThreeActive(true);
    }
    setActiveTab(tab);
  };
  return (
    <>
      <div className="  px-6 py-5  lg:py-10 ">
        <div className="flex justify-evenly">
          <button
            className={`tab-button px-4 w-48 py-2 rounded focus:outline-none jura text-xl md:text-2xl lg:text-3xl ${
              activeTab === "Inbox" ? "bg-orange-500   " : " text-black"
            }`}
            onClick={() => handleTabChange("Inbox")}
          >
            Inbox
          </button>
          <button
            className={`tab-button px-4 py-2 w-48 rounded focus:outline-none jura text-xl md:text-2xl lg:text-3xl ${
              activeTab === "Matches" ? "bg-orange-500 " : " text-black "
            }`}
            onClick={() => handleTabChange("Matches")}
          >
            Matches
          </button>
          <button
            className={`tab-button px-4 py-2 w-48 rounded focus:outline-none jura text-xl md:text-2xl lg:text-3xl ${
              activeTab === "Sessions" ? "bg-orange-500  " : " text-black"
            }`}
            onClick={() => handleTabChange("Sessions")}
          >
            Sessions
          </button>
        </div>
      </div>
      <div className=" min-h-[500px]" onClick={() => handleTabChange("Sessions")}>
        {tabOneActive && (
          <div className="bg-black flex justify-start rounded-lg mx-8  px-5 py-2">
            {" "}
            <img className="h-20" alt="" src={ProfilePic.src} />{" "}
            <div className="pl-10 ">
              {" "}
              <h2 className="text-center text-lg md:text-2xl lg:text-3xl pb-3 jura  text-white">
               has accepted your friend request
              </h2>
              <button   className="text-center text-xl md:text-2xl lg:text-3xl bg-orange-500 rounded-lg jura px-2" onClick={props.openFriendsModal}>
                View Friends
              </button>
            </div>
          </div>
        )}
        {tabTwoActive && (
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl jura py-20 px-20 lg:py-40 lg:px-40">
            No Notifications
          </h2>
        )}
        {tabThreeActive && (
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl jura py-20 px-20  lg:py-40 lg:px-40">
            No Notifications
          </h2>
        )}
      </div>

      <div className="flex justify-end py-7 px-7">
        <button
          className=" border-color focus:outline-none h-10 md:h-12 lg:h-14    mt-3 bg-orange-500  w-20 md:w-36 rounded-md    hover:!bg-orange-500 text-black jura"
          onClick={props.closeModal}
        >
          <h3 className=" text-xl md:text-2xl lg:text-3xl   ">Close</h3>
        </button>
      </div>
    </>
  );
};

export default InboxModalComponent;
