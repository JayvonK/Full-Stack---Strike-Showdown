import React from 'react'

const RecentWinnerComponent = (props: { pfp: string, idx: number }) => {
    return (
        <>
            {
                props.idx % 2 != 0 ? (
                    <div className='lg:flex lg:justify-end'>
                        <div className='mb-10'>
                            <div className='flex 2xl:pr-14 xl:pr-5 pr-2 w-full'>
                                <div className='flex items-center'>
                                    <img className='2xl:w-[105px] 2xl:h-[105px] xl:w-20 xl:h-20 lg:w-16 lg:h-16 w-20 h-20 aspect-square rounded-full object-cover xl:mr-8 mr-4' src={props.pfp} alt="bowler's pfp" />
                                </div>
                                <div className='xl:text-xl text-lg lg:w-auto w-full lg:ml-0 ml-8'>
                                    <h3 className='jura text-white xl:text-2xl lg:text-xl text-2xl mb-1'>Bowler Name</h3>
                                    <div className='flex justify-between'>
                                        <div className='2xl:text-xl xl:text-lg lg:text-base text-xl'>
                                            <h1 className='juraBold txtOrange'> 15 Wins</h1>
                                            <h1 className='juraBold txtOrange'> 220-230 Avg</h1>
                                        </div>

                                        <div className='xl:flex justify-center xl:px-6 px-4'>
                                            <div className='line'></div>
                                        </div>

                                        <div className='2xl:text-xl xl:text-lg lg:text-base text-xl'>
                                            <h1 className='juraBold txtOrange'> Streak: 10</h1>
                                            <h1 className='juraBold txtOrange'> 2 Handed (Right)</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className='bgOrange w-full xl:text-2xl text-xl juraBold py-1 rounded-lg hover:bg-[#ff9939] mt-6'>View Profile</button>
                        </div>
                    </div>
                ) : (
                    <div className='flex w-full '>
                        <div className='mb-10 '>
                            <div className='flex 2xl:pr-14 xl:pr-5 lg:pr-2 pr-16'>
                                <div className='flex items-center'>
                                    <img className='2xl:w-[105px] 2xl:h-[105px] xl:w-20 xl:h-20 lg:w-16 lg:h-16 w-[105px] h-[105px] aspect-square rounded-full object-cover xl:mr-8 lg:mr-4 mr-12' src={props.pfp} alt="bowler's pfp" />
                                </div>

                                <div className='xl:text-xl text-lg inline-block'>
                                    <h3 className='jura text-white xl:text-2xl lg:text-xl text-2xl mb-1'>Bowler Name</h3>
                                    <div className='flex justify-between'>
                                        <div className='2xl:text-xl xl:text-lg lg:text-base text-xl'>
                                            <h1 className='juraBold txtOrange'> 10 Wins</h1>
                                            <h1 className='juraBold txtOrange'> 220-230 Avg</h1>
                                        </div>

                                        <div className='xl:flex justify-center xl:px-6 lg:px-4 px-14'>
                                            <div className='line'></div>
                                        </div>

                                        <div className='2xl:text-xl xl:text-lg lg:text-base text-xl'>
                                            <h1 className='juraBold txtOrange'> Streak: 10</h1>
                                            <h1 className='juraBold txtOrange'> 2 Handed (Right)</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <button className='bgOrange w-full xl:text-2xl lg:text-xl text-2xl juraBold py-1 px-2 rounded-lg hover:bg-[#ff9939] mt-6 '>View Profile</button>
                            
                        </div>
                    </div>

                )
            }
        </>



    )
}

export default RecentWinnerComponent
