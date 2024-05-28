"use client"

import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dispatch, SetStateAction, useState } from "react"

const AddMatchModal = (props: { addingChallengeBool: boolean, handleFalseChallengeBool: () => void, handleTrueChallengeBool: () => void, editMatchClick: (e: React.FormEvent<HTMLFormElement>) => void, create1v1Challenge: (e: React.FormEvent<HTMLFormElement>) => void, createPracticeSession: (e: React.FormEvent<HTMLFormElement>) => void, handleVisibilityChange: (e: string) => void, visibility: boolean, handlePracticeLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleLocationOneChange: (e: React.ChangeEvent<HTMLInputElement>) => void, locationOne: string, handleLocationTwoChange: (e: React.ChangeEvent<HTMLInputElement>) => void, locationTwo: string, handleLocationThreeChange: (e: React.ChangeEvent<HTMLInputElement>) => void, locationThree: string, handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, handlePracticeDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, description: string, handleCloseModal: () => void, handleTimeStartChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleTimeEndChange: (e: React.ChangeEvent<HTMLInputElement>) => void, setDate: React.Dispatch<SetStateAction<Date | undefined>>, handleMaxPplChange: (e: React.ChangeEvent<HTMLInputElement>) => void, timeStart: string, timeEnd: string, date: Date | undefined, maxPpl: string, practiceLocation: string, practiceDescription: string, edit: boolean, closeEditMatchModal: () => void, openConfirmation: () => void, currentPpl: string, handleCurrentPplChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {

    return (
        <div className="bg-white rounded-lg">
            <div className='p-4'>
                {
                    props.edit ? (
                        <>
                            <h1 className="jura lg:text-4xl md:text-3xl sm:text-2xl text-xl  py-2 px-4 rounded-md bgOrange inline-block">Edit Match</h1>
                        </>
                    ) :
                        (
                            <div className="flex">
                                <button className={'jura lg:text-4xl md:text-3xl sm:text-2xl text-xl  py-2 px-4 rounded-md mr-6 sm:block hidden ' + (props.addingChallengeBool ? 'bgOrange' : '')} onClick={props.handleTrueChallengeBool}>Add Challenge</button>

                                <button className={'jura lg:text-4xl md:text-3xl sm:text-2xl text-xl  py-2 px-4 rounded-md mr-6 sm:hidden block ' + (props.addingChallengeBool ? 'bgOrange' : '')} onClick={props.handleTrueChallengeBool}>Challenge</button>


                                <button className={'jura lg:text-4xl md:text-3xl sm:text-2xl text-xl  py-2 px-4 rounded-md sm:block hidden ' + (!props.addingChallengeBool ? 'bgOrange' : '')} onClick={props.handleFalseChallengeBool}>Add Session</button>

                                <button className={'jura lg:text-4xl md:text-3xl sm:text-2xl text-xl  py-2 px-4 rounded-md sm:hidden block ' + (!props.addingChallengeBool ? 'bgOrange' : '')} onClick={props.handleFalseChallengeBool}>Session</button>
                            </div>
                        )
                }
            </div>
            <div className='px-4'>
                <form onSubmit={props.edit ? props.editMatchClick : (props.addingChallengeBool ? props.create1v1Challenge : props.createPracticeSession)}>
                    <div className="py-4 md:px-6 px-4 bg-black rounded-md">
                        <h1 className="text-red-500 jura text-xl mb-4">Private Visibility and Sending To Users Is Still in Progress</h1>
                        <div className='sm:flex justify-between lg:gap-28 gap-10'>
                            <div className='w-full'>
                                <h3 className='jura text-white lg:text-2xl sm:text-xl text-lg'>Visibility</h3>
                                <Select value={props.visibility ? 'Public' : 'Private'} required onValueChange={(e) => props.handleVisibilityChange(e)}>
                                    <SelectTrigger className="w-full jura lg:text-2xl sm:text-xl text-lg h-10 bg-white pl-2 mb-4 mt-2 rounded-sm">
                                        <SelectValue defaultValue={"Public"} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem className='lg:text-2xl sm:text-xl text-lg' value="Public">Public</SelectItem>
                                        <SelectItem className='lg:text-2xl sm:text-xl text-lg' value="Private">Private</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className='w-full'>
                                <h3 className='jura text-white lg:text-2xl sm:text-xl text-lg'>Send To (For Private)</h3>
                                {
                                    props.visibility ? (
                                        <input type="text" readOnly placeholder='N/A' maxLength={20} className="w-full jura lg:text-2xl sm:text-xl text-lg h-10 bg-white pl-2 mb-4 mt-2 rounded-sm" />
                                    ) : (
                                        <input type="text" placeholder='Username' maxLength={20} required className="w-full jura lg:text-2xl sm:text-xl text-lg h-10 bg-white pl-2 mb-4 mt-2 rounded-sm" />
                                    )}
                            </div>
                        </div>

                        <div className={props.addingChallengeBool ? '' : 'hidden'}>
                            <h3 className='jura text-white lg:text-2xl sm:text-xl text-lg'>Locations:</h3>
                            <div className='md:flex justify-between gap-4'>
                                <input type="text" onChange={props.handleLocationOneChange} value={props.locationOne} placeholder='Location 1' maxLength={50} className="w-full jura lg:text-2xl sm:text-xl text-lg h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                                <input type="text" onChange={props.handleLocationTwoChange} value={props.locationTwo} placeholder='Location 2' maxLength={50} className="w-full jura lg:text-2xl sm:text-xl text-lg h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                                <input type="text" onChange={props.handleLocationThreeChange} value={props.locationThree} placeholder='Location 3' maxLength={50} className="w-full jura lg:text-2xl sm:text-xl text-lg h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                            </div>
                            <p className='jura txtOrange lg:text-xl md:text-lg mb-4'>*Leave blank if open to any locations</p>
                        </div>

                        <div className={!props.addingChallengeBool ? 'md:grid md:grid-cols-2 lg:gap-x-28 gap-x-10' : 'hidden'}>
                            <div>
                                <h3 className='jura text-white lg:text-2xl sm:text-xl text-lg'>Location:</h3>
                                {
                                    !props.addingChallengeBool ? (
                                        <>
                                            <input required type="text" onChange={props.handlePracticeLocationChange} value={props.practiceLocation} maxLength={50} placeholder='Location' className="w-full jura lg:text-2xl sm:text-xl text-lg h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                                        </>

                                    ) : (<div></div>)
                                }

                            </div>

                            <div>
                                <h3 className='jura text-white lg:text-2xl sm:text-xl text-lg'>Time:</h3>
                                <div className='flex justify-between items-center'>
                                    {
                                        !props.addingChallengeBool ? (
                                            <>
                                                <input required type="time" onChange={props.handleTimeStartChange} value={props.timeStart} placeholder='Start' className="w-full jura lg:text-xl text-lg h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                                                <p className='px-4 inline-block text-white'>-</p>
                                                <input required type="time" onChange={props.handleTimeEndChange} value={props.timeEnd} placeholder='End' className="w-full jura lg:text-xl text-lg h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                                            </>

                                        ) : (<div></div>)
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={!props.addingChallengeBool ? 'sm:grid sm:grid-cols-2 lg:gap-x-28 gap-x-10' : 'hidden'}>
                            <div className="sm:mb-0 mb-2">
                                <h3 className='jura text-white lg:text-2xl sm:text-xl text-lg mb-2'>Date:</h3>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left jura lg:text-2xl sm:text-xl text-lg px-2",
                                                !props.date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-6 w-6" />
                                            {props.date ? format(props.date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        align="start"
                                        className="flex w-auto flex-col p-2"
                                    >
                                        <Select
                                            onValueChange={(value) =>
                                                props.setDate(addDays(new Date(), parseInt(value)))
                                            }
                                        >
                                            <SelectTrigger className="text-xl">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem className="text-xl" value="0">Today</SelectItem>
                                                <SelectItem className="text-xl" value="1">Tomorrow</SelectItem>
                                                <SelectItem className="text-xl" value="3">In 3 days</SelectItem>
                                                <SelectItem className="text-xl" value="7">In a week</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <div className="rounded-md border">
                                            <Calendar required mode="single" selected={props.date} onSelect={props.setDate} />
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="grid grid-cols-2 gap-10">
                                <div>
                                    <h3 className='jura text-white lg:text-2xl sm:text-xl text-lg'>Curr PPL:</h3>
                                    {props.addingChallengeBool ? (<></>) : (<input required type="text" onChange={props.handleCurrentPplChange} value={props.currentPpl} placeholder='0' maxLength={4} className={`w-full jura lg:text-2xl sm:text-xl text-lg h-10 ${!props.edit ? 'bg-white' : 'bg-gray-500'} pl-2 mb-2 mt-2 rounded-sm`} disabled={props.edit}/>)}
                                </div>

                                <div>
                                    <h3 className='jura text-white lg:text-2xl sm:text-xl text-lg'>Max PPL:</h3>
                                    {props.addingChallengeBool ? (<></>) : (<input required type="text" onChange={props.handleMaxPplChange} value={props.maxPpl} placeholder='0' maxLength={4} className="w-full jura lg:text-2xl sm:text-xl text-lg h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />)}
                                </div>
                            </div>
                        </div>


                        <h3 className='jura text-white lg:text-2xl sm:text-xl text-lg'>Description</h3>
                        {
                            !props.addingChallengeBool ? (
                                <textarea required onChange={props.handlePracticeDescriptionChange} value={props.practiceDescription} maxLength={300} className='w-full h-40 text-black jura lg:text-2xl sm:text-xl text-lg bg-white pl-2 mb-2 mt-2 rounded-sm placeholder:text-black pt-1' placeholder='Add your description.'></textarea>
                            ) : (
                                <textarea required onChange={props.handleDescriptionChange} value={props.description} maxLength={300} className='w-full h-40 text-black jura lg:text-2xl sm:text-xl text-lg bg-white pl-2 mb-2 mt-2 rounded-sm placeholder:text-black pt-1' placeholder='Add your description.'></textarea>
                            )
                        }
                    </div>

                    <div className='py-4 flex justify-end'>
                        {props.edit ? (<button className='jura lg:text-4xl md:text-3xl sm:text-2xl text-xl py-2 px-4 rounded-md mr-6 bg-red-500' onClick={props.openConfirmation}>Delete</button>) : (<></>)}
                        <button type='submit' className={'jura lg:text-4xl md:text-3xl sm:text-2xl text-xl py-2 px-4 rounded-md mr-6 bgOrange'}>{props.edit ? "Edit" : "Confirm"}</button>
                        <button className={'jura lg:text-4xl md:text-3xl sm:text-2xl text-xl  py-2 px-4 rounded-md bgOrange'} onClick={props.edit ? props.closeEditMatchModal : props.handleCloseModal}>{props.edit ? "Cancel" : "Close"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddMatchModal
