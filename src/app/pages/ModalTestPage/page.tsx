"use client";

import React from 'react'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import FriendsModalComponent from '@/components/PageComponents/ModalComponents/FriendsModalComponent';
import InboxModalComponent from '@/components/PageComponents/ModalComponents/InboxModalComponent';
import ProfileModalComponent from '@/components/PageComponents/ModalComponents/ProfileModalComponent';
import JoinSessionModalComponent from '@/components/PageComponents/ModalComponents/JoinSessionModalComponent';
import ViewProfileModalComponent from '@/components/PageComponents/ModalComponents/ViewProfileModalComponent';


function page() {
    const [openModal, setOpenModal] = useState(true);
  return (

    <div>
       <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>

       {/* <FriendsModalComponent/>  */}
     <InboxModalComponent/>  
      {/* <ProfileModalComponent userName={'Tommy201'} proNouns={'Salmon'} fullName={'alphaMale'} mainCenter={'Packed Man'} average={'1000'} highGames={'911'} highSeries={'111'} earnings={'4'} style={'quadruple handroll'} />  */}
 {/* <JoinSessionModalComponent />  */}
{/* <ViewProfileModalComponent userName={'Briaaa'} proNouns={'hers/she'} record={'15'} mainCenter={'267'} average={'150'} highGames={'140'} highSeries={'100'} earnings={'2000'} style={'Righty'} email={'briaharrold@gmail.com'}/> */}

      </Modal>
    </div>
  )
}

export default page
