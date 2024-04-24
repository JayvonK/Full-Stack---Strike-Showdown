"use client";
import Link from "next/link";
import { Navbar, Pagination,Modal,Button } from "flowbite-react";
import { useState } from "react";
import React from 'react'
import "../../../app/css/LoginPage.css";

const InboxModalComponent = () => {
    const [showModal, setOpenModal] = useState(false);
    const [activeTab, setActiveTab] = useState('Inbox');
    const handleTabChange = (tab:any) => {
        setActiveTab(tab);
      };
  return (
<>
<div className="px-6 py-10 ">
  <div className="flex justify-evenly">
    <button
      className={`tab-button px-4 py-2 rounded focus:outline-none jura text-3xl ${
        activeTab === 'Inbox'
          ? 'bg-orange-500  '
          : ' text-black'
      }`}
      onClick={() => handleTabChange('Inbox')}
    >
      Inbox
    </button>
    <button
      className={`tab-button px-4 py-2 rounded focus:outline-none jura text-3xl ${
        activeTab === 'Matches'
          ? 'bg-orange-500 '
          : ' text-black '
      }`}
      onClick={() => handleTabChange('Matches')}
    >
      Matches
    </button>
    <button
      className={`tab-button px-4 py-2 rounded focus:outline-none jura text-3xl ${
        activeTab === 'Sessions'
          ? 'bg-orange-500  '
          : ' text-black'
      }`}
      onClick={() => handleTabChange('Sessions')}
    >
      Sessions
    </button>
  </div>
</div>
<div className="px-40 py-40 ">
  <h2 className="text-center text-3xl jura">No Notifications</h2>
</div>
<div className="flex justify-end py-7 px-7">
            <Button
              className=" border-color outline-none   mt-3 bg-orange-500  w-20 md:w-36 rounded-xl  md:rounded-lg  hover:!bg-orange-500 text-black jura"
              
              onClick={() => setOpenModal(false)}
            >
              <h3 className=" text-base  md:text-3xl  ">Close</h3>
            </Button>
          </div>
</>
  )
}

export default InboxModalComponent

