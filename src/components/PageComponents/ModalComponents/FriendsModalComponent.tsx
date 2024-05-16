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
            className=" mb-6    text-md md:text-2xl  lg:text-3xl w-32   md:w-32  lg:w-36   rounded-xl  md:rounded-lg  bg-orange-500   hover:!bg-orange-500 text-center text-black jura px-4 pt-3 pb-3"
          >
            Friends
          </h3>
  </div>
  <div className=' grid lg:grid-cols-2 max-h-[450px] justify-center gap-6 overflow-y-auto'>

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
              className="  mt-3 bg-orange-500  text-xl md:text-2xl  lg:text-3xl md:w-32  lg:w-36  rounded-xl  md:rounded-2xl  hover:!bg-orange-500 text-black jura"
              
              onClick={props.closeModal}
            >
              <h3 className=" text-lg md:text-2xl   lg:text-3xl md:w-32  lg:w-36  rounded-xl  md:rounded-2xl ">Close</h3>
            </Button>
          </div>

      
      </div>
  )
}

export default FriendsModalComponent