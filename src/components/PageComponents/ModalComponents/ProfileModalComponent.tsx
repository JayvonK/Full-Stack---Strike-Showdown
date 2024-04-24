
import React, { useState } from 'react'
import { Modal } from 'flowbite-react';
import "../../../app/css/LoginPage.css";
import ProfilePic2 from "../../../../public/images/profilePIc.png";
import { useRouter } from 'next/navigation';
const ProfileModalComponent = (props:{userName:string, proNouns:string, fullName:string, mainCenter:string, }) => {
    const router = useRouter();
    const [openModal2, setOpenModal2] = useState(false);
    // const pageContext = useAppContext();
     const handleLogOut = () =>{
    //     pageContext.setUserLoggedIn(false);
    //     router.push('/');
        }
  return (
<>
  <div className=" mb-5 flex justify-center  md:justify-end mt-5 lg:mt-0 ">
    <div>
      <img
        src={ProfilePic2.src}
        className=" mt-5 lg:ml-5 ml-0  md:mt-5 lg:mt-10 pr-4 h-24 md:h-48"
      ></img>
    </div>
<div className='lg:px-5 mx-5 lg:mx-0 my-0 lg:my-5'>
    <div className="grid grid-flow-col overflow-hidden  bg-black rounded-2xl w-48 justify-center   md:mx-0 md:px-0 md:pt-4 md:pb-4 md:pr-5    md:w-96 md:h-60">
      <div className=" ml-4 ">
        <div className="grid grid-flow-col  auto-cols-max justify-start items-center pb-3 ">
          <div>
            <h1 className="text-white pt-3 juraBold text-xl md:text-4xl  pb-0 md:pb-4 juraBold overflow-hidden">
              {props.userName}
            </h1>

            <h1 className="text-white jura text-base md:text-3xl ">
            {props.proNouns}
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
  </div>
<div className='lg:px-5 lg:pb-5  '>
  <div className="rounded-xl   bg-black  justify-center px-2 py-2 mx-5 lg:mx-0 mb-5  lg:px-10 lg:">
    <div className="rounded-xl   justify-space bg-black w-50  grid grid-flow-col auto-cols">
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
  </div>
  </>
  )
}

export default ProfileModalComponent

