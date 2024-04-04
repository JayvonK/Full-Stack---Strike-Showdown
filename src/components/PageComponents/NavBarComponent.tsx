"use client";
import React from "react";
import logo from "../../../public/images/Strike Showdown Logo.png";
import SearchIcon from "../../../public/images/Search.png";
import FriendsIcon from "../../../public/images/Friends.png";
import InboxIcon from "../../../public/images/Inbox.png";
import MessageIcon from "../../../public/images/Message.png";
import ProfileIcon from "../../../public/images/Profile.png";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import "../../app/css/NavBar.css";

import "../../app/css/LoginPage.css";


const NavBarComponent = () => {
  return (


<nav className="bg-black  dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src={logo.src} alt="" className="object-cover h-12 w-12 md:h-20 md:w-20 lg:h-20 lg:w-20  rounded-full border border-white hover:cursor-pointer" />
    <div className="pl-5">
<h1 className="txtOrange text-center lg:text-4xl md:text-3xl text-2xl juraBold mt-1 md:mt-4 pl-1 md:pl-5 "> Strike <span className="text-white">Showdown</span></h1>
</div>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <img src={SearchIcon.src} alt="" className="object-cover lg:h-10 lg:w-10 hover:cursor-pointer" />
            <a className="text-1xl text-white text-center">Search</a>
        </li>
        <li>
        <img src={FriendsIcon.src} alt="" className="object-cover lg:h-10 lg:w-10 hover:cursor-pointer" />
<a className="text-1xl text-white text-center">Friends</a>
</li>
        <li>
        <img src={InboxIcon.src} alt="" className="object-cover lg:h-10 lg:w-10 hover:cursor-pointer" />
<a className="text-1xl text-white text-center">Inbox</a>
        </li>
        <li>
        <img src={MessageIcon.src} alt="" className="object-cover pl-2  lg:h-10 lg:w-12 hover:cursor-pointer" />
<a className="text-1xl text-white text-center">Message</a>
        </li>
        <li>
        <img src={ProfileIcon.src} alt="" className="object-cover lg:h-10 lg:w-10 hover:cursor-pointer " />
<a className="text-1xl text-white text-center hover:bg-gray-100">Profile</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default NavBarComponent
    