import React from 'react'

const MessagingBubbleComponent = (props: {isSender: boolean, delivered: boolean}) => {
    return (
        <div className='grid grid-cols-2 gap-3'>
            <div>
                <h1 className='inline-block juraBold text-2xl bg-white px-5 py-2 rounded-lg messageTxt'>Nothing Much, You?</h1>
            </div>
            <div className=''>
                <div className="flex justify-end">
                    <h1 className='inline-block juraBold text-2xl bg-[#FF7A00] px-5 py-2 rounded-lg max-w-full messageTxt'>What's up?</h1>
                </div>
                <div className='flex justify-end'>
                    <p className='text-[#BFBFBF] jura text-xl py-2'>Delivered</p>
                </div>
            </div>
        </div>
    )
}

export default MessagingBubbleComponent