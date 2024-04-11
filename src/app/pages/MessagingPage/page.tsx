'use client'

import React from 'react';
import '@/app/css/LoginPage.css';
import plusIcon from '../../../../public/images/plus-bold.svg';
import closeIcon from '../../../../public/images/x-bold.svg';
import profile from '../../../../public/images/Profile.png';
import planeIcon from '../../../../public/images/paper-plane-tilt-fill.svg'
import NavBarComponent from '@/components/PageComponents/NavBarComponent';

const MessagingPage = () => {

    return (
        <>
            <NavBarComponent />
            <div className='bgLogin min-h-screen pt-12 px-52 pb-20 relative'>
                <div className='h-full w-full bgHome absolute top-0 left-0 z-10'></div>
                <div className='py-16 grid grid-cols-[30%_70%] h-[85vh] z-20 relative'>
                    <div className='bg-black rounded-3xl px-7 py-7'>
                        <div className='flex justify-between items-center mb-7'>
                            <h2 className='text-[40px] juraBold text-white'>Messages</h2>
                            <div className='w-[45px] h-[45px]'>
                                <img className='w-full h-full object-cover hover:cursor-pointer' src={plusIcon.src} alt="" />
                            </div>
                        </div>

                        <hr className='border-white mb-8' />

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <div>
                                    <div className='w-[72px] h-[72px]'>
                                        <img className='w-full h-full object-cover ' src={profile.src} alt="" />
                                    </div>
                                </div>
                                <div className='ml-4'>
                                    <h3 className='juraBold text-2xl text-white'>BowlerDude</h3>
                                    <h5 className='jura text-xl text-gray-300'> He/Him</h5>
                                </div>
                            </div>

                            <div className='w-[45px] h-[45px]'>
                                <img className='w-full h-full object-cover hover:cursor-pointer' src={closeIcon.src} alt="" />
                            </div>
                        </div>

                        <hr className='border-white mt-8' />


                    </div>

                    <div className='bg-black rounded-3xl ml-4 py-7 px-10 relative flex flex-col justify-between'>
                        <div>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <div>
                                        <div className='w-[72px] h-[72px]'>
                                            <img className='w-full h-full object-cover ' src={profile.src} alt="" />
                                        </div>
                                    </div>
                                    <div className='ml-11'>
                                        <h3 className='juraBold text-4xl text-white'>BowlerDude</h3>
                                        <h5 className='jura text-xl text-gray-300'> He/Him</h5>
                                    </div>
                                </div>

                                <button className='min-w-[180px] text-2xl text-black juraBold bg-[#FF7A00] rounded-3xl'>Challenge</button>
                            </div>

                            <hr className='border-white mt-4' />
                        </div>

                        <div className='h-full py-5'>
                            <div className='grid grid-cols-2 gap-3'>
                                <div>
                                </div>
                                <div className=''>
                                    <div className="flex justify-end">
                                        <h1 className='inline-block juraBold text-2xl bg-[#FF7A00] px-5 py-2 rounded-lg max-w-full messageTxt'>What's up?</h1>
                                    </div>
                                    <div className='flex justify-end'>
                                        <p className='text-[#BFBFBF] jura text-xl py-2'>Delivered</p>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-3'>
                                <div>
                                    <h1 className='inline-block juraBold text-2xl bg-white px-5 py-2 rounded-lg messageTxt'>Nothing Much, You?</h1>
                                </div>
                                <div className='flex justify-end'>

                                </div>
                            </div>
                        </div>

                        <div className='flex bg-white min-h-[65px] rounded-xl items-center pr-5'>
                            <input className='w-full bg-transparent text-2xl jura placeholder:text-black focus:outline-none pl-6' type="text" placeholder='Send A Message' />
                            <div className='w-12 h-12'>
                                <img className='w-full h-full' src={planeIcon.src} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessagingPage
