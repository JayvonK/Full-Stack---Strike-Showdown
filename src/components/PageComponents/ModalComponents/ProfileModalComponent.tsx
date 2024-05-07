
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
          <div className="overflow-hidden bg-black rounded-2xl justify-center mx-0 lg:p-8 p-6 h-full w-full">
            <div className='flex flex-col justify-between h-full'>

              <div>
                <h1 className="text-white juraBold lg:text-4xl text-3xl pb-4 juraBold overflow-hidden">
                  {props.data.username}
                </h1>

                <h1 className="text-white jura text-base md:text-3xl ">
                  {props.data.pronouns}
                </h1>
              </div>

              <div className="flex justify-between ">
                <button className="  bg-orange-500  rounded-md pt-2 pb-2 px-8  hover:!bg-orange-500 text-black jura" onClick={props.handleOpenEditModal}>
                  <h3 className="lg:text-3xl md:text-2xl text-xl">Edit</h3>
                </button>

                <button onClick={handleLogOut} className="bg-red-500 px-8 rounded-md pt-2 pb-2  text-black jura">
                  <h3 className="lg:text-3xl md:text-2xl text-xl">Log Out</h3>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className="rounded-xl   bg-black  justify-center  lg:p-8 p-6 ">
          <div className="rounded-lg   justify-space bg-black w-50  grid grid-flow-col auto-cols">
            <div className="">
              <h1 className=" bg-orange-500 text-center text-base md:text-3xl md:w-36 w-20 rounded-md py-2 mb-2 text-black jura">
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
              <h1 className="text-white jura text-lg  md:text-3xl rounded-xl py-2  mb-2 jura">
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
          <div className=" pt-4 grid grid-cols-3 justify-between items-center">
            <div>
              <h1 className="text-white text-xs md:text-xl jura">
                High Game:
              </h1>
              <h1 className="text-orange-500 text-sm jura md:text-2xl">
                {props.data.highGame}
              </h1>
            </div>
            <div>
              <h1 className="text-white jura text-xs md:text-xl">
                High Series:
              </h1>
              <h1 className="text-orange-500 text-sm jura md:text-2xl">
                {props.data.highSeries}
              </h1>
            </div>
            <div>
              <h1 className="text-white jura text-xs md:text-xl">
                Earnings:
              </h1>
              <h1 className="text-orange-500 text-sm jura md:text-2xl">
                ${props.data.earnings}
              </h1>
            </div>
          </div>
        </div>

        <div className='lg:pt-8 pt-6 flex justify-end'>
          <button className={'jura lg:text-4xl md:text-3xl text-2xl py-2 px-4 rounded-md bgOrange'} onClick={props.handleCloseUsersProfileModal}>Close</button>
        </div>
      </div>
    </ div>
    </ div>
    
  )
}

export default ProfileModalComponent

