import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useRouter } from 'next/navigation'

const NewNavBarComponent = (props: {openUsersProfileModal: () => void, openFriendsModal: () => void, openInboxModal: () => void, }) => {
    const route = useRouter();
    return (
        <div className='w-full bg-black 2xl:px-44 xl:px-36 lg:px-24 sm:px-14 px-6 py-6 flex justify-between'>
            <div>
                <div className='flex hover:cursor-pointer' onClick={() => route.push('/pages/HomePage')}>
                    <img className='aspect-auto lg:w-[75px] w-16 rounded-full outline-white outline' src="/images/Strike Showdown Logo.png" alt="" />
                    <div className='flex items-center'>
                        <h1 className='juraBold txtOrange 2xl:text-5xl text-4xl 2xl:ml-10 ml-6 items-end md:block hidden'>Strike <span className='text-white'>Showdown</span></h1>
                    </div>
                </div>
            </div>
            <div className='lg:flex items-center hidden'>
                <div className='flex flex-col items-center hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white 2xl:mr-14 mr-8 ml-20'>
                    <img className='aspect-square xl:w-[45px] w-[40px]' src="/images/Search.png" alt="" />
                    <h3 className='xl:text-xl text-lg  text-center jura mt-2'>Search</h3>
                </div>
                <div className='flex flex-col items-center hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white 2xl:mr-14 mr-8'>
                    <img className='xl:w-[60px] xl:h-[45px] w-14 h-[40px]' src="/images/Friends.png" alt="" />
                    <h3 className='xl:text-xl text-lg  text-center jura mt-2'>Friends</h3>
                </div>
                <div className='flex flex-col items-center hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white 2xl:mr-14 mr-8'>
                    <img className='aspect-square xl:w-[45px] w-[40px]' src="/images/Inbox.png" alt="" />
                    <h3 className='xl:text-xl text-lg  text-center jura mt-2'>Inbox</h3>
                </div>
                <div className='flex flex-col items-center hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white 2xl:mr-14 mr-8' onClick={() => route.push('/pages/MessagingPage')}>
                    <img className='aspect-square xl:w-[45px] w-[40px]' src="/images/Message.png" alt="" />
                    <h3 className='xl:text-xl text-lg  text-center jura mt-2'>Message</h3>
                </div>
                <div className='flex flex-col items-center hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white'>
                    <img className='aspect-square xl:w-[45px] w-[40px]' src="/images/Profile.png" alt="" />
                    <h3 className='xl:text-xl text-lg text-center jura mt-2'>Profile</h3>
                </div>
            </div>
            <div className='lg:hidden'>
                <Sheet>
                    <SheetTrigger><img className='w-16' src="/images/list-bold.svg" alt="" /></SheetTrigger>
                    <SheetContent className='bg-black lg:px-24 sm:px-14 px-6 py-6'>
                        <SheetHeader>
                            <SheetTrigger className='flex justify-end'><img className='w-16' src="/images/list-bold.svg" alt="" /></SheetTrigger>
                            <SheetDescription>
                                <div className='flex items-center hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white mt-10'>
                                    <img className='aspect-square md:w-16 md:h-16 w-14 h-14 mr-10' src="/images/Search.png" alt="" />
                                    <h3 className='md:text-6xl text-5xl text-center inline-block jura'>Search</h3>
                                </div>
                                <div className='flex items-center hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white mt-14'>
                                    <img className='aspect-square md:w-16 md:h-12 w-14 h-10 mr-10' src="/images/Friends.png" alt="" />
                                    <h3 className='md:text-6xl text-5xl text-center inline-block jura'>Friends</h3>
                                </div>
                                <div className='flex items-center hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white mt-14'>
                                    <img className='aspect-square md:w-16 md:h-16 w-14 h-14 mr-10' src="/images/Inbox.png" alt="" />
                                    <h3 className='md:text-6xl text-5xl text-center inline-block jura'>Inbox</h3>
                                </div>
                                <div className='flex items-center hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white mt-14'>
                                    <img className='aspect-square md:w-16 md:h-16 w-14 h-14 mr-10' src="/images/Message.png" alt="" />
                                    <h3 className='md:text-6xl text-5xl text-center inline-block jura'>Message</h3>
                                </div>
                                <div className='flex items-center hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white mt-14'>
                                    <img className='aspect-square md:w-16 md:h-16 w-14 h-14 mr-10' src="/images/Profile.png" alt="" />
                                    <h3 className='md:text-6xl text-5xl text-center inline-block jura'>Profile</h3>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

        </div>
    )
}

export default NewNavBarComponent
