import React from 'react'
import UserMinus from "../../../public/images/UserMinus.png";
import ProfilePic from "../../../public/images/Ellipse 16.png";
import { useState } from 'react';
import { Modal, Button} from 'flowbite-react';
const FriendsModalComponent = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <h3
            className=" mb-6   text-base md:text-3xl md:w-36   w-20 rounded-xl  md:rounded-2xl  bg-orange-500   hover:!bg-orange-500 text-center text-black jura px-4 pt-3 pb-3"
            
          >
            Friends
          </h3>
<div className="flex flex-wrap">
 {/* THIS STILL NEEDS TO BE FIXEDDDDDD STILL NEED TO MAKE IT AUTO COLS */}
          <div
            className="mb-5 grid grid-flow-col p-4  justify-evenly bg-black rounded-2xl w-50"
            style={{ width: 300 }}
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
          

          <div
            className="grid grid-flow-col p-4  justify-evenly bg-black rounded-2xl w-50 "
            style={{ width: 300 }}
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
                  <h1 className="text-white jura text-xl ">BowlerDude2</h1>
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
          </div>

          <div className="flex justify-end">
            <Button
              className="  mt-3 bg-orange-500  w-20 md:w-36 rounded-xl  md:rounded-2xl  hover:!bg-orange-500 text-black jura"
              
              onClick={() => setOpenModal(false)}
            >
              <h3 className=" text-base  md:text-3xl   md:w-36 rounded-xl  md:rounded-2xl ">Close</h3>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
  )
}

export default FriendsModalComponent
