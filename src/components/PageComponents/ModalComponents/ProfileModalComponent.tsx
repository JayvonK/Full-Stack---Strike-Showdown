
import React, { useState } from 'react'
import { Modal } from 'flowbite-react';
import "../../../app/css/LoginPageAndHome.css";
import ProfilePic2 from "../../../../public/images/profilePIc.png";
import { useRouter } from 'next/navigation';
import { IPublicUserData, IUserPosts } from '@/interfaces/Interfaces';
import ProfileMatchesComponent from '../HomePage/ProfileMatchesComponent';
const ProfileModalComponent = (props: { userData: IPublicUserData, handleOpenEditModal: () => void, handleCloseUsersProfileModal: () => void, openMyPosts: () => void, openMyInfo: () => void, onInfo: boolean, posts: IUserPosts[], openEditMatchModal: (data: IUserPosts) => void }) => {
  const router = useRouter();
  const handleLogOut = () => {
    router.push('/');
  }

  return (
    <div className='lg:p-8 p-6 bg-white rounded-md'>
      <div className="grid sm:grid-cols-[40%_60%] lg:mb-8 mb-6">
        <div className='flex sm:justify-normal justify-center items-center sm:mt-6 mb-6 mt-0'>
          <img
            src={props.userData.profileImage}
            className="md:w-48 w-36 aspect-square rounded-full border border-black lg:ml-8 md:ml-0 sm:ml-3"
          ></img>
        </div>

        <div className='flex sm:justify-end'>
          <div className="bg-black rounded-2xl mx-0 lg:p-8 sm:p-6 p-4 h-full sm:w-full w-[304px]">
            <div className='flex flex-col justify-between h-full jura'>
              <div>
                <h1 className="text-white juraBold lg:text-4xl text-3xl md:pb-4 pb-2 Bold break-words">
                  {props.userData.username}
                </h1>

                <h1 className="text-white  lg:text-3xl sm:text-2xl text-xl pb-6">
                  {props.userData.pronouns}
                </h1>
              </div>

              <div className="flex justify-between">
                <button className="bg-orange-500  rounded-md pt-2 pb-2 md:px-8 px-6  hover:!bg-orange-500 text-black " onClick={props.handleOpenEditModal}>
                  <h3 className="lg:text-3xl text-2xl ">Edit</h3>
                </button>

                <button onClick={handleLogOut} className="bg-red-500 md:px-8 px-6 rounded-md pt-2 pb-2  text-black ">
                  <h3 className="lg:text-3xl text-2xl">Log Out</h3>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      <div>
        <div className="rounded-xl jura bg-black max-h-[475px] overflow-y-scroll scrollbar justify-center lg:p-8 sm:p-6 p-4 ">

          <div className='flex sm:mb-4 mb-2'>

            {
              props.onInfo ? (
                <>
                  <h1 className="bg-orange-500 text-center lg:text-3xl text-2xl md:w-36 rounded-md py-2 sm:px-10 px-4 text-black md:mr-40 sm:mr-24 mr-8 hover:cursor-pointer" onClick={props.openMyInfo}>
                    Info
                  </h1>

                  <h1 className="text-white lg:text-3xl text-2xl rounded-xl py-2 sm:px-10 px-4 hover:cursor-pointer" onClick={props.openMyPosts}>
                    Your Post
                  </h1>
                </>
              ) : (
                <>
                  <h1 className="text-center lg:text-3xl text-2xl md:w-36 rounded-md py-2 sm:px-10 px-4 text-white md:mr-40 sm:mr-24 mr-8 hover:cursor-pointer " onClick={props.openMyInfo}>
                    Info
                  </h1>

                  <h1 className="bg-orange-500 text-center lg:text-3xl text-2xl rounded-md py-2 sm:px-10 px-4 text-black hover:cursor-pointer " onClick={props.openMyPosts}>
                    Your Post
                  </h1>
                </>
              )
            }

          </div>

          {
            props.onInfo ? (
              <>
                <div className="rounded-lg justify-space w-50 grid sm:grid-cols-2 sm:gap-4">
                  <div>
                    <p className="text-white text-xl pt-2">
                      Full Name:
                    </p>
                    <p className="text-orange-500  text-2xl ">
                      {props.userData.fullName}
                    </p>
                    <p className="text-white text-xl pt-4 ">
                      Main Center:
                    </p>
                    <p className=" text-orange-500 text-2xl">
                      {props.userData.mainCenter}
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xl pt-2">
                      Style:
                    </p>
                    <p className="text-orange-500 text-2xl">
                      {props.userData.style}
                    </p>
                    <p className="text-white text-xl pt-4">
                      Average:
                    </p>
                    <p className="text-orange-500 text-2xl">
                      {props.userData.average}
                    </p>
                  </div>
                </div>
                <div className=" pt-4 grid sm:grid-cols-3 justify-between items-center">
                  <div>
                    <h1 className="text-white text-xl ">
                      High Game:
                    </h1>
                    <h1 className="text-orange-500 text-2xl">
                      {props.userData.highGame}
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-white text-xl sm:pt-0 pt-4">
                      High Series:
                    </h1>
                    <h1 className="text-orange-500 text-2xl">
                      {props.userData.highSeries}
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-white text-xl sm:pt-0 pt-4">
                      Earnings:
                    </h1>
                    <h1 className="text-orange-500 text-2xl">
                      ${props.userData.earnings}
                    </h1>
                  </div>
                </div>
              </>
            ) :
              (
                props.posts.length === 0 ? (
                  <>
                    <h1 className='text-center text-white sm:text-3xl text-2xl jura min-h-56 flex justify-center pb-12 items-center'>
                      No matches found
                    </h1>
                  </>
                ): (
                  props.posts.map((p, idx)=> {
                  if (p.userID === props.userData.id && !p.isFinished) {
                    return (
                      <ProfileMatchesComponent data={p} key={idx} openEditMatchModal={props.openEditMatchModal}/>
                    )
                  }
                })
              ))
                
          }


        </div>

        <div className='lg:pt-8 pt-6 flex justify-end'>
          <button className={'jura lg:text-3xl text-2xl py-2 px-4 rounded-md bgOrange'} onClick={props.handleCloseUsersProfileModal}>Close</button>
        </div>

      </div>

    </ div>
  )
}

export default ProfileModalComponent

