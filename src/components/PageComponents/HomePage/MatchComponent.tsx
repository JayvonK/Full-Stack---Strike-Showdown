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

const MatchComponent = (props: { challenge: () => void, title: string, pfp: string, username: string, wins: number, streak: number, avg: string, style: string, locations: string, description: string }) => {
    const array = props.locations.split(",");

    return (
        <div className='px-14'>
            <div className='grid grid-cols-2'>
                <h2 className='text-white juraBold xl:text-3xl text-2xl mr-14'>{props.title}</h2>
                <div className='flex justify-end'>
                    <button className='bgOrange min-w-56 xl:text-3xl text-2xl juraBold py-2 rounded-3xl hover:bg-[#ff9939]' onClick={props.challenge}>Challenge</button>
                </div>
            </div>

            <div className='flex my-5'>
                <div className='mr-8'>
                    <div className='w-[105px] h-[105px]'>
                        <Image className='w-full h-full rounded-full object-cover' src={props.pfp} alt="bowler's pfp" width={100} height={100} />
                    </div>
                </div>

                <div className='grid 2xl:grid-cols-[22%_34%_24%_20%] grid-cols-3 w-full'>
                    <div className='pr-8 xl:text-xl text-lg'>
                        <h3 className='jura text-white'>Username</h3>
                        <h3 className='juraBold txtOrange underline cursor-pointer' onClick={props.challenge}>{props.username}</h3>
                    </div>
                    <div className='pr-8 2xl:block hidden xl:text-xl text-lg'>
                        <h3 className='jura text-white'>Stats</h3>
                        <div className='flex'>
                            <div className='xl:text-xl text-lg'>
                                <h1 className='juraBold txtOrange'>{props.wins} Wins</h1>
                                <h1 className='juraBold txtOrange'> {props.avg}</h1>
                            </div>
                            <div className='flex justify-center px-8'>

                                <div className='line'>
                                </div>

                            </div>
                            <div className='xl:text-xl text-lg'>
                                <h1 className='juraBold txtOrange'> Streak: {props.streak}</h1>
                                <h1 className='juraBold txtOrange'> {props.style}</h1>
                            </div>
                        </div>
                    </div>
                    <div className=' pr-8 xl:text-xl text-lg'>
                        <h3 className='jura text-white'>Locations</h3>
                        <h3 className='juraBold txtOrange'>{props.locations}</h3>
                    </div>
                    <div className='xl:text-xl text-lg'>
                        <h3 className='jura text-white mb-1'>Pick Location</h3>
                        <Select>
                            <SelectTrigger className="w-full xl:text-xl text-lg bg-white pl-3">
                                <SelectValue placeholder="Location" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    array.map((location, idx) => (
                                        <SelectItem key={idx} className='xl:text-xl text-lg' value={location}>{location}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <h3 className='jura xl:text-2xl text-xl text-white'><span className='juraBold txtOrange'>Description: </span> {props.description}</h3>

            <hr className='border-white mt-5 mb-8' />
        </div>
    )
}

export default MatchComponent
