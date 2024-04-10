'use client'
import NavBarComponent from '@/components/PageComponents/NavBarComponent';
import { Navbar, Button, Modal } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import '@/app/css/LoginPage.css'
import bowler from '../../../../public/images/pexels-pavel-danilyuk-7429728.jpg';
import fireIcon from '../../../../public/images/fire-fill.svg'
import { useState } from "react";
import { useAppContext } from '@/context/Context';
import { IPublicUserData, IUserInfoWithStats } from '@/interfaces/Interfaces';
import { GetUserAPI } from '@/Data/DataServices';

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [verifiedUserData, setVerifiedUserData] = useState<IPublicUserData>();
  const pageContext = useAppContext();
  const route = useRouter();



  useEffect(() => {
    if(!pageContext.userLoggedIn){
      route.push('/');
    } else {
      const grabUserData = async() => {
        setVerifiedUserData(await GetUserAPI(pageContext.verifiedUser));
      }

      grabUserData();
    }
  }, [])

  return (
    <div>
      <NavBarComponent />



      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>


      <div className='bgLogin min-h-screen pt-12 px-52 pb-20 relative'>
        <div className='h-full w-full bgHome absolute top-0 left-0 z-10'></div>

        <div className='z-20 relative'>
          <div className='grid grid-cols-[55%_45%] min-h-[310px] mb-40'>
            <div className='bg-black rounded-tl-3xl rounded-bl-3xl'>
              <div className="grid grid-cols-[35%_65%] h-full">
                {/* Col 1 */}
                <div className='pt-14 pl-14'>
                  <div className='w-[211px] h-[211px]'>
                    <img className='object-cover w-full h-full rounded-full' src={bowler.src} alt="" />
                  </div>
                </div>

                {/* Col 2 */}
                <div className='pt-11 pl-7 pr-14 pb-9'>
                  <h1 className='jura text-4xl txtOrange align-top mb-6'><span className='bgWaveIcon w-8 h-8 inline-block mr-3 -mb-1'></span>Welcome Back, <span  className='juraBold text-white underline '>{verifiedUserData && verifiedUserData.username}</span></h1>
                  <div className='flex mb-4'>
                    <h3 className='text-white jura text-2xl'>Wins: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.wins}</span></h3>
                    <h3 className='text-white jura text-2xl ml-14'>Win Streak: <span className='txtOrange juraBold'>0</span></h3>
                  </div>

                  <div className='flex mb-4'>
                    <h3 className='text-white jura text-2xl '>Losses: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.loses}</span></h3>
                    <h3 className='text-white jura text-2xl ml-14'>Average: <span className='txtOrange juraBold'> {verifiedUserData && verifiedUserData.average}</span></h3>
                    {/* <button className='bg-white ' onClick={() => console.log(verifiedUserData)}>click me</button> */}

                  </div>

                  <h3 className='text-white jura text-2xl'>Style: <span className='txtOrange juraBold'> {verifiedUserData && verifiedUserData.style}</span></h3>

                </div>

              </div>
            </div>
            <div className='bg-white rounded-tr-3xl rounded-br-3xl py-10 px-16'>
              <h1 className='jura text-4xl mb-7 align-top'><span className='bgFireIcon w-8 h-8 inline-block mr-3 -mb-1'></span>In the mood for a <span className='juraBold'>challenge</span>? Or <span className='juraBold'>improving</span>?</h1>
              <button className='bgOrange w-full text-2xl juraBold py-2 rounded-lg hover:bg-[#ff9939] mb-6' onClick={() => setOpenModal(true)}>Add a Post</button>
              <button className='bgOrange w-full text-2xl juraBold py-2 rounded-lg hover:bg-[#ff9939]' onClick={() => setOpenModal(true)}>Challenge Friends</button>
            </div>
          </div>



          <div className='max-h-[1200px] bg-black rounded-3xl'>
            <div className='flex'>
              <h1 className='text-black text-4xl juraBold py-4 px-8 bg-[#FF7A00] max-w-[450px] text-center rounded-tl-3xl mb-6'>Available Matches</h1>
              <h1 className='text-white text-4xl jura py-4 px-8 max-w-[450px] text-center ml-6'>Location: <span className='txtOrange'>{pageContext.currentState}</span></h1>
            </div>

            {/* Practice Session Component */}
            <div className='px-10'>
              <div className='grid grid-cols-2'>
                <div className='flex juraBold xl:text-3xl text-2xl'>
                  <h2 className='text-white mr-14'>Practice Session</h2>
                  <h2 className='txtOrange'>1/3</h2>
                </div>
                <div className='flex justify-end'>
                  <button className='bgOrange min-w-56 xl:text-3xl text-2xl juraBold py-2 rounded-3xl hover:bg-[#ff9939]' onClick={() => setOpenModal(true)}>Join</button>
                </div>
              </div>

              <div className='flex my-5'>
                <div className='mr-8'>
                  <div className='w-[105px] h-[105px]'>
                    <img className='w-full h-full rounded-full object-cover' src={bowler.src} alt="bowler's pfp" />
                  </div>
                </div>

                <div className='grid 2xl:grid-cols-[22%_34%_24%_20%] grid-cols-3 w-full'>
                  <div className='pr-8 xl:text-xl text-lg'>
                    <h3 className='jura text-white'>Username</h3>
                    <h3 className='juraBold txtOrange underline cursor-pointer' onClick={() => setOpenModal(true)}>GodOfBowling</h3>
                  </div>
                  <div className='pr-8 2xl:block hidden xl:text-xl text-lg'>
                    <h3 className='jura text-white'>Stats</h3>
                    <div className='flex'>
                      <div className='xl:text-xl text-lg'>
                        <h1 className='juraBold txtOrange'> 150 Wins</h1>
                        <h1 className='juraBold txtOrange'> 190-200 Avg</h1>
                      </div>
                      <div className='flex justify-center px-8'>

                        <div className='line'>
                        </div>

                      </div>
                      <div className='xl:text-xl text-lg'>
                        <h1 className='juraBold txtOrange'> Streak: 4</h1>
                        <h1 className='juraBold txtOrange'> 1 Handed (Lefty)</h1>
                      </div>
                    </div>
                  </div>
                  <div className=' pr-8 xl:text-xl text-lg'>
                    <h3 className='jura text-white'>Location & Date</h3>
                    <h3 className='juraBold txtOrange'>Paddock Bowl, 3/20/24</h3>
                  </div>
                  <div className='xl:text-xl text-lg'>
                    <h3 className='jura text-white'>Time</h3>
                    <h3 className='juraBold txtOrange'>11:00 pm - 14:00 pm</h3>
                  </div>
                </div>
              </div>

              <h3 className='jura xl:text-2xl text-xl text-white'><span className='juraBold txtOrange'>Description: </span> Practice Session for working on spare shooting. Mainly single pins like 10 pins or 7 pins. Will be practicing for 4 games maybe more, feel free to join!</h3>

              <hr className='border-white mt-5 mb-8' />
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default HomePage


