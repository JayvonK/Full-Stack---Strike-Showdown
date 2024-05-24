"use client"
import FriendsModalComponent from '@/components/PageComponents/ModalComponents/FriendsModalComponent'
import JoinSessionModalComponent from '@/components/PageComponents/ModalComponents/JoinSessionModalComponent';
import ProfileModalComponent from '@/components/PageComponents/ModalComponents/ProfileModalComponent';
import ViewProfileModalComponent from '@/components/PageComponents/ModalComponents/ViewProfileModalComponent';
import { IUserPosts} from '@/interfaces/Interfaces';
import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'

function page() {
// interface IUserPosts {
//         id: 5;
//         userID: 5;
//         title: "dd";
//         isVisible: true; 
//         state: "string";
//         locations: "string";
//         date: "string"; 
//         time: "string"; 
//         maxPpl: 4;
//         currentPpl: 4;
//         matchUsersIDs: "string";
//         description: "string"; 
//         isFinished: true; 
//         publisher: "string"; 
//         image: "string"; 
//         wins: "number"; 
//         average: "string"; 
//         style: "string"; 
//         streak: 4;
//       }
    const [openModal, setOpenModal] = useState(true);
 
  return (
    <div>
 <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}size={"xl"}>

{/* <FriendsModalComponent closeModal={function (): void {
                  throw new Error('Function not implemented.');
              } }/> */}
              <ViewProfileModalComponent userName={'3'} email={'3'} proNouns={'3'} record={'3'} mainCenter={'3'} average={'3'} highGames={'3'} highSeries={'3'} earnings={'3'} style={'3'}/>

  {/* <JoinSessionModalComponent data={undefined} closeModal={function (): void {
                  throw new Error('Function not implemented.');
              } } joinChallenge={function (data: IUserPosts): void {
                  throw new Error('Function not implemented.');
              } } currentUserID={0} errorToast={function (): void {
                  throw new Error('Function not implemented.');
              } }/>  */}
          </Modal>
          
    </div>
  )
}

export default page
