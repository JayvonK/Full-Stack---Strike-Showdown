
import React, { useEffect, useState } from 'react'
import MessagingIcon from "../../../../../public/images/MessageProfile.png"
import { useRouter } from 'next/navigation';
import { INotification, IPublicUserData, IUserPosts } from '@/interfaces/Interfaces';
import ProfileMatchesComponent from '../ProfileMatchesComponent';
import { GetFriendRequestNotificationsAPI } from '@/Data/DataServices';
const ProfileModalComponent = (props: { currentUser: IPublicUserData, userData: IPublicUserData, handleOpenEditModal: () => void, handleCloseUsersProfileModal: () => void, openMyPosts: () => void, openMyInfo: () => void, onInfo: boolean, posts: IUserPosts[], openEditMatchModal: (data: IUserPosts) => void, viewModal: boolean, viewChallenge: (post: IUserPosts) => void, viewSession: (post: IUserPosts) => void, errorToast: () => void, acceptFriend: (id: number, noti: INotification | undefined) => void, declineFriend: (d: number, noti: INotification | undefined) => void, sendFriend: (d: number) => void, removeFriend: (d: number) => void, addDM: (data: IPublicUserData) => void }) => {

  const [friendNoti, setFriendNoti] = useState<INotification>();
  const [friendBool, setFriendBool] = useState<boolean>(false);
  const [pendingRequestBool, setPendingRequestBool] = useState<boolean>(false);
  const [yourRequestBool, setYourRequestBool] = useState<boolean>(false);

  const router = useRouter();

  const handleLogOut = () => {
    localStorage.clear();
    router.push('/');
  }

  const getFriendNoti = async () => {
    const data: INotification = await GetFriendRequestNotificationsAPI(props.currentUser.id, props.userData.id);
    setFriendNoti(data);
  }

  useEffect(() => {
    setFriendBool(false);
    setPendingRequestBool(false);
    setYourRequestBool(false);

    let friendsArray: string[] = props.currentUser.friends.split('-');

    let pendingFriendsArray: string[] = props.currentUser.pendingFriends.split('-');

    let pendingFriendsArray2: string[] = props.userData.pendingFriends.split("-");

    console.log(`Friends: ${friendsArray} | Pending: ${pendingFriendsArray} | Your Request: ${pendingFriendsArray2}`)

    friendsArray.forEach(friend => {
      if (Number(friend) === props.userData.id) {
        console.log("friend true")
        setFriendBool(true);
      }
    })

    pendingFriendsArray.forEach(pend => {
      if (Number(pend) === props.userData.id) {
        console.log("pend true")
        setPendingRequestBool(true);
        getFriendNoti();
      }
    })

    pendingFriendsArray2.forEach(pend => {
      if (Number(pend) === props.currentUser.id) {
        console.log("send friend true")
        setYourRequestBool(true);
      }
    })
  }, [props.currentUser, props.userData])

  return (
    <div className='lg:p-8 p-6 bg-white rounded-md'>
      <div className="grid sm:grid-cols-[40%_60%] lg:mb-8 mb-6">
        <div className='flex sm:justify-normal justify-center items-center sm:mt-6 mb-6 mt-0'>
          <img
            src={props.userData.profileImage}
            className="md:w-48 w-36 aspect-square rounded-full border object-cover border-black lg:ml-8 md:ml-0 sm:ml-3"
          ></img>
        </div>

        <div className='flex sm:justify-end'>
          <div className="bg-black rounded-2xl mx-0 lg:p-8 sm:p-6 p-4 h-full sm:w-full w-[304px]">
            <div className='flex flex-col justify-between h-full jura'>
              <div>

                <h1 className="text-white juraBold lg:text-4xl text-3xl md:pb-4 pb-2 Bold break-words">
                  {props.userData.username}
                </h1>

                <h1 className="text-white  lg:text-3xl sm:text-2xl text-xl pb-6 break-words">
                  {props.userData.pronouns}
                </h1>
              </div>

              <div className="flex justify-between">
                {
                  props.viewModal ? (
                    <>
                      <button className=" bg-orange-500  rounded-lg px-3 py-1  hover:!bg-orange-500 text-black jura" onClick={friendBool ? () => props.removeFriend(props.userData.id) : pendingRequestBool ? () => props.acceptFriend(props.userData.id, friendNoti) : yourRequestBool ? () => { } : () => props.sendFriend(props.userData.id)}>
                        <div className="flex flex-col-2  items-center justify-center">

                          <img alt="Friend Icon" src={`/images/user-${friendBool ? 'minus' : pendingRequestBool ? 'check' : yourRequestBool ? 'sound' : 'plus'}-fill.svg`} className="h-4 lg:h-8 lg:w-8 mr-2" />

                          <div>
                            <h3 className="text-base md:text-2xl text-center">
                              {friendBool ? "Remove" : pendingRequestBool ? "Accept" : yourRequestBool ? "Request Sent" : "Friend"}
                            </h3>
                          </div>
                        </div>
                      </button>

                      {
                        pendingRequestBool &&
                        <button className=" bg-orange-500  rounded-lg px-3 py-1  hover:!bg-orange-500 text-black jura" onClick={() => props.declineFriend(props.userData.id, friendNoti)}>
                          <div className="flex items-center justify-center">

                            <img alt="Friend Icon" src='/images/user-minus-fill.svg' className="h-4 lg:h-8 lg:w-8 mr-2" />

                            <div>
                              <h3 className="text-base md:text-2xl text-center">
                                Deny
                              </h3>
                            </div>
                          </div>
                        </button>
                      }

                      <button className="bg-orange-500 w-24 flex justify-center rounded-lg pt-2 text-black jura" onClick={() => props.addDM(props.userData)}>
                        <img src={MessagingIcon.src} className="h-6 w-6 hover:cursor-pointer" alt="message icon" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="bg-orange-500  rounded-md pt-2 pb-2 md:px-8 px-6  hover:!bg-orange-500 text-black " onClick={props.handleOpenEditModal}>
                        <h3 className="lg:text-3xl text-2xl ">Edit</h3>
                      </button>

                      <button onClick={handleLogOut} className="bg-red-500 md:px-8 px-6 rounded-md pt-2 pb-2  text-black ">
                        <h3 className="lg:text-3xl text-2xl">Log Out</h3>
                      </button>
                    </>
                  )
                }
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Info and posts Section */}
      <div>
        <div className="rounded-xl jura bg-black scrollbar justify-center lg:p-8 sm:p-6 p-4 ">

          <div className='flex sm:mb-4 mb-2'>

            {
              props.onInfo ? (
                <>
                  <h1 className="bg-orange-500 text-center lg:text-3xl text-2xl md:w-36 rounded-md py-2 sm:px-10 px-4 text-black md:mr-40 sm:mr-24 mr-8 hover:cursor-pointer" onClick={props.openMyInfo}>
                    Info
                  </h1>

                  <h1 className="text-white lg:text-3xl text-2xl rounded-xl py-2 sm:px-10 px-4 hover:cursor-pointer" onClick={props.openMyPosts}>
                    Posts
                  </h1>
                </>
              ) : (
                <>
                  <h1 className="text-center lg:text-3xl text-2xl md:w-36 rounded-md py-2 sm:px-10 px-4 text-white md:mr-40 sm:mr-24 mr-8 hover:cursor-pointer " onClick={props.openMyInfo}>
                    Info
                  </h1>

                  <h1 className="bg-orange-500 text-center lg:text-3xl text-2xl rounded-md py-2 sm:px-10 px-4 text-black hover:cursor-pointer " onClick={props.openMyPosts}>
                    Posts
                  </h1>
                </>
              )
            }

          </div>

          {
            props.onInfo ? (
              <>
                <div className="rounded-lg justify-space w-50 grid sm:grid-cols-2 sm:gap-4">
                  <div>
                    <p className="text-white text-xl pt-2">
                      Full Name:
                    </p>
                    <p className="text-orange-500  text-2xl break-words">
                      {props.userData.fullName}
                    </p>
                    <p className="text-white text-xl pt-4 ">
                      Main Center:
                    </p>
                    <p className=" text-orange-500 text-2xl break-words">
                      {props.userData.mainCenter}
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xl pt-2">
                      Style:
                    </p>
                    <p className="text-orange-500 text-2xl break-words">
                      {props.userData.style}
                    </p>
                    <p className="text-white text-xl pt-4">
                      Average:
                    </p>
                    <p className="text-orange-500 text-2xl break-words">
                      {props.userData.average}
                    </p>
                  </div>
                </div>
                <div className=" pt-4 grid sm:grid-cols-3 justify-between items-center">
                  <div>
                    <h1 className="text-white text-xl ">
                      High Game:
                    </h1>
                    <h1 className="text-orange-500 text-2xl break-words">
                      {props.userData.highGame}
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-white text-xl sm:pt-0 pt-4">
                      High Series:
                    </h1>
                    <h1 className="text-orange-500 text-2xl break-words">
                      {props.userData.highSeries}
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-white text-xl sm:pt-0 pt-4">
                      Earnings:
                    </h1>
                    <h1 className="text-orange-500 text-2xl break-words">
                      ${props.userData.earnings}
                    </h1>
                  </div>
                </div>
              </>
            ) :
              (
                props.posts.length === 0 ? (
                  <>
                    <h1 className='text-center text-white sm:text-3xl text-2xl jura min-h-56 flex justify-center pb-12 items-center'>
                      No matches found
                    </h1>
                  </>
                ) : (
                  <div className='overflow-auto max-h-[400px] scrollbar'>
                    {
                      props.posts.map((p, idx) => {
                        if (!p.isFinished) {
                          return p.title === "1v1 Challenge" ? (
                            <ProfileMatchesComponent data={p} key={idx} openEditMatchModal={props.openEditMatchModal} viewMatch={() => props.viewChallenge(p)} viewModal={p.userID !== props.currentUser.id} />
                          ) : (
                            <ProfileMatchesComponent data={p} key={idx} openEditMatchModal={props.openEditMatchModal} viewMatch={() => props.viewSession(p)} viewModal={p.userID !== props.currentUser.id} />
                          )
                        }
                      })
                    }
                  </div>

                ))
          }


        </div>

        <div className='lg:pt-8 pt-6 flex justify-end'>
          <button className={'jura lg:text-3xl text-2xl py-2 px-4 rounded-md bgOrange'} onClick={props.handleCloseUsersProfileModal}>Close</button>
        </div>


      </div>

    </ div>
  )
}

export default ProfileModalComponent

