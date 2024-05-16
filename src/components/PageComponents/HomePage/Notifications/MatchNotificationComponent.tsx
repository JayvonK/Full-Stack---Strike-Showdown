import { INotification, IUserPosts } from '@/interfaces/Interfaces'
import React from 'react'

const MatchNotificationComponent = (props: { data: INotification, click: () => void, edit: boolean }) => {
  return (
    <div className="bg-black flex justify-start rounded-lg px-5 py-4 my-2">
      <img className="h-20 rounded-full aspect-square" alt="" src={props.data.image} />

      <div className="pl-10 ">
        <h2 className="text-lg md:text-xl lg:text-2xl pb-3 jura text-white">
          {props.data.content}
        </h2>
        <button className="text-center text-lg md:text-xl lg:text-2xl bg-orange-500 rounded-lg jura px-2" onClick={() => props.click}>
          {props.edit ? "Edit Match" : "View Match"}
        </button>
      </div>
    </div>
  )
}

export default MatchNotificationComponent
