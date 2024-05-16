"use client";

import React from 'react'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import FriendsModalComponent from '@/components/PageComponents/ModalComponents/FriendsModalComponent';
import InboxModalComponent from '@/components/PageComponents/ModalComponents/InboxModalComponent';
import ProfileModalComponent from '@/components/PageComponents/ModalComponents/ProfileModalComponent';
import JoinSessionModalComponent from '@/components/PageComponents/ModalComponents/JoinSessionModalComponent';
import ViewProfileModalComponent from '@/components/PageComponents/ModalComponents/ViewProfileModalComponent';
import { IPublicUserData } from '@/interfaces/Interfaces';


function page() {
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
       <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
       <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} size={'2xl'}>

       <FriendsModalComponent closeModal={function (): void {
          throw new Error('Function not implemented.');
        } }/> 
        
     {/* <InboxModalComponent/>    */}
 {/* <ProfileModalComponent data={fakeUserData} handleCloseUsersProfileModal={() => {}} handleOpenEditModal={() => {}}/>    */}
 {/* <JoinSessionModalComponent />  */}
{/* <ViewProfileModalComponent userName={'Briaaa'} proNouns={'hers/she'} record={'15'} mainCenter={'267'} average={'150'} highGames={'140'} highSeries={'100'} earnings={'2000'} style={'Righty'} email={'briaharrold@gmail.com'}/> */}
      </Modal>
    </div>
  )
}

export default page
