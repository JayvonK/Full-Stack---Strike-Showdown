import React from 'react'
import { IPublicUserData, IUserPosts } from '@/interfaces/Interfaces'
import ProfileModalComponent from '../../ModalComponents/ProfileModalComponent'

const SearchModal = (props: { closeModal: () => void, userData: IPublicUserData, handleOpenEditModal: () => void, handleCloseUsersProfileModal: () => void, openMyPosts: () => void, openMyInfo: () => void, onInfo: boolean, posts: IUserPosts[], openEditMatchModal: (data: IUserPosts) => void }) => {
  return (
    <div>
      <div className='bg-white rounded-lg'>
        <input type="text" placeholder='Search For User' className='bg-transparent jura lg:text-3xl text-2xl w-full pl-8 py-2' />
      </div>

      <div className='mt-4'>
        <ProfileModalComponent userData={props.userData} handleCloseUsersProfileModal={props.handleCloseUsersProfileModal} handleOpenEditModal={props.handleOpenEditModal} openMyInfo={props.openMyInfo} openMyPosts={props.openMyPosts} onInfo={props.onInfo} posts={props.posts} openEditMatchModal={props.openEditMatchModal} viewModal={true} />
      </div>

      <div className='pt-4 flex justify-end'>
        <button className={'jura lg:text-3xl text-2xl py-2 px-4 rounded-md bgOrange'} onClick={props.closeModal}>Close</button>
      </div>
    </div>
  )
}

export default SearchModal
