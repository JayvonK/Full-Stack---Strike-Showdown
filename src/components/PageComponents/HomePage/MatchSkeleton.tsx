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
import { Skeleton } from "@/components/ui/skeleton"


const MatchSkeleton = () => {

    return (
        <div className='md:px-10 sm:px-8 px-4'>
            <div className='flex justify-between'>
                <Skeleton className='md:mr-10 mr-5 sm:w-48 lg:w-56 w-40 h-6' />
                <div className='flex justify-end'>
                    <Skeleton className='md:min-w-56 md:h-[52px] sm:rounded-3xl rounded-xl ' />
                </div>
            </div>

            <div className='flex my-5'>
                <div className='2xl:mr-10 md:mr-16 mr-6'>
                    <div className='md:w-[105px] md:h-[105px] sm:w-[100px] sm:h-[100px] w-[75px] h-[75px]'>
                        <Skeleton className='w-full h-full rounded-full object-cover' />
                    </div>
                </div>

                <div className='lg:grid 2xl:grid-cols-[22%_34%_24%_20%] grid-cols-3 w-full hidden'>
                    <div className='pr-8 xl:text-xl sm:text-lg text-sm'>
                        <Skeleton className='h-5 w-1/2 mb-3' />
                        <Skeleton className='h-7 w-3/4' />
                    </div>
                    <div className='pr-8 2xl:block hidden xl:text-xl sm:text-lg text-sm'>
                        <Skeleton className='h-5 w-1/2 mb-3' />
                        <Skeleton className='h-7 w-3/4' />
                    </div>
                    <div className=' pr-8 xl:text-xl sm:text-lg text-sm'>
                        <Skeleton className='h-5 w-1/2 mb-3' />
                        <Skeleton className='h-7 w-3/4' />
                    </div>
                    <div className='xl:text-xl sm:text-lg text-sm'>
                        <Skeleton className='h-5 w-1/2 mb-3' />
                        <Skeleton className='h-7 w-3/4' />
                    </div>
                </div>

                <div className='lg:hidden block w-full'>
                    <div className='flex justify-between pr-2'>
                        <div>
                            <div>
                                <Skeleton className='md:h-4 h-3 w-1/2 mb-3' />
                                <Skeleton className='md:h-5 h-4 md:w-32 w-16' />
                            </div>
                        </div>
                        <div>
                            <div className='xl:text-xl sm:text-lg text-sm'>
                                <Skeleton className='md:h-4 h-3 w-1/2 mb-3' />
                                <Skeleton className='md:h-5 h-4 md:w-48 w-20' />
                            </div>
                        </div>
                    </div>

                    <div className=' mt-3'>
                        <Skeleton className='md:h-4 h-3 md:w-28 w-20 mb-3' />
                        <Skeleton className='md:h-5 h-4 md:w-60 w-40' />
                    </div>
                </div>
            </div>

            <div className='grid grid-rows-2 gap-3'>
                <div>
                    <Skeleton className='w-full h-5' />
                </div>
                <div>
                    <Skeleton className='w-full h-5' />
                </div>
            </div>

            <hr className='border-white mt-5 mb-8' />
        </div>
    )
}

export default MatchSkeleton
