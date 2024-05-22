import React from "react";
import ProfilePic from "../../../../../public/images/Ellipse 16.png";
import { Button } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useEffect } from "react";
import { IUserPosts } from "@/interfaces/Interfaces";
import { profile } from "console";

const JoinSessionModalComponent = (props: { data: IUserPosts, closeModal: () => void, joinChallenge: (data: IUserPosts) => void, currentUserID: number, errorToast: () => void }) => {
  const [pageSize, setPageSize] = useState<boolean>(false);

  let isIncluded = false

  let userIDs = props.data.matchUsersIDs.split("-");

  userIDs.forEach(user => {
    if (Number(user) === props.currentUserID) {
      isIncluded = true;
    }
  })


  return (
    <div className="bg-white rounded-md p-4">

      <h1 className='jura text-black text-4xl inline-block px-6 py-2 bgOrange mb-4 rounded-lg'>Info</h1>

      <div className='bg-black p-6 rounded-lg'>

        <div className='flex justify-between'>

          <div className='flex'>
            <img className='aspect-square object-cover w-28 rounded-full mr-8' src={props.data.image} alt="" />

            <div className='flex flex-col'>

              <h3 className='juraBold text-3xl txtOrange'>{props.data.publisher}</h3>

              <div className='grid grid-cols-2 gap-8 text-white text-xl jura mt-2'>

                <div>
                  <p>{props.data.wins} Wins</p>
                  <p>{props.data.average}</p>
                </div>

                <div>
                  <p>Streak: {props.data.streak}</p>
                  <p>{props.data.style}</p>
                </div>

              </div>
            </div>
          </div>

          <div>
            <button className='text-2xl text-black jura py-2 px-6 bgOrange rounded-md' onClick={props.errorToast}>Message</button>
          </div>

        </div>

        <div className="jura text-2xl mt-6">
          <h2 className='text-white'>Location:</h2>
          <h2 className='juraBold txtOrange'>{props.data.locations}</h2>
        </div>

        <div className="jura text-2xl mt-4 grid grid-cols-2">
          <div>
            <h2 className='text-white'>Spots:</h2>
            <h2 className='juraBold txtOrange'>{props.data.currentPpl} / {props.data.maxPpl}</h2>
          </div>

          <div>
            <h2 className='text-white'>Time:</h2>
            <h2 className='juraBold txtOrange'>{props.data.time}</h2>
          </div>

          <div className="jura text-2xl mt-4 mb-2">
            <h2 className='text-white'>Description:</h2>
            <h2 className='juraBold txtOrange'>{props.data.description}</h2>
          </div>
        </div>

      </div>

      <div className="flex justify-end pt-4">
        <button className={`border-color outline-none mr-5 ${isIncluded ? 'bg-red-500 hover:bg-red-400' : 'bgOrange hover:bg-orange-400'}  w-36 md:w-36 rounded-xl  md:rounded-lg   text-black jura`} onClick={() => props.joinChallenge(props.data)}><h3 className=" text-2xl  md:text-3xl">{isIncluded ? "Leave" : "Join"}</h3></button>
        <button className=" border-color outline-none bgOrange  w-36 md:w-36 rounded-xl  md:rounded-lg  hover:bg-orange-400 text-black jura">
          <h3 className=" text-2xl  lg:text-3xl  py-2 " onClick={props.closeModal}>Close</h3>
        </button>
      </div>
    </div>
  );
};

export default JoinSessionModalComponent;

