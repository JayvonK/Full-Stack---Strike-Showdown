'use client'
import NavBarComponent from '@/components/PageComponents/NavBarComponent';
import { Navbar, Button, Modal } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import '@/app/css/LoginPage.css'
import postsData from '../../../utils/PostData.json';
import bowler from '../../../../public/images/pexels-pavel-danilyuk-7429728.jpg'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { useState } from "react";
import { useAppContext } from '@/context/Context';
import { IPublicUserData, IUserInfoWithStats, IUserPosts } from '@/interfaces/Interfaces';
import { GetUserAPI } from '@/Data/DataServices';
import PracticePostDummyData from '../../../utils/PostData.json';
import PracticeSessionComponent from '@/components/PageComponents/HomePage/PracticeSessionComponent';
import MatchComponent from '@/components/PageComponents/HomePage/MatchComponent';

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [verifiedUserData, setVerifiedUserData] = useState<IPublicUserData>();
  const [pracitceSessionData, setPracticeSessionData] = useState<(IUserPosts)[]>(postsData);
  const pageContext = useAppContext();
  const route = useRouter();

  const handleJoin = () => {
    setOpenModal(true);
  }

  // useEffect(() => {
  //   if(!pageContext.userLoggedIn){
  //     route.push('/');
  //   } else {
  //     const grabUserData = async() => {
  //       setVerifiedUserData(await GetUserAPI(pageContext.verifiedUser));
  //     }
  //     grabUserData();
  //   }
  // }, [])

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
              The European Union&apos;s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
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
          <div className='grid grid-cols-[55%_45%] min-h-[310px] mb-10'>

            {/* Col 1 */}
            <div className='bg-black rounded-tl-3xl rounded-bl-3xl'>
              <div className="grid grid-cols-[35%_65%] h-full">

                {/* Inner Col 1 */}
                <div className='pt-14 pl-14'>
                  <div className='w-[211px] h-[211px]'>
                    <img className='object-cover w-full h-full rounded-full' src='/images/blankpfp.png' alt="" />
                  </div>
                </div>

                {/*Inner Col 2 */}
                <div className='pt-11 pl-7 pr-14 pb-9'>
                  <h1 className='jura text-4xl txtOrange align-top mb-6'><span className='bgWaveIcon w-8 h-8 inline-block mr-3 -mb-1'></span>Welcome, <span className='juraBold text-white '>{verifiedUserData && verifiedUserData.username}</span></h1>
                  <div className='flex mb-4'>
                    <h3 className='text-white jura text-2xl'>Wins: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.wins}</span></h3>
                    <h3 className='text-white jura text-2xl ml-14'>Win Streak: <span className='txtOrange juraBold'>0</span></h3>
                  </div>

                  <div className='flex mb-4'>
                    <h3 className='text-white jura text-2xl '>Losses: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.loses}</span></h3>
                    <h3 className='text-white jura text-2xl ml-14'>Average: <span className='txtOrange juraBold'> {verifiedUserData && verifiedUserData.average}</span></h3>
                    {/* <button className='bg-white ' onClick={() => console.log(`${bowler.src}`)}>click me</button> */}
                  </div>

                  <h3 className='text-white jura text-2xl'>Style: <span className='txtOrange juraBold'> {verifiedUserData && verifiedUserData.style}</span></h3>

                </div>
              </div>
            </div>

            {/* Cole 2 */}
            <div className='bg-white rounded-tr-3xl rounded-br-3xl py-10 px-14'>
              <h1 className='jura text-4xl mb-7 align-top'><span className='bgFireIcon w-8 h-8 inline-block mr-3 -mb-1'></span>In the mood for a <span className='juraBold'>challenge</span>? Or <span className='juraBold'>improving</span>?</h1>
              <button className='bgOrange w-full text-2xl juraBold py-2 rounded-lg hover:bg-[#ff9939] mb-6' onClick={() => setOpenModal(true)}>Add a Post</button>
              <button className='bgOrange w-full text-2xl juraBold py-2 rounded-lg hover:bg-[#ff9939]' onClick={() => setOpenModal(true)}>Challenge Friends</button>
            </div>
          </div>

          <div className='max-h-[1200px] bg-black rounded-3xl overflow-y-auto overflow-x-hidden scrollbar'>
            <div className='flex'>
              <h1 className='text-black text-4xl juraBold py-4 px-8 bg-[#FF7A00] max-w-[450px] text-center rounded-tl-3xl mb-6'>Available Matches</h1>
              <h1 className='text-white text-4xl jura py-4 px-8 max-w-[450px] text-center ml-6'>Location: <span className='txtOrange'>{pageContext.currentState}</span></h1>
            </div>
            
            {
              pracitceSessionData.map((data, idx) => (
                <div key={idx}>
                  {
                    data.title === 'Practice Session' ? (
                      <PracticeSessionComponent username={data.username} pfp={data.profileImage} wins={data.wins} avg={data.average} streak={data.streak} style={data.style} location={data.locations} time={data.time} join={handleJoin} userClick={handleJoin} description={data.description} currentPpl={data.currentPpl} maxPpl={data.maxPpl} date={data.date} />
                    ) : (
                      <MatchComponent challenge={handleJoin} title={data.title} pfp={data.profileImage} username={data.username} wins={data.wins} streak={data.streak} avg={data.average} style={data.style} locations={data.locations} description={data.description} />
                    )
                  }

                </div>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage


