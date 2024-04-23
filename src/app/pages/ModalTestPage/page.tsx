"use client";

import React from 'react'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import FriendsModalComponent from '@/components/PageComponents/ModalComponents/FriendsModalComponent';
function page() {
    const [openModal, setOpenModal] = useState(true);
  return (

    <div>
       <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>

       <FriendsModalComponent/>
    
      </Modal>
    </div>
  )
}

export default page
