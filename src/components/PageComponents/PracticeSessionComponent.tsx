import React from 'react'

const PracticeSessionComponent = (props: { currentPpl: number, maxPpl: number, username: string, pfp: string, wins: number, avg: string, streak: number, style: string, location: string, date:string, time: string, join: () => void, userClick: () => void, description: string }) => {
  return (
    <div className='px-10'>
      <div className='grid grid-cols-2'>
        <div className='flex juraBold xl:text-3xl text-2xl'>
          <h2 className='text-white mr-14'>Practice Session</h2>
          <h2 className='txtOrange'>{props.currentPpl}/{props.maxPpl}</h2>
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
            <h3 className='juraBold txtOrange underline cursor-pointer' onClick={props.userClick}>{props.username}</h3>
          </div>
          <div className='pr-8 2xl:block hidden xl:text-xl text-lg'>
            <h3 className='jura text-white'>Stats</h3>
            <div className='flex'>
              <div className='xl:text-xl text-lg'>
                <h1 className='juraBold txtOrange'> {props.wins} Wins</h1>
                <h1 className='juraBold txtOrange'> {props.avg}</h1>
              </div>
              <div className='flex justify-center px-8'>

                <div className='line'>
                </div>

              </div>
              <div className='xl:text-xl text-lg'>
                <h1 className='juraBold txtOrange'> Streak: {props.streak}</h1>
                <h1 className='juraBold txtOrange'> {props.style}</h1>
              </div>
            </div>
          </div>
          <div className=' pr-8 xl:text-xl text-lg'>
            <h3 className='jura text-white'>Location & Date</h3>
            <h3 className='juraBold txtOrange'>{props.location}, {props.date}</h3>
          </div>
          <div className='xl:text-xl text-lg'>
            <h3 className='jura text-white'>Time</h3>
            <h3 className='juraBold txtOrange'>{props.time}</h3>
          </div>
        </div>
      </div>

      <h3 className='jura xl:text-2xl text-xl text-white'><span className='juraBold txtOrange'>Description: </span> {props.description}</h3>

      <hr className='border-white mt-5 mb-8' />
    </div>
  )
}

export default PracticeSessionComponent
