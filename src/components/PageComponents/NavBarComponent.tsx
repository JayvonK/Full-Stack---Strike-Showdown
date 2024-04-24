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

const customTheme ={
collapse: {
  base: "w-full lg:block lg:w-auto",
  list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-sm lg:font-medium",
  hidden: {
    on: "hidden",
    off: ""
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    icon: "h-6 w-6 shrink-0"
  }
 }
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

        {/* <Flowbite theme={{theme: customTheme  }}> */}
        <ToggleButtonInput/>
    {/* </Flowbite> */}
         
        </Navbar.Link>
        <Navbar.Link
          onClick={() => setIsModalOpen(true)}
          className=" border-b-0 border-transparent  jura hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white "
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
          className="jura border-b-0 border-transparent hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white"
          
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
          className="jura  border-b-0 border-transparent hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white "
         
         
         
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
          onClick={() => setIsModalOpen(true)}
          className="jura  border-b-0 border-transparent hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white  sm:mr-0 lg:mr-20 "
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


export default NavBarComponent







// import "../../app/css/LoginPage.css";
// import { useRouter } from "next/navigation";
// import styles from '@/app/css/Navbar.module.css';
     
// function NavBarComponent() {

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const toggleModal = () => {
//       setIsModalOpen(!isModalOpen);
//     };

// }
 

// //     <Navbar fluid
// //   className="bg-black  dark:bg-gray-900  ">
// //         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
// //       <Navbar.Brand as={Link}  href="https://flowbite-react.com">
// //         <img src={logo.src} className="object-cover h-12 w-12 md:h-20 md:w-20 lg:h-20 lg:w-20  rounded-full border border-white hover:cursor-pointer" alt="Flowbite React Logo" />
// //         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
// //       </Navbar.Brand>
// //       <Navbar.Toggle />
// //       <Navbar.Collapse>
// //         <Navbar.Link className="text-1xl text-white text-center  hover:text-orange-500 navbarHover  jura" href="#" >
// //           Home
// //         </Navbar.Link>
// //         <Navbar.Link className="text-1xl text-white text-center  hover:text-orange-500 navbarHover  jura" as={Link} href="#">
// //           About
// //         </Navbar.Link>
// //         <Navbar.Link className="text-1xl text-white text-center  hover:text-orange-500 navbarHover  jura" >Services</Navbar.Link>
// //         <Navbar.Link className="text-1xl text-white text-center  hover:text-orange-500 navbarHover jura"  >Pricing</Navbar.Link>

// //         <Navbar.Link className="text-1xl text-white text-center  hover:text-orange-500 navbarHover  jura" href="#"> <img
// //                   src={MessageIcon.src}
// //                   alt=""
// //                   className="object-cover pl-2 h-15 mb-1 "
// //                 />
// // Contact </Navbar.Link>
// //       </Navbar.Collapse>
// //       </div>
// //     </Navbar>

//   const [isNavOpen, setIsNavOpen] = useState(false);


//     const [openModal2, setOpenModal2] = useState(false);
//     const [openModal, setOpenModal] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);

  

//   const router = useRouter();
//   return (
//     <Navbar
//     fluid className="bg-black !border-black  items-center justify-between       "
//   >
//     <Navbar.Brand as={Link} href="/">
//       <img
//         src={logo.src}
//         className="mr-3 object-cover h-12 w-12 md:h-20 md:w-20 lg:h-20 lg:w-20  rounded-full border border-white hover:cursor-pointer"
//         alt="Flowbite React Logo"
//       />
//       <h1 className="txtOrange text-center lg:text-4xl md:text-3xl text-2xl juraBold mt-0 md:mt-2 pl-1 md:pl-5 ">
//         {" "}
//         Strike <span className="text-white">Showdown</span>
//       </h1>
//     </Navbar.Brand>
//     <Navbar.Toggle className="text-orange-500 !bg-black !border-0 hover:!border-0" />
//     <Navbar.Collapse className="hover:!bg-black" style={{border:0}}>
//       <Navbar.Link
  
//         className="jura hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white item-center "
        
//       >
//         <img
//           src={SearchIcon.src}
//           alt=""
//           className="object-cover h-15 w-15 hover:cursor-pointer showcase-menu-social mb-1 "
//         />
//         Search
//       </Navbar.Link>
//       <Navbar.Link
//       onClick={() => setOpenModal(true)}
//         className="jura hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white "
//         as={Link}
      
//         href=""
//       >
//         <img
//           src={FriendsIcon.src}
//           alt=""
//           className="object-cover  justify-center friendsPic   h-14 w-16 mb-1  showcase-menu-social"
//         />
//         Friends
//       </Navbar.Link>
//       <Navbar.Link

//         className="jura hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white"
       
//         href=""
//       >
//         {" "}
//         <img
//           src={InboxIcon.src}
//           alt=""
//           className="object-cover h-15  mb-1  "
//         />
//         Inbox
//       </Navbar.Link>
//       <Navbar.Link
//         className="jura hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white "
        
//         href="/message"
//       >
//         {" "}
//         <img
//           src={MessageIcon.src}
//           alt=""
//           className="object-cover lg:!pl-2 h-13 mb-1 sm:!px-0"
//         />
//         Message
//       </Navbar.Link>
//       <Navbar.Link
//       onClick={() => setOpenModal2(true)}
//         className="jura hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white  sm:mr-0 lg:mr-20 "
//         href="#"
       
//       >
//         {" "}
//         <img
//           src={ProfileIcon.src}
//           alt=""
//           className="object-cover   h-15 hover:cursor-pointer mb-1 friendsPic "
//         />
//         Profile
//       </Navbar.Link>
//     </Navbar.Collapse>
    
  
//   <Modal show={openModal} onClose={() => setOpenModal(false)}>
//   <Modal.Header className=" " >
//      <h3 className="text-2xl bg-orange-500 rounded-2xl hover:!bg-orange-500 text-black jura px-4 pt-3 pb-3">Friends</h3> 
//    </Modal.Header>
//   <Modal.Body>
//     <div className="grid grid-flow-col p-4  justify-evenly bg-black rounded-2xl w-50"style={{width:300}}>
    
//     <div className="">
//    <img  src={ProfilePic.src}></img>
        
//     </div>
//   <div className="ml-5">
 
//     <div className="grid grid-flow-col auto-cols-max justify-start items-center pb-3 ">
    
//     <div>
//     <img onClick={()=>{}} src={UserMinus.src} className="pr-2"></img>
//     </div>
//     <div>
//     <h1 className="text-white jura text-xl ">BowlerDude</h1>
    
//     </div>
  
//     </div>
//   <button style={{width:150}}  className=" bg-orange-500  hover:!bg-orange-500 mb-2 text-black jura" >
//      <h3 className="text-1xl">Challenge</h3> 
//     </button>
//     <br>
//     </br>
//     <button style={{width:150}} className=" bg-orange-500   hover:!bg-orange-500 text-black jura">
//      <h3 className="text-1xl">Message</h3> 
//     </button>
//   </div>

//     </div>
//   </Modal.Body >
//   <Modal.Footer className=" flex justify-end ">
    
//     <Button className=" bg-orange-500 rounded-2xl hover:!bg-orange-500 text-black jura" onClick={() => setOpenModal(false)}>
//      <h3 className="text-2xl">Close</h3> 
//     </Button>
//   </Modal.Footer>
// </Modal>
 
// <Modal show={openModal2} onClose={() => setOpenModal2(false)}>

//   <Modal.Body className=" flex justify-end">
//   <div>
//     <img  src={ProfilePic2.src} className="pr-2"></img>
//     </div>
//     <div className="grid grid-flow-col pt-4 pb-4 pr-5   bg-black rounded-2xl w-50"style={{width:400}}>

//     <div>
   
// </div>
// <div>
  
// </div>
   
//   <div className="ml-5 ">
 
//     <div className="grid grid-flow-col auto-cols-max justify-start items-center pb-3 ">
    
   
//     <div>
//     <h1 className="text-white jura text-3xl pb-4 juraBold">KingOfBowling209</h1>
    
//     <h1 className="text-white jura text-2xl ">He/Him</h1>
//     </div>
  
//     </div>
  
//       <div className="justify-center">
//   <button style={{width:150}}  className="  bg-orange-500 mt-5 rounded-2xl pt-2 pb-2  hover:!bg-orange-500 mb-2 text-black jura" >
//      <h3 className="text-3xl">Edit</h3> 
//     </button>
  
//     <button style={{width:150}} className="bg-red-500 ml-10 rounded-2xl pt-2 pb-2  text-black jura">
//      <h3 className="text-3xl">Log Out</h3> 
//     </button>
//     </div>
//     </div>
//   </div>


    
//   </Modal.Body >
//   <Modal.Footer>
// <div  className="rounded-xl flex justify-space bg-black w-50 px-5 grid grid-flow-col auto-cols" style={{width:600}}>
// <div className="">
// <h1 className=" bg-orange-500 text-3xl text-center mt-5 rounded-xl   pt-2 pb-2  mb-2 text-black jura"style={{width:150}}>Info</h1>
// <p className="text-white jura text-1xl">Full Name:</p>
// <p className="text-orange-500 jura text-2xl">Timothy Neutron</p>
// <p className="text-white jura text-1xl">Main Center:</p>
// <p className="text-orange-500 jura text-2xl">Pacific Avenue Bowl</p>

// </div>
// <div className="">
// <h1 className="text-white jura text-3xl  mt-5 rounded-xl   pt-2 pb-2  mb-2 text-black jura"style={{width:150}}>Your Post</h1>
// <p className="text-white jura text-1.5xl">Style:</p>
// <p className="text-orange-500 jura text-2xl">2 Handed (Righty)</p>
// <p className="text-white jura text-1.5xl">Average:</p>
// <p className="text-orange-500 jura text-2xl">192.5</p>
// </div>



// </div>
    
//   </Modal.Footer>
// </Modal>


//   </Navbar>  
   
   

//   );
// }






     

