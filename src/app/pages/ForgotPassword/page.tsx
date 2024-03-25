'use client'

import LoginNavComponent from '@/app/components/LoginNavComponent';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import '@/app/css/LoginPage.css';
import { Toast } from 'flowbite-react';
import { HiX } from "react-icons/hi";
import RequiredInputComponent from '@/app/components/RequiredInputComponent';

const ForgotPassword = () => {
    const [errorMessage, setErrorMessage] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [userBorderError, setUserBorderError] = useState<string>('');
    const router = useRouter();

    const handleUserChange = (param: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(param.target.value);
        setErrorMessage(false);
        setUserBorderError('');
    }

    const handleContinue = () => {
        if (username.length === 0) {
            setErrorMessage(true);
            setUserBorderError('border-red-600 border-2');
        } else {

        }
    }



    const handleBack = () => {
        router.back();
    }

    return (
        <div>
            <div className="min-h-screen bgLogin">
                <img src="" alt="" />
                {
                    <div className='grid grid-cols-2'>



                        <div className="min-h-screen bgBlack">
                            {
                                errorMessage ? (
                                    <Toast className="absolute">
                                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                                            <HiX className="h-5 w-5" />
                                        </div>
                                        <div className="ml-3 text-sm text-black">Invalid Username</div>
                                        <Toast.Toggle onClick={() => setErrorMessage(false)} />
                                    </Toast>) : (<div></div>)
                            }
                            <LoginNavComponent exist={true} onClick={handleBack} />

                            {/* Column 1 (Login Side) */}
                            <div className="px-48 pb-32">

                                <h1 className="txtOrange text-7xl juraBold mb-12 leading-[90px]"> What's your username?</h1>

                                <RequiredInputComponent title="Username:" type='text' borderError={userBorderError} placeholder='Enter Username' value={username} onChange={handleUserChange} />

                                <button className="text-4xl text-black min-h-[76px] w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleContinue}> Continue</button>

                            </div>

                            {/* Column 2 (Nothing) */}
                            <div>

                            </div>

                        </div>
                    </div>

                }
            </div>
        </div>
    )
}

export default ForgotPassword
