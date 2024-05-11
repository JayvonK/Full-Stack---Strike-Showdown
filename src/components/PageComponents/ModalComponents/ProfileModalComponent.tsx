
import React, { useState } from 'react'
import { Modal } from 'flowbite-react';
import "../../../app/css/LoginPageAndHome.css";
import ProfilePic2 from "../../../../public/images/profilePIc.png";
import { useRouter } from 'next/navigation';
import { IPublicUserData } from '@/interfaces/Interfaces';
const ProfileModalComponent = (props: { data: IPublicUserData, handleOpenEditModal: () => void, handleCloseUsersProfileModal: () => void }) => {
  const router = useRouter();
  const handleLogOut = () => {
    router.push('/');
  }

  return (
    <div className='bg-white'>

    
    <div className='p-4 '>
      <div className="grid justify-center gap-3 grid-flow-col mb-8">
        <div className='flex  items-center'>
          <img
            src={''}
            className="w-48 aspect-square rounded-full border border-black"
          ></img>
        </div>
        <div className='flex justify-end'>
          <div className="overflow-hidden  bg-black rounded-2xl w-48 justify-center   md:mx-0 md:px-8 md:pt-4 md:pb-4    md:w-full md:h-60">
            <div className="">
              <div className="grid grid-flow-col auto-cols-max justify-start items-center pb-3 ">
                <div>
                  <h1 className="text-white pt-3 juraBold text-xl md:text-4xl  pb-0 md:pb-4 juraBold overflow-hidden">
                    {props.data.username}
                  </h1>

                  <h1 className="text-white jura text-base md:text-3xl ">
                    {props.data.pronouns}
                  </h1>
                </div>
              </div>

              <div className="flex justify-between pt-5">
                <button className="  bg-orange-500  w-20 md:w-36 rounded-xl  md:rounded-2xl pt-2 pb-2  hover:!bg-orange-500 text-black jura" onClick={props.handleOpenEditModal}>
                  <h3 className="text-xl md:text-3xl">Edit</h3>
                </button>

                <button onClick={handleLogOut} className="bg-red-500  w-20 md:w-36 rounded-xl  md:rounded-2xl pt-2 pb-2  text-black jura">
                  <h3 className="text-base md:text-3xl">Log Out</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className="rounded-lg   bg-black  justify-center  py-2  px-4 ">
          <div className="rounded-lg   justify-space bg-black w-50  grid grid-flow-col auto-cols">
            <div className="">
              <h1 className=" bg-orange-500    text-center mt-5   text-base md:text-3xl md:w-36   w-20  rounded-xl  md:rounded-2xl    pt-2 pb-2  mb-2 text-black jura">
                Info
              </h1>
              <p className="text-white jura text-lg md:text-xl pt-4">
                Full Name:
              </p>
              <p className="text-orange-500 text-lg jura md:text-2xl ">
                {props.data.fullName}
              </p>

              <p className="text-white jura text-lg md:text-xl pt-4 ">
                Main Center:
              </p>

              <p className="overflow-auto text-orange-500 text-lg jura md:text-2xl">
                {props.data.mainCenter}
              </p>
            </div>
            <div className="">
              <h1 className="text-white jura text-lg  md:text-3xl  mt-5 rounded-xl   pt-2 pb-2  mb-2 jura">
                Your Post
              </h1>
              <p className="text-white jura text-lg md:text-xl pt-4">
                Style:
              </p>
              <p className="text-orange-500 text-lg jura md:text-2xl">
                {props.data.style}
              </p>
              <p className="text-white jura text-lg md:text-xl pt-4">
                Average:
              </p>
              <p className="text-orange-500 text-lg jura md:text-2xl">
                {props.data.average}
              </p>
            </div>
          </div>
          <div className=" mt-4 pb-5 pt-4 grid grid-flow-col auto-cols-max px-5 justify-between items-center">
            <div>
              <h1 className="text-white text-xs md:text-xl jura text-center">
                High Game:
              </h1>

              <h1 className="text-orange-500 text-sm jura md:text-2xl text-center">
                {props.data.highGame}
              </h1>
            </div>
            <div>
              <h1 className="text-white jura text-xs md:text-xl text-center">
                High Series:
              </h1>
              <h1 className="text-orange-500 text-sm jura md:text-2xl text-center">
                {props.data.highSeries}
              </h1>
            </div>
            <div className="pr-14 ">
              <h1 className="text-white jura text-xs md:text-xl text-center">
                Earnings:
              </h1>
              <h1 className="text-orange-500 text-sm jura md:text-2xl text-center">
                ${props.data.earnings}
              </h1>
            </div>
          </div>
        </div>

        <div className='pt-8 flex justify-end'>
          <button className={'jura text-4xl py-2 px-4 rounded-md bgOrange'} onClick={props.handleCloseUsersProfileModal}>Close</button>
        </div>
      </div>
    </ div>
    </ div>
    
  )
}

export default ProfileModalComponent

