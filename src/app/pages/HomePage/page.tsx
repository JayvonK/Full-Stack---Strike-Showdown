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
import { ICreateNotification, ICreatePost, INotification, IPublicUserData, IUserInfoWithStats, IUserPosts } from '@/interfaces/Interfaces';
import { AcceptFriendRequestAPI, AddUserToMatchAPI, CreateNotificationAPI, CreatePostAPI, DeclineFriendRequestAPI, DeleteMatchAPI, GetNotificationsByUserIDAPI, GetPublicMatchesByStateAPI, GetRecentMatchIDByUserIDAPI, GetUserAPI, GetUsernameByIDAPI, GetUsersByStateAPI, RemoveFriendAPI, SendFriendRequestAPI, UpdateMatchAPI, UpdateUserAPI } from '@/Data/DataServices';
import PracticePostDummyData from '../../../utils/PostData.json';
import PracticeSessionComponent from '@/components/PageComponents/HomePage/PracticeSessionComponent';
import MatchComponent from '@/components/PageComponents/HomePage/MatchComponent';
import AddChallengeModal from '@/components/PageComponents/HomePage/Modals/AddMatchModal';
import RecentWinnerComponent from '@/components/PageComponents/HomePage/RecentWinnerComponent';
import NewNavBarComponent from '@/components/PageComponents/NewNavBarComponent';
import EditProfileModal from '@/components/PageComponents/HomePage/Modals/EditProfileModal';
import { EditLocalStorageUsername, GetLocalStorage } from '@/utils/LocalStorageFunctions';
import MatchSkeleton from '@/components/PageComponents/HomePage/MatchSkeleton';
import { averageStatFormat, convertTimeBack, convertToDate, editMatchLocationArr, grabUserPosts, grabViewUserPosts, locationFormat, timeFormat } from '@/utils/Functions';
import ProfileModalComponent from '@/components/PageComponents/HomePage/Modals/ProfileModalComponent';
import InboxModalComponent from '@/components/PageComponents/HomePage/Modals/InboxModalComponent';
import FriendsModalComponent from '@/components/PageComponents/HomePage/Modals/FriendsModalComponent';
import MessagingBubbleComponent from '@/components/PageComponents/MessagingBubbleComponent';
import plusIcon from '../../../../public/images/plus-bold.svg';
import closeIcon from '../../../../public/images/x-bold.svg';
import profile from '../../../../public/images/Profile.png';
import planeIcon from '../../../../public/images/paper-plane-tilt-fill.svg'
import ConfirmationModal from '@/components/PageComponents/HomePage/Modals/ConfirmationModal';
import SearchModal from '@/components/PageComponents/HomePage/Modals/SearchModal';
import JoinSessionModalComponent from '@/components/PageComponents/HomePage/Modals/JoinSessionModalComponent';
import JoinChallengeModal from '@/components/PageComponents/HomePage/Modals/JoinChallengeModal';

