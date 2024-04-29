'use client'
import NavBarComponent from '@/components/PageComponents/HomePage/NavBarComponent';
import { Navbar, Button, Modal } from 'flowbite-react';
import { format } from 'date-fns'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import '@/app/css/LoginPageAndHome.css';
import postsData from '../../../utils/PostData.json';
import bowler from '../../../../public/images/pexels-pavel-danilyuk-7429728.jpg';
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
import { CreatePostAPI, GetPublicMatchesByStateAPI, GetUserAPI, UpdateUserAPI } from '@/Data/DataServices';
import PracticePostDummyData from '../../../utils/PostData.json';
import PracticeSessionComponent from '@/components/PageComponents/HomePage/PracticeSessionComponent';
import MatchComponent from '@/components/PageComponents/HomePage/MatchComponent';
import AddChallengeModal from '@/components/PageComponents/HomePage/Modals/AddMatchModal';
import RecentWinnerComponent from '@/components/PageComponents/HomePage/RecentWinnerComponent';
import NewNavBarComponent from '@/components/PageComponents/NewNavBarComponent';
import EditProfileModal from '@/components/PageComponents/HomePage/Modals/EditProfileModal';
import { EditLocalStorageUsername, GetLocalStorage } from '@/utils/LocalStorageFunctions';
import MatchSkeleton from '@/components/PageComponents/HomePage/MatchSkeleton';

