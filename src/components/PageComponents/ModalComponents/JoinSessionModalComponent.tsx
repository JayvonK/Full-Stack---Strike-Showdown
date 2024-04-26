import React from "react";
import ProfilePic from "../../../../public/images/Ellipse 16.png";
import { Button } from "flowbite-react";
import "../../../app/css/LoginPage.css";
function JoinSessionModalComponent() {
  return (
    <div>
      <button> </button>
      <div className="bg-black h-fit px-5 mx-5 rounded-lg flex flex-cols-3 ">
        <div>
          <img src={ProfilePic.src} alt="Your Profile Picture"></img>
        </div>
        <div>
          <p className=" text-orange-500 text-xl">GodOfBowling</p>
        </div>
        <div>
          <button className="bg-orage-500"></button>
        </div>
      </div>
      <div className="flex justify-end py-7 px-7">
        <Button className=" border-color outline-none   mt-3 bg-orange-500  w-20 md:w-36 rounded-xl  md:rounded-lg  hover:!bg-orange-500 text-black jura">
          <h3 className=" text-base  md:text-3xl   ">Close</h3>
        </Button>
      </div>
    </div>
  );
}

export default JoinSessionModalComponent;
