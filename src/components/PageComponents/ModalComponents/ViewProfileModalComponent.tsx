import React, { useState } from "react";
import { Modal } from "flowbite-react";
import "../../../app/css/LoginPageAndHome.css";
import ProfilePic2 from "../../../../public/images/profilePIc.png";
import { useRouter } from "next/navigation";
import AddFriendIcon from "../../../../public/images/UserPlus.png";
import MessagingIcon from "../../../../public/images/MessageProfile.png";
import UserMinus from "../../../../../public/images/UserMinus.png";
import Router from "next/router";
const ViewProfileModalComponent = (props: {
  userName: string;
  email: string;
  proNouns: string;
  record: string;
  mainCenter: string;
  average: string;
  highGames: string;
  highSeries: string;
  earnings: string;
  style: string;
}) => {
  const router = useRouter();
  const [friend, setFriend]= useState<any>()
  const [activeTab, setActiveTab] = useState('Inbox');
  const [pageTab1, setPageTab1] = useState(false);
  const [pageTab2, setPageTab2] = useState(false);
const handleFriend = () => {
  if(!handleFriend){
    setFriend(true)
  }
}
  const handlePage = (tab: any) => {
    if (tab == "Info") {
      setPageTab1(true);
      setPageTab2(false);
    } else{
      setPageTab1(false);
      setPageTab2(true);
    }
setActiveTab(tab);
  };
  return (
    <>
      <div className=" mb-5 flex justify-center mt-5 ">
        <div>
          <img
            src={ProfilePic2.src}
            className=" mt-5 ml-5    pr-4 h-24 md:h-48"
          ></img>
        </div>
        <div className="">
          <div className="grid grid-flow-col overflow-hidden  bg-black rounded-2xl  justify-center md:mx-0 md:px-0 md:pt-4 md:pb-4 md:pr-5  w-64   md:w-96 md:h-60">
            <div className=" ml-8 ">
              <div className="grid grid-flow-col  auto-cols-max justify-start items-center pb-3 ">
                <div>
                  <h1 className="text-white pt-3 juraBold text-xl md:text-4xl  pb-0  juraBold overflow-hidden">
                    {props.userName}
                  </h1>

                  <h1 className="text-white jura text-base md:text-2xl pt-2 ">
                    {props.email}
                  </h1>
                  <h1 className="text-white jura text-base md:text-xl pt-2 pb-2 break-words">
                    {props.proNouns}
                  
                  </h1>
                </div>
              </div>

              <div className=" flex justify-center items-center ">
                <button className="  bg-orange-500  mr-2  rounded-lg px-3 pt-1 pb-1 w-24 lg:w-48   hover:!bg-orange-500 text-black jura">
                  <div className="flex flex-col-2  items-center justify-center">
                   
                      <img
                       alt="Friend Icon"
                        src={AddFriendIcon.src}
                        className="h-4 lg:h-8 lg:w-8 mr-2 lg:mr-4"
                        >
                        
                      </img>
                 
                    <div>
                      <h3 className="text-base md:text-3xl text-center">
                        Friend
                      </h3>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => router.push("/pages/MessagingPage")}
                  className="bg-orange-500 ml-6 w-24 flex justify-center  rounded-lg  pt-2 pb-2  text-black jura"
                >
                  <img
                    src={MessagingIcon.src}
                    className="h-6 w-6 "
                    alt="message icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className=" flex  w-full">
        <div className="rounded-xl  bg-black  py-2 mx-5 px-5  mb-5 md:px-10 ">
          <div className="rounded-xl  justify-space bg-black   grid grid-flow-col auto-cols">
    
            <div className="" >
              <button  className={`   text-center mt-5   text-xl md:text-3xl md:w-40   w-20  rounded-lg  pt-2 pb-2  mb-2  jura ${ activeTab === 'Info'
          ? 'bg-orange-500   '
          : ' text-white'}`}  onClick={() => handlePage('Info')}>
                Info
              </button>
              
              <p className="text-white jura text-lg md:text-xl pt-4">Record:</p>
              <p className="text-orange-500 text-lg jura md:text-2xl ">
                {props.record}
              </p>

              <p className="text-white jura text-lg md:text-xl pt-4 ">
                Main Center:
              </p>

              <p className="overflow-auto text-orange-500 text-lg jura md:text-2xl">
                {props.mainCenter}
              </p>
            </div>
            <div className="" >
              <button className={`jura text-xl  md:text-3xl  mt-5 rounded-lg  px-5  pt-2 pb-2  mb-2 jura ${activeTab === 'Session'
          ? 'bg-orange-500  text-black '
          : ' text-white'}`}  onClick={() => handlePage('Session')}>
                Open Sessions
              </button>
              <p className="text-white jura text-lg md:text-xl pt-4">Style:</p>
              <p className="text-orange-500 text-lg jura md:text-2xl">
                {props.style}
              </p>
              <p className="text-white jura text-lg md:text-xl pt-4">
                Average:
              </p>
              <p className="text-orange-500 text-lg jura md:text-2xl">
                {props.average}
              </p>
            </div>
          </div>
          <div className=" mt-4 pb-5 pt-4 flex flex-col-3  justify-between items-center">
            <div className="">
              <h1 className="text-white text-lg md:text-xl jura text-center">
                High Game:
              </h1>

              <h1 className="text-orange-500 text-lg jura md:text-2xl text-center">
                {props.highGames}
              </h1>
            </div>
            <div>
              <h1 className="text-white jura text-lg md:text-xl text-center">
                High Series:
              </h1>
              <h1 className="text-orange-500 text-lg jura md:text-2xl text-center">
                {props.highSeries}
              </h1>
            </div>
            <div className=" pr-0 lg:pr-14 ">
              <h1 className="text-white jura text-lg md:text-xl text-center">
                Earnings:
              </h1>
              <h1 className="text-orange-500 text-lg jura md:text-2xl text-center">
                ${props.earnings}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfileModalComponent;
