import React from 'react'
import UserMinus from "../../../../public/images/UserMinus.png";
import ProfilePic from "../../../../public/images/Ellipse 16.png";
import { useState } from 'react';
import { Modal, Button } from 'flowbite-react';
import "../../../app/css/LoginPageAndHome.css";
const FriendsModalComponent = (props: {closeModal: () => void}) => {
    const [openModal, setOpenModal] = useState(false);
  return (
  <>
  <div className='px-10 pt-10'>
  <h3
<<<<<<< HEAD
            className=" mb-6   text-base md:text-3xl md:w-36   w-20 rounded-xl  md:rounded-lg  bg-orange-500   hover:!bg-orange-500 text-center text-black jura px-4 pt-3 pb-3"
            
=======
            className=" mb-6    text-md md:text-2xl  lg:text-3xl w-32   md:w-32  lg:w-36   rounded-xl  md:rounded-lg  bg-orange-500   hover:!bg-orange-500 text-center text-black jura px-4 pt-3 pb-3"
>>>>>>> 5ce9bda (getting close to Final response on friend)
          >
            Friends
          </h3>
  </div>
<<<<<<< HEAD
         
<div className=" flex flex-col items-start px-10 py-10">

          <div
            className="mb-5 grid grid-flow-col p-4 w-80  justify-evenly bg-black rounded-2xl w-50"
            
          >
            <div className="">
              <img src={ProfilePic.src}></img>
            </div>
            <div className="ml-5">
              <div className="grid grid-flow-col auto-cols-max justify-start items-center pb-3 ">
                <div>
                  <img
                    onClick={() => {}}
                    src={UserMinus.src}
                    className="pr-2"
                  ></img>
                </div>
                <div>
                  <h1 className="text-white jura text-xl ">BowlerDude</h1>
                </div>
              </div>
              <button
                style={{ width: 150 }}
                className=" bg-orange-500  hover:!bg-orange-500 mb-2 text-black jura"
              >
                <h3 className="text-1xl">Challenge</h3>
              </button>
              <br></br>
              <button
                style={{ width: 150 }}
                className=" bg-orange-500   hover:!bg-orange-500 text-black jura"
              >
                <h3 className="text-1xl">Message</h3>
              </button>
            </div>
          </div>
=======
<div className=' grid grid-cols-2 max-h-[450px] justify-center gap-y-6 gap-x-4 overflow-auto'>

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
>>>>>>> 5ce9bda (getting close to Final response on friend)
      
          </div>

          <div className="flex justify-end px-10 py-10">
            <Button
              className="  mt-3 bg-orange-500  w-20 md:w-36 rounded-xl  md:rounded-2xl  hover:!bg-orange-500 text-black jura"
              
              onClick={props.closeModal}
            >
<<<<<<< HEAD
              <h3 className=" text-base  md:text-3xl   md:w-36 rounded-xl  md:rounded-2xl ">Close</h3>
=======
              <h3 className=" text-lg md:text-2xl   lg:text-3xl md:w-32  lg:w-36  rounded-xl  md:rounded-2xl ">Close</h3>
>>>>>>> 5ce9bda (getting close to Final response on friend)
            </Button>
          </div>
      
      </>
  )
}

export default FriendsModalComponent
