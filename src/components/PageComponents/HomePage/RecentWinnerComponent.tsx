import React from 'react'

const RecentWinnerComponent = (props: { pfp: string, idx: number, errorToast: () => void }) => {
    return (
        <>
            {
                props.idx % 2 != 0 ? (
                    <div className='md:flex lg:justify-end md:justify-center w-full'>
                        <div className='md:mb-10'>
                            <div className='flex 2xl:pr-14 xl:pr-5 lg:pr-2 sm:pr-4 justify-between'>
                                <div className='flex items-center'>
                                    <img className='2xl:w-[105px] 2xl:h-[105px] xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-[105px] md:h-[105px] sm:w-24 sm:h-24 w-16 h-16 aspect-square rounded-full object-cover xl:mr-8 lg:mr-4 mr-12' src={props.pfp} alt="bowler's pfp" />
                                </div>
                                <div className='xl:text-xl text-lg md:w-auto w-full'>
                                    <h3 className='jura text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg mb-1'>Bowler Name</h3>
                                    <div className='flex justify-between'>
                                        <div className='2xl:text-xl xl:text-lg lg:text-base md:text-xl sm:text-base text-sm'>
                                            <h1 className='juraBold txtOrange'> 15 Wins</h1>
                                            <h1 className='juraBold txtOrange'> 220-230 Avg</h1>
                                        </div>

                                        <div className='xl:flex justify-center xl:px-6 lg:px-4 sm:px-10 px-2'>
                                            <div className='line'></div>
                                        </div>

                                        <div className='2xl:text-xl xl:text-lg lg:text-base md:text-xl sm:text-base text-sm'>
                                            <h1 className='juraBold txtOrange'> Streak: 10</h1>
                                            <h1 className='juraBold txtOrange'> 2 Handed (Right)</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className='bgOrange w-full xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg juraBold py-1 px-2 rounded-lg hover:bg-[#ff9939] mt-6 md:mb-0 mb-8 md:block hidden' onClick={props.errorToast}>View Profile</button>
                        </div>
                        <button className='bgOrange w-full xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg juraBold py-1 px-2 rounded-lg hover:bg-[#ff9939] mt-6 md:mb-0 mb-8 block md:hidden' onClick={props.errorToast}>View Profile</button>
                    </div>
                ) : (
                    <div className='md:flex w-full lg:justify-normal md:justify-center'>
                        <div className='md:mb-10 '>
                            <div className='flex 2xl:pr-14 xl:pr-5 lg:pr-2 sm:pr-4 justify-between w-full'>
                                <div className='flex items-center'>
                                    <img className='2xl:w-[105px] 2xl:h-[105px] xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-[105px] md:h-[105px] sm:w-24 sm:h-24 w-16 h-16 aspect-square rounded-full object-cover xl:mr-8 lg:mr-4 mr-12' src={props.pfp} alt="bowler's pfp" />
                                </div>

                                <div className='xl:text-xl text-lg md:w-auto w-full'>
                                    <h3 className='jura text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg mb-1'>Bowler Name</h3>
                                    <div className='flex justify-between'>
                                        <div className='2xl:text-xl xl:text-lg lg:text-base md:text-xl sm:text-base text-sm'>
                                            <h1 className='juraBold txtOrange'> 10 Wins</h1>
                                            <h1 className='juraBold txtOrange'> 220-230 Avg</h1>
                                        </div>

                                        <div className='xl:flex justify-center xl:px-6 lg:px-4 sm:px-10 px-2 '>
                                            <div className='line'></div>
                                        </div>

                                        <div className='2xl:text-xl xl:text-lg lg:text-base md:text-xl sm:text-base text-sm'>
                                            <h1 className='juraBold txtOrange'> Streak: 10</h1>
                                            <h1 className='juraBold txtOrange'> 2 Handed (Right)</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='bgOrange w-full xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg juraBold py-1 px-2 rounded-lg hover:bg-[#ff9939] mt-6 md:mb-0 mb-8 md:block hidden' onClick={props.errorToast}>View Profile</button>
                        </div>
                        <button className='bgOrange w-full xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg juraBold py-1 px-2 rounded-lg hover:bg-[#ff9939] mt-6 md:mb-0 mb-8 block md:hidden' onClick={props.errorToast}>View Profile</button>
                    </div>

                )
            }
        </>



    )
}

export default RecentWinnerComponent
