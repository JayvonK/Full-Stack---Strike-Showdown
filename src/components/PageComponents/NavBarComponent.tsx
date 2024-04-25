"use client";

import "@/app/css/Search.css";
import Link from "next/link";
import { Pagination } from "flowbite-react";
import { Navbar, Dropdown, Avatar, Flowbite,CustomFlowbiteTheme  } from "flowbite-react";
import { useState } from "react";
import logo from "../../../public/images/Strike Showdown Logo.png";
import FriendsIcon from "../../../public/images/Property 1=Default (1).png";
import InboxIcon from "../../../public/images/Inbox.png";
import MessageIcon from "../../../public/images/Message.png";
import ProfileIcon from "../../../public/images/Profile.png";
import ToggleButtonInput from "@/components/ui/search";
import "../../app/css/LoginPage.css";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/Context";
import InboxModalComponent from "./ModalComponents/InboxModalComponent";

function NavBarComponent() {
  const [showModal, setShowModal2] = useState(false);
  const [activeTab, setActiveTab] = useState('Inbox');
  const [search, setsearch] = useState("Submit");
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [openInboxModal, openInboxModal2] = useState(false);
  const [isInput, setIsInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
const pageContext = useAppContext();

const customTheme = {
  collapse: {
    base: "w-full lg:block lg:w-auto",
    list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-sm lg:font-medium",
    hidden: {
      on: "hidden",
      off: ""
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:flex md:flex lg:flex xl:hidden",
      icon: "h-6 w-6 shrink-0"
    }
  }
}
  const router = useRouter();
  return (
    <Navbar
      fluid
      className="bg-black  !border-black pr-0 lg:!pr-32  lg:!pl-52 items-center     " theme={customTheme}
    >
      <Navbar.Brand  as={Link} href="/">
        <img
          src={logo.src}
          className="mr-3 object-cover   h-12 w-12 md:h-20 md:w-20 lg:h-20 lg:w-20  rounded-full border border-white hover:cursor-pointer"
       
          alt="Flowbite React Logo"
          onClick={() => router.push('./pages/HomePage')}
        />
        <h1 className="txtOrange text-center lg:text-4xl md:text-3xl text-2xl juraBold mt-0 md:mt-2 pl-1 md:pl-5 " onClick={() => router.push('./pages/HomePage')}>
          {" "}
          Strike <span className="text-white ">Showdown</span>

        </h1>
      </Navbar.Brand>
      <Navbar.Toggle className=" !bg-black hover:border-slate-950 hover:!border-0 text-orange-500 "style={{ border: 0, borderColor: 'black' }} />
      <Navbar.Collapse className="">
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
           
          <div className="flex lg:justify-center">
          <img
            src={FriendsIcon.src}
            alt=""
            className="object-cover  lg:justify-center friendsPic     mb-1  "
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
          <div className="flex lg:justify-center">
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
          className="jura  border-b-0 border-transparent hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white "
        >
     
          <div className="flex lg:justify-center">
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
          <div className="flex lg:justify-center">
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
    
    </Navbar>
  );

}


export default NavBarComponent


