import { IPublicUserData } from "@/interfaces/Interfaces";
import React from "react";

function FriendBoxComponent(props: { 
  friend: IPublicUserData,
  unFriend: () => void;
  challengeBtn: () => void;
  message: () => void;
}) {
  return (
    <div className=" py-4 bg-black  w-80  md:w-64  lg:w-52 xl:w-64 items-center mx-auto   rounded-2xl   ">
      <div className="grid  grid-flow-col gap-10  md:gap-2 lg:mx-2  justify-center items-center    ">
        <div className=" grid justify-center mr-1  ml-0 md:mr-1 md:ml-1 lg:mr-2 xl:mr-5 shrink-0">
          <img
            className=" min-h-14 min-w-14 lg:min-w-10 lg:min-h-10 rounded-full object-cover "
            src={props.friend.profileImage}
          ></img>
        </div>
        <div className=" ">
          <div
            className="flex flex-col-2 justify-start
       md:justify-center lg:justify-start  items-center"
          >
            <div className="grid justify-end md:justify-center lg:justify-start items-center">
              <img
                data-nimg="intrinsic"
                onClick={props.unFriend}
                src="/images/UserMinus.png"
                className="pr-2 h-5 w-7 hover:brightness-150 hover:cursor-pointer"
              ></img>
            </div>

            <div className="">
              <h1 className="text-white jura  text-xl  md:text-md lg:text-lg xl:text-xl font-bold overflow-auto-hidden ">
                {props.friend.username}
              </h1>
            </div>
          </div>
          <div className=" grid gap-0 md:gap-1 grid-wrap justify-center pr-4  md:justify-center lg:justify-start ">
            <div>
              <button className="items-center min-w-40 lg:min-w-10 xl:min-w-0 text-xl rounded-none md:px-6 py-0 text-center lg:text-sm xl:text-sm font-medium bg-orange-500 hover:bg-orange-400 text-black jura">
                Challenge
              </button>
            </div>
            <div>
              <button className="items-center rounded-none text-xl min-w-40 lg:!min-w-5 xl:text-sm lg:text-sm md:px-7 py-0 text-center font-medium bg-orange-500 hover:bg-orange-400 text-black jura">
                Message 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FriendBoxComponent;
