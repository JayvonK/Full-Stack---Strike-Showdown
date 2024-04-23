"use client";
import "@/app/css/Search.css";
import Link from "next/link";
import { Navbar, Pagination } from "flowbite-react";
import { useState } from "react";
import logo from "../../../public/images/Strike Showdown Logo.png";
import SearchIcon from "../../../public/images/Search.png";
import FriendsIcon from "../../../public/images/Property 1=Default (1).png";
import InboxIcon from "../../../public/images/Inbox.png";
import MessageIcon from "../../../public/images/Message.png";
import ProfileIcon from "../../../public/images/Profile.png";
import { Button, Modal, Avatar } from "flowbite-react";
import UserMinus from "../../../public/images/UserMinus.png";
import ProfilePic from "../../../public/images/Ellipse 16.png";
import ProfilePic2 from "../../../public/images/profilePIc.png";
import ToggleButtonInput from "@/components/ui/search";
import "../../app/css/LoginPage.css";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/Context";
import AddChallengeModalComponent from "./ModalComponents/AddChallengeModalComopenet";

function NavBarComponent() {
  const [showModal, setShowModal2] = useState(false);
  const [activeTab, setActiveTab] = useState('Inbox');
  const [search, setsearch] = useState("Submit");
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openInboxModal, openInboxModal2] = useState(false);
  const [isInput, setIsInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
const pageContext = useAppContext()

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsInput(false);
      // You can also handle the submission of the input value here
      console.log("Input Value:", inputValue);
    }
  };
  const router = useRouter();
  return (
    <Navbar
      fluid
      className="bg-black !border-black  !pr-32  items-center     "
    >
      <Navbar.Brand as={Link} href="/pages/HomePage" >
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
      <Navbar.Toggle className="text-orange-500 !bg-black !border-0 hover:!border-0" />
      <Navbar.Collapse className="hover:!bg-black" style={{ border: 0 }}>
        <Navbar.Link className=" jura hover:cursor-pointer hover:!text-orange-500 text-white item-center ">
          <ToggleButtonInput  />
        </Navbar.Link>
        <Navbar.Link
          onClick={() => setOpenModal(true)}
          className="jura hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white "
          as={Link}
          href=""
        >
          <img
            src={FriendsIcon.src}
            alt=""
            className="object-cover  justify-center friendsPic   h-14 w-16 mb-1  showcase-menu-social"
          />
          Friends
        </Navbar.Link>
        <Navbar.Link
           onClick={() => setShowModal2(true)}
          className="jura hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white"
          href=""
        >
          {" "}
          
          <img
            src={InboxIcon.src}
            alt=""
            className="object-cover h-15  mb-1  "
          />
          Inbox
          
        </Navbar.Link>
        <Navbar.Link
          className="jura hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white "
         
        >
          {" "}
          <img
          onClick={() =>router.push('/pages/MessagingPage')}
            src={MessageIcon.src}
            alt=""
            className="object-cover lg:!pl-2 h-13 mb-1 sm:!px-0"
          />
          Message
        </Navbar.Link>
        <Navbar.Link
          onClick={() => setOpenModal2(true)}
          className="jura hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white  sm:mr-0 lg:mr-20 "
          href="#"
        >
          {" "}
          <img
            src={ProfileIcon.src}
            alt=""
            className="object-cover   h-15 hover:cursor-pointer mb-1 friendsPic "
          />
          Profile
        </Navbar.Link>
      </Navbar.Collapse>
    
    </Navbar>
  );
}


export default NavBarComponent;
