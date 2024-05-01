"use client";

import React from 'react'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import FriendsModalComponent from '@/components/PageComponents/ModalComponents/FriendsModalComponent';
import InboxModalComponent from '@/components/PageComponents/ModalComponents/InboxModalComponent';
import ProfileModalComponent from '@/components/PageComponents/ModalComponents/ProfileModalComponent';
import JoinSessionModalComponent from '@/components/PageComponents/ModalComponents/JoinSessionModalComponent';
import ViewProfileModalComponent from '@/components/PageComponents/ModalComponents/ViewProfileModalComponent';
import ChallengeFriendsModelComponent from '@/components/PageComponents/ModalComponents/ChallengeFriendsModelComponent';

function page() {
    const [openModal, setOpenModal] = useState(true);
  return (

    <div>
       <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>

       {/* <FriendsModalComponent/>  */}
     {/* <InboxModalComponent/>  */}
      {/* <ProfileModalComponent userName={'Tommy201'} proNouns={'Salmon'} fullName={'alphaMale'} mainCenter={'Packed Man'} average={'1000'} highGames={'911'} highSeries={'111'} earnings={'4'} style={'quadruple handroll'} />  */}
{/* <JoinSessionModalComponent addingChallengeBool={false} handleFalseChallengeBool={function (): void {
          throw new Error('Function not implemented.');
        } } handleTrueChallengeBool={function (): void {
          throw new Error('Function not implemented.');
        } } create1v1Challenge={function (e: React.FormEvent<HTMLFormElement>): void {
          throw new Error('Function not implemented.');
        } } createPracticeSession={function (e: React.FormEvent<HTMLFormElement>): void {
          throw new Error('Function not implemented.');
        } } handleVisibilityChange={function (e: string): void {
          throw new Error('Function not implemented.');
        } } visibility={false} handleLocationOneChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        } } locationOne={''} handleLocationTwoChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        } } locationTwo={''} handleLocationThreeChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        } } locationThree={''} handleDescriptionChange={function (e: React.ChangeEvent<HTMLTextAreaElement>): void {
          throw new Error('Function not implemented.');
        } } description={''} handleCloseModal={function (): void {
          throw new Error('Function not implemented.');
        } } handleTimeStartChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        } } handleTimeEndChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        } } setDate={function (value: React.SetStateAction<Date | undefined>): void {
          throw new Error('Function not implemented.');
        } } handleMaxPplChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        } } timeStart={''} timeEnd={''} date={undefined} maxPpl={''}/> */}
{/* <ChallengeFriendsModelComponent addingChallengeBool={false} handleFalseChallengeBool={function (): void {
          throw new Error('Function not implemented.');
        } } handleTrueChallengeBool={function (): void {
          throw new Error('Function not implemented.');
        } } create1v1Challenge={function (e: React.FormEvent<HTMLFormElement>): void {
          throw new Error('Function not implemented.');
        } } createPracticeSession={function (e: React.FormEvent<HTMLFormElement>): void {
          throw new Error('Function not implemented.');
        } } handleVisibilityChange={function (e: string): void {
          throw new Error('Function not implemented.');
        } } visibility={false} handleLocationOneChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        } } locationOne={''} handleLocationTwoChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        } } locationTwo={''} handleLocationThreeChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        } } locationThree={''} handleDescriptionChange={function (e: React.ChangeEvent<HTMLTextAreaElement>): void {
          throw new Error('Function not implemented.');
        } } description={''} handleCloseModal={function (): void {
          throw new Error('Function not implemented.');
        } } handleTimeStartChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        } } handleTimeEndChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        } } setDate={function (value: React.SetStateAction<Date | undefined>): void {
          throw new Error('Function not implemented.');
        } } handleMaxPplChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        } } timeStart={''} timeEnd={''} date={undefined} maxPpl={''}/> */}
<ViewProfileModalComponent userName={'Briaaa'} proNouns={'hers/she'} record={'15'} mainCenter={'267'} average={'150'} highGames={'140'} highSeries={'100'} earnings={'2000'} style={'Righty'} email={'briaharrold@gmail.com'}/>

      </Modal>
    </div>
  )
}

export default page
