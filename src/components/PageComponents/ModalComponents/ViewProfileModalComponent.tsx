import React, { useState } from 'react'
import { Modal } from 'flowbite-react';
import "../../../app/css/LoginPage.css";
import ProfilePic2 from "../../../../public/images/profilePIc.png";
import { useRouter } from 'next/navigation';
import AddFriendIcon from '../../../../public/images/UserPlus.png';
import MessagingIcon from '../../../../public/images/MessageProfile.png';
  
const ViewProfileModalComponent = (props:{userName:string, proNouns:string, record:string, mainCenter:string, average:string, highGames:string, highSeries:string, earnings:string, style:string }) => {
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
      <div className="grid grid-flow-col overflow-hidden  bg-black rounded-2xl w-52 justify-center   md:mx-0 md:px-0 md:pt-4 md:pb-4 md:pr-5    md:w-96 md:h-60">
        <div className=" ml-8 ">
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
  
          <div className=" flex justify-center items-center pt-8">
         
            <button className="  bg-orange-500  mr-2  rounded-lg px-3 pt-1 pb-1 w-48   hover:!bg-orange-500 text-black jura">
                <div className='flex flex-col-2  items-center justify-center'>
                <div className='mr-4'>
                <img src={AddFriendIcon.src} className='h-8 w-8 ' alt='Add a friend Icon'></img>
                </div>
                <div>
              <h3 className="text-base md:text-3xl text-center">Friend</h3>
              </div>
              </div>
            </button>
          
  
            <button className="bg-orange-500 ml-6 w-24 flex justify-center  rounded-lg  pt-2 pb-2  text-black jura">
              <img src={MessagingIcon.src} className='h-6 w-6 ' alt="message icon"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  <div className='lg:px-5 lg:pb-5  '>
    <div className="rounded-xl   bg-black  justify-center px-2 py-2 mx-5  mb-5  lg:px-10 lg:">
      <div className="rounded-xl   justify-space bg-black w-50  grid grid-flow-col auto-cols">
        <div className="">
          <h1 className=" bg-orange-500   text-center mt-5   text-base md:text-3xl md:w-40   w-20  rounded-lg      pt-2 pb-2  mb-2 text-black jura">
            Info
          </h1>
          <p className="text-white jura text-xs md:text-xl pt-4">
            Record:
          </p>
          <p className="text-orange-500 text-sm jura md:text-2xl ">
            {props.record}
          </p>
  
          <p className="text-white jura text-xs md:text-xl pt-4 ">
            Main Center:
          </p>
  
          <p className="overflow-auto text-orange-500 text-sm jura md:text-2xl">
          {props.mainCenter}
          </p>
        </div>
        <div className="">
          <h1 className="text-white jura text-xs  md:text-3xl  mt-5 rounded-xl   pt-2 pb-2  mb-2 jura">
           Open Sessions
          </h1>
          <p className="text-white jura text-xs md:text-xl pt-4">
            Style:
          </p>
          <p className="text-orange-500 text-sm jura md:text-2xl">
            {props.style}
          </p>
          <p className="text-white jura text-xs md:text-xl pt-4">
            Average:
          </p>
          <p className="text-orange-500 text-sm jura md:text-2xl">
            {props.average}
          </p>
        </div>
      </div>
      <div className=" mt-4 pb-5 pt-4 flex flex-col-3  justify-between items-center">
        <div className=''>
          <h1 className="text-white text-xs md:text-xl jura text-center">
            High Game:
          </h1>
         
          <h1 className="text-orange-500 text-sm jura md:text-2xl text-center">
           {props.highGames}
          </h1>
        </div>
        <div>
          <h1 className="text-white jura text-xs md:text-xl text-center">
            High Series:
          </h1>
          <h1 className="text-orange-500 text-sm jura md:text-2xl text-center">
          {props.highSeries}
          </h1>
        </div>
        <div className="pr-14 ">
          <h1 className="text-white jura text-xs md:text-xl text-center">
            Earnings:
          </h1>
          <h1 className="text-orange-500 text-sm jura md:text-2xl text-center">
          ${props.earnings}
          </h1>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default ViewProfileModalComponent
