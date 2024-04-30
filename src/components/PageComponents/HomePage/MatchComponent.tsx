'use client'

import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from 'next/image';
import { IUserPosts } from '@/interfaces/Interfaces';

const MatchComponent = (props: { challenge: () => void, data: IUserPosts, fadeAway: string, edit: boolean, handleEditMatchClick: () => void }) => {
    const array = props.data.locations.split(",");

    return (
        <div className={'md:px-10 sm:px-8 px-4 ' + props.fadeAway}>
            <div className='flex justify-between'>
                <h2 className='text-white juraBold xl:text-3xl sm:text-2xl text-lg md:mr-10 mr-5'>{props.data.title}</h2>
                <div className='flex justify-end'>
                    <button className='bgOrange md:min-w-56 xl:text-3xl sm:text-2xl text-lg juraBold md:py-2 py-1 md:px-0 sm:px-10 px-4 sm:rounded-3xl rounded-xl hover:bg-[#ff9939]' onClick={props.edit ? props.handleEditMatchClick : props.challenge}>{props.edit ? "Edit" : "Join"}</button>
                </div>
            </div>

            <div className='flex my-5'>
                <div className='2xl:mr-10 md:mr-16 mr-6'>
                    <div className='md:w-[105px] md:h-[105px] sm:w-[100px] sm:h-[100px] w-[75px] h-[75px]'>
                        <Image className='w-full h-full rounded-full object-cover' src={props.data.image} alt="bowler's pfp" width={100} height={100} />
                    </div>
                </div>

                <div className='lg:grid 2xl:grid-cols-[22%_34%_24%_20%] grid-cols-3 w-full hidden'>
                    <div className='pr-8 xl:text-xl sm:text-lg text-sm'>
                        <h3 className='jura text-white'>Username</h3>
                        <h3 className='juraBold txtOrange underline cursor-pointer' onClick={props.challenge}>{props.data.publisher}</h3>
                    </div>
                    <div className='pr-8 2xl:block hidden xl:text-xl sm:text-lg text-sm'>
                        <h3 className='jura text-white'>Stats</h3>
                        <div className='flex'>
                            <div className='xl:text-xl sm:text-lg text-sm'>
                                <h1 className='juraBold txtOrange'>{props.data.wins} Wins</h1>
                                <h1 className='juraBold txtOrange'> {props.data.average === 'N/A' ? 'No Avg' : props.data.average}</h1>
                            </div>
                            <div className='flex justify-center px-8'>

                                <div className='line'>
                                </div>

                            </div>
                            <div className='xl:text-xl sm:text-lg text-sm'>
                                <h1 className='juraBold txtOrange'> Streak: {props.data.streak}</h1>
                                <h1 className='juraBold txtOrange'> {props.data.style === 'N/A' ? 'No Style' : props.data.style}</h1>
                            </div>
                        </div>
                    </div>
                    <div className=' pr-8 xl:text-xl sm:text-lg text-sm'>
                        <h3 className='jura text-white'>Locations</h3>
                        <h3 className='juraBold txtOrange'>{props.data.locations}</h3>
                    </div>
                    <div className='xl:text-xl sm:text-lg text-sm'>
                        <h3 className='jura text-white mb-1'>Pick Location</h3>
                        <Select>
                            <SelectTrigger className="w-full xl:text-xl sm:text-lg text-sm bg-white pl-3 py-0">
                                <SelectValue placeholder="Location" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    array.map((location, idx) => (
                                        <SelectItem key={idx} className='xl:text-xl sm:text-lg text-sm pl-2' value={location}>{location}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className='lg:hidden block w-full'>
                    <div className='flex justify-between pr-2'>
                        <div>
                            <div className='pr-8 xl:text-xl sm:text-lg text-sm'>
                                <h3 className='jura text-white sm:-mb-2 mb-0'>Username:</h3>
                                <h3 className='juraBold txtOrange underline cursor-pointer' onClick={props.challenge}>{props.data.publisher}</h3>
                            </div>
                        </div>
                        <div>
                            <div className='xl:text-xl sm:text-lg text-sm'>
                                <h3 className='jura text-white md:mb-1 mb-0'>Pick Location</h3>
                                <Select>
                                    <SelectTrigger className="sm:min-w-44 xl:text-xl sm:text-lg text-sm bg-white sm:pl-3 pl-2 py-0 sm:h-10 h-6">
                                        <SelectValue placeholder="Location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            array.map((location, idx) => (
                                                <SelectItem key={idx} className='xl:text-xl sm:text-lg text-sm' value={location}>{location}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className='xl:text-xl sm:text-lg text-sm mt-3'>
                        <h3 className='jura text-white sm:-mb-2 mb-0'>Location & Date:</h3>
                        <h3 className='juraBold txtOrange'>{props.data.locations}</h3>
                    </div>
                </div>
            </div>

            <h3 className='jura xl:text-2xl md:text-xl sm:text-lg text-sm text-white break-words'><span className='juraBold txtOrange'>Description: </span> {props.data.description}</h3>

            <hr className='border-white mt-5 mb-8' />
        </div>
    )
}

export default MatchComponent
