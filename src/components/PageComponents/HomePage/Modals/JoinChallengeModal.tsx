

import { IUserPosts } from '@/interfaces/Interfaces'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const JoinChallengeModal = (props: { data: IUserPosts, closeModal: () => void, joinChallenge: (data: IUserPosts) => void, handleJoinChallengeLocationChange: (e: string) => void, joinChallengeLocation: string, currentUserID: number, errorToast: () => void }) => {

  let locations = props.data.locations.split(",");

  let isIncluded = false

  let userIDs = props.data.matchUsersIDs.split("-");

  userIDs.forEach(user => {
    if (Number(user) === props.currentUserID) {
      isIncluded = true;
    }
  })

  return (
    <div className='bg-white rounded-lg p-4'>
      <h1 className='jura text-black text-4xl inline-block px-6 py-2 bgOrange mb-4 rounded-lg'>Info</h1>

      <div className='bg-black p-4 rounded-lg'>
        <h2 className='text-white text-2xl juraBold'>*For Meetup Time & Date Message User</h2>

        <div className='mt-6'>
          <div className='flex justify-between'>

            <div className='flex'>
              <img className='aspect-square object-cover w-28 rounded-full mr-8' src={props.data.image} alt="" />

              <div className='flex flex-col'>

                <h3 className='juraBold text-3xl txtOrange'>{props.data.publisher}</h3>

                <div className='grid grid-cols-2 gap-8 text-white text-xl jura mt-2'>

                  <div>
                    <p>{props.data.wins} Wins</p>
                    <p>{props.data.average}</p>
                  </div>

                  <div>
                    <p>Streak: {props.data.streak}</p>
                    <p>{props.data.style}</p>
                  </div>

                </div>
              </div>
            </div>

            <div>
              <button className='text-2xl text-black jura py-2 px-6 bgOrange rounded-md' onClick={props.errorToast}>Message</button>
            </div>

          </div>
        </div>


        <div className='grid grid-cols-[60%_40%] mt-6'>

          <div className='text-2xl jura'>
            <h2 className='text-white'>Locations:</h2>
            <h2 className='juraBold txtOrange'>{props.data.locations}</h2>
          </div>

          <div className='flex flex-col items-end jura text-2xl'>
            <div>
              <h2 className='text-white pr-20'>Select Location:</h2>
              {
                props.data.locations.includes(",") ? (
                  <Select value={props.joinChallengeLocation} onValueChange={props.handleJoinChallengeLocationChange}>
                    <SelectTrigger className="w-full xl:text-xl sm:text-lg text-sm bg-white pl-3 py-0">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {
                        locations.map((location, idx) => (
                          <SelectItem key={idx} className='xl:text-xl sm:text-lg text-sm' value={location === "" ? "N/A" : location}>{location}</SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                ) : (
                  <Select disabled>
                    <SelectTrigger className="w-full xl:text-xl sm:text-lg text-sm bg-white pl-3 py-0">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {
                        locations.map((location, idx) => (
                          <SelectItem key={idx} className='xl:text-xl sm:text-lg text-sm' value={location === "" ? "N/A" : location}>{location}</SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                )
              }
            </div>

          </div>

        </div>


        <div className='text-2xl jura my-6'>
          <h2 className='text-white'>Description:</h2>
          <h2 className='juraBold txtOrange'>{props.data.description}</h2>
        </div>

      </div>



      <div className='pt-4 flex justify-end'>
        {
          !isIncluded && <button className='jura lg:text-3xl text-2xl py-2 px-4 rounded-md bgOrange mr-6' onClick={() => props.joinChallenge(props.data)}>Challenge</button>
        }

        <button className='jura lg:text-3xl text-2xl py-2 px-4 rounded-md bgOrange' onClick={props.closeModal}>Close</button>
      </div>
    </div>
  )
}

export default JoinChallengeModal
