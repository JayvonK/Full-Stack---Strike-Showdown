"use client";
import React from 'react'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import FriendsModalComponent from '@/components/PageComponents/ModalComponents/FriendsModalComponent';
import InboxModalComponent from '@/components/PageComponents/ModalComponents/InboxModalComponent';
import ProfileModalComponent from '@/components/PageComponents/ModalComponents/ProfileModalComponent';
import JoinSessionModalComponent from '@/components/PageComponents/ModalComponents/JoinSessionModalComponent';
import ViewProfileModalComponent from '@/components/PageComponents/ModalComponents/ViewProfileModalComponent';
import { IPublicUserData, IUserPosts } from '@/interfaces/Interfaces';
function page() {
    const fakeUserData2: IUserPosts = {
        id: 0,
    userID: 0,
    title: "Practice Session",
    isVisible: true,
    state: "CA",
    locations: "Pacific Avenue Bowl",
    date: "2/3/22",
    time: "3:00 - 5:00 pm",
    maxPpl: 5,
    currentPpl: 2,
    description: "Aye if you like jacuzzis, come join me at the bowling alley",
    isFinished: false,
    publisher: "Jacoozi",
    image: "/images/Jacoozzi (1).png",
    wins: 32,
    average: "160-170 Avg",
    style: "1 Handed (Left)",
    streak: 1,
    invitedUsers: []
      }
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
    earnings: '700',
    highGame: '300',
    highSeries: '800',
    streak: 5
  }
    const [openModal, setOpenModal] = useState(true);
  return (
    <div>
       {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
       <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} size={'4xl'}>
        <JoinSessionModalComponent data={fakeUserData2} closeModal={function (): void {
                  throw new Error('Function not implemented.');
              } } joinChallenge={function (): void {
                  throw new Error('Function not implemented.');
              } }/>
      </Modal>
    </div>
  )
}
export default page