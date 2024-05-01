import React from "react";
import ProfilePic from "../../../../public/images/Ellipse 16.png";
import { Button } from "flowbite-react";
import "../../../app/css/LoginPage.css";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dispatch, SetStateAction, useState } from "react"
const JoinSessionModalComponent = (props: { addingChallengeBool: boolean, handleFalseChallengeBool: () => void, handleTrueChallengeBool: () => void, create1v1Challenge: (e: React.FormEvent<HTMLFormElement>) => void, createPracticeSession: (e: React.FormEvent<HTMLFormElement>) => void, handleVisibilityChange: (e: string) => void, visibility: boolean, handleLocationOneChange: (e: React.ChangeEvent<HTMLInputElement>) => void, locationOne: string, handleLocationTwoChange: (e: React.ChangeEvent<HTMLInputElement>) => void, locationTwo: string, handleLocationThreeChange: (e: React.ChangeEvent<HTMLInputElement>) => void, locationThree: string, handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, description: string, handleCloseModal: () => void, handleTimeStartChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleTimeEndChange: (e: React.ChangeEvent<HTMLInputElement>) => void, setDate: React.Dispatch<SetStateAction<Date | undefined>>, handleMaxPplChange: (e: React.ChangeEvent<HTMLInputElement>) => void, timeStart: string, timeEnd: string, date: Date | undefined, maxPpl: string }) => {
  return (
    <div>
      <div className="px-5 py-5">
      <div className="bg-orange-500 text-3xl jura rounded-lg px-10 py-2 w-44 "> <p className="text-center">Info</p> </div>
      </div>
      
      <div className="bg-black py-4 px-6  mx-5 rounded-lg  ">
        <div className="flex flex-cols-3">

        
        <div>
          <img src={ProfilePic.src} alt="Your Profile Picture"></img>
        </div>
        <div>
          <p className=" text-orange-500 text-3xl jura px-5 py-1">GodOfBowling</p>
          <div className="flex flex-col-6 gap-5 pl-5">
         <div>
          <p className="text-white jura text-xl py-1">150 Wins</p>
          <p className="text-white jura text-xl py-1">190-200 Avg</p>
         </div>
         <div className="text-white jura  ">
         <p className="text-white jura text-xl py-1 ">Streak: 4</p>
         <p className="text-white jura  text-xl py-1">1 Handed (Lefty)</p>
         </div>
        </div>
        </div>
        
     <h1 className="bg-orange-500 text-2xl jura rounded-lg px-8 h-12 flex items-center py-2">Message</h1>

        </div>
     <div>
      <p className="text-white jura text-2xl">Location:</p>
      <p className=" jura text-2xl text-orange-500">Paddock Bowl</p>
      <div className="flex flex-col-6 justify-between pr-52">
        <div>
        <p className="text-white jura text-2xl">Spots:</p>
        <p className=" jura text-2xl text-orange-500">1/3</p>
        </div>
        <div>
        <p className="text-white jura text-2xl">Time:</p>
        <p className="text-orange-500 text-2xl jura">1:00 - 4:00</p>
        </div>

      </div>

     
      
     </div>
     <div>
     <h3 className='jura text-white text-2xl'>Description:</h3>
                        <p className='w-full h-40 text-orange-500 jura text-2xl  pl-2 mb-2 mt-2 rounded-sm '>{props.description}Practice Session for working on spare shooting. Mainly single pins like 10 pins or 7 pins. Will be practicing for 4 games, maybe more feel free to join.</p>
                  
     </div>
     
      </div>
      <div className="flex justify-end py-3 px-7 pb-10">
      <Button className=" border-color outline-none mr-5   mt-3 bg-orange-500  w-20 md:w-36 rounded-xl  md:rounded-lg  hover:!bg-orange-500 text-black jura">
          <h3 className=" text-base  md:text-3xl   ">Join</h3>
        </Button>
        <Button className=" border-color outline-none   mt-3 bg-orange-500  w-20 md:w-36 rounded-xl  md:rounded-lg  hover:!bg-orange-500 text-black jura">
          <h3 className=" text-base  md:text-3xl   ">Close</h3>
        </Button>
      </div>
   
    </div>
  );
}

export default JoinSessionModalComponent;
