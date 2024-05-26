"use client"
import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'

function ModalTestPage() {
    const [openModal, setOpenModal] = useState(true);
  return (
    <div>
 <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}size={"md"}>
      {/* <FriendsModalComponent closeModal={function (): void {
              throw new Error('Function not implemented.')
          } }/> */}
          </Modal>
          
    </div>
  )
}

export default ModalTestPage
