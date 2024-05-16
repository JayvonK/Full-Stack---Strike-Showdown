import React from 'react'
import UserMinus from "../../../../public/images/UserMinus.png";
import ProfilePic from "../../../../public/images/Ellipse 16.png";
import { useState } from 'react';
import { Modal, Button} from 'flowbite-react';
import "../../../app/css/LoginPageAndHome.css";
import FriendBoxComponent from '../HomePage/FriendBoxComponent';

const FriendsModalComponent = (props: {closeModal: () => void}) => {
    const [openModal, setOpenModal] = useState(false);
  return (
  <div className='p-4  bg-white rounded-lg'>
  <div>
  <h3
            className=" mb-6    text-lg md:text-xl   lg:text-2xl w-32   md:w-32  lg:w-36   rounded-lg  md:rounded-lg  bg-orange-500   hover:!bg-orange-500 text-center text-black jura px-4 py-1"
          >
            Friends
          </h3>
  </div>
<div className=' grid grid-cols-2  justify-evenly  max-h-[450px]  gap-y-6 gap-x-4 overflow-auto'>

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
            <a
              className="    bg-orange-500 text-lg md:text-xl py-1  lg:text-2xl md:w-32  lg:w-36  rounded-lg  hover:!bg-orange-500 text-black jura"
              
              onClick={props.closeModal}
            >
              <h3 className=" text-lg md:text-xl px-4   lg:text-2xl md:w-32  lg:w-36  text-center  rounded-lg ">Close</h3>
            </a>
          </div>

      
      </div>
  )
}

export default FriendsModalComponent
