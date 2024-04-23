"use client";
import Link from "next/link";
import { Navbar, Pagination,Modal } from "flowbite-react";
import { useState } from "react";
import React from 'react'


const InboxModalComponent = () => {
    const [showModal, setShowModal2] = useState(false);
    const [activeTab, setActiveTab] = useState('Inbox');
    const handleTabChange = (tab:any) => {
        setActiveTab(tab);
      };
  return (
<>
<div className="px-6 py-4 border-b">
  <div className="flex justify-center">
    <button
      className={`tab-button px-4 py-2 rounded focus:outline-none ${
        activeTab === 'Inbox'
          ? 'bg-orange-500 text-white'
          : 'bg-gray-200 text-gray-700'
      }`}
      onClick={() => handleTabChange('Inbox')}
    >
      Inbox
    </button>
    <button
      className={`tab-button px-4 py-2 rounded focus:outline-none ${
        activeTab === 'Matches'
          ? 'bg-orange-500 text-white'
          : 'bg-gray-200 text-gray-700'
      }`}
      onClick={() => handleTabChange('Matches')}
    >
      Matches
    </button>
    <button
      className={`tab-button px-4 py-2 rounded focus:outline-none ${
        activeTab === 'Sessions'
          ? 'bg-orange-500 text-white'
          : 'bg-gray-200 text-gray-700'
      }`}
      onClick={() => handleTabChange('Sessions')}
    >
      Sessions
    </button>
  </div>
</div>
<div className="px-6 py-4">
  <h2 className="text-center text-2xl font-bold">No Notifications</h2>
</div>
<div className="px-6 py-4 border-t">
  <button
    className="close-button bg-orange-500 text-white px-4 py-2 rounded w-full focus:outline-none"
    onClick={() => setShowModal2(false)}
  >
    Close
  </button>
</div>
</>
  )
}

export default InboxModalComponent

