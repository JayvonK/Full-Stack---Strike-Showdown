import { IUserPosts } from '@/interfaces/Interfaces'
import React from 'react'

const ConfirmationModal = (props: {closeConfirmation: () => void, deleteMatch: () => void}) => {
    return (
        <div className='bg-white rounded-sm p-8'>
            <h1 className='text-3xl text-center mt-4 mb-2 juraBold'>Are you sure?</h1>
            <p className='text-xl mb-14 jura text-center'>Are you sure you want to delete your post? This action cannot be undone</p>

            <div className='flex justify-center'>
                <button className='bg-red-500 px-4 text-3xl mr-5 py-1 juraBold rounded-md' onClick={props.deleteMatch}>Yes</button>
                <button className='bgOrange text-3xl px-6 py-1 juraBold rounded-md' onClick={props.closeConfirmation}>No</button>
            </div>
        </div>
    )
}

export default ConfirmationModal
