import { IUserPosts } from '@/interfaces/Interfaces'
import React from 'react'

const ProfileMatchesComponent = (props: {data: IUserPosts, openEditMatchModal: (data: IUserPosts) => void}) => {
    return (
        <div className='rounded-md bg-white w-full sm:px-6 px-4 py-2 mb-4'>
            <div className='grid sm:grid-cols-[70%_30%]'>

                <div>
                    <h2 className='lg:text-2xl sm:text-xl text-lg mb-4 sm:block hidden'>{props.data.title}</h2>
                    <div className='sm:hidden flex justify-between items-center mb-2'>
                        <h2 className='lg:text-2xl sm:text-xl text-lg'>{props.data.title}</h2>
                        <button className="bg-orange-500 rounded-md py-1 px-4 text-black">
                            <h3 className="lg:text-2xl sm:text-xl text-lg">Edit</h3>
                        </button>
                    </div>

                    {
                        props.data.title === "1v1 Challenge" ? (
                            <p className='lg:text-lg sm:text-base text-sm break-words'>Locations: <span className='juraBold'>{props.data.locations}</span> </p>
                        ) : (
                            <>
                                <p className='lg:text-lg break-words'>Time: <span className='juraBold'>{props.data.time}</span> </p>
                                <p className='lg:text-lg break-words'>Location & Date: <span className='juraBold'>{props.data.locations}, {props.data.date}</span> </p>
                            </>
                        )
                    }

                </div>

                <div className='sm:flex justify-end items-center hidden'>
                    <button className="bg-orange-500 rounded-md pt-2 pb-2 md:px-8 sm:px-6 px-4 text-black" onClick={() => props.openEditMatchModal(props.data)}>
                        <h3 className="lg:text-2xl sm:text-xl text-lg">Edit</h3>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ProfileMatchesComponent
