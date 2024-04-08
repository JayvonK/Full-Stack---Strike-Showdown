
"use client";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useState } from "react";
import logo from "../../../public/images/Strike Showdown Logo.png";
import SearchIcon from "../../../public/images/Search.png";
import FriendsIcon from "../../../public/images/Property 1=Default (1).png";
import InboxIcon from "../../../public/images/Inbox.png";
import MessageIcon from "../../../public/images/Message.png";
import ProfileIcon from "../../../public/images/Profile.png";
import Image from "next/image";

import "../../app/css/LoginPage.css";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
}
 

function NavBarComponent() {

    const router = useRouter();
  return (
    <nav className="bg-black  dark:bg-gray-900 ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
      <a 
     href=""
        className="flex items-center space-x-3 rtl:space-x-reverse "
      >
        <img
          src={logo.src}
          alt=""
          className="object-cover h-12 w-12 md:h-20 md:w-20 lg:h-20 lg:w-20  rounded-full border border-white hover:cursor-pointer"onClick={() => router.push('/')}
        />
        <div className="pl-4">
          <h1 className="txtOrange text-center lg:text-4xl md:text-3xl text-2xl juraBold mt-0 md:mt-2 pl-1 md:pl-5 ">
            {" "}
            Strike <span className="text-white">Showdown</span>
          </h1>
        </div>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className="hidden w-full lg:block md:w-auto row-auto ml-10 flex items-baseline "
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col items-end p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" >
          <li className="hover:brightness-100 hover:cursor-pointer mr-4 ">
            <img
              src={SearchIcon.src}
              alt=""
              className="object-cover h-15 w-15 hover:cursor-pointer showcase-menu-social mb-1"
            />
            <a className="text-1xl text-white text-center  hover:text-orange-500  jura">
              Search
            </a>
          </li>
          <li className="  hover:cursor-pointer hover:brightness-95    "onClick={() => router.push('/')}>
            <img
              src={FriendsIcon.src}
              alt=""
            
              className="object-cover h-15 mb-1  showcase-menu-social"
            />
            <a className="text-1xl text-white text-center  hover:text-orange-500 jura">
              Friends
            </a>
          </li>
          <li className="hover:brightness-105 hover:cursor-pointer mr-4 "onClick={() => router.push('')}>
            <img
              src={InboxIcon.src}
              alt=""
              className="object-cover h-15 mb-1  "
            />
            <a className="text-1xl text-white text-center  hover:text-orange-500  jura">
              Inbox
            </a>
          </li>
          <li className="hover:brightness-100 hover:cursor-pointer "onClick={() => router.push('')}>
            <img
              src={MessageIcon.src}
              alt=""
              className="object-cover pl-2 h-15 mb-1 "
            />

            <a className="text-1xl text-white text-center hover:cursor-pointer hover:text-orange-500 jura">
              Message
            </a>
          </li>
          <li className="hover:brightness-100 hover:cursor-pointer "onClick={() => router.push('/')}>
            <img
              src={ProfileIcon.src}
              alt=""
              className="object-cover h-15 hover:cursor-pointer mb-1 "
            />
            <a className="text-1xl text-white text-center hover:gray-100  hover:text-orange-500  jura">
              Profile
            </a>.
          </li>
        </ul>
      </div>
    </div>
  </nav>
//     <Navbar fluid
//   className="bg-black  dark:bg-gray-900  ">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
//       <Navbar.Brand as={Link}  href="https://flowbite-react.com">
//         <img src={logo.src} className="object-cover h-12 w-12 md:h-20 md:w-20 lg:h-20 lg:w-20  rounded-full border border-white hover:cursor-pointer" alt="Flowbite React Logo" />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//       <Navbar.Collapse>
//         <Navbar.Link className="text-1xl text-white text-center  hover:text-orange-500 navbarHover  jura" href="#" >
//           Home
//         </Navbar.Link>
//         <Navbar.Link className="text-1xl text-white text-center  hover:text-orange-500 navbarHover  jura" as={Link} href="#">
//           About
//         </Navbar.Link>
//         <Navbar.Link className="text-1xl text-white text-center  hover:text-orange-500 navbarHover  jura" >Services</Navbar.Link>
//         <Navbar.Link className="text-1xl text-white text-center  hover:text-orange-500 navbarHover jura"  >Pricing</Navbar.Link>

//         <Navbar.Link className="text-1xl text-white text-center  hover:text-orange-500 navbarHover  jura" href="#"> <img
//                   src={MessageIcon.src}
//                   alt=""
//                   className="object-cover pl-2 h-15 mb-1 "
//                 />
// Contact </Navbar.Link>
//       </Navbar.Collapse>
//       </div>
//     </Navbar>

    
  );
}
//  function t() {
//     return(
   
//     )
 
// }
     
     


export default NavBarComponent;

