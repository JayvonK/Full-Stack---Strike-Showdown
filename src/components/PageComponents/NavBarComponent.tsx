"use client";

import "@/app/css/Search.css";
import Link from "next/link";
import { Navbar , Pagination } from "flowbite-react";
import { useState } from "react";
import logo from "../../../public/images/Strike Showdown Logo.png";
import FriendsIcon from "../../../public/images/Property 1=Default (1).png";
import InboxIcon from "../../../public/images/Inbox.png";
import MessageIcon from "../../../public/images/Message.png";
import ProfileIcon from "../../../public/images/Profile.png";
import ToggleButtonInput from "@/components/ui/search";
import "../../app/css/LoginPage.css";
import { useRouter } from "next/navigation";


function NavBarComponent() {
  const [showModal, setShowModal2] = useState(false);
  const [activeTab, setActiveTab] = useState('Inbox');
  const [search, setsearch] = useState("Submit");
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isInput, setIsInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
const pageContext = useAppContext();

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    base: "border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    rounded: {
      on: "rounded",
      off: "rounded-none"
    },
    bordered: {
      on: "border",
      off: "border-0"
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between"
    },
    brand: {
      base: "flex items-center"
    },
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-4 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-800",
      hidden: {
        on: "!block",
        off: "!hidden"
      },
      toggle: {
        base: "ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
        icon: "h-6 w-6 shrink-0"
      }
    },
    link: {
      base: "block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
      active: {
        on: "bg-blue-700 md:bg-transparent md:text-blue-700",
        off: ""
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: ""
      }
    },
    breakpoint: "lg"
  }
};
  const router = useRouter();
  return (
    <Navbar
      fluid
      className="bg-black  !border-black pr-0 xl:!pr-32 xl:!pl-52 items-center     " theme={customTheme}
    >
      <Navbar.Brand  as={Link} href="/">
        <img
          src={logo.src}
          className="mr-3 object-cover   h-12 w-12 md:h-14 md:w-14 xl:h-20 xl:w-20  rounded-full border border-white hover:cursor-pointer"
       
          alt="Flowbite React Logo"
          onClick={() => router.push('./pages/HomePage')}
        />
        <h1 className="txtOrange text-center lg:text-4xl md:text-3xl text-2xl juraBold mt-0 md:mt-2 pl-1 md:pl-5 " onClick={() => router.push('./pages/HomePage')}>
          {" "}
          Strike <span className="text-white ">Showdown</span>

        </h1>
      </Navbar.Brand>
      <Navbar.Toggle className=" !bg-black hover:border-slate-950 hover:!border-0 text-orange-500 "style={{ border: 0, borderColor: 'black' }} />
      <Navbar.Collapse className="lg:!flex lg:!justify-end">
        <Navbar.Link className=" jura border-b-0 border-transparent hover:cursor-pointer hover:!text-orange-500  item-center ">


        <ToggleButtonInput/>
       
         
        </Navbar.Link>
        <div className="flex  items-center">
        <Navbar.Link
        
          onClick={() => setIsModalOpen(true)}
          className=" border-b-0 border-transparent  jura hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white "
          as={Link}
          href=""
        >
           
          <div className="flex justify-center">
          <img
            src={FriendsIcon.src}
            alt=""
            className="object-cover  friendsPic     mb-1  "
          />
          </div>
          Friends
        </Navbar.Link>
        </div>
        <div className="flex  items-center">
        <Navbar.Link
           onClick={() => setShowModal2(true)}
          className="jura border-b-0 border-transparent hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white"
          
        >
          {" "}
          <div className="flex justify-center">
          <img
            src={InboxIcon.src}
            alt=""
            className="object-cover h-10  mb-1  "
          /> </div>
         <h1>Inbox</h1> 

        </Navbar.Link>
        </div>
       
        <div className="flex  items-center">
        <Navbar.Link
          className="jura   border-b-0 border-transparent hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white "
        >
     
          <div className="flex md:justify-center lg:justify-center">
          <img
          onClick={() =>router.push('/pages/MessagingPage')}
            src={MessageIcon.src}
            alt=""
            className="object-cover  h-10  mb-1 sm:!px-0"
          />
          </div>
          <div>
          <h1 className="">
          Message
          </h1>
          </div>
        </Navbar.Link>
        </div>
        <div className="flex  items-center">
        <Navbar.Link
          onClick={() => setIsModalOpen(true)}
          className="jura  border-b-0 border-transparent hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white  sm:mr-0 lg:mr-20 "
          href="#"
        >
          <div className="flex justify-center">
          <img
            src={ProfileIcon.src}
            alt=""
            className="object-cover   h-10 hover:cursor-pointer mb-1  "
          />
          </div>
          Profile
        </Navbar.Link>
        </div>
      
      </Navbar.Collapse>
{/* BEGINNING OF FRIENDS MODAL */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <h3
            className=" mb-6   text-base md:text-3xl md:w-36   w-20 rounded-xl  md:rounded-2xl  bg-orange-500   hover:!bg-orange-500 text-center text-black jura px-4 pt-3 pb-3"
            
          >
            Friends
          </h3>
<div className="flex flex-wrap">
 {/* THIS STILL NEEDS TO BE FIXEDDDDDD STILL NEED TO MAKE IT AUTO COLS */}
          <div
            className="mb-5 grid grid-flow-col p-4  justify-evenly bg-black rounded-2xl w-50"
            style={{ width: 300 }}
          >
            <div className="">
              <img src={ProfilePic.src}></img>
            </div>
            <div className="ml-5">
              <div className="grid grid-flow-col auto-cols-max justify-start items-center pb-3 ">
                <div>
                  <img
                    onClick={() => {}}
                    src={UserMinus.src}
                    className="pr-2"
                  ></img>
                </div>
                <div>
                  <h1 className="text-white jura text-xl ">BowlerDude</h1>
                </div>
              </div>
              <button
                style={{ width: 150 }}
                className=" bg-orange-500  hover:!bg-orange-500 mb-2 text-black jura"
              >
                <h3 className="text-1xl">Challenge</h3>
              </button>
              <br></br>
              <button
                style={{ width: 150 }}
                className=" bg-orange-500   hover:!bg-orange-500 text-black jura"
              >
                <h3 className="text-1xl">Message</h3>
              </button>
            </div>
          </div>
          

          <div
            className="grid grid-flow-col p-4  justify-evenly bg-black rounded-2xl w-50 "
            style={{ width: 300 }}
          >
            <div className="">
              <img src={ProfilePic.src}></img>
            </div>
            <div className="ml-5">
              <div className="grid grid-flow-col auto-cols-max justify-start items-center pb-3 ">
                <div>
                  <img
                    onClick={() => {}}
                    src={UserMinus.src}
                    className="pr-2"
                  ></img>
                </div>
                <div>
                  <h1 className="text-white jura text-xl ">BowlerDude2</h1>
                </div>
              </div>
              <button
                style={{ width: 150 }}
                className=" bg-orange-500  hover:!bg-orange-500 mb-2 text-black jura"
              >
                <h3 className="text-1xl">Challenge</h3>
              </button>
              <br></br>
              <button
                style={{ width: 150 }}
                className=" bg-orange-500   hover:!bg-orange-500 text-black jura"
              >
                <h3 className="text-1xl">Message</h3>
              </button>
            </div>
            
          </div>
          </div>

          <div className="flex justify-end">
            <Button
              className="  mt-3 bg-orange-500  w-20 md:w-36 rounded-xl  md:rounded-2xl  hover:!bg-orange-500 text-black jura"
              
              onClick={() => setOpenModal(false)}
            >
              <h3 className=" text-base  md:text-3xl    md:w-36 rounded-xl  md:rounded-2xl ">Close</h3>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
                  {/* BEGINNING OF PROFILE MOADAL */}
      <Modal show={openModal2} onClose={() => setOpenModal2(false)}>
        <Modal.Body>
          <div className=" mb-5 flex justify-center  md:justify-end ">
            <div>
              <img src={ProfilePic2.src} className=" mt-5  md:mt-5 pr-4 h-24 md:h-48"></img>
            </div>
          
            <div
              className="grid grid-flow-col overflow-hidden   bg-black rounded-2xl w-48 justify-center   md:mx-0 md:px-0 md:pt-4 md:pb-4 md:pr-5    md:w-96 md:h-60"
            
            >
              <div className=" ml-4 ">
                <div className="grid grid-flow-col  auto-cols-max justify-start items-center pb-3 ">
                  <div>
                    <h1 className="text-white pt-3 juraBold text-xl md:text-4xl  pb-0 md:pb-4 juraBold overflow-hidden">
                      KingOfBowling209
                    </h1>

                    <h1 className="text-white jura text-base md:text-3xl ">He/Him</h1>
                  </div>
                </div>

                <div className=" justify-center">
                  <button
                    
                    className="  bg-orange-500 md:mt-5 mr-2   w-20 md:w-36 rounded-xl  md:rounded-2xl pt-2 pb-2  hover:!bg-orange-500 mb-2 text-black jura"
                  >
                    <h3 className="text-base md:text-3xl">Edit</h3>
                  </button>

                  <button
                    
                    className="bg-red-500 md:ml-10    w-20 md:w-36 rounded-xl  md:rounded-2xl pt-2 pb-2  text-black jura"
                  >
                    <h3 className="text-base md:text-3xl">Log Out</h3>
                  </button>
                </div>
              </div>
            </div>
            
          </div>

          <div
            className="rounded-xl   bg-black  justify-center"
          
          >
            <div
              className="rounded-xl  flex justify-space bg-black w-50 px-5 grid grid-flow-col auto-cols"
             
            >
              <div className="">
                <h1
                  className=" bg-orange-500    text-center mt-5   text-base md:text-3xl md:w-36   w-20  rounded-xl  md:rounded-2xl    pt-2 pb-2  mb-2 text-black jura"
                 
                >Info
                </h1>
                <p className="text-white jura text-xs md:text-xl pt-4">Full Name:</p>
                <p className="text-orange-500 text-sm jura md:text-2xl ">
                  Timothy Neutron
                </p>

                <p className="text-white jura text-xs md:text-xl pt-4 ">Main Center:</p>

                <p className="overflow-auto text-orange-500 text-sm jura md:text-2xl">
                  Pacific Avenue Bowl{" "}
                </p>
              </div>
              <div className="">
                <h1
                  className="text-white jura text-xs md:text-xl  md:text-3xl  mt-5 rounded-xl   pt-2 pb-2  mb-2 jura"
                 
                >
                  Your Post
                </h1>
                <p className="text-white jura text-xs md:text-xl pt-4">Style:</p>
                <p className="text-orange-500 text-sm jura md:text-2xl">
                  2 Handed (Righty)
                </p>
                <p className="text-white jura text-xs md:text-xl pt-4">Average:</p>
                <p className="text-orange-500 text-sm jura md:text-2xl">192.5 </p>
              </div>
            </div>
            <div className=" mt-4 pb-5 pt-4 grid grid-flow-col auto-cols-max px-5 justify-between items-center">
              <div>
                <h1 className="text-white text-xs md:text-xl jura">High Game:</h1>
                <h1 className="text-orange-500 text-sm jura md:text-2xl">250</h1>
              </div>
              <div>
                <h1 className="text-white jura text-xs md:text-xl">High Series:</h1>
                <h1 className="text-orange-500 text-sm jura md:text-2xl">701</h1>
              </div>
              <div className="pr-14 ">
                <h1 className="text-white jura text-xs md:text-xl">Earnings:</h1>
                <h1 className="text-orange-500 text-sm jura md:text-2xl">$750</h1>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal>
        <Modal.Body>
        <div className="flex overflow-x-auto sm:justify-center">
      <Pagination layout="navigation" currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
    </div>
        </Modal.Body>
      </Modal>
    </Navbar>
  );

}


export default NavBarComponent


