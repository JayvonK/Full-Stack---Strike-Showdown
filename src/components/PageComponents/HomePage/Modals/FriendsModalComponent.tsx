import React from 'react'
import UserMinus from "../../../../../public/images/UserMinus.png";
import ProfilePic from "../../../../../public/images/Ellipse 16.png";
import { useState } from 'react';
import { Modal, Button } from 'flowbite-react';
import FriendBoxComponent from '../../FriendBoxComponent';
import { IPublicUserData } from '@/interfaces/Interfaces';


const FriendsModalComponent = (props: { friendsArray: IPublicUserData[], closeModal: () => void, unFriend: (id: number) => void, addNewDM: (user: IPublicUserData) => void, challengeClick: () => void }) => {

  return (
    <div className='p-4  bg-white rounded-lg'>
      <div>
        <h3 className=" mb-6    text-xl  w-40 lg:text-3xl  rounded-lg  md:rounded-lg  bg-orange-500 px-5 py-3   text-center text-black jura ">
          Friends
        </h3>
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:gap-5   justify-evenly  max-h-[450px]  gap-y-4 gap-x-2 overflow-auto'>
        {
          props.friendsArray.map((friend, idx) =>
          (
            <div key={idx}>
              <FriendBoxComponent key={idx} friend={friend} challengeBtn={props.challengeClick} message={() => props.addNewDM(friend)} unFriend={() => props.unFriend(friend.id)} />
            </div>
          )).reverse()
        }
      </div>

      {
        props.friendsArray.length === 0 && <h1 className='text-center jura text-black text-3xl py-20'>You have no friends :(</h1>
      }

      <div className="flex justify-end pt-4">
        <Button className=" bg-orange-500 text-lg md:text-xl py-1  lg:text-2xl  rounded-lg  hover:!bg-orange-500 text-black jura" onClick={props.closeModal}>
          <h3 className=" text-xl lg:text-3xl  text-center  rounded-lg ">Close</h3>
        </Button>
      </div>

    </div>
  )
}

export default FriendsModalComponent