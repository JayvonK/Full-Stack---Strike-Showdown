import { IUserPosts } from '@/interfaces/Interfaces'
import React from 'react'

const PracticeSessionComponent = (props: { data: IUserPosts, join: () => void, userClick: () => void}) => {
  return (
    <div className='md:px-10 sm:px-8 px-4'>
      <div className='flex justify-between'>
        <div className='flex juraBold xl:text-3xl sm:text-2xl text-lg'>
          <h2 className='text-white md:mr-10 mr-5'>Practice Session</h2>
          <h2 className='txtOrange'>{props.data.currentPpl}/{props.data.maxPpl}</h2>
        </div>
        <div>
          <button className='bgOrange md:min-w-56 xl:text-3xl sm:text-2xl text-lg juraBold md:py-2 py-1 md:px-0 sm:px-10 px-4 sm:rounded-3xl rounded-xl hover:bg-[#ff9939]' onClick={props.join}>Join</button>
        </div>
      </div>

      <div className='flex my-5'>
        <div className='2xl:mr-10 md:mr-16 sm:mr-8 mr-4'>
          <div className='md:w-[105px] md:h-[105px] sm:w-[100px] sm:h-[100px] w-[75px] h-[75px]'>
            <img className='w-full h-full rounded-full object-cover' src={props.data.image} alt="bowler's pfp" />
          </div>
        </div>

        <div className='lg:grid 2xl:grid-cols-[22%_34%_24%_20%] grid-cols-[25%_40%_35%] w-full hidden'>
          <div className='pr-8 xl:text-xl sm:text-lg text-sm'>
            <h3 className='jura text-white'>Username:</h3>
            <h3 className='juraBold txtOrange underline cursor-pointer' onClick={props.userClick}>{props.data.publisher}</h3>
          </div>

          <div className='pr-8 2xl:block hidden xl:text-xl sm:text-lg text-sm'>
            <h3 className='jura text-white'>Stats:</h3>
            <div className='flex'>
              <div className='xl:text-xl sm:text-lg text-sm'>
                <h1 className='juraBold txtOrange'> {props.data.wins} Wins</h1>
                <h1 className='juraBold txtOrange'> {props.data.average === 'N/A' ? 'No Avg' : props.data.average}</h1>
              </div>
              <div className='flex justify-center px-8'>

                <div className='line'>
                </div>

              </div>
              <div className='xl:text-xl sm:text-lg text-sm'>
                <h1 className='juraBold txtOrange'> Streak: {props.data.streak}</h1>
                <h1 className='juraBold txtOrange'> {props.data.style === 'N/A' ? 'No Style' : props.data.style}</h1>
              </div>
            </div>
          </div>

          <div className=' pr-8 xl:text-xl sm:text-lg text-sm'>
            <h3 className='jura text-white'>Location & Date</h3>
            <h3 className='juraBold txtOrange'>{props.data.locations}, {props.data.date}</h3>
          </div>
          <div className='xl:text-xl sm:text-lg text-sm'>
            <h3 className='jura text-white'>Time</h3>
            <h3 className='juraBold txtOrange'>{props.data.time}</h3>
          </div>
        </div>

        <div className='lg:hidden block w-full'>
          <div className='flex justify-between'>
            <div>
              <div className='pr-8 xl:text-xl sm:text-lg text-sm'>
                <h3 className='jura text-white sm:-mb-2 mb-0'>Username:</h3>
                <h3 className='juraBold txtOrange underline cursor-pointer' onClick={props.userClick}>{props.data.publisher}</h3>
              </div>
            </div>
            <div>
              <div className='xl:text-xl sm:text-lg text-sm'>
                <h3 className='jura text-white sm:-mb-2 mb-0'>Time:</h3>
                <h3 className='juraBold txtOrange'>{props.data.time}</h3>
              </div>
            </div>
          </div>

          <div className='xl:text-xl sm:text-lg text-sm mt-3'>
            <h3 className='jura text-white sm:-mb-2 mb-0'>Location & Date:</h3>
            <h3 className='juraBold txtOrange'>{props.data.locations}, {props.data.date}</h3>
          </div>
        </div>

      </div>

      <h3 className='jura xl:text-2xl md:text-xl sm:text-lg text-sm text-white'><span className='juraBold txtOrange'>Description: </span> {props.data.description}</h3>

      <hr className='border-white mt-5 mb-8' />
    </div>
  )
}

export default PracticeSessionComponent
