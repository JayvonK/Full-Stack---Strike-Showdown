'use client'
import NavBarComponent from '@/components/PageComponents/NavBarComponent';
import { Navbar, Button, Modal } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import '@/app/css/LoginPage.css';
import postsData from '../../../utils/PostData.json';
import bowler from '../../../../public/images/pexels-pavel-danilyuk-7429728.jpg'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import { useState } from "react";
import { useAppContext } from '@/context/Context';
import { ICreatePost, IPublicUserData, IUserInfoWithStats, IUserPosts } from '@/interfaces/Interfaces';
import { CreatePostAPI, GetUserAPI } from '@/Data/DataServices';
import PracticePostDummyData from '../../../utils/PostData.json';
import PracticeSessionComponent from '@/components/PageComponents/HomePage/PracticeSessionComponent';
import MatchComponent from '@/components/PageComponents/HomePage/MatchComponent';

const HomePage = () => {
  const { toast } = useToast();
  const [openModal, setOpenModal] = useState(false);
  const [verifiedUserData, setVerifiedUserData] = useState<IPublicUserData>();
  const [pracitceSessionData, setPracticeSessionData] = useState<(IUserPosts)[]>(postsData);
  const [visibility, setVisibility] = useState<boolean>(true);
  const [state, setState] = useState<string>('');
  const [locations, setLocations] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [maxPpl, setMaxPpl] = useState<number>(0);
  const [currentPpl, setCurrentPpl] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const pageContext = useAppContext();
  const route = useRouter();

  const handleJoin = () => {
    setOpenModal(true);
  }


  const createPracticeSession = async () =>{
    let PostData: ICreatePost = {
      title: 'Practice Session',
      visibility: true,
      state: state,
      locations: locations,
      date: date,
      time: startTime + '-' + endTime,
      maxPpl: maxPpl,
      currentPpl: currentPpl,
      description: description,
      isFinished: false
    }

    try {
      const data = await CreatePostAPI(PostData, pageContext.verifiedUser);
      setOpenModal(false);
      toast({
        title: "Your Post Was Created!.",
        description: "Yayy",
      })
    } catch (error) {
      
    }
  }

  const create1v1Challenge = async () => {
    let PostData: ICreatePost = {
      title: '1v1 Challenge',
      visibility: true,
      state: state,
      locations: locations,
      date: '',
      time: '',
      maxPpl: 0,
      currentPpl: 0,
      description: description,
      isFinished: false
    }
  }

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
            <h1>Create Practice Session</h1>
            <input type="text" value={"public"} />
            <input type="text" placeholder='locations' />
            <input type="text" placeholder='date' />
            <input type="text" placeholder='starts at' />
            <input type="text" placeholder='ends at' />
            <input type="text" placeholder='maxppl' />
            <input type="text" placeholder='currentppl' />
            <input type="text" placeholder='description' />
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
                    <h3 className='text-white jura text-2xl ml-14'>Win Streak: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.streak}</span></h3>
                  </div>

                  <div className='flex mb-4'>
                    <h3 className='text-white jura text-2xl '>Losses: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.losses}</span></h3>
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
              <h1 className='text-white text-4xl jura py-4 px-8 max-w-[450px] text-center ml-6'>Location: <span className='txtOrange'>{verifiedUserData && verifiedUserData.location}</span></h1>
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


