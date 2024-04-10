import React from 'react'

const PracticeSessionComponent = (props: { username: string, pfp: string, wins: number, avg: string, streak: number, style: string, locationDate: string, time: string, join: () => void, viewProfile: () => void, userClick: () => void }) => {
  return (
    <div className='px-10'>
      <div className='grid grid-cols-2'>
        <div className='flex juraBold xl:text-3xl text-2xl'>
          <h2 className='text-white mr-14'>Practice Session</h2>
          <h2 className='txtOrange'>1/3</h2>
        </div>
        <div className='flex justify-end'>
          <button className='bgOrange min-w-56 xl:text-3xl text-2xl juraBold py-2 rounded-3xl hover:bg-[#ff9939]' onClick={props.join}>Join</button>
        </div>
      </div>

      <div className='flex my-5'>
        <div className='mr-8'>
          <div className='w-[105px] h-[105px]'>
            <img className='w-full h-full rounded-full object-cover' src={props.pfp} alt="bowler's pfp" />
          </div>
        </div>

        <div className='grid 2xl:grid-cols-[22%_34%_24%_20%] grid-cols-3 w-full'>
          <div className='pr-8 xl:text-xl text-lg'>
            <h3 className='jura text-white'>Username</h3>
            <h3 className='juraBold txtOrange underline cursor-pointer' onClick={props.viewProfile}>GodOfBowling</h3>
          </div>
          <div className='pr-8 2xl:block hidden xl:text-xl text-lg'>
            <h3 className='jura text-white'>Stats</h3>
            <div className='flex'>
              <div className='xl:text-xl text-lg'>
                <h1 className='juraBold txtOrange'> 150 Wins</h1>
                <h1 className='juraBold txtOrange'> 190-200 Avg</h1>
              </div>
              <div className='flex justify-center px-8'>

                <div className='line'>
                </div>

              </div>
              <div className='xl:text-xl text-lg'>
                <h1 className='juraBold txtOrange'> Streak: 4</h1>
                <h1 className='juraBold txtOrange'> 1 Handed (Lefty)</h1>
              </div>
            </div>
          </div>
          <div className=' pr-8 xl:text-xl text-lg'>
            <h3 className='jura text-white'>Location & Date</h3>
            <h3 className='juraBold txtOrange'>Paddock Bowl, 3/20/24</h3>
          </div>
          <div className='xl:text-xl text-lg'>
            <h3 className='jura text-white'>Time</h3>
            <h3 className='juraBold txtOrange'>11:00 pm - 14:00 pm</h3>
          </div>
        </div>
      </div>

      <h3 className='jura xl:text-2xl text-xl text-white'><span className='juraBold txtOrange'>Description: </span> Practice Session for working on spare shooting. Mainly single pins like 10 pins or 7 pins. Will be practicing for 4 games maybe more, feel free to join!</h3>

      <hr className='border-white mt-5 mb-8' />
    </div>
  )
}

export default PracticeSessionComponent
