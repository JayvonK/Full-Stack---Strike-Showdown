'use client'

import React from 'react'
import '@/app/css/LoginPage.css'
import bowler from '../../../../public/images/pexels-pavel-danilyuk-7429728.jpg'


const TestPage = () => {
    return (
        <div className='bg-gray-500 min-h-screen pt-56 px-52'>
            <div className='h-96 bg-black'>
                <h1 className='text-white jura'>Available Matches</h1>
                <div className='px-10'>
                    <div className='grid grid-cols-2'>
                        <div className='flex juraBold text-3xl'>
                            <h2 className='text-white mr-14'>Practice Session</h2>
                            <h2 className='txtOrange'>1/3</h2>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bgOrange min-w-56 text-3xl juraBold py-2 rounded-3xl'>Join</button>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='mr-14'>
                            <img className='w-[105px] h-24 rounded-full object-cover' src={bowler.src} alt="bowler's pfp" />
                        </div>
                        
                        <div className='grid grid-cols-[21%_37%_21%_21%] w-full gap-4'>
                            <div>
                                <h3 className='jura text-white'>Username</h3>
                                <h3 className='jura txtOrange underline'>GodOfBowling</h3>
                            </div>
                            <div>
                                <h3 className='jura text-white'>Stats</h3>
                                <h3 className='jura txtOrange'>GodOfBowling</h3>
                            </div>
                            <div>
                                <h3 className='jura text-white'>Location & Date</h3>
                                <div className=''>

                                </div>

                                <div>

                                </div>
                                <h3 className='jura txtOrange'>Paddock Bowl, 3/20/24</h3>
                            </div>
                            <div>
                                <h3 className='jura text-white'>Time</h3>
                                <h3 className='jura txtOrange'>1:00 pm</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestPage
