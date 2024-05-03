import React from 'react'

const MessagingBubbleComponent = (props: { isSender: boolean, delivered: boolean }) => {
    return (
        <>
            {
                props.isSender ? (
                    <div className='grid grid-cols-[30%_70%] '>
                        <div>
                        </div>

                        <div className=''>
                            <div className="flex justify-end">
                                <h1 className='juraBold sm:text-2xl text-lg bg-[#FF7A00] sm:px-5 sm:py-2 px-3 py-1 rounded-lg max-w-full break-words'>Whats up?</h1>
                            </div>
                            <div className='flex justify-end'>
                                <p className='text-[#BFBFBF] jura sm:text-xl text-base sm:py-2 py-1'>Delivered</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='grid grid-cols-[70%_30%] '>
                        <div className='flex'>
                            <h1 className='juraBold sm:text-2xl text-lg bg-white sm:px-5 sm:py-2 px-3 py-1 rounded-lg break-words'>Nothin, wbu?</h1>
                        </div>

                        <div className=''>

                        </div>
                    </div>
                )
            }
            
        </>
    )
}

export default MessagingBubbleComponent
