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

const AddMatchModal = (props: { addingChallengeBool: boolean, handleFalseChallengeBool: () => void, handleTrueChallengeBool: () => void, create1v1Challenge: () => void, createPracticeSession: () => void, handleVisibilityChange: (e: string) => void, visibility: boolean, handleLocationOneChange: (e: React.ChangeEvent<HTMLInputElement>) => void, locationOne: string, handleLocationTwoChange: (e: React.ChangeEvent<HTMLInputElement>) => void, locationTwo: string, handleLocationThreeChange: (e: React.ChangeEvent<HTMLInputElement>) => void, locationThree: string, handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, description: string, handleCloseModal: () => void, handleTimeStartChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleTimeEndChange: (e: React.ChangeEvent<HTMLInputElement>) => void, setDate: React.Dispatch<SetStateAction<Date | undefined>>, handleMaxPplChange: (e: React.ChangeEvent<HTMLInputElement>) => void, timeStart: string, timeEnd: string, date: Date | undefined, maxPpl: string }) => {

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
                                <input type="text" onChange={props.handleLocationOneChange} value={props.locationOne} placeholder='Location' className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                            </div>

                            <div>
                                <h3 className='jura text-white text-2xl'>Time:</h3>
                                <div className='flex justify-between items-center'>
                                    <input type="text" onChange={props.handleLocationOneChange} value={props.timeStart} placeholder='Start' className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                                    <p className='px-8 inline-block text-white'>-</p>
                                    <input type="text" onChange={props.handleLocationOneChange} value={props.timeEnd} placeholder='End' className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
                                </div>
                            </div>

                            <div>
                                <h3 className='jura text-white text-2xl mb-2'>Date:</h3>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left jura text-2xl px-2",
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
                                            required
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
                                            <Calendar mode="single" selected={props.date} onSelect={props.setDate} />
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div>
                                <h3 className='jura text-white text-2xl'>Max PPL:</h3>
                                <input type="text" onChange={props.handleLocationOneChange} value={props.locationOne} placeholder='0' className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-2 rounded-sm" />
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

export default AddMatchModal
