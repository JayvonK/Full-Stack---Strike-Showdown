import { INotification } from '@/interfaces/Interfaces'
import React from 'react'

const MessageNotificationComponent = (props: { data: INotification }) => {
    return (
        <div className="bg-black flex justify-start rounded-lg mx-8 px-5 py-4 my-2">
            <img className="h-20 rounded-full aspect-square" alt="" src={props.data.image} />
            <div className="pl-10">
                <h2 className="text-lg md:text-xl lg:text-2xl pb-3 jura text-white">
                    {props.data.content}
                </h2>
            </div>
        </div>
    )
}

export default MessageNotificationComponent
