'use client'

import React from 'react'
import '@/app/css/LoginPage.css'
import bowler from '../../../../public/images/pexels-pavel-danilyuk-7429728.jpg'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";


const TestPage = () => {
    const [openModal, setOpenModal] = useState(false);



    return (
        <>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                            companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                            soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='bg-gray-500 min-h-screen pt-56 px-52'>
                <div className='h-96 bg-black'>
                    <h1 className='text-white jura'>Available Matches</h1>
                    <div className='px-10'>
                        <div className='grid grid-cols-2'>
                            <div className='flex juraBold xl:text-3xl text-2xl'>
                                <h2 className='text-white mr-14'>Practice Session</h2>
                                <h2 className='txtOrange'>1/3</h2>
                            </div>
                            <div className='flex justify-end'>
                                <button className='bgOrange min-w-56 xl:text-3xl text-2xl juraBold py-2 rounded-3xl hover:bg-[#ff9939]' onClick={() => setOpenModal(true)}>Join</button>
                            </div>
                        </div>

                        <div className='flex my-5'>
                            <div>
                                <img className='w-[105px] h-24 rounded-full object-cover' src={bowler.src} alt="bowler's pfp" />
                            </div>

                            <div className='flex justify-around w-full'>
                                <div className='pr-8'>
                                    <h3 className='jura text-white'>Username</h3>
                                    <h3 className='juraBold txtOrange underline cursor-pointer' onClick={() => setOpenModal(true)}>GodOfBowling</h3>
                                </div>
                                <div className='pr-8 2xl:block hidden'>
                                    <h3 className='jura text-white'>Stats</h3>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='juraBold txtOrange'> 150 Wins</h1>
                                            <h1 className='juraBold txtOrange'> 190-200Avg</h1>
                                        </div>
                                        <div className='flex justify-center px-6'>
                                            <div className='line'>

                                            </div>

                                        </div>
                                        <div>
                                            <h1 className='juraBold txtOrange'> Streak: 4</h1>
                                            <h1 className='juraBold txtOrange'> 1 Handed(Lefty)</h1>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='jura text-white'>Location & Date</h3>
                                    <h3 className='juraBold txtOrange'>Paddock Bowl, 3/20/24</h3>
                                </div>
                                <div>
                                    <h3 className='jura text-white'>Time</h3>
                                    <h3 className='juraBold txtOrange'>1:00 pm - 4:00 pm</h3>
                                </div>
                            </div>
                        </div>

                        <h3 className='jura text-2xl text-white'><span className='juraBold txtOrange'>Description: </span> Practice Session for working on spare shooting. Mainly single pins like 10 pins or 7 pins. Will be practicing for 4 games maybe more, feel free to join!</h3>

                        <hr className='border-white mt-5 mb-8' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestPage
