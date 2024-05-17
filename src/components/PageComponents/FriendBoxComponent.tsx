import React from "react";
import UserMinus from "../../../public/images/UserMinus.png";
import ProfilePic from "../../../public/images/Ellipse 16.png";
import Image from "next/image";
function FriendBoxComponent(props: {
  userName: string;
  userImage: string;
  challengeBtn: () => void;
  message: () => void;
}) {
  return (
    <div className="  py-2 bg-black md:w-48  lg:w-54 xl:w-64 items-center mx-auto   rounded-2xl   ">
      <div className="grid  grid-flow-col-dense gap-2  justify-center items-center    ">
        <div className=" grid justify-center mr-1  ml-0 md:mr-1 md:ml-1 lg:mr-2 xl:mr-5 shrink-0">
          <img
            className=" h-9 w-9 md:h-12 md:w-12   lg:!h-14 lg:!w-14 "
            src={ProfilePic.src}
          ></img>
        </div>
        <div className=" ">
          <div
            className="flex flex-col-2 justify-end
       md:justify-center lg:justify-start  items-center"
          >
            <div className="grid justify-end md:justify-center lg:justify-start  items-center">
              <img
                data-nimg="intrinsic"
                onClick={() => {}}
                src={UserMinus.src}
                className="pr-2 h-4 w-6  md:!h-5 md:!w-7 "
              ></img>
            </div>

            <div className="">
              <h1 className="text-white jura truncat text-sm md:text-md lg:text-lg xl:text-xl font-bold overflow-y-hidden ">
                BowlerDude
              </h1>
            </div>
          </div>
          <div className=" grid gap-0 md:gap-1 grid-wrap justify-center pr-4  md:justify-center lg:justify-start ">
            <div>
              <a
                href="#"
                className=" items-center  text-xs truncate px-2.5  md:px-6 py-0 md:py-1 text-center xl:text-sm font-medium bg-orange-500   hover:!bg-orange-500 text-black jura"
              >
                Challenge
              </a>
            </div>
            <div>
              <a
                href="#"
                className="items-center truncate text-xs  xl:text-sm  px-3.5   md:px-7  py-0 md:py-1 text-center  font-medium bg-orange-500  hover:!bg-orange-500 text-black jura"
              >
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FriendBoxComponent;
