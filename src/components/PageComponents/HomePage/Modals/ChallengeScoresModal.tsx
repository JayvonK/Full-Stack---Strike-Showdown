import { IPublicUserData, IUserPosts } from '@/interfaces/Interfaces'
import React from 'react'

const ChallengeScoresModal = (props: { confirm: () => void, close: () => void, you: IPublicUserData, match: IUserPosts, scoreOneChange: (e: string) => void, scoreTwoChange: (e: string) => void, scoreOne: number, scoreTwo: number }) => {

    const handleYourScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(Number(e.target.value) || e.target.value.trim() === ''){
            props.scoreOneChange(e.target.value);
        }
    }

    const handleOppScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(Number(e.target.value) || e.target.value.trim() === ''){
            props.scoreTwoChange(e.target.value);
        }
    }

    return (
        <div className='bg-white rounded-lg p-4'>
            <h1 className='px-4 py-2 bgOrange text-black jura text-3xl inline-block rounded-md'>Scores</h1>
            <div className='grid grid-cols-2 px-4 py-10 my-4 gap-20 bg-black rounded-md'>
                <div className='flex items-center flex-col'>
                
                    <img className='border border-black rounded-full aspect-square w-48 mb-4 object-cover' src={props.you.profileImage} alt="" />
                    <h2 className='block juraBold text-white text-2xl text-center mb-2'>Your Score:</h2>
                    <input value={props.scoreOne} type="text" placeholder='0' className='rounded-sm text-2xl text-black w-3/4 jura text-center' onChange={handleYourScoreChange} maxLength={5}/>
                </div>

                <div className='flex items-center flex-col'>
                    <img className='border border-black rounded-full aspect-square w-48 mb-4 object-cover' src={props.match.image} alt="" />
                    <h2 className='block juraBold text-white text-2xl text-center mb-2'>Opponent Score:</h2>
                    <input value={props.scoreTwo} type="text" placeholder='0' className='rounded-sm text-2xl text-black w-3/4 jura text-center' onChange={handleOppScoreChange} maxLength={5}/>
                </div>

            </div>

            <div className='flex justify-end'>
                <button className='bgOrange hover:bg-orange-400-400 jura px-4 py-1 text-3xl rounded-md mr-6' onClick={props.confirm}>Confirm</button>
                <button className='bg-red-500 hover:bg-red-400 jura px-4 py-1 text-3xl rounded-md' onClick={props.close}>Cancel</button>
            </div>

        </div>
    )
}

export default ChallengeScoresModal