const HomePage = () => {
  const fakeUserData: IPublicUserData = {
    id: 1,
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
    earnings: '700',
    highGame: '300',
    highSeries: '800',
    streak: 5,
    pendingFriends: "",
    friends: ""
  }

  const fakeUserData2: IPublicUserData = {
    id: 2,
    username: 'NotKingOfBowling',
    email: 'kingofbowling@gmail.com',
    location: 'CA',
    securityQuestion: '',
    securityQuestionTwo: '',
    securityQuestionThree: '',
    fullName: 'Edward Sokel',
    profileImage: '/images/feetsaiah.png',
    pronouns: 'he/him',
    wins: 100,
    losses: 50,
    style: '2 Handed (Right)',
    mainCenter: 'Pacific Avenue Bowl',
    average: '120-130 Avg',
    earnings: '700',
    highGame: '300',
    highSeries: '800',
    streak: 5,
    pendingFriends: "",
    friends: ""
  }

  const pageContext = useAppContext();
  const route = useRouter();
  const { toast } = useToast();
  const [openModal, setOpenModal] = useState(false);
  const [verifiedUserData, setVerifiedUserData] = useState<IPublicUserData>(fakeUserData);
  const [storage, setStorage] = useState([["", ""]]);
  const [currentUsername, setCurrentUsername] = useState<string>('');
  const [runUseEffect, setRunUseEffect] = useState<boolean>(false);
  const [skeleton, setSkeleton] = useState<boolean>(false);
  const [messagePage, setMessagePage] = useState<boolean>(false);
  const [currentUsersPosts, setCurrentUsersPosts] = useState<IUserPosts[]>([]);
  const [viewUsersPosts, setViewUsersPosts] = useState<IUserPosts[]>([])
  const [viewUserID, setViewUserID] = useState<number>(0);
  const [usersArray, setUsersArray] = useState<IPublicUserData[]>([fakeUserData, fakeUserData, fakeUserData2])

  // State Variables For Match Data
  const [matchData, setMatchData] = useState<(IUserPosts)[]>(postsData);
  const [visibility, setVisibility] = useState<boolean>(true);
  const [state, setState] = useState<string>('');
  const [locations, setLocations] = useState<string>('');
  const [date, setDate] = useState<Date | undefined>();
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [maxPpl, setMaxPpl] = useState<string>('');
  const [currentPpl, setCurrentPpl] = useState<string>('');
  const [practiceDescription, setPracticeDescription] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [matchModal, setMatchModal] = useState<boolean>(false);
  const [addingChallengeBool, setAddingChallengeBool] = useState<boolean>(true);
  const [practiceLocation, setPracticeLocation] = useState<string>('');
  const [locationOne, setLocationOne] = useState<string>('');
  const [locationTwo, setLocationTwo] = useState<string>('');
  const [locationThree, setLocationThree] = useState<string>('');
  const [userMatchIDs, setUserMatchIDs] = useState<string>('');
  const [invitedUsers, setInvitedUsers] = useState<string>('');
  const [invitedUsersArr, setInvitedUsersArray] = useState<string[]>([])
  const [editMatchModal, setEditMatchModal] = useState<boolean>(false);
  const [editingChallengeBool, setEditingChallengeBool] = useState<boolean>(false);
  const [editMatchID, setEditMatchID] = useState<number>(0);
  const [canReloadMatchData, setCanReloadMatchData] = useState<boolean>(true);

  // State Variables for Viewing Matches Modal
  const [viewMatchData, setViewMatchData] = useState<IUserPosts>(postsData[0]);
  const [viewMatchModal, setViewMatchModal] = useState<boolean>(false);
  const [joinSessionModal, setJoinSessionModal] = useState<boolean>(false);
  const [joinChallengeModal, setJoinChallengeModal] = useState<boolean>(false);
  const [joinChallengeLocation, setJoinChallengeLocation] = useState<string>('');

  // State Variables for Users Profile Modal
  const [userProfileModal, setUserProfileModal] = useState<boolean>(false);
  const [onInfo, setOnInfo] = useState<boolean>(true);

  const [viewOtherUserModal, setViewOtherUserModal] = useState<boolean>(false);
  const [viewOtherUserData, setViewOtherUserData] = useState<IPublicUserData>(fakeUserData);

  // State Variables for Inbox Modal
  const [inboxModal, setInboxModal] = useState<boolean>(false);

  // State Variables for Friends Modal
  const [friendsModal, setFriendsModal] = useState<boolean>(false);

  // State Variables for Confirmation Modal
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);
  const [deletePost, setDeletePost] = useState<IUserPosts | undefined>(undefined);

  // State Variables for Search Modal
  const [searchModal, setSearchModal] = useState<boolean>(false);

  // State Variables For Edit User Modal
  const [editModal, setEditModal] = useState<boolean>(false);
  const [editProfileImg, setEditProfileImg] = useState<any>('');
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
  const [editLocation, setEditLocation] = useState<string>('');
  const editData: IPublicUserData = {
    id: 0,
    username: editUsername,
    email: editEmail,
    location: editLocation,
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
    streak: 0,
    pendingFriends: "",
    friends: ""
  }

  // State Variables for Notifications
  const [notificationArray, setNotificationsArray] = useState<INotification[]>([]);
  const [newNotificationBool, setNewNotificationBool] = useState<boolean>(false);

  // Functions for Users Profile Modal

  const openUsersProfileModal = () => {
    setUserProfileModal(true);
    setOpenModal(true);
  }

  const closeUsersProfileModal = () => {
    setUserProfileModal(false);
    setOpenModal(false);
  }

  const openMyInfo = () => {
    setOnInfo(true);
  }

  const openMyPosts = () => {
    setOnInfo(false);
  }

  const acceptFriend = async (otherID: number) => {
    const data = await AcceptFriendRequestAPI(otherID, verifiedUserData.id);
    if (data) {
      let data = await GetUsersByStateAPI(verifiedUserData.location);
      setUsersArray(data);

      let noti: ICreateNotification = {
        senderID: verifiedUserData.id,
        recieverID: otherID,
        postID: 0,
        type: "Inbox Message",
        content: `${verifiedUserData.username} has accepted your friend request! You are now friends`
      }

      await CreateNotificationAPI(noti);

      let noti2: ICreateNotification = {
        senderID: otherID,
        recieverID: verifiedUserData.id,
        postID: 0,
        type: "Inbox Message",
        content: `You've accepted ${await GetUsernameByIDAPI(otherID)}'s friend request. You are now friends`
      }

      await CreateNotificationAPI(noti2);

      updateNotifications();

      toast({
        title: `You've accepted ${await GetUsernameByIDAPI(otherID)}'s friend request. You are now friends`,
        description: "YAY",
      })
    } else {
      toast({
        variant: 'destructive',
        title: "Something went wrong.",
        description: "Uh Oh",
      })
    }
  }

  const declineFriend = async (otherID: number) => {
    const data = await DeclineFriendRequestAPI(otherID, verifiedUserData.id);
    if (data) {
      let data = await GetUsersByStateAPI(verifiedUserData.location);
      setUsersArray(data);

      let noti: ICreateNotification = {
        senderID: verifiedUserData.id,
        recieverID: otherID,
        postID: 0,
        type: "Inbox Message",
        content: `${verifiedUserData.username} has declined your friend request.`
      }

      await CreateNotificationAPI(noti);

      let noti2: ICreateNotification = {
        senderID: otherID,
        recieverID: verifiedUserData.id,
        postID: 0,
        type: "Inbox Message",
        content: `You've declined ${await GetUsernameByIDAPI(otherID)}'s friend request`
      }

      await CreateNotificationAPI(noti2);

      updateNotifications();

      toast({
        title: `You've declined ${await GetUsernameByIDAPI(otherID)}'s friend request`,
        description: "YAY",
      })
    } else {
      toast({
        variant: 'destructive',
        title: "Something went wrong.",
        description: "Uh Oh",
      })
    }
  }

  const sendFriend = async (otherID: number) => {
    const data = await SendFriendRequestAPI(otherID, verifiedUserData.id);
    if (data) {
      let data = await GetUsersByStateAPI(verifiedUserData.location);
      setUsersArray(data);

      let noti: ICreateNotification = {
        senderID: verifiedUserData.id,
        recieverID: otherID,
        postID: 0,
        type: "Inbox FriendRequest",
        content: `${verifiedUserData.username} has sent you a friend request.`
      }

      await CreateNotificationAPI(noti);

      let noti2: ICreateNotification = {
        senderID: otherID,
        recieverID: verifiedUserData.id,
        postID: 0,
        type: "Inbox Message",
        content: `You've sent ${await GetUsernameByIDAPI(otherID)} a friend request`
      }

      await CreateNotificationAPI(noti2);

      updateNotifications();

      toast({
        title: `You've sent ${await GetUsernameByIDAPI(otherID)} a friend request`,
        description: "YAY",
      })
    
    } else {
      toast({
        variant: 'destructive',
        title: "Something went wrong.",
        description: "Uh Oh",
      })
    }
  }

  const removeFriend = async (otherID: number) => {
    const data = await RemoveFriendAPI(otherID, verifiedUserData.id);

    if (data) {
      let data = await GetUsersByStateAPI(verifiedUserData.location);
      setUsersArray(data);

      let noti: ICreateNotification = {
        senderID: verifiedUserData.id,
        recieverID: otherID,
        postID: 0,
        type: "Inbox Message",
        content: `${verifiedUserData.username} has unfriended you :(`
      }

      await CreateNotificationAPI(noti);

      let noti2: ICreateNotification = {
        senderID: otherID,
        recieverID: verifiedUserData.id,
        postID: 0,
        type: "Inbox Message",
        content: `You are no longer friends ${await GetUsernameByIDAPI(otherID)}`
      }

      await CreateNotificationAPI(noti2);

      updateNotifications();

      toast({
        title: `You are no longer friends ${await GetUsernameByIDAPI(otherID)}`,
        description: "YAY",
      })
    
    } else {
      toast({
        variant: 'destructive',
        title: "Something went wrong.",
        description: "Uh Oh",
      })
    }
  }

  // Function for viewing others profile

  const openViewOtherUserModal = () => {
    setViewOtherUserModal(true);
    setOpenModal(true);
  }

  const closeViewOtherUserModal = () => {
    setViewOtherUserModal(false);
    setOpenModal(false);
  }

  // Functions for Friends Modal

  const openFriendsModal = () => {
    setInboxModal(false);
    setFriendsModal(true);
    setOpenModal(true);
    toast({
      title: "This modal has no functionality yet.",
      description: "Sorry about that",
    })
  }

  const closeFriendsModal = () => {
    setFriendsModal(false);
    setOpenModal(false);
  }

  // Functions for Inbox Modal

  const openInboxModal = () => {
    setInboxModal(true);
    setOpenModal(true);
  }

  const closeInboxModal = () => {
    setInboxModal(false);
    setOpenModal(false);
    updateNotifications();
  }

  // Functions for Search Modal

  const openSearchModal = async () => {
    setSearchModal(true);
    setOpenModal(true);
    let data = await GetUsersByStateAPI(verifiedUserData.location);
    setUsersArray(data);
  }

  const closeSearchModal = () => {
    setSearchModal(false);
    setOpenModal(false);
  }

  const clickSearch = (data: IPublicUserData) => {
    setViewOtherUserData(data);
    setViewUserID(data.id)
    setViewUsersPosts(grabViewUserPosts(data.id, matchData));
    openViewOtherUserModal();
  }

  // Functions for Cofirmation Modal

  const openConfirmation = () => {
    setConfirmationModal(true);
  }

  const closeConfirmation = () => {
    setDeletePost(undefined);
    setConfirmationModal(false);
  }

  const deleteMatch = async () => {
    let users = deletePost?.matchUsersIDs.split("-");
    let created = false;

    if (deletePost !== undefined) {
      try {
        await DeleteMatchAPI(deletePost);
        setConfirmationModal(false);
        setEditMatchModal(false);
        setOpenModal(false);
        toast({
          title: "Match Deleted",
          description: "YAY",
        })
        updateAllMatches();

        users?.forEach(async (user, idx) => {
          if (user !== "") {
            let noti: ICreateNotification = {
              senderID: verifiedUserData.id,
              recieverID: Number(user),
              postID: deletePost.id,
              type: "Deleted " + deletePost.title,
              content: idx === 0 ? `You have deleted your ${deletePost.title} that was created on ${deletePost.date}` : `${verifiedUserData.username} has deleted their ${deletePost.title} that was created on ${deletePost.date}`
            }
            await CreateNotificationAPI(noti);
            updateNotifications();
          }
        })
        clearMatchInputs();
      } catch (error) {
        toast({
          variant: 'destructive',
          title: "Something went wrong.",
          description: "Uh Oh",
        })
      }
    }

  }


  // All functions for Edit Modal

  const setEditData = (data: IPublicUserData) => {
    setEditProfileImg(data.profileImage);
    setEditUsername(data.username);
    setEditEmail(data.email);
    setEditLocation(data.location)
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
    setUserProfileModal(false);
    setEditModal(true);
    setOpenModal(true);
  }

  const handleCloseEditModal = () => {
    setUserProfileModal(true);
    setEditModal(false);
    setEditData(verifiedUserData);
  }

  const handleEditProfileImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > 2097152) {
        toast({
          variant: "destructive",
          title: "Error ",
          description: "Your file is too big!",
        })
      } else {
        reader.onload = () => {
          setEditProfileImg(reader.result);
        }
        reader.readAsDataURL(file);
      }

    }
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
  const handleEditLocationChange = (e: string) => {
    setEditLocation(e);
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
      location: editLocation,
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
      streak: verifiedUserData.streak,
      friends: "",
      pendingFriends: ""
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
      setRunUseEffect(!runUseEffect);
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

  const handleCloseMatchModal = () => {
    setMatchModal(false);
    setOpenModal(false);
  }

  const handleVisibilityChange = (e: string) => {
    e === 'Public' ? setVisibility(true) : setVisibility(false);
  }

  const handlePracticeLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPracticeLocation(e.target.value);
  }

  const handleLocationOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== ',') {
      setLocationOne(e.target.value);
    }
  }

  const handleLocationTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== ',') {
      setLocationTwo(e.target.value);
    }
  }

  const handleLocationThreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== ',') {
      setLocationThree(e.target.value);
    }
  }

  const handlePracticeDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPracticeDescription(e.target.value);
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
    if (Number(e.target.value) || e.target.value === "") {
      setMaxPpl(e.target.value);
    }
  }

  const handleCurrentPplChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) || e.target.value === "") {
      setCurrentPpl(e.target.value);
    }
  }

  const handleInvitedUsersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvitedUsers(e.target.value);
  }

  const clearMatchInputs = () => {
    setVisibility(true);
    setLocationOne("");
    setLocationThree("");
    setLocationTwo("");
    setPracticeLocation("");
    setDescription("");
    setPracticeDescription("");
    setStartTime("");
    setEndTime("");
    setMaxPpl("");
    setCurrentPpl("");
    setDate(undefined);
  }

  const createPracticeSession = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0)

    let PostData: ICreatePost = {
      title: 'Practice Session',
      isVisible: visibility,
      state: verifiedUserData.location,
      locations: practiceLocation,
      date: date ? format(date, "MM/dd/yy") : "",
      time: timeFormat(startTime) + '-' + timeFormat(endTime),
      maxPpl: maxPpl === "" ? 0 : Number(maxPpl),
      currentPpl: currentPpl === "" ? 0 : Number(currentPpl),
      description: practiceDescription,
      isFinished: false,
    }
    if (date === undefined || currentDate > date || PostData.date === "") {
      toast({
        variant: 'destructive',
        title: "Make sure the date isn't empty, and that you don't have a date that has already passed.",
        description: "Uh Oh",
      })
    } else if (Number(maxPpl) <= Number(currentPpl) || Number(maxPpl) < 2) {
      toast({
        variant: 'destructive',
        title: "Max amount of people can't be lower than current people. And maxPpl should be greater than 1",
        description: "Uh Oh",
      })
    } else {
      try {
        if (await CreatePostAPI(PostData, currentUsername)) {
          setMatchModal(false);
          setOpenModal(false);
          let noti: ICreateNotification = {
            senderID: verifiedUserData.id,
            recieverID: verifiedUserData.id,
            postID: await GetRecentMatchIDByUserIDAPI(verifiedUserData.id),
            type: "Publisher " + "Practice Session",
            content: "You have created a Practice Session"
          }
          clearMatchInputs();
          await CreateNotificationAPI(noti);
          updateNotifications();
          updateAllMatches();
          toast({
            title: "Your Post Was Created!",
            description: "Yayy",
          })
        }
      } catch (error) {
        toast({
          variant: 'destructive',
          title: "Something went wrong.",
          description: "Uh Oh",
        })
      }
    }
  }

  const create1v1Challenge = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let location = locationFormat([locationOne, locationTwo, locationThree]);

    let PostData: ICreatePost = {
      title: '1v1 Challenge',
      isVisible: visibility,
      state: verifiedUserData.location,
      locations: location === "" ? "Open to any location" : location,
      date: format(new Date(), "MM/dd/yy"),
      time: '1:00 pm-2:00 pm',
      maxPpl: 2,
      currentPpl: 1,
      description: description,
      isFinished: false,
    }

    try {
      if (await CreatePostAPI(PostData, currentUsername)) {
        setMatchModal(false);
        setOpenModal(false);
        let noti: ICreateNotification = {
          senderID: verifiedUserData.id,
          recieverID: verifiedUserData.id,
          postID: await GetRecentMatchIDByUserIDAPI(verifiedUserData.id),
          type: "Publisher " + "1v1 Challenge",
          content: "You have created a 1v1 Challenge"
        }
        clearMatchInputs();
        await CreateNotificationAPI(noti);
        updateNotifications();
        updateAllMatches();
        toast({
          title: "Your Post Was Created!.",
          description: "Yayy",
        })
      }

    } catch (error) {
      toast({
        variant: 'destructive',
        title: "Something went wrong.",
        description: "Uh Oh",
      })
    }
  }

  // View Matches Functions

  const viewMatch = (data: IUserPosts) => {
    setViewMatchData(data);
    data.title === "1v1 Challenge" ? setJoinChallengeModal(true) : setJoinSessionModal(true);
    setOpenModal(true);
  }

  const viewChallenge = (data: IUserPosts) => {
    setViewMatchData(data);
    setJoinChallengeModal(true);
    setOpenModal(true);
  }

  const viewSession = (data: IUserPosts) => {
    setViewMatchData(data);
    setJoinSessionModal(true);
    setOpenModal(true);
  }

  const closeViewMatch = () => {
    setJoinChallengeLocation("");
    setJoinChallengeModal(false);
    setJoinSessionModal(false);
    viewOtherUserModal ? setOpenModal(true) : setOpenModal(false);
  }

  // Join Match Functions

  const handleJoinChallengeLocationChange = (e: string) => {
    setJoinChallengeLocation(e);
  }

  const handleJoinMatch = async (match: IUserPosts) => {
    let noti1: ICreateNotification = {
      senderID: verifiedUserData.id,
      recieverID: match.userID,
      postID: match.id,
      type: "Publisher  " + match.title,
      content: match.title === "1v1 Challenge" ? `${verifiedUserData.username} has accepted your ${match.title} at the location: ${joinChallengeLocation.trim() === "" ? "a custom location" : joinChallengeLocation} !` : `${verifiedUserData.username} has joined your ${match.title} scheduled on ${match.date} at ${match.time}`
    }

    let noti2: ICreateNotification = {
      senderID: match.userID,
      recieverID: verifiedUserData.id,
      postID: match.id,
      type: "Viewer  " + match.title,
      content: match.title === "1v1 Challenge" ? `You have joined ${match.publisher}'s ${match.title} at ${joinChallengeLocation.trim() === "" ? "a custom location" : joinChallengeLocation}, message them for the date and time if you haven't already!` : `You have joined ${match.publisher}'s ${match.title} on ${match.date} at ${match.time}`
    }

    if (await AddUserToMatchAPI(verifiedUserData.id, match)) {
      await CreateNotificationAPI(noti1);
      await CreateNotificationAPI(noti2);
      closeViewMatch();
      updateNotifications();
      updateAllMatches();
      toast({
        title: "You've successfully joined the " + match.title,
        description: "YAY",
      })
    } else {
      toast({
        variant: 'destructive',
        title: "This match is full please join another match",
        description: "Uh Oh",
      })
    }
  }

  // Edit Match Modal

  const setEditMatchModalData = (data: IUserPosts) => {
    let loc = editMatchLocationArr(data.locations);
    let newDate = convertToDate(data.date);
    let timeArr = convertTimeBack(data.time);

    setEditMatchID(data.id);
    setVisibility(data.isVisible);
    setPracticeLocation(data.locations);
    setPracticeDescription(data.description);
    setStartTime(timeArr[0]);
    setEndTime(timeArr[1]);
    setCurrentPpl(data.currentPpl.toString());
    setMaxPpl(data.maxPpl.toString());
    setDescription(data.description);
    setLocationOne(loc[0] === "Open to any location" ? "" : loc[0]);
    setLocationTwo(loc[1]);
    setLocationThree(loc[2]);
    setUserMatchIDs(data.matchUsersIDs)
    setDate(newDate);
  }

  const openEditMatchModal = (data: IUserPosts) => {
    setDeletePost(data);
    setEditMatchModalData(data);
    setEditMatchModal(true);
    data.title === '1v1 Challenge' ? setEditingChallengeBool(true) : setEditingChallengeBool(false);
    setOpenModal(true);
  }

  const closeEditMatchModal = () => {
    setVisibility(true);
    setLocationOne("");
    setLocationThree("");
    setLocationTwo("");
    setPracticeLocation("");
    setDescription("");
    setPracticeDescription("");
    setStartTime("");
    setEndTime("");
    setMaxPpl("");
    setCurrentPpl("");
    setDate(undefined);
    setEditMatchModal(false);
    userProfileModal ? (setOpenModal(true)) : (setOpenModal(false))
  }

  const editMatchClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0)

    let location = locationFormat([locationOne, locationTwo, locationThree]);


    let users = userMatchIDs.split("-");

    let editMatchData: IUserPosts = {
      id: editMatchID,
      userID: verifiedUserData.id,
      title: editingChallengeBool ? '1v1 Challenge' : 'Practice Session',
      isVisible: visibility,
      state: verifiedUserData.location,
      locations: !editingChallengeBool ? practiceLocation : location.trim() === "" ? "Open to any location" : location,
      date: date ? format(date, "MM/dd/yy") : format(new Date(), "MM/dd/yy"),
      time: timeFormat(startTime) + '-' + timeFormat(endTime),
      maxPpl: maxPpl === "" ? 0 : Number(maxPpl),
      currentPpl: currentPpl === "" ? 0 : Number(currentPpl),
      matchUsersIDs: userMatchIDs,
      description: editingChallengeBool ? description : practiceDescription,
      isFinished: false,
      publisher: verifiedUserData.username,
      image: verifiedUserData.profileImage,
      wins: verifiedUserData.wins,
      average: verifiedUserData.average,
      style: verifiedUserData.style,
      streak: verifiedUserData.streak
    }

    if (date === undefined || currentDate > date || editMatchData.date === "") {
      toast({
        variant: 'destructive',
        title: "Make sure the date isn't empty, and that you don't have a date that has already passed.",
        description: "Uh Oh",
      })
    } else if (Number(maxPpl) <= Number(currentPpl) || Number(maxPpl) < 2) {
      toast({
        variant: 'destructive',
        title: "Max amount of people can't be lower than current people. And maxPpl should be greater than 1",
        description: "Uh Oh",
      })
    } else {
      try {
        await UpdateMatchAPI(editMatchData);
        closeEditMatchModal();
        updateAllMatches();
        toast({
          title: "Your Match Was Updated!.",
          description: "Yayy",
        })

        users?.forEach(async (user, idx) => {
          if (user !== "") {
            let noti: ICreateNotification = {
              senderID: verifiedUserData.id,
              recieverID: Number(user),
              postID: editMatchData.id,
              type: Number(user) === verifiedUserData.id ? 'Edited' + editMatchData.title : 'Viewer' + editMatchData.title,
              content: idx === 0 ? `You have edited your ${editMatchData.title}` : `${verifiedUserData.username} has edited their ${editMatchData.title} make sure you click view to see the edits`
            }
            await CreateNotificationAPI(noti);
            updateNotifications();
          }
        })
        clearMatchInputs();
      } catch (error) {
        toast({
          variant: 'destructive',
          title: "Something went wrong.",
          description: "Uh Oh",
        })
      }
    }
  }


  // End of functions for match modal

  const closeAllModals = () => {
    setMatchModal(false);
    setEditModal(false);
    setInboxModal(false);
    setFriendsModal(false);
    setSearchModal(false);
    setEditMatchModal(false);
    setOpenModal(false);
  }

  const goToMessagingPage = () => {
    setMessagePage(true);
    toast({
      title: "Warning! Messaging is still in progress",
      description: "Sorry about that",
    })
  }

  const goToHomePage = () => {
    setMessagePage(false);
  }

  const errorMobileModal = () => {
    toast({
      variant: 'destructive',
      title: "Mobile Modals are still in the works.",
      description: "Sorry about that",
    })
  }

  const [fadeAwayClass, setFadeAwayClass] = useState<string>('');

  const handleReloadMatches = async () => {
    if (canReloadMatchData) {
      updateAllMatches()
      setCanReloadMatchData(false)
      setTimeout(() => {
        setCanReloadMatchData(true);
      }, 13000)
    }
    setFadeAwayClass('fadeAway');

    setTimeout(() => {
      setSkeleton(true);
    }, 500)

    setTimeout(() => {
      setSkeleton(false);
    }, 2500)

    setTimeout(() => {
      setFadeAwayClass('fadeIn');
    }, 2500)

    setTimeout(() => {
      setFadeAwayClass('fadeInTrue');
    }, 2700)
  }

  const updateAllMatches = async () => {
    setMatchData(await GetPublicMatchesByStateAPI(verifiedUserData.location))
    setCurrentUsersPosts(grabUserPosts(verifiedUserData.id, await GetPublicMatchesByStateAPI(verifiedUserData.location)));
    setViewUsersPosts(grabViewUserPosts(viewUserID, await GetPublicMatchesByStateAPI(verifiedUserData.location)));
  }

  const updateNotifications = async () => {
    const notiArr: INotification[] = await GetNotificationsByUserIDAPI(verifiedUserData.id);
    setNotificationsArray(notiArr);
    if (notiArr.length !== 0) {
      notiArr.forEach(noti => {
        if (noti.isDeleted === false && noti.isRead === false) {
          setNewNotificationBool(true);
        }
      })
      if (notiArr.every(noti => noti.isRead === true)) {
        setNewNotificationBool(false);
      }
    }
  }

  const errorToast = () => {
    toast({
      variant: 'destructive',
      title: "Sorry this function is still in progress.",
      description: "Sorry about that",
    })
  }

  useEffect(() => {
    let storageArr = GetLocalStorage();
    setStorage(storageArr);
    if (storageArr.length === 0) {
      route.push('/');
    } else {
      const grabUserData = async () => {
        try {
          const userData: IPublicUserData = await GetUserAPI(storageArr[0][1]);
          // console.log(await GetUsernameByIDAPI(1))
          setVerifiedUserData(userData);
          setEditData(userData);
          setCurrentUsername(storageArr[0][1])
          setMatchData(await GetPublicMatchesByStateAPI(userData.location));
          setCurrentUsersPosts(grabUserPosts(userData.id, await GetPublicMatchesByStateAPI(userData.location)));
          setUsersArray(await GetUsersByStateAPI(userData.location));
          const notiArr: INotification[] = await GetNotificationsByUserIDAPI(userData.id);
          setNotificationsArray(notiArr);
          if (notiArr.length !== 0) {
            notiArr.forEach(noti => {
              if (noti.isDeleted === false && noti.isRead === false) {
                setNewNotificationBool(true);
              }
            })
          }
        } catch (error) {
          localStorage.clear();
          route.push('/');
        }
      }
      grabUserData();
    }
  }, [runUseEffect])

  return (
    <div>
      <NewNavBarComponent openFriendsModal={openFriendsModal} openUsersProfileModal={openUsersProfileModal} openInboxModal={openInboxModal} openSearchModal={openSearchModal} goToHomePage={goToHomePage} goToMessagingPage={goToMessagingPage} errorMobileModal={errorMobileModal} newNotificationBool={newNotificationBool} />
      <Modal className='bg-black lg:flex hidden justify-center bgModal' show={openModal} size={'4xl'} onClose={() => setOpenModal(false)}>

        {/* Everything with match modals */}
        {
          matchModal && <AddChallengeModal addingChallengeBool={addingChallengeBool} handleTrueChallengeBool={handleTrueChallengeBool} handleFalseChallengeBool={handleFalseChallengeBool} create1v1Challenge={create1v1Challenge} createPracticeSession={createPracticeSession} handleVisibilityChange={handleVisibilityChange} visibility={visibility} handleLocationOneChange={handleLocationOneChange} locationOne={locationOne} handleLocationTwoChange={handleLocationTwoChange} locationTwo={locationTwo} handleLocationThreeChange={handleLocationThreeChange} locationThree={locationThree} handlePracticeLocationChange={handlePracticeLocationChange} handlePracticeDescriptionChange={handlePracticeDescriptionChange} handleDescriptionChange={handleDescriptionChange} description={description} handleCloseModal={handleCloseMatchModal} handleTimeStartChange={handleTimeStartChange} handleTimeEndChange={handleTimeEndChange} setDate={setDate} handleMaxPplChange={handleMaxPplChange} timeStart={startTime} timeEnd={endTime} date={date} maxPpl={maxPpl.toString()} practiceLocation={practiceLocation} practiceDescription={practiceDescription} edit={false} closeEditMatchModal={closeEditMatchModal} editMatchClick={editMatchClick} openConfirmation={openConfirmation} currentPpl={currentPpl} handleCurrentPplChange={handleCurrentPplChange} />
        }

        {
          editModal && <EditProfileModal data={editData} handleEditStyleChange={handleEditStyleChange} handleCloseEditModal={handleCloseEditModal} handleEditUsernameChange={handleEditUsernameChange} handleEditEmailChange={handleEditEmailChange} handleEditPronounsChange={handleEditPronounsChange} handleEditFullNameChange={handleEditFullNameChange} handleEditMainCenterChange={handleEditMainCenterChange} handleEditAverageChange={handleEditAverageChange} handleEditEarningsChange={handleEditEarningChange} handleEditHighGameChange={handleEditHighGameChange} handleEditHighSeriesChange={handleEditHighSeriesChange} handleEditUserConfirm={handleEditUserConfirm} handleEditProfileImgChange={handleEditProfileImgChange} handleEditLocationChange={handleEditLocationChange} />
        }

        {
          editMatchModal && editingChallengeBool && !confirmationModal && <AddChallengeModal addingChallengeBool={true} handleTrueChallengeBool={() => { }} handleFalseChallengeBool={() => { }} create1v1Challenge={create1v1Challenge} createPracticeSession={createPracticeSession} handleVisibilityChange={handleVisibilityChange} visibility={visibility} handleLocationOneChange={handleLocationOneChange} locationOne={locationOne} handleLocationTwoChange={handleLocationTwoChange} locationTwo={locationTwo} handleLocationThreeChange={handleLocationThreeChange} locationThree={locationThree} handlePracticeLocationChange={handlePracticeLocationChange} handlePracticeDescriptionChange={handlePracticeDescriptionChange} handleDescriptionChange={handleDescriptionChange} description={description} handleCloseModal={handleCloseMatchModal} handleTimeStartChange={handleTimeStartChange} handleTimeEndChange={handleTimeEndChange} setDate={setDate} handleMaxPplChange={handleMaxPplChange} timeStart={startTime} timeEnd={endTime} date={date} maxPpl={maxPpl.toString()} practiceLocation={practiceLocation} practiceDescription={practiceDescription} edit={true} closeEditMatchModal={closeEditMatchModal} editMatchClick={editMatchClick} openConfirmation={openConfirmation} currentPpl={currentPpl} handleCurrentPplChange={handleCurrentPplChange} />
        }

        {
          editMatchModal && !editingChallengeBool && !confirmationModal && <AddChallengeModal addingChallengeBool={false} handleTrueChallengeBool={() => { }} handleFalseChallengeBool={() => { }} create1v1Challenge={create1v1Challenge} createPracticeSession={createPracticeSession} handleVisibilityChange={handleVisibilityChange} visibility={visibility} handleLocationOneChange={handleLocationOneChange} locationOne={locationOne} handleLocationTwoChange={handleLocationTwoChange} locationTwo={locationTwo} handleLocationThreeChange={handleLocationThreeChange} locationThree={locationThree} handlePracticeLocationChange={handlePracticeLocationChange} handlePracticeDescriptionChange={handlePracticeDescriptionChange} handleDescriptionChange={handleDescriptionChange} description={description} handleCloseModal={handleCloseMatchModal} handleTimeStartChange={handleTimeStartChange} handleTimeEndChange={handleTimeEndChange} setDate={setDate} handleMaxPplChange={handleMaxPplChange} timeStart={startTime} timeEnd={endTime} date={date} maxPpl={maxPpl.toString()} practiceLocation={practiceLocation} practiceDescription={practiceDescription} edit={true} closeEditMatchModal={closeEditMatchModal} editMatchClick={editMatchClick} openConfirmation={openConfirmation} currentPpl={currentPpl} handleCurrentPplChange={handleCurrentPplChange} />
        }

        {
          editMatchModal && confirmationModal && <ConfirmationModal closeConfirmation={closeConfirmation} deleteMatch={deleteMatch} />
        }

        {/* Everything when opening profile modal */}

        {
          userProfileModal && !editMatchModal && !editModal && <ProfileModalComponent currentUser={verifiedUserData} userData={verifiedUserData} handleCloseUsersProfileModal={closeUsersProfileModal} handleOpenEditModal={openEditModal} openMyInfo={openMyInfo} openMyPosts={openMyPosts} onInfo={onInfo} posts={currentUsersPosts} openEditMatchModal={openEditMatchModal} viewModal={false} viewChallenge={viewChallenge} viewSession={viewSession} errorToast={errorToast} acceptFriend={acceptFriend} declineFriend={declineFriend} sendFriend={sendFriend} removeFriend={removeFriend} />
        }

        {
          inboxModal && <InboxModalComponent closeModal={closeInboxModal} openFriendsModal={openFriendsModal} notifications={notificationArray} errorToast={errorToast} acceptFriend={acceptFriend} declineFriend={declineFriend}/>
        }

        {
          friendsModal && <FriendsModalComponent closeModal={closeFriendsModal} />
        }

        {
          searchModal && !viewOtherUserModal && <SearchModal closeModal={closeSearchModal} userArr={usersArray} clickSearch={clickSearch} currentUsername={verifiedUserData.username} />
        }

        {
          searchModal && viewOtherUserModal && !joinChallengeModal && !joinSessionModal && <ProfileModalComponent currentUser={verifiedUserData} userData={viewOtherUserData} handleCloseUsersProfileModal={() => setViewOtherUserModal(false)} handleOpenEditModal={openEditModal} openMyInfo={openMyInfo} openMyPosts={openMyPosts} onInfo={onInfo} posts={viewUsersPosts} openEditMatchModal={openEditMatchModal} viewModal={true} viewChallenge={viewChallenge} viewSession={viewSession} errorToast={errorToast} acceptFriend={acceptFriend} declineFriend={declineFriend} sendFriend={sendFriend} removeFriend={removeFriend} />
        }

        {
          joinChallengeModal && <JoinChallengeModal data={viewMatchData} closeModal={closeViewMatch} joinChallenge={handleJoinMatch} handleJoinChallengeLocationChange={handleJoinChallengeLocationChange} joinChallengeLocation={joinChallengeLocation} currentUserID={verifiedUserData.id} errorToast={errorToast} />
        }

        {
          joinSessionModal && <JoinSessionModalComponent data={viewMatchData} closeModal={closeViewMatch} joinChallenge={handleJoinMatch} currentUserID={verifiedUserData.id} errorToast={errorToast} />
        }

      </Modal>

      <Modal className='bg-black lg:hidden md:flex hidden justify-center items-center' show={openModal} size={'2xl'} onClose={() => setOpenModal(false)}>

      </Modal>

      <Modal className='bg-black md:hidden sm:flex hidden justify-center items-center h-auto' show={openModal} size={'xl'} onClose={() => setOpenModal(false)}>


      </Modal>


      <Modal className='bg-black sm:hidden flex justify-center items-center h-auto' show={openModal} size={'sm'} onClose={() => setOpenModal(false)}>

      </Modal>

      <div className='bgLogin min-h-screen pt-12 2xl:px-44 xl:px-36 lg:px-24 sm:px-14 px-6 pb-20 relative'>
        <div className='h-full w-full bgHome absolute top-0 left-0 z-10'></div>

        <div className='z-20 relative'>

          {
            !messagePage ? (
              <>
                <div className='grid lg:grid-cols-[55%_45%] xl:min-h-[310px] mb-10'>

                  {/* Col 1 */}
                  <div className='bg-black lg:rounded-tl-3xl lg:rounded-bl-3xl lg:rounded-none sm:rounded-3xl rounded-xl'>

                    <div className="grid grid-cols-[30%_70%] xl:px-10 xl:py-10 lg:px-8 lg:py-8 md:px-10 md:py-10 sm:px-8 sm:py-8 px-4 py-4">
                      <div className='w-full flex flex-col items-center justify-center'>
                        <img className='object-cover w-full aspect-square rounded-full hover:cursor-pointer' src={verifiedUserData ? verifiedUserData.profileImage : "/images/blankpfp.png"} alt="" onClick={openEditModal} />
                        {verifiedUserData.profileImage === '/images/blankpfp.png' ? <p className='text-gray-400 jura xl:text-lg sm:text-base text-sm pt-3'>Click to add pfp</p> : <div></div>}
                      </div>

                      <div>
                        <h1 className='jura xl:text-4xl lg:text-3xl sm:text-4xl text-2xl txtOrange mb-6 breakWordStyle xl:pl-10 lg:pl-6 md:pl-10 sm:pl-8 pl-6'><span className='bgWaveIcon sm:w-8 sm:h-8 h-6 w-6 inline-block mr-3 -mb-1'></span>Welcome, <span className='juraBold text-white'>{verifiedUserData && verifiedUserData.username}</span></h1>

                        <div className='xl:pl-10 lg:pl-6 md:pl-10 sm:pl-8 pl-6'>

                          <div className='xl:hidden lg:flex justify-between hidden'>
                            <h3 className='text-white jura xl:text-2xl text-xl mb-2 mr-10 inline-block'>Wins: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.wins}</span></h3>
                            <h3 className='text-white jura xl:text-2xl text-xl mb-2 2xl:mr-10 inline-block'>Losses: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.losses}</span></h3>
                          </div>

                          <h3 className='text-white jura xl:text-2xl lg:text-xl sm:text-2xl text-lg mb-2 sm:mr-10 mr-6 xl:inline-block lg:hidden inline-block'>Wins: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.wins}</span></h3>
                          <h3 className='text-white jura xl:text-2xl lg:text-xl sm:text-2xl text-lg mb-2 2xl:mr-10 lg:mr-0 md:mr-10 mr-6 xl:inline-block lg:hidden inline-block'>Losses: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.losses}</span></h3>
                          <h3 className='text-white jura xl:text-2xl lg:text-xl sm:text-2xl text-lg mb-2 mr-6 xl:inline-block lg:hidden inline-block newHidden'>Streak: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.streak}</span></h3>
                          <h3 className='text-white jura xl:text-2xl lg:text-xl sm:text-2xl text-lg mb-2 2xl:mr-10 lg:mr-0 md:mr-10 mr-6 xl:inline-block lg:hidden inline-block'>Avg: <span className='txtOrange juraBold'> {averageStatFormat(verifiedUserData && verifiedUserData.average)}</span></h3>

                          <div className='xl:hidden lg:flex justify-between hidden'>
                            <h3 className='text-white jura xl:text-2xl text-xl mb-2 mr-10 inline-block'>Streak: <span className='txtOrange juraBold'>{verifiedUserData && verifiedUserData.streak}</span></h3>
                            <h3 className='text-white jura xl:text-2xl text-xl mb-2 2xl:mr-10 inline-block'>Avg: <span className='txtOrange juraBold'> {averageStatFormat(verifiedUserData && verifiedUserData.average)}</span></h3>
                          </div>

                          <h3 className='text-white jura xl:text-2xl lg:text-xl sm:text-2xl text-lg inline-block newHidden'>Style: <span className='txtOrange juraBold'> {verifiedUserData && verifiedUserData.style}</span></h3>
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
                      <button className='bgOrange w-full xl:text-2xl lg:text-xl sm:text-2xl text-lg juraBold sm:py-2 py-1 rounded-lg hover:bg-[#ff9939]' onClick={openFriendsModal}>Challenge Friends</button>
                    </div>

                  </div>
                </div>

                <div className='min-h-[500px] max-h-[1200px] bg-black sm:rounded-3xl rounded-xl overflow-y-auto overflow-x-hidden scrollbar'>
                  <div className='flex'>
                    <h1 className='text-black xl:text-4xl lg:text-3xl sm:text-2xl text-xl juraBold py-4 px-8 bg-[#FF7A00] inline-block md:text-center sm:rounded-tl-3xl rounded-tl-xl'>Available Matches</h1>
                    <h1 className='text-white xl:text-4xl lg:text-3xl text-2xl jura py-4 px-8 md:text-center md:ml-6 md:block hidden'>Location: <span className='txtOrange'>{verifiedUserData && verifiedUserData.location}</span>
                    </h1>
                    <div className='flex items-center ml-4'>
                      <img className='sm:w-10 sm:h-10 w-8 h-8 hover:cursor-pointer' src="/images/arrow-clockwise-bold.svg" alt="" onClick={handleReloadMatches} />
                    </div>
                  </div>
                  <h1 className='text-white xl:text-4xl lg:text-3xl sm:text-2xl text-xl jura py-4 px-8 md:text-center md:ml-6 md:hidden block'>Location: <span className='txtOrange'>{verifiedUserData && verifiedUserData.location}</span></h1>

                  <div className={'md:mt-10 mt-6 opacity-0'}></div>

                  {
                    matchData.length !== 0 ? (
                      matchData.map((data, idx) => (
                        <div key={idx}>
                          {
                            data.isVisible && !data.isFinished && Number(data.maxPpl) !== Number(data.currentPpl) ? data.title === 'Practice Session' ? (
                              skeleton ? (<MatchSkeleton />) : (<PracticeSessionComponent fadeAway={fadeAwayClass} data={data} join={() => viewMatch(data)} userClick={() => { }} edit={data.publisher === currentUsername} handleEditMatchClick={() => { openEditMatchModal(data) }} userID={verifiedUserData.id} />)
                            ) : (
                              skeleton ? (<MatchSkeleton />) : (
                                <MatchComponent fadeAway={fadeAwayClass} challenge={() => viewMatch(data)} data={data} edit={data.publisher === currentUsername} handleEditMatchClick={() => { openEditMatchModal(data) }} userID={verifiedUserData.id} />
                              )
                            )

                              : (
                                <div></div>
                              )
                          }
                        </div>
                      )).reverse()
                    ) : (
                      <h2 className='text-white text-4xl jura text-center py-10'>
                        No Matches Found.
                      </h2>
                    )
                  }

                </div>

                <div className='min-h-[500px] max-h-[1200px] bg-black sm:rounded-3xl rounded-xl overflow-y-auto overflow-x-hidden scrollbar mt-10'>
                  <div className='flex'>
                    <h1 className='text-black xl:text-4xl lg:text-3xl sm:text-2xl text-xl juraBold py-4 px-8 bg-[#FF7A00] inline-block md:text-center sm:rounded-tl-3xl rounded-tl-xl mb-6'>Recent Winners</h1>
                  </div>

                  <div className='grid lg:grid-cols-2 grid-cols-1 justify-between md:px-10 sm:px-8 px-4'>
                    <RecentWinnerComponent pfp='/images/blankpfp.png' idx={0} errorToast={errorToast} />
                    <RecentWinnerComponent pfp='/images/blankpfp.png' idx={1} errorToast={errorToast} />
                    <RecentWinnerComponent pfp='/images/blankpfp.png' idx={2} errorToast={errorToast} />
                    <RecentWinnerComponent pfp='/images/blankpfp.png' idx={3} errorToast={errorToast} />
                  </div>
                </div>
              </>

            ) : (

              // Start of Messaging UI

              <div className='pb-16 grid lg:grid-cols-[31%_69%] h-[85vh] z-20 relative'>

                <div className='bg-black rounded-3xl px-7 py-7'>

                  <div className='flex justify-between items-center mb-7'>
                    <h2 className='2xl:text-[40px] xl:text-4xl lg:text-3xl sm:text-4xl text-3xl juraBold text-white'>Messages</h2>
                    <div className='w-[45px] h-[45px]'>
                      <img className='w-full h-full object-cover hover:cursor-pointer' src={plusIcon.src} alt="" />
                    </div>
                  </div>

                  <hr className='border-white mb-8' />

                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <div>
                        <div className='2xl:w-[72px] 2xl:h-[72px] w-16 h-16'>
                          <img className='w-full h-full object-cover ' src={profile.src} alt="" />
                        </div>
                      </div>
                      <div className='ml-4 mr-2'>
                        <h3 className='juraBold xl:text-2xl lg:text-xl sm:text-2xl text-xl text-white break-words'>bowler</h3>
                        <h5 className='jura xl:text-xl lg:text-lg sm:text-xl text-lg text-gray-300'> He/Him</h5>
                      </div>
                    </div>

                    <div className='w-[45px] h-[45px]'>
                      <img className='w-full h-full object-cover hover:cursor-pointer' src={closeIcon.src} alt="" />
                    </div>
                  </div>

                  <hr className='border-white mt-8' />


                </div>

                <div className='bg-black lg:rounded-3xl rounded-xl lg:ml-4 lg:py-7 lg:px-10 py-4 px-4 relative lg:flex hidden flex-col justify-between '>
                  <div>
                    <div className='flex lg:justify-between justify-center relative'>
                      <div className='flex lg:flex-row flex-col items-center'>
                        <div>
                          <div className='sm:w-[72px] sm:h-[72px] w-12 h-12'>
                            <img className='w-full h-full object-cover ' src={profile.src} alt="" />
                          </div>
                        </div>
                        <div className='lg:ml-6 2xl:max-w-full xl:max-w-80 max-w-60'>
                          <h3 className='juraBold xl:text-3xl text-2xl text-white break-words lg:block hidden'>bowler</h3>
                          <h5 className='jura text-xl text-gray-300 lg:block hidden'> He/Him</h5>

                          <h3 className='jura sm:text-xl text-lg text-white break-words mt-1 lg:hidden'>bowler</h3>
                        </div>
                      </div>

                      <div className='lg:flex items-start hidden'>
                        <button className='px-5 py-5 xl:text-2xl text-xl text-black juraBold bg-[#FF7A00] rounded-3xl'>Challenge</button>
                      </div>

                      <img className='lg:hidden absolute -left-2 top-4 sm:h-16 h-12' src="/images/caret-left-bold.svg" alt="" />
                    </div>
                    <hr className='border-white mt-4' />


                  </div>

                  <div className='h-full py-5'>
                    <MessagingBubbleComponent isSender={true} content={'Hey whats up?'} />
                    <MessagingBubbleComponent isSender={false} content={'Nothin wbu?'} />
                  </div>

                  <div className='flex bg-white py-1 rounded-xl items-center pr-5'>
                    <textarea className='w-full bg-transparent sm:text-2xl text-lg jura placeholder:text-black focus:outline-none pl-4 pr-3 ' rows={1} placeholder='Send A Message'></textarea>
                    <div className='lg:w-12 lg:h-12 sm:w-10 sm:h-10 h-8 w-8'>
                      <img className='w-full h-full' src={planeIcon.src} alt="" />
                    </div>
                  </div>
                </div>
              </div >
            )
          }

        </div >
      </div >

    </div >
  )
}

export default HomePage


