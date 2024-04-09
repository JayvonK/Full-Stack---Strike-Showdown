'use client'

import React from 'react';
import '@/app/css/LoginPage.css';
import plusIcon from '../../../../public/images/plus-bold.svg';
import closeIcon from '../../../../public/images/x-bold.svg';
import profile from '../../../../public/images/Profile.png'

const MessagingPage = () => {
    return (
        <>
            <div className='py-16 px-52 grid grid-cols-[35%_65%] h-[85vh]'>
                <div className='bg-black rounded-3xl px-12 py-12'>
                    <div className='flex justify-between items-center mb-7'>
                        <h2 className='text-[40px] juraBold text-white ml-12'>Messaging</h2>
                        <div className='w-[45px] h-[45px]'>
                            <img className='w-full h-full object-cover' src={plusIcon.src} alt="" />
                        </div>
                    </div>

                    <hr className='border-white mb-6' />

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div>
                                <div className='w-[72px] h-[72px]'>
                                    <img className='w-full h-full object-cover' src={profile.src} alt="" />
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h3 className='juraBold text-2xl text-white'>BowlerDude</h3>
                                <h5 className='jura text-xl text-gray-300'> He/Him</h5>
                            </div>
                        </div>

                        <div className='w-[45px] h-[45px]'>
                            <img className='w-full h-full object-cover' src={closeIcon.src} alt="" />
                        </div>

                    </div>


                </div>
                <div className='bg-black rounded-3xl ml-4'>

                </div>
            </div>

        </>
    )
}

export default MessagingPage
