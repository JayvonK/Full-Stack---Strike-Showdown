"use client"
import FriendsModalComponent from '@/components/PageComponents/ModalComponents/FriendsModalComponent'
import React from 'react'

function page() {
  return (
    <FriendsModalComponent closeModal={function (): void {
          throw new Error('Function not implemented.')
      } }/>

  )
}

export default page
