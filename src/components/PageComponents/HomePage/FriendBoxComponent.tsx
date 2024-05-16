import React from 'react'
import UserMinus from "../../../../public/images/UserMinus.png";
import ProfilePic from "../../../../public/images/Ellipse 16.png";
import Image from 'next/image';
function FriendBoxComponent(props: {userName: string, userImage: string,challengeBtn: () => void, message: () => void} ) {


  return (
     //   <Card className="max-w-sm">
 
  //   <div className="grid grid-cols-2 items-center ">
  //     <div>
  //     <Image
  //       alt="Bonnie image"
  //       height="96"
  //       src={ProfilePic.src}
  //       width="96"
  //       className=" rounded-full shadow-lg"
  //     />
  //     </div>
  //     <div>
  //     <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
  //     <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
  //     <div className=" gap-4  flex flex-wrap justify-center space-x-3 ">
  //       <a
  //         href="#"
  //         className=" items-center rounded-sm   px-4 py-1 text-center text-sm font-medium bg-orange-500   hover:!bg-orange-500 text-black jura"
  //       >
  //         Challenge
  //       </a>
  //       <a
  //         href="#"
  //         className="items-center rounded-sm  px-4 py-1  text-center text-sm font-medium bg-orange-500  hover:!bg-orange-500 text-black jura"
  //       >
  //         Message
  //       </a>
  //     </div>
  //     </div>
  //   </div>
  // </Card>
   
    
   
  <div
  className="  py-2 bg-black md:w-48  lg:w-54 xl:w-64 items-center mx-auto   rounded-2xl   "
  
>
{/* <div className="flow-root">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <Image
                  alt="Neil image"
                  height="32"
                  src={ProfilePic}
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
            </div>
          </div>
          </div>
          </div> */}

 <div className="grid  grid-flow-col-dense gap-2  justify-center items-center    ">
  <div className=" grid justify-center mr-1  ml-0 md:mr-1 md:ml-1 lg:mr-2 xl:mr-5 shrink-0">
    <img className=' h-9 w-9 md:h-12 md:w-12   lg:!h-14 lg:!w-14 ' src={ProfilePic.src}></img>
  </div>
  <div className=" ">
     
      <div className='flex flex-col-2 justify-end
       md:justify-center lg:justify-start  items-center'>
        <div className='grid justify-end md:justify-center lg:justify-start  items-center'>
        <img
        data-nimg="intrinsic"
          onClick={() => {}}
          src={UserMinus.src}
          className="pr-2 h-4 w-6  md:!h-5 md:!w-7 "

        ></img>
        </div>

        <div className=''>
        <h1 className="text-white jura truncat text-sm md:text-md lg:text-lg xl:text-xl font-bold overflow-y-hidden ">BowlerDude</h1>
        </div>
      
       
      </div>
       <div className=" grid gap-1 grid-wrap justify-center pr-4  md:justify-center lg:justify-start ">
        <div>
   <a
  href="#"
    className=" items-center  text-xs truncate px-2.5  md:px-6 py-1 text-center xl:text-sm font-medium bg-orange-500   hover:!bg-orange-500 text-black jura"
     >
        Challenge
     </a>
     </div>
     <div>
      <a
    href="#"
       className="items-center truncate text-xs  xl:text-sm  px-3.5   md:px-7  py-1  text-center  font-medium bg-orange-500  hover:!bg-orange-500 text-black jura"
    >
      Message
    </a> 
    </div>

  </div>
  </div> 

</div> 
</div>
  )
}
export default FriendBoxComponent
 
    // <div className="flex flex-col-2  flex-wrap gap-2  justify-center   ">
    //   <div>
    
    // <div
    //   className=" grid grid-flow-col p-4  w-72  justify-evenly bg-black rounded-2xl w-50"
      
    // >
    //   <div className="flex  items-center">
    //     <img className='    h-20 w-20' src={ProfilePic.src}></img>
    //   </div>
    //   <div className="ml-5">
    //     <div className="grid grid-flow-col auto-cols-max justify-start items-center pb-3 ">
    //       <div>
    //         <img
    //           onClick={() => {}}
    //           src={UserMinus.src}
    //           className="pr-2"
    //         ></img>
    //       </div>
    //       <div>
    //         <h1 className="text-white jura text-xl ">BowlerDude</h1>
    //       </div>
    //     </div>
    //     <button
          
    //       className=" bg-orange-500 w-36  hover:!bg-orange-500 mb-2 text-black jura"
    //     >
    //       <h3 className="text-1xl">Challenge</h3>
    //     </button>
    //     <br></br>
    //     <button
          
    //       className=" bg-orange-500 w-36  hover:!bg-orange-500 text-black jura"
    //     >
    //       <h3 className="text-1xl">Message</h3>
    //     </button>
    //   </div>
    // </div>
    // </div>
   
  
   
    // </div>

