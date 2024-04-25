"use client";
import Link from "next/link";
import { Navbar, Pagination,Modal,Button } from "flowbite-react";
import { useState } from "react";
import React from 'react'
import "../../../app/css/LoginPage.css";
import ProfilePic from "../../../../public/images/Ellipse 16.png";
const InboxModalComponent = () => {
  
    const [showModal, setOpenModal] = useState(false);
    const [activeTab, setActiveTab] = useState('Inbox');
    const [activeTabContext1, setactiveTabContext1] = useState(1);
    const [activeTabContext2, setactiveTabContext2] = useState(2);
    const [activeTabContext3, setactiveTabContext3] = useState(3);
    const [tabOneActive, setTabOneActive] = useState(true);
    const [tabTwoActive, setTabTwoActive] = useState(false);
    const [tabThreeActive, setTabThreeActive] = useState(false);


const handleContextChange = (tab:any) =>{
 // setActiveTabContent(tab)
}

    const handleTabChange = (tab:any) => {
        if(tab == "Inbox"){
          setTabOneActive(true)
          setTabTwoActive(false)
          setTabThreeActive(false)
        }else if (tab == "Sessions"){
          setTabOneActive(false)
          setTabTwoActive(true)
          setTabThreeActive(false)
        }else{
          setTabOneActive(false)
          setTabTwoActive(false)
          setTabThreeActive(true)
        }
        setActiveTab(tab)
      };
  return (
<>
<div className="px-6 py-10 ">
  <div className="flex justify-evenly">
    <button
      className={`tab-button px-4 w-48 py-2 rounded focus:outline-none jura text-3xl ${
        activeTab === 'Inbox'
          ? 'bg-orange-500   '
          : ' text-black'
      }`}
      onClick={() => handleTabChange('Inbox')}
    >
      Inbox
    </button>
    <button
      className={`tab-button px-4 py-2 w-48 rounded focus:outline-none jura text-3xl ${
        activeTab === 'Matches'
          ? 'bg-orange-500 '
          : ' text-black '
      }`}
      onClick={() => handleTabChange('Matches')}
    >
      Matches
    </button>
    <button
      className={`tab-button px-4 py-2 w-48 rounded focus:outline-none jura text-3xl ${
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
 <div className="  "  onClick={() => handleTabChange('Sessions')}>
      {tabOneActive &&  <div className="bg-black flex justify-start rounded-lg mx-8  px-5 py-2"> <img className="h-20" alt="" src={ProfilePic.src} /> <div className="pl-10 "> <h2 className= "text-center text-xl pb-2 jura text-white" ><h1></h1> has accepted your friend request</h2><button className= "text-center text-xl bg-orange-500 rounded-lg jura px-2" >View Friends</button></div></div>}
      {tabTwoActive &&   <h2 className= "text-center text-3xl jura py-40 px-40" >No Notifications</h2>}
      {tabThreeActive &&   <h2 className= "text-center text-3xl jura  py-40 px-40" >No Notifications</h2>}

</div> 

<div className="flex justify-end py-7 px-7">
            <Button
              className=" border-color outline-none   mt-3 bg-orange-500  w-20 md:w-36 rounded-xl  md:rounded-lg  hover:!bg-orange-500 text-black jura"
              
              onClick={() => setOpenModal(false)}
            >
              <h3 className=" text-base  md:text-3xl   ">Close</h3>
            </Button>
          </div>
          

</>
  )
}

export default InboxModalComponent

