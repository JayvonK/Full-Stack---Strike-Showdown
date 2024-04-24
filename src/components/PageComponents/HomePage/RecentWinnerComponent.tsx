import React from 'react'

const RecentWinnerComponent = (props: { pfp: string }) => {
    return (
        <div className='max-w-xl mb-10'>
            <div className='flex'>
                <div className='w-[105px] h-[105px] mr-8'>
                    <img className='w-full h-full rounded-full object-cover' src={props.pfp} alt="bowler's pfp" />
                </div>
                <div className='pr-8 xl:text-xl text-lg'>
                    <h3 className='jura text-white'>Bowler Name</h3>
                    <div className='flex'>
                        <div className='xl:text-xl text-lg'>
                            <h1 className='juraBold txtOrange'> 10 Wins</h1>
                            <h1 className='juraBold txtOrange'> 220-230 Avg</h1>
                        </div>

                        <div className='flex justify-center px-8'>
                            <div className='line'></div>
                        </div>

                        <div className='xl:text-xl text-lg'>
                            <h1 className='juraBold txtOrange'> Streak: 10</h1>
                            <h1 className='juraBold txtOrange'> 1 Handed (Left)</h1>
                        </div>
                    </div>
                </div>
            </div>

            <button className='bgOrange w-full text-2xl juraBold py-1 rounded-lg hover:bg-[#ff9939] mt-6'>View Profile</button>
        </div>
    )
}

export default RecentWinnerComponent
