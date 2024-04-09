"use client";
import Link from "next/link";
import { Navbar} from "flowbite-react";
import { useState } from "react";
import logo from "../../../public/images/Strike Showdown Logo.png";
import SearchIcon from "../../../public/images/Search.png";
import FriendsIcon from "../../../public/images/Property 1=Default (1).png";
import InboxIcon from "../../../public/images/Inbox.png";
import MessageIcon from "../../../public/images/Message.png";
import ProfileIcon from "../../../public/images/Profile.png";
import { Button, Modal,Avatar } from "flowbite-react";
import UserMinus  from "../../../public/images/UserMinus.png";
import ProfilePic from"../../../public/images/Ellipse 16.png";
import
import { ModelComponent } from "./ModelComponent";
import Image from "next/image";

import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";

import "../../app/css/LoginPage.css";
import { useRouter } from "next/navigation";
import styles from '@/app/css/Navbar.module.css';
     
function NavBarComponent() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [openModal2, setOpenModal2] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

  

  const router = useRouter();
  return (
    <Navbar
    fluid className="bg-black !border-black  items-center justify-between       "
  >
    <Navbar.Brand as={Link} href="/">
      <img
        src={logo.src}
        className="mr-3 object-cover h-12 w-12 md:h-20 md:w-20 lg:h-20 lg:w-20  rounded-full border border-white hover:cursor-pointer"
        alt="Flowbite React Logo"
      />
      <h1 className="txtOrange text-center lg:text-4xl md:text-3xl text-2xl juraBold mt-0 md:mt-2 pl-1 md:pl-5 ">
        {" "}
        Strike <span className="text-white">Showdown</span>
      </h1>
    </Navbar.Brand>
    <Navbar.Toggle className="text-orange-500 !bg-black !border-0 hover:!border-0" />
    <Navbar.Collapse className="hover:!bg-black" style={{border:0}}>
      <Navbar.Link
  
        className="jura hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white item-center "
        
      >
        <img
          src={SearchIcon.src}
          alt=""
          className="object-cover h-15 w-15 hover:cursor-pointer showcase-menu-social mb-1 "
        />
        Search
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
        
        href="/message"
      >
        {" "}
        <img
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
    
  
  <Modal show={openModal} onClose={() => setOpenModal(false)}>
  <Modal.Header className=" " >
     <h3 className="text-2xl bg-orange-500 rounded-2xl hover:!bg-orange-500 text-black jura px-4 pt-3 pb-3">Friends</h3> 
   </Modal.Header>
  <Modal.Body>
    <div className="grid grid-flow-col p-4  justify-evenly bg-black rounded-2xl w-50"style={{width:300}}>
    
    <div className="">
   <img  src={ProfilePic.src}></img>
        
    </div>
  <div className="ml-5">
 
    <div className="grid grid-flow-col auto-cols-max justify-start items-center pb-3 ">
    
    <div>
    <img onClick={()=>{}} src={UserMinus.src} className="pr-2"></img>
    </div>
    <div>
    <h1 className="text-white jura text-xl ">BowlerDude</h1>
    
    </div>
  
    </div>
  <button style={{width:150}}  className=" bg-orange-500  hover:!bg-orange-500 mb-2 text-black jura" >
     <h3 className="text-1xl">Challenge</h3> 
    </button>
    <br>
    </br>
    <button style={{width:150}} className=" bg-orange-500   hover:!bg-orange-500 text-black jura">
     <h3 className="text-1xl">Message</h3> 
    </button>
  </div>

    </div>
  </Modal.Body >
  <Modal.Footer className=" flex justify-end ">
    
    <Button className=" bg-orange-500 rounded-2xl hover:!bg-orange-500 text-black jura" onClick={() => setOpenModal(false)}>
     <h3 className="text-2xl">Close</h3> 
    </Button>
  </Modal.Footer>
</Modal>
 
<Modal show={openModal2} onClose={() => setOpenModal2(false)}>
  <Modal.Header className=" " >
     <h3 className="text-2xl bg-orange-500 rounded-2xl hover:!bg-orange-500 text-black jura px-4 pt-3 pb-3">ff</h3> 
   </Modal.Header>
  <Modal.Body>
    <div className="grid grid-flow-col p-4  justify-evenly bg-black rounded-2xl w-50"style={{width:300}}>
    
    <div className="">
   <img  src={ProfilePic.src}></img>
        
    </div>
  <div className="ml-5">
 
    <div className="grid grid-flow-col auto-cols-max justify-start items-center pb-3 ">
    
    <div>
    <img onClick={()=>{}} src={UserMinus.src} className="pr-2"></img>
    </div>
    <div>
    <h1 className="text-white jura text-xl ">BowlerDude</h1>
    
    </div>
  
    </div>
  <button style={{width:150}}  className=" bg-orange-500  hover:!bg-orange-500 mb-2 text-black jura" >
     <h3 className="text-1xl">Challenge</h3> 
    </button>
    <br>
    </br>
    <button style={{width:150}} className=" bg-orange-500   hover:!bg-orange-500 text-black jura">
     <h3 className="text-1xl">Message</h3> 
    </button>
  </div>

    </div>
  </Modal.Body >
  <Modal.Footer className=" flex justify-end ">
    
    <Button className=" bg-orange-500 rounded-2xl hover:!bg-orange-500 text-black jura" onClick={() => setOpenModal(false)}>
     <h3 className="text-2xl">Close</h3> 
    </Button>
  </Modal.Footer>
</Modal>


  </Navbar>  
   
   

  );
}


export default NavBarComponent

     