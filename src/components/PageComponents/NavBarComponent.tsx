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

function NavBarComponent() {
  const [search, setsearch] = useState("Submit");
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isInput, setIsInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
const pageContext = useAppContext()
  const handleLogOut = () =>{
pageContext.setUserLoggedIn(false);
router.push('/');
  }

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
      className="bg-black !border-black    items-center justify-between       "
    >
      <Navbar.Brand as={Link} href="/">
        <img
          src={logo.src}
          className="mr-3 object-cover  h-12 w-12 md:h-20 md:w-20 lg:h-20 lg:w-20  rounded-full border border-white hover:cursor-pointer"
          alt="Flowbite React Logo"
        />
        <h1 className="txtOrange text-center lg:text-4xl md:text-3xl text-2xl juraBold mt-0 md:mt-2 pl-1 md:pl-5 ">
          {" "}
          Strike <span className="text-white">Showdown</span>
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
          onClick={() => setOpenModal2(true)}
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
              <h3 className=" text-base  md:text-3xl   md:w-36 rounded-xl  md:rounded-2xl ">Close</h3>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      {/* BEGINNING OF PROFILE MODULE */}
      <Modal dismissible show={openModal2} onClose={() => setOpenModal2(false)}>
        <Modal.Body>
          <div className=" mb-5 flex justify-center  md:justify-end ">
            <div>
              <img
                src={ProfilePic2.src}
                className=" mt-5  md:mt-5 pr-4 h-24 md:h-48"
              ></img>
            </div>

            <div className="grid grid-flow-col overflow-hidden   bg-black rounded-2xl w-48 justify-center   md:mx-0 md:px-0 md:pt-4 md:pb-4 md:pr-5    md:w-96 md:h-60">
              <div className=" ml-4 ">
                <div className="grid grid-flow-col  auto-cols-max justify-start items-center pb-3 ">
                  <div>
                    <h1 className="text-white pt-3 juraBold text-xl md:text-4xl  pb-0 md:pb-4 juraBold overflow-hidden">
                      KingOfBowling209
                    </h1>

                    <h1 className="text-white jura text-base md:text-3xl ">
                      He/Him
                    </h1>
                  </div>
                </div>

                <div className=" justify-center">
                  <button className="  bg-orange-500 md:mt-5 mr-2   w-20 md:w-36 rounded-xl  md:rounded-2xl pt-2 pb-2  hover:!bg-orange-500 mb-2 text-black jura">
                    <h3 className="text-base md:text-3xl">Edit</h3>
                  </button>

                  <button onClick={handleLogOut} className="bg-red-500 md:ml-10    w-20 md:w-36 rounded-xl  md:rounded-2xl pt-2 pb-2  text-black jura">
                    <h3 className="text-base md:text-3xl">Log Out</h3>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl   bg-black  justify-center">
            <div className="rounded-xl  flex justify-space bg-black w-50 px-5 grid grid-flow-col auto-cols">
              <div className="">
                <h1 className=" bg-orange-500    text-center mt-5   text-base md:text-3xl md:w-36   w-20  rounded-xl  md:rounded-2xl    pt-2 pb-2  mb-2 text-black jura">
                  Info
                </h1>
                <p className="text-white jura text-xs md:text-xl pt-4">
                  Full Name:
                </p>
                <p className="text-orange-500 text-sm jura md:text-2xl ">
                  Timothy Neutron
                </p>

                <p className="text-white jura text-xs md:text-xl pt-4 ">
                  Main Center:
                </p>

                <p className="overflow-auto text-orange-500 text-sm jura md:text-2xl">
                  Pacific Avenue Bowl{" "}
                </p>
              </div>
              <div className="">
                <h1 className="text-white jura text-xs md:text-xl  md:text-3xl  mt-5 rounded-xl   pt-2 pb-2  mb-2 jura">
                  Your Post
                </h1>
                <p className="text-white jura text-xs md:text-xl pt-4">
                  Style:
                </p>
                <p className="text-orange-500 text-sm jura md:text-2xl">
                  2 Handed (Righty)
                </p>
                <p className="text-white jura text-xs md:text-xl pt-4">
                  Average:
                </p>
                <p className="text-orange-500 text-sm jura md:text-2xl">
                  192.5{" "}
                </p>
              </div>
            </div>
            <div className=" mt-4 pb-5 pt-4 grid grid-flow-col auto-cols-max px-5 justify-between items-center">
              <div>
                <h1 className="text-white text-xs md:text-xl jura">
                  High Game:
                </h1>
                <h1 className="text-orange-500 text-sm jura md:text-2xl">
                  250
                </h1>
              </div>
              <div>
                <h1 className="text-white jura text-xs md:text-xl">
                  High Series:
                </h1>
                <h1 className="text-orange-500 text-sm jura md:text-2xl">
                  701
                </h1>
              </div>
              <div className="pr-14 ">
                <h1 className="text-white jura text-xs md:text-xl">
                  Earnings:
                </h1>
                <h1 className="text-orange-500 text-sm jura md:text-2xl">
                  $750
                </h1>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={openModal3} onClose={() => setOpenModal3(false)}>
        <Modal.Body>
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
              layout="navigation"
              currentPage={currentPage}
              totalPages={100}
              onPageChange={onPageChange}
            />
          </div>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}


export default NavBarComponent;
