"use client";

import React from 'react'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import FriendsModalComponent from '@/components/PageComponents/ModalComponents/FriendsModalComponent';
import InboxModalComponent from '@/components/PageComponents/ModalComponents/InboxModalComponent';
import ProfileModalComponent from '@/components/PageComponents/ModalComponents/ProfileModalComponent';
import AddChallengeModalComponent from '@/components/PageComponents/ModalComponents/AddChallengeModalComponent';
function page() {
    const [openModal, setOpenModal] = useState(true);
  return (

    <div>
       <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>

       {/* <FriendsModalComponent/>  */}
     {/* <InboxModalComponent/>  */}
      <ProfileModalComponent userName={'Tommy201'} proNouns={'Salmon'} fullName={''} mainCenter={''} /> 
     {/* <AddChallengeModalComponent/> */}

      </Modal>
    </div>
  )
}

export default page
