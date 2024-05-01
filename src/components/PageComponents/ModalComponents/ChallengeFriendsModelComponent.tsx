"use client"

import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dispatch, SetStateAction, useState } from "react"

const ChallengeFriendsModelComponent= (props: { addingChallengeBool: boolean, handleFalseChallengeBool: () => void, handleTrueChallengeBool: () => void, create1v1Challenge: (e: React.FormEvent<HTMLFormElement>) => void, createPracticeSession: (e: React.FormEvent<HTMLFormElement>) => void, handleVisibilityChange: (e: string) => void, visibility: boolean, handleLocationOneChange: (e: React.ChangeEvent<HTMLInputElement>) => void, locationOne: string, handleLocationTwoChange: (e: React.ChangeEvent<HTMLInputElement>) => void, locationTwo: string, handleLocationThreeChange: (e: React.ChangeEvent<HTMLInputElement>) => void, locationThree: string, handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, description: string, handleCloseModal: () => void, handleTimeStartChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleTimeEndChange: (e: React.ChangeEvent<HTMLInputElement>) => void, setDate: React.Dispatch<SetStateAction<Date | undefined>>, handleMaxPplChange: (e: React.ChangeEvent<HTMLInputElement>) => void, timeStart: string, timeEnd: string, date: Date | undefined, maxPpl: string }) => {

    return (
        <>
            <div className='p-4'>
                <button className={'jura text-4xl py-2 px-4 rounded-md mr-6 ' + (props.addingChallengeBool ? 'bgOrange' : '')} onClick={props.handleTrueChallengeBool}>Add Challenge</button>
                <button className={'jura text-4xl py-2 px-4 rounded-md ' + (!props.addingChallengeBool ? 'bgOrange' : '')} onClick={props.handleFalseChallengeBool}>Add Session</button>
            </div>
            <div className='px-4'>
                <form onSubmit={props.addingChallengeBool ? props.create1v1Challenge : props.createPracticeSession}>
                    <div className="py-4 px-6 bg-black rounded-md">
                        <div className='flex justify-between gap-60'>
                            <div className='w-full'>
                                <h3 className='jura text-white text-2xl'>Visibility</h3>
                                <Select value={props.visibility ? 'Public' : 'Private'} required onValueChange={(e) => props.handleVisibilityChange(e)}>
                                    <SelectTrigger className="w-full jura text-2xl h-10 bg-white pl-2 mb-4 mt-2 rounded-sm">
                                        <SelectValue defaultValue={"Public"} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem className='text-2xl' value="Public">Public</SelectItem>
                                        <SelectItem className='text-2xl' value="Private">Private</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className='w-full'>
                                <h3 className='jura text-white text-2xl'>Send To (For Private)</h3>
                                {
                                    props.visibility ? (
                                        <input type="text" readOnly placeholder='N/A' className="w-full jura text-2xl h-10 bg-white pl-2 mb-4 mt-2 rounded-sm" />
                                    ) : (
                                        <input type="text" placeholder='Username' required className="w-full jura text-2xl h-10 bg-white pl-2 mb-4 mt-2 rounded-sm" />
                                    )}
                            </div>
                        </div>

                        <div className={props.addingChallengeBool ? '' : 'hidden'}>
                            <h3 className='jura text-white text-2xl'>Locations (1 mininum):</h3>
                            <div className='flex justify-between gap-4'>
                                <input type="text" onChange={props.handleLocationOneChange} value={props.locationOne} placeholder='Location 1' className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                                <input type="text" onChange={props.handleLocationTwoChange} value={props.locationTwo} placeholder='Location 2' className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                                <input type="text" onChange={props.handleLocationTwoChange} value={props.locationThree} placeholder='Location 3' className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                            </div>
                            <p className='jura txtOrange text-xl mb-4'>*Leave blank if open to any locations</p>
                        </div>

                        <div className={!props.addingChallengeBool ? 'grid grid-cols-2 gap-x-60' : 'hidden'}>
                            <div>
                                <h3 className='jura text-white text-2xl'>Location:</h3>
                                <input required type="text" onChange={props.handleLocationOneChange} value={props.locationOne} placeholder='Location' className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                            </div>

                            <div>
                                <h3 className='jura text-white text-2xl'>Time:</h3>
                                <div className='flex justify-between items-center'>
                                    <input required type="text" onChange={props.handleTimeStartChange} value={props.timeStart} placeholder='Start' className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                                    <p className='px-4 inline-block text-white'>-</p>
                                    <input required type="text" onChange={props.handleTimeEndChange} value={props.timeEnd} placeholder='End' className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                                </div>
                            </div>

                            <div>
                                <h3 className='jura text-white text-2xl mb-2'>Date:</h3>
                            
                                    
                            </div>

                            <div>
                                <h3 className='jura text-white text-2xl'>Max PPL:</h3>
                                <input required type="text" onChange={props.handleMaxPplChange} value={props.maxPpl} placeholder='0' className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                            </div>
                        </div>

                        <h3 className='jura text-white text-2xl'>Description</h3>
                        <textarea required onChange={props.handleDescriptionChange} value={props.description} className='w-full h-40 text-black jura text-2xl bg-white pl-2 mb-2 mt-2 rounded-sm placeholder:text-black pt-1' placeholder='Add your description.'></textarea>
                    </div>

                    <div className='p-4 flex justify-end'>
                        <button type='submit' className={'jura text-4xl py-2 px-4 rounded-md mr-6 bgOrange'}>Confirm</button>
                        <button className={'jura text-4xl py-2 px-4 rounded-md bgOrange'} onClick={props.handleCloseModal}>Close</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ChallengeFriendsModelComponent
