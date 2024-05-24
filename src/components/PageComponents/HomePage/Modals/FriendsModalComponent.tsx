import React from 'react'
import UserMinus from "../../../../../public/images/UserMinus.png";
import ProfilePic from "../../../../../public/images/Ellipse 16.png";
import { useState } from 'react';
import { Modal, Button } from 'flowbite-react';
import FriendBoxComponent from '../../FriendBoxComponent';


const FriendsModalComponent = (props: {closeModal: () => void}) => {
    const [openModal, setOpenModal] = useState(false);
  return (
  <div className='p-4  bg-white rounded-lg'>
  <div>
  <h3
            className=" mb-6    text-xl  w-40 lg:text-3xl  rounded-lg  md:rounded-lg  bg-orange-500 px-5 py-3   text-center text-black jura "
          >
            Friends
          </h3>
  </div>
<div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-col-3 xl:gap-5  2xl:grid-cols-3  justify-evenly  max-h-[450px]  gap-y-4 gap-x-2 overflow-auto'>

<div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
      <div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
      <div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
      <div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
      <div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
      <div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
      <div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
      <div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
      <div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
      <div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
      <div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
      <div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
      <div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
      <div>
  <FriendBoxComponent userName={''} userImage={''} challengeBtn={function (): void {
        throw new Error('Function not implemented.');
      } } message={function (): void {
        throw new Error('Function not implemented.');
      } }></FriendBoxComponent>
      </div>
   
      </div>
      
  
          <div className="flex justify-end pt-4">
            <Button
              className="    bg-orange-500 text-lg md:text-xl py-1  lg:text-2xl md:w-32  lg:w-36  rounded-lg  hover:!bg-orange-500 text-black jura"
              
              onClick={props.closeModal}
            >
              <h3 className=" text-xl   lg:text-3xl md:w-32  lg:w-36  text-center  rounded-lg ">Close</h3>
            </Button>
          </div>

      
      </div>
  )
}

export default FriendsModalComponent