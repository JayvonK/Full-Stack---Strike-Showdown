import { IUserPosts } from '@/interfaces/Interfaces'
import React from 'react'

const ConfirmationModal = (props: {closeConfirmation: () => void, deleteMatch: () => void, leaving: boolean, leaveMatch: () => void, scores: boolean, scoreOne: number, scoreTwo: number, confirmScores: () => void}) => {
    return (
        <div className='bg-white rounded-lg p-8'>
            <h1 className='text-3xl text-center mt-4 mb-2 juraBold'>Are you sure?</h1>
            {!props.scores && <p className='text-xl mb-14 jura text-center'>{`Are you sure you want to ${props.leaving ? 'leave' : 'delete your post'}? This action cannot be undone`}</p>}
            {props.scores && <p className='text-xl mb-14 jura text-center'>In your 1v1 match you scored <span className='txtOrange juraBold px-1 bg-black'>{props.scoreOne}</span> and your opponent scored <span className='txtOrange bg-black px-1 juraBold'>{props.scoreTwo}</span>, correct? This action cannot be undone!</p>}
            <div className='flex justify-center'>
                <button className='bg-red-500 px-4 text-3xl mr-5 py-1 juraBold rounded-md' onClick={props.leaving ? props.leaveMatch : props.scores ? props.confirmScores : props.deleteMatch}>Yes</button>
                <button className='bgOrange text-3xl px-6 py-1 juraBold rounded-md' onClick={props.closeConfirmation}>No</button>
            </div>
        </div>
    )
}

export default ConfirmationModal
