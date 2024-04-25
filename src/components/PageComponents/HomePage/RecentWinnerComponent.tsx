import React from 'react'

const RecentWinnerComponent = (props: { pfp: string, idx: number }) => {
    return (
        <>
            {
                props.idx % 2 != 0 ? (
                    <div className='flex justify-end'>
                        <div className='mb-10'>
                            <div className='flex 2xl:pr-14 pr-5'>
                                <div className='flex items-center'>
                                    <img className='2xl:w-[105px] 2xl:h-[105px] w-20 h-20 aspect-square rounded-full object-cover mr-8' src={props.pfp} alt="bowler's pfp" />
                                </div>
                                <div className=' xl:text-xl text-lg'>
                                    <h3 className='jura text-white text-2xl mb-1'>Bowler Name</h3>
                                    <div className='flex'>
                                        <div className='2xl:text-xl text-lg'>
                                            <h1 className='juraBold txtOrange'> 15 Wins</h1>
                                            <h1 className='juraBold txtOrange'> 220-230 Avg</h1>
                                        </div>

                                        <div className='flex justify-center xl:px-6 px-4'>
                                            <div className='line'></div>
                                        </div>

                                        <div className='2xl:text-xl text-lg'>
                                            <h1 className='juraBold txtOrange'> Streak: 10</h1>
                                            <h1 className='juraBold txtOrange'> 2 Handed (Right)</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className='bgOrange w-full text-2xl juraBold py-1 rounded-lg hover:bg-[#ff9939] mt-6'>View Profile</button>
                        </div>
                    </div>
                ) : (
                    <div className='flex'>
                        <div className='mb-10'>
                            <div className='flex 2xl:pr-14 pr-5'>
                                <div className='flex items-center'>
                                    <img className='2xl:w-[105px] 2xl:h-[105px] w-20 h-20 aspect-square rounded-full object-cover mr-8' src={props.pfp} alt="bowler's pfp" />
                                </div>
                                <div className=' xl:text-xl text-lg'>
                                    <h3 className='jura text-white text-2xl mb-1'>Bowler Name</h3>
                                    <div className='flex'>
                                        <div className='2xl:text-xl text-lg'>
                                            <h1 className='juraBold txtOrange'> 10 Wins</h1>
                                            <h1 className='juraBold txtOrange'> 220-230 Avg</h1>
                                        </div>

                                        <div className='flex justify-center xl:px-6 px-4'>
                                            <div className='line'></div>
                                        </div>

                                        <div className='2xl:text-xl text-lg'>
                                            <h1 className='juraBold txtOrange'> Streak: 10</h1>
                                            <h1 className='juraBold txtOrange'> 1 Handed (Left)</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='bgOrange w-full text-2xl juraBold py-1 rounded-lg hover:bg-[#ff9939] mt-6'>View Profile</button>
                        </div>
                    </div>

                )
            }
        </>



    )
}

export default RecentWinnerComponent
