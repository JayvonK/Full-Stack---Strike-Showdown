'use client'

import LoginNavComponent from '@/components/PageComponents/LoginNavComponent';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import '@/app/css/LoginPage.css';
import RequiredInputComponent from '@/components/PageComponents/RequiredInputComponent';
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const ForgotPassword = () => {
    const questionArray = ["What's Your Favorite Food?", "What's The Model Of Your First Car?", 'Name of Childhood Best Friend?']
    const [username, setUsername] = useState<string>('');
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [userBorderError, setUserBorderError] = useState<string>('');
    const [enterUsername, setEnterUsername] = useState<boolean>(true);
    const [enterAnswer, setEnterAnswer] = useState<boolean>(false);
    const [changePassword, setChangePassword] = useState<boolean>(false);
    const router = useRouter();
    const { toast } = useToast();

    const handleUserChange = (param: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(param.target.value);
        setUserBorderError('');
    }

    const handleConfirmUser = () => {
        if (username.trim() === '') {
            setUserBorderError('border-red-600 border-2');
            toast({
                variant: "destructive",
                title: "Error.",
                description: "Me personally, I wouldn't take that.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
              })
        } else {
            setEnterAnswer(true)
            setEnterUsername(false);
        }
    }

    const handleConfirmAnswer = () => {
        setChangePassword(true);
        setEnterAnswer(false);
    }

    const handleBack = () => {
        router.push('/');
    }

    const handleBackUsername = () => {
        setEnterUsername(true)
    }

    return (
        <div>
            <div className="min-h-screen bgLogin">
                <img src="" alt="" />
                <div className='grid grid-cols-2'>

                    <div className="min-h-screen bgBlack">
                        {
                            enterUsername ? (
                            <>
                                <LoginNavComponent exist={true} onClick={handleBack} />

                                <div className="px-48">

                                    <h1 className="txtOrange text-7xl juraBold mb-12 leading-[90px]"> Security Question</h1>

                                    <RequiredInputComponent title="Username:" type='text' borderError={userBorderError} placeholder='Enter Username' value={username} onChange={handleUserChange} maxLength={20} />

                                    <button className="text-4xl text-black min-h-[76px] w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleConfirmUser}> Confirm</button>

                                </div>
                            </>

                            ) : (
                                <div></div>

                            )
                        }

                        {
                            enterAnswer ? (
                            <>
                                <LoginNavComponent exist={true} onClick={handleBackUsername} />

                                <div className="px-48">

                                    <h1 className="txtOrange text-7xl juraBold mb-12 leading-[90px]"> Answer Security Question</h1>

                                    <RequiredInputComponent title="Username:" type='text' borderError={userBorderError} placeholder='Answer' value={userAnswer} onChange={handleUserChange} maxLength={20} />

                                    <button className="text-4xl text-black min-h-[76px] w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleConfirmAnswer}> Continue</button>

                                </div>
                            </>

                            ) : (
                                <div></div>

                            )
                        }

{
                            changePassword ? (
                            <>
                                <LoginNavComponent exist={true} onClick={handleBackUsername} />

                                <div className="px-48">

                                    <h1 className="txtOrange text-7xl juraBold mb-12 leading-[90px]"> Answer Security Question</h1>

                                    <RequiredInputComponent title="Username:" type='text' borderError={userBorderError} placeholder='Answer' value={userAnswer} onChange={handleUserChange} maxLength={20} />

                                    <button className="text-4xl text-black min-h-[76px] w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleConfirmAnswer}> Change Password</button>

                                </div>
                            </>

                            ) : (
                                <div></div>

                            )
                        }


                    </div>

                    {/* Column 2 (Nothing) */}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