const HomePage = () => {
  const fakeUserData: IPublicUserData = {
    id: 0,
    username: 'KingOfBowling209',
    email: 'kingofbowling@gmail.com',
    location: 'CA',
    securityQuestion: '',
    securityQuestionTwo: '',
    securityQuestionThree: '',
    fullName: 'Edward Sokel',
    profileImage: '/images/blankpfp.png',
    pronouns: 'he/him',
    wins: 100,
    losses: 50,
    style: '2 Handed (Right)',
    mainCenter: 'Pacific Avenue Bowl',
    average: '120-130 Avg',
    earnings: '$700',
    highGame: '300',
    highSeries: '800',
    streak: 5
  }

  const pageContext = useAppContext();
  const route = useRouter();
  const placeholderDate = new Date();
  const { toast } = useToast();
  const [openModal, setOpenModal] = useState(false);
  const [verifiedUserData, setVerifiedUserData] = useState<IPublicUserData>(fakeUserData);
  const [storage, setStorage] = useState();
  const [currentUsername, setCurrentUsername] = useState<string>();
  const [skeleton, setSkeleton] = useState<boolean>(false);

  // State Variables For Match Data
  const [matchData, setMatchData] = useState<(IUserPosts)[]>(postsData);
  const [visibility, setVisibility] = useState<boolean>(true);
  const [state, setState] = useState<string>('');
  const [locations, setLocations] = useState<string>('');
  const [date, setDate] = useState<Date | undefined>();
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [maxPpl, setMaxPpl] = useState<number>(0);
  const [currentPpl, setCurrentPpl] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [matchModal, setMatchModal] = useState<boolean>(false);
  const [addingChallengeBool, setAddingChallengeBool] = useState<boolean>(true);
  const [locationOne, setLocationOne] = useState<string>('');
  const [locationTwo, setLocationTwo] = useState<string>('');
  const [locationThree, setLocationThree] = useState<string>('');
  const [invitedUsers, setInvitedUsers] = useState<string>('');
  const [invitedUsersArr, setInvitedUsersArray] = useState<string[]>([])

  // State Variables For Edit Match Modal
  const [editModal, setEditModal] = useState<boolean>(false);
  const [editProfileImg, setEditProfileImg] = useState<string>('');
  const [editUsername, setEditUsername] = useState<string>('');
  const [editEmail, setEditEmail] = useState<string>('');
  const [editPronouns, setEditPronouns] = useState<string>('');
  const [editFullName, setEditFullName] = useState<string>('');
  const [editMainCenter, setEditMainCenter] = useState<string>('');
  const [editAverage, setEditAverage] = useState<string>('');
  const [editStyle, setEditStyle] = useState<string>('')
  const [editEarnings, setEditEarnings] = useState<string>('');
  const [editHighGame, setEditHighGame] = useState<string>('');
  const [editHighSeries, setEditHighSeries] = useState<string>('');
  const editData: IPublicUserData = {
    id: 0,
    username: editUsername,
    email: editEmail,
    location: '',
    securityQuestion: '',
    securityQuestionTwo: '',
    securityQuestionThree: '',
    fullName: editFullName,
    profileImage: editProfileImg,
    pronouns: editPronouns,
    wins: 0,
    losses: 0,
    style: editStyle,
    mainCenter: editMainCenter,
    average: editAverage,
    earnings: editEarnings,
    highGame: editHighGame,
    highSeries: editHighSeries,
    streak: 0
  }


  // Formatting Functions
  const locationFormat = (locArr: string[]) => {
    let newArr: string[] = []
    locArr.forEach((loc, idx) => {
      if (idx !== locArr.length - 1) {
        newArr.push(locArr[idx] + ', ')
      } else {
        newArr.push(locArr[idx]);
      }
    })
    return newArr.join();
  }

  const averageStatFormat = (avg: string) => {
    return avg.split("Avg")[0];
  }

  // All functions for Edit Modal

  const setEditData = (data: IPublicUserData) => {
    setEditProfileImg(data.profileImage);
    setEditUsername(data.username);
    setEditEmail(data.email);
    setEditPronouns(data.pronouns);
    setEditFullName(data.fullName);
    setEditMainCenter(data.mainCenter);
    setEditAverage(data.average);
    setEditStyle(data.style)
    setEditEarnings(data.earnings);
    setEditHighGame(data.highGame);
    setEditHighSeries(data.highSeries);
  }
  const openEditModal = () => {
    setEditModal(true);
    setOpenModal(true);
  }

  const handleCloseEditModal = () => {
    setEditModal(false);
    setOpenModal(false);
    setEditData(verifiedUserData);
  }

  const handleEditUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditUsername(e.target.value);
  }
  const handleEditEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditEmail(e.target.value);
  }
  const handleEditPronounsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditPronouns(e.target.value)
  }
  const handleEditFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditFullName(e.target.value)
  }
  const handleEditMainCenterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditMainCenter(e.target.value);
  }
  const handleEditAverageChange = (e: string) => {
    setEditAverage(e);
  }
  const handleEditStyleChange = (e: string) => {
    setEditStyle(e);
  }
  const handleEditEarningChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((Number(e.target.value) || e.target.value === '')) {
      setEditEarnings(e.target.value);
    }
  }
  const handleEditHighGameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((Number(e.target.value) || e.target.value === '') && !e.target.value.includes('.') && Number(e.target.value) <= 300) {
      setEditHighGame(e.target.value)
    } else if (Number(e.target.value) > 300) {
      toast({
        variant: "destructive",
        title: "Error ",
        description: "Your High Game Cannot be over 300",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }
  const handleEditHighSeriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditHighSeries(e.target.value);
  }

  const handleEditUserConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let editUserData: IPublicUserData = {
      id: 0,
      username: editUsername,
      email: editEmail,
      location: verifiedUserData.location,
      securityQuestion: verifiedUserData.securityQuestion,
      securityQuestionTwo: verifiedUserData.securityQuestionTwo,
      securityQuestionThree: verifiedUserData.securityQuestionThree,
      fullName: editFullName === "" ? "N/A" : editFullName,
      profileImage: editProfileImg,
      pronouns: editPronouns === "" ? "N/A" : editPronouns,
      wins: verifiedUserData.wins,
      losses: verifiedUserData.losses,
      style: editStyle === "" ? "N/A" : editStyle,
      mainCenter: editMainCenter === "" ? "N/A" : editMainCenter,
      average: editAverage === "" ? "N/A" : editAverage,
      earnings: editEarnings === "" ? "N/A" : editEarnings,
      highGame: editHighGame === "" ? "N/A" : editHighGame,
      highSeries: editHighSeries === "" ? "N/A" : editHighSeries,
      streak: verifiedUserData.streak
    }

    try {
      const data = await UpdateUserAPI(verifiedUserData.username, editUserData);
      handleCloseEditModal();
      toast({
        title: "Your profile was updated.",
        description: "Yayy",
      })
      EditLocalStorageUsername(editUsername);
      setCurrentUsername(editUsername);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: "Something went wrong.",
        description: "Uh Oh",
      })
    }
  }

  // Handle Functions For Match Modal  

  const openChallengeModal = () => {
    setMatchModal(true);
    setOpenModal(true);
  }
  const handleTrueChallengeBool = () => {
    setAddingChallengeBool(true);
  }

  const handleFalseChallengeBool = () => {
    setAddingChallengeBool(false);
  }

  const handleJoin = () => {
    setOpenModal(true);
  }

  const handleCloseMatchModal = () => {
    setMatchModal(false);
    setOpenModal(false);
  }

  const handleVisibilityChange = (e: string) => {
    e === 'Public' ? setVisibility(true) : setVisibility(false);
  }

  const handleLocationOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationOne(e.target.value);
  }

  const handleLocationTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationTwo(e.target.value);
  }

  const handleLocationThreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationThree(e.target.value);
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  }

  const handleTimeStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  }

  const handleTimeEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);
  }

  const handleMaxPplChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value)) {
      setMaxPpl(Number(e.target.value));
    }
  }

  const handleInvitedUsersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvitedUsers(e.target.value);
  }

  const createPracticeSession = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let PostData: ICreatePost = {
      title: 'Practice Session',
      isVisible: visibility,
      state: verifiedUserData.location,
      locations: locationOne,
      date: date ? format(date, "MM/dd/yy") : "",
      time: startTime + '-' + endTime,
      maxPpl: maxPpl,
      currentPpl: currentPpl,
      description: description,
      isFinished: false,
      invitedUsers: [],
    }

    try {
      const data = await CreatePostAPI(PostData, pageContext.verifiedUser);
      setOpenModal(false);
      setMatchData(await GetPublicMatchesByStateAPI(verifiedUserData.location))
      toast({
        title: "Your Post Was Created!.",
        description: "Yayy",
      })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: "Something went wrong.",
        description: "Uh Oh",
      })
    }
  }

  const create1v1Challenge = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let PostData: ICreatePost = {
      title: '1v1 Challenge',
      isVisible: visibility,
      state: verifiedUserData.location,
      locations: locations,
      date: format(placeholderDate, "MM/dd/yy"),
      time: '',
      maxPpl: 0,
      currentPpl: 0,
      description: description,
      isFinished: false,
      invitedUsers: invitedUsersArr
    }
  }
  // End of functions for match modal

  const handleReloadMatches = async () => {
    // setMatchData(await GetPublicMatchesByStateAPI(verifiedUserData.location))
    setSkeleton(true);
    setTimeout(() => {
      setSkeleton(false);
    }, 2000)
  }

  useEffect(() => {
    let storageArr = GetLocalStorage();
    setStorage(storageArr);
    if (storageArr.length === 0) {
      route.push('/');
    } else {
      const grabUserData = async () => {
        const userData: IPublicUserData = await GetUserAPI(storageArr[0][1]);
        setVerifiedUserData(userData);
        setEditData(userData);
        setMatchData(await GetPublicMatchesByStateAPI(userData.location));
        console.log(locationFormat(['Pac bowl', '400 bowl', '209 bowl']));
        console.log('use effect ran')
      }
      grabUserData();
    }
  }, [currentUsername])

  return (
    <div>
      <NewNavBarComponent />
      <Modal className='bg-black' show={openModal} size={'4xl'} onClose={() => setOpenModal(false)}>
        {
          matchModal && <AddChallengeModal addingChallengeBool={addingChallengeBool} handleTrueChallengeBool={handleTrueChallengeBool} handleFalseChallengeBool={handleFalseChallengeBool} create1v1Challenge={create1v1Challenge} createPracticeSession={createPracticeSession} handleVisibilityChange={handleVisibilityChange} visibility={visibility} handleLocationOneChange={handleLocationOneChange} locationOne={locationOne} handleLocationTwoChange={handleLocationTwoChange} locationTwo={locationTwo} handleLocationThreeChange={handleLocationThreeChange} locationThree={locationThree} handleDescriptionChange={handleDescriptionChange} description={description} handleCloseModal={handleCloseMatchModal} handleTimeStartChange={handleTimeStartChange} handleTimeEndChange={handleTimeEndChange} setDate={setDate} handleMaxPplChange={handleMaxPplChange} timeStart={startTime} timeEnd={endTime} date={date} maxPpl={maxPpl.toString()} />
        }

        {
          editModal && <EditProfileModal data={editData} handleEditStyleChange={handleEditStyleChange} handleCloseEditModal={handleCloseEditModal} handleEditUsernameChange={handleEditUsernameChange} handleEditEmailChange={handleEditEmailChange} handleEditPronounsChange={handleEditPronounsChange} handleEditFullNameChange={handleEditFullNameChange} handleEditMainCenterChange={handleEditMainCenterChange} handleEditAverageChange={handleEditAverageChange} handleEditEarningsChange={handleEditEarningChange} handleEditHighGameChange={handleEditHighGameChange} handleEditHighSeriesChange={handleEditHighSeriesChange} handleEditUserConfirm={handleEditUserConfirm} />
        }
      </Modal>

      <div className='bgLogin min-h-screen pt-12 2xl:px-44 xl:px-36 lg:px-24 sm:px-14 px-6 pb-20 relative'>
        <div className='h-full w-full bgHome absolute top-0 left-0 z-10'></div>

        <div className='z-20 relative'>

          <div className='grid lg:grid-cols-[55%_45%] xl:min-h-[310px] mb-10'>

            {/* Col 1 */}
            <div className='bg-black lg:rounded-tl-3xl lg:rounded-bl-3xl lg:rounded-none sm:rounded-3xl rounded-xl'>

              <div className="grid grid-cols-[30%_70%] xl:px-10 xl:py-10 lg:px-8 lg:py-8 md:px-10 md:py-10 sm:px-8 sm:py-8 px-4 py-4">
                <div className='w-full flex items-center'>
                  <img className='object-cover w-full aspect-auto rounded-full' src={verifiedUserData ? verifiedUserData.profileImage : "/images/blankpfp.png"} alt="" />
                </div>

                <div>
                  <h1 className='jura xl:text-4xl lg:text-3xl sm:text-4xl text-2xl txtOrange mb-6 breakWordStyle xl:pl-10 lg:pl-6 md:pl-10 sm:pl-8 pl-4'><span className='bgWaveIcon w-8 h-8 inline-block mr-3 -mb-1'></span>Welcome, <span className='juraBold text-white'>{verifiedUserData && verifiedUserData.username}</span></h1>

                  <div className='xl:pl-10 lg:pl-6 md:pl-10 sm:pl-8 pl-4'>

                    <div className='xl:hidden lg:flex justify-between hidden'>
                      <h3 className='text-white jura xl:text-2xl text-xl mb-2 mr-10 inline-block'>Wins: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.wins}</span></h3>
                      <h3 className='text-white jura xl:text-2xl text-xl mb-2 2xl:mr-10 inline-block'>Losses: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.losses}</span></h3>
                    </div>

                    <h3 className='text-white jura xl:text-2xl lg:text-xl sm:text-2xl text-lg mb-2 sm:mr-10 mr-8 xl:inline-block lg:hidden inline-block'>Wins: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.wins}</span></h3>
                    <h3 className='text-white jura xl:text-2xl lg:text-xl sm:text-2xl text-lg mb-2 2xl:mr-10 lg:mr-0 md:mr-10 xl:inline-block lg:hidden inline-block'>Losses: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.losses}</span></h3>
                    <h3 className='text-white jura xl:text-2xl lg:text-xl sm:text-2xl text-lg mb-2 mr-10 xl:inline-block lg:hidden sm:inline-block hidden'>Streak: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.streak}</span></h3>
                    <h3 className='text-white jura xl:text-2xl lg:text-xl sm:text-2xl text-lg mb-2 2xl:mr-10 lg:mr-0 md:mr-10 xl:inline-block lg:hidden sm:inline-block hidden'>Avg: <span className='txtOrange juraBold'> {averageStatFormat(verifiedUserData && verifiedUserData.average)}</span></h3>

                    <div className='xl:hidden lg:flex justify-between hidden'>
                      <h3 className='text-white jura xl:text-2xl text-xl mb-2 mr-10 inline-block'>Streak: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.streak}</span></h3>
                      <h3 className='text-white jura xl:text-2xl text-xl mb-2 2xl:mr-10 inline-block'>Avg: <span className='txtOrange juraBold'> {averageStatFormat(verifiedUserData && verifiedUserData.average)}</span></h3>
                    </div>

                    <h3 className='text-white jura xl:text-2xl lg:text-xl sm:text-2xl text-lg sm:inline-block hidden'>Style: <span className='txtOrange juraBold'> {verifiedUserData && verifiedUserData.style}</span></h3>
                  </div>

                </div>
              </div>

              <div className='hidden pl-10 pr-20 pb-10'>
                <div className='flex justify-between'>
                  <h3 className='text-white jura text-2xl mb-2 inline-block'>Wins: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.wins}</span></h3>
                  <h3 className='text-white jura text-2xl mb-2 inline-block'>Losses: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.losses}</span></h3>
                </div>
                <div className='flex justify-between'>
                  <h3 className='text-white jura text-2xl mb-2 inline-block'>Streak: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.streak}</span></h3>
                  <h3 className='text-white jura text-2xl mb-2 inline-block'>Avg: <span className='txtOrange juraBold'> {averageStatFormat(verifiedUserData && verifiedUserData.average)}</span></h3>
                </div>
                <h3 className='text-white jura text-2xl inline-block'>Style: <span className='txtOrange juraBold'> {verifiedUserData && verifiedUserData.style}</span></h3>
              </div>
            </div>

            {/* Col 2 */}
            <div className='bg-white lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-none sm:rounded-3xl rounded-xl xl:p-10 lg:p-8 md:p-10 sm:p-8 p-4 lg:mt-0 mt-8 flex flex-col justify-around'>
              <div>
                <h1 className='jura 2xl:text-4xl lg:text-3xl sm:text-4xl text-2xl mb-7 align-top'><span className='bgFireIcon sm:w-8 sm:h-8 w-6 h-6 inline-block sm:mr-3 mr-2 -mb-1'></span>In the mood for a <span className='juraBold'>challenge</span>? Or <span className='juraBold'>improving</span>?</h1>
              </div>

              <div>
                <button className='bgOrange w-full xl:text-2xl lg:text-xl sm:text-2xl text-lg juraBold sm:py-2 py-1 rounded-lg hover:bg-[#ff9939] xl:mb-6 lg:mb-4 sm:mb-6 mb-3' onClick={openChallengeModal}>Add a Post</button>
                <button className='bgOrange w-full xl:text-2xl lg:text-xl sm:text-2xl text-lg juraBold sm:py-2 py-1 rounded-lg hover:bg-[#ff9939]' onClick={openEditModal}>Challenge Friends</button>
              </div>

            </div>
          </div>

          <div className='min-h-[500px] max-h-[1200px] bg-black sm:rounded-3xl rounded-xl overflow-y-auto overflow-x-hidden scrollbar'>
            <div className='flex'>
              <h1 className='text-black xl:text-4xl text-3xl juraBold py-4 px-8 bg-[#FF7A00] max-w-[450px] text-center sm:rounded-tl-3xl rounded-tl-xl'>Available Matches</h1>
              <h1 className='text-white xl:text-4xl text-3xl jura py-4 px-8 max-w-[450px] text-center ml-6'>Location: <span className='txtOrange'>{verifiedUserData && verifiedUserData.location}</span>
              </h1>
              <div className='flex items-center ml-4'>
                <img className='w-10 h-10 hover:cursor-pointer' src="/images/arrow-clockwise-bold.svg" alt="" onClick={handleReloadMatches}/>
              </div>
            </div>

            <div className='mt-10'></div>

            {
              matchData.length !== 0 ? (
                matchData.map((data, idx) => (
                  <div key={idx}>
                    {
                      data.title === 'Practice Session' ? (
                        skeleton ? (<MatchSkeleton />) : (<PracticeSessionComponent data={data} join={() => { }} userClick={() => { }} />)
                      ) : (
                        skeleton ? (<MatchSkeleton />) : (<MatchComponent challenge={handleJoin} data={data} />)
                      )
                    }
                  </div>
                ))
              ) : (
                <h2 className='text-white text-4xl jura text-center py-10'>
                  No Matches Found.
                </h2>
              )
            }

          </div>

          <div className='min-h-[500px] max-h-[1200px] bg-black sm:rounded-3xl rounded-xl overflow-y-auto overflow-x-hidden scrollbar'>
            <div className='flex'>
              <h1 className='text-black xl:text-4xl text-3xl juraBold py-4 px-8 bg-[#FF7A00] max-w-[450px] text-center sm:rounded-tl-3xl rounded-tl-xl mb-6'>Recent Winners</h1>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 justify-between px-10 pt-7'>
              <RecentWinnerComponent pfp='/images/blankpfp.png' idx={0} />
              <RecentWinnerComponent pfp='/images/blankpfp.png' idx={1} />
              <RecentWinnerComponent pfp='/images/blankpfp.png' idx={2} />
              <RecentWinnerComponent pfp='/images/blankpfp.png' idx={3} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage


