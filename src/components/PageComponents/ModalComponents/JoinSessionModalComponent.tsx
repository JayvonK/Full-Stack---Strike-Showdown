import React from "react";
import ProfilePic from "../../../../public/images/Ellipse 16.png";
import { Button } from "flowbite-react";
import "../../../app/css/LoginPageAndHome.css";
import { Dispatch, SetStateAction, useState } from "react";
import { useEffect } from "react";
import { IUserPosts } from "@/interfaces/Interfaces";
import { profile } from "console";

const JoinSessionModalComponent = (props: {data: IUserPosts, closeModal: () => void, joinChallenge: () => void}) => {
  const[pageSize, setPageSize] = useState<boolean>(false);
 
 
  return (
    <div className="bg-white rounded-md">
      <div className="px-5 py-5">
        <div className="bg-orange-500 text-3xl jura rounded-lg px-10 py-2 w-44 ">
          {" "}
          <p className="text-center text-base md:text-lg lg:text-2xl">Info</p>{" "}
        </div>
      </div>

      <div className="bg-black py-4 px-6  mx-5 rounded-lg  ">
        <div className="grid grid-col-4 justify-between">
          <div className="flex flex-col-6">
            <div className="col-span-1 pt-14 md:pt-0 xl:pt-14   lg:pt-0">
              <img src={props.data.image} className="  rounded-full  h-20 w-20 " alt="Your Profile Picture"></img>
            </div>
            <div className="col-span-2">
              <p className=" pt-14 xl:pt-14 md:pt-0 lg:pt-0 text-orange-500  text-xl lg:text-3xl jura px-2 lg:px-5 py-1  ">
                GodOfBowling
              </p>
              <div className="flex flex-col-6  gap-5 pl-5">
                <div>
                  <p className="text-white jura  text-md  md:text-lg lg:text-xl py-1">{props.data.wins} Wins</p>
                  <p className="text-white jura text-md  md:text-lg lg:text-xl py-1">{props.data.average} Avg</p>
                </div>
                <div className="text-white jura  ">
                  <p className="text-white jura text-md  md:text-lg lg:text-xl py-1 ">Streak: {props.data.streak}</p>
                  <p className="text-white jura text-md  md:text-lg lg:text-xl py-1">
                   {props.data.style}
                  </p>
                </div>
              </div>
            </div>
            <div>
          <div className="static">
            <div className="absolute bottom-25 right-10">
              <h1 className="bg-orange-500 xl:pt-14 md:pt-0 lg:pt-0 jura rounded-lg px-8  h-10  lg:h-12 flex items-center ">
                Message
              </h1>
            </div>
          </div>
          </div>
          </div>

        </div>
        <div className="">
          <p className="text-white jura text-xl md:text-lg lg:text-2xl">Location:</p>
          <p className=" jura text-xl md:text-lg lg:text-2xl text-orange-500">{props.data.locations}</p>
          <div className="flex flex-col-6 justify-between pr-0  md:pr-0 lg:pr-0 xl:pr-52">
            <div>
              <p className="text-white jura text-xl md:text-lg lg:text-2xl">Spots:</p>
              <p className=" jura text-xl md:text-lg lg:text-2xl text-orange-500">{props.data.currentPpl}</p>
            </div>
            <div className="">
              <p className="text-white jura text-xl md:text-lg lg:text-2xl">Time:</p>
              <p className="text-orange-500 text-xl md:text-lg lg:text-2xl jura">{props.data.time}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="jura text-white text-2xl">Description:</h3>
          <p className="w-full h-40 text-orange-500 jura text-xl md:text-lg lg:text-2xl  pl-2 mb-2 mt-2 rounded-sm overflow-scroll ">
            {props.data.description}
          </p>
        </div>
      </div>
      <div className="flex justify-end py-3 px-7 ">
        <button className=" border-color outline-none mr-5   mt-3 bg-orange-500  w-36 md:w-36 rounded-xl  md:rounded-lg  hover:!bg-orange-500 text-black jura">
          <h3 className=" text-2xl  md:text-3xl   ">Join</h3>
        </button>
        <button className=" border-color outline-none   mt-3 bg-orange-500  w-36 md:w-36 rounded-xl  md:rounded-lg  hover:!bg-orange-500 text-black jura">
          <h3 className=" text-2xl  lg:text-3xl  py-2 " onClick={props.closeModal}>Close</h3>
        </button>
      </div>
    </div>
  );
};

export default JoinSessionModalComponent;

