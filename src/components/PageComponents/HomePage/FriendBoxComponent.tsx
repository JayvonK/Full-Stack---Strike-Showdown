import React from 'react'
import UserMinus from "../../../../public/images/UserMinus.png";
import ProfilePic from "../../../../public/images/Ellipse 16.png";
function FriendBoxComponent(props: {userName: string, userImage: string,challengeBtn: () => void, message: () => void} ) {


  return (
    <div className="flex flex-col-2  flex-wrap gap-2  justify-center   ">
      <div>
    
    <div
      className=" grid grid-flow-col p-4  w-72  justify-evenly bg-black rounded-2xl w-50"
      
    >
      <div className="flex  items-center">
        <img className='    h-20 w-20' src={ProfilePic.src}></img>
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
          
          className=" bg-orange-500 w-36  hover:!bg-orange-500 mb-2 text-black jura"
        >
          <h3 className="text-1xl">Challenge</h3>
        </button>
        <br></br>
        <button
          
          className=" bg-orange-500 w-36  hover:!bg-orange-500 text-black jura"
        >
          <h3 className="text-1xl">Message</h3>
        </button>
      </div>
    </div>
    </div>
   
  
   
    </div>
  )
}

export default FriendBoxComponent
