'use client'

import React, { useEffect } from 'react';
import '@/app/css/LoginPageAndHome.css';
import plusIcon from '../../../../public/images/plus-bold.svg';
import closeIcon from '../../../../public/images/x-bold.svg';
import profile from '../../../../public/images/Profile.png';
import planeIcon from '../../../../public/images/paper-plane-tilt-fill.svg'
import NavBarComponent from '@/components/PageComponents/HomePage/NavBarComponent';
import { useAppContext } from '@/context/Context';
import { useRouter } from 'next/navigation';
import NewNavBarComponent from '@/components/PageComponents/NewNavBarComponent';
import MessagingBubbleComponent from '@/components/PageComponents/MessagingBubbleComponent';

const MessagingPage = () => {

    const route = useRouter()
    const pageContext = useAppContext();

    // useEffect(() => {
    //     if (!pageContext.userLoggedIn) {
    //         route.push('/');
    //     }
    // }, [])

    return (
        <>
            <NewNavBarComponent />
            <div className='bgLogin min-h-screen pt-12 2xl:px-44 xl:px-36 lg:px-24 sm:px-14 px-6 relative'>
                <div className='h-full w-full bgHome absolute top-0 left-0 z-10'></div>
                <div className='pb-16 grid lg:grid-cols-[31%_69%] h-[85vh] z-20 relative'>

                    <div className='bg-black rounded-3xl px-7 py-7'>

                        <div className='flex justify-between items-center mb-7'>
                            <h2 className='2xl:text-[40px] xl:text-4xl lg:text-3xl sm:text-4xl text-3xl juraBold text-white'>Messages</h2>
                            <div className='w-[45px] h-[45px]'>
                                <img className='w-full h-full object-cover hover:cursor-pointer' src={plusIcon.src} alt="" />
                            </div>
                        </div>

                        <hr className='border-white mb-8' />

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <div>
                                    <div className='2xl:w-[72px] 2xl:h-[72px] w-16 h-16'>
                                        <img className='w-full h-full object-cover ' src={profile.src} alt="" />
                                    </div>
                                </div>
                                <div className='ml-4 mr-2'>
                                    <h3 className='juraBold xl:text-2xl lg:text-xl sm:text-2xl text-xl text-white break-words'>Ephective Tophu</h3>
                                    <h5 className='jura xl:text-xl lg:text-lg sm:text-xl text-lg text-gray-300'> He/Him</h5>
                                </div>
                            </div>

                            <div className='w-[45px] h-[45px]'>
                                <img className='w-full h-full object-cover hover:cursor-pointer' src={closeIcon.src} alt="" />
                            </div>
                        </div>

                        <hr className='border-white mt-8' />


                    </div>

                    <div className='bg-black lg:rounded-3xl rounded-xl lg:ml-4 lg:py-7 lg:px-10 py-4 px-4 relative lg:flex hidden flex-col justify-between '>
                        <div>
                            <div className='flex lg:justify-between justify-center relative'>
                                <div className='flex lg:flex-row flex-col items-center'>
                                    <div>
                                        <div className='sm:w-[72px] sm:h-[72px] w-12 h-12'>
                                            <img className='w-full h-full object-cover ' src={profile.src} alt="" />
                                        </div>
                                    </div>
                                    <div className='lg:ml-6 2xl:max-w-full xl:max-w-80 max-w-60'>
                                        <h3 className='juraBold xl:text-3xl text-2xl text-white break-words lg:block hidden'>Ephective Tophu</h3>
                                        <h5 className='jura text-xl text-gray-300 lg:block hidden'> He/Him</h5>

                                        <h3 className='jura sm:text-xl text-lg text-white break-words mt-1 lg:hidden'>Ephective Tophu</h3>
                                    </div>
                                </div>

                                <div className='lg:flex items-start hidden'>
                                    <button className='px-5 py-5 xl:text-2xl text-xl text-black juraBold bg-[#FF7A00] rounded-3xl'>Challenge</button>
                                </div>
                                
                                <img className='lg:hidden absolute -left-2 top-4 sm:h-16 h-12' src="/images/caret-left-bold.svg" alt="" />
                            </div>
                            <hr className='border-white mt-4' />

                            
                        </div>

                        <div className='h-full py-5'>
                            <MessagingBubbleComponent isSender={true} delivered={true} />
                            <MessagingBubbleComponent isSender={false} delivered={true} />
                        </div>

                        <div className='flex bg-white py-1 rounded-xl items-center pr-5'>
                            <textarea className='w-full bg-transparent sm:text-2xl text-lg jura placeholder:text-black focus:outline-none pl-4 pr-3 ' rows={1} placeholder='Send A Message'></textarea>
                            <div className='lg:w-12 lg:h-12 sm:w-10 sm:h-10 h-8 w-8'>
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
