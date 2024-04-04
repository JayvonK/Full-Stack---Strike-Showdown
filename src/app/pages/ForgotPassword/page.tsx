'use client'

import LoginNavComponent from '@/components/PageComponents/LoginNavComponent';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import '@/app/css/LoginPage.css';
import RequiredInputComponent from '@/components/PageComponents/RequiredInputComponent';
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const ForgotPassword = () => {
    const questionArray = ["What's Your Favorite Food?", "What's The Model Of Your First Car?", 'Name of Childhood Best Friend?'];
    const [questionCount, setQuestionCount] = useState<number>(1);
    const [question, setQuestion] = useState<string>(questionArray[0])
    const [username, setUsername] = useState<string>('');
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [userBorderError, setUserBorderError] = useState<string>('');
    const [passwordBorderError, setPasswordBorderError] = useState<string>('');
    const [password2BorderError, setPassword2BorderError] = useState<string>('');
    const [enterUsername, setEnterUsername] = useState<boolean>(true);
    const [enterAnswer, setEnterAnswer] = useState<boolean>(false);
    const [changePassword, setChangePassword] = useState<boolean>(false);
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
    const [passwordOne, setPasswordOne] = useState<string>('');
    const [passwordTwo, setPasswordTwo] = useState<string>('');
    const router = useRouter();
    const { toast } = useToast();

    const handleUserChange = (param: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(param.target.value);
        setUserBorderError('');
    }

    const handleUserAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(e.target.value);
    }

    const handlePasswordOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordOne(e.target.value);
        setPasswordBorderError('');
    }

    const handlePasswordTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        if(e.target.value !== passwordOne){
            setPasswordBorderError('border-red-600 border-2');
            setPassword2BorderError('border-red-600 border-2');
            setPasswordsMatch(false);
        } else {
            setPasswordBorderError('');
            setPassword2BorderError('');
            setPasswordsMatch(true);
        }
        setPasswordTwo(e.target.value);
    }

    const handleConfirmPassword = () => {
        if(passwordOne.trim() === '' || passwordTwo.trim() === ''){
            setPasswordBorderError('border-red-600 border-2');
            setPassword2BorderError('border-red-600 border-2');
            toast({
                variant: "destructive",
                title: "Error, Enter Your Password.",
                description: "Me personally, I wouldn't take that.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        } else if (passwordTwo !== passwordOne) {
            setPasswordBorderError('border-red-600 border-2');
            setPassword2BorderError('border-red-600 border-2');
            setPasswordsMatch(false);
            toast({
                variant: "destructive",
                title: "Error, Passwords Don't Match.",
                description: "Me personally, I wouldn't take that.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
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
        setEnterUsername(true);
        setEnterAnswer(false);
    }

    const handleBackAnswers = () => {
        setChangePassword(false);
        setEnterAnswer(true);
    }

    const handleAnotherQuestion = () => {
        console.log(questionCount);
        if (questionCount >= questionArray.length) {
            toast({
                variant: "destructive",
                title: "No more questions.",
                description: "Me personally, I wouldn't take that.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        } else {
            setQuestionCount(questionCount + 1);
            setQuestion(questionArray[questionCount])
        }
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

                                        <h1 className="txtOrange text-7xl juraBold mb-12 leading-[90px]"> Your Username?</h1>

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

                                        <RequiredInputComponent title={question} type='text' borderError={userBorderError} placeholder='Answer' value={userAnswer} onChange={handleUserAnswerChange} maxLength={5000} />

                                        <h3 className="text-3xl txtOrange jura underline hover:cursor-pointer hover:text-[#ff9939]" onClick={handleAnotherQuestion} >Another Question</h3>

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
                                    <LoginNavComponent exist={true} onClick={handleBackAnswers} />

                                    <div className="px-48">

                                        <h1 className="txtOrange text-7xl juraBold mb-12 leading-[90px]"> Answer Security Question</h1>

                                        <RequiredInputComponent title="New Password" type='password' borderError={passwordBorderError} placeholder='Password' value={passwordOne} onChange={handlePasswordOneChange} maxLength={5000} />

                                        <RequiredInputComponent title="Verify Password" type='password' borderError={password2BorderError} placeholder='Verify Pasword' value={passwordTwo} onChange={handlePasswordTwoChange} maxLength={5000} />

                                        {!passwordsMatch ? (<h1 className='text-2xl jura text-red-600'>Passwords Dont Match</h1>) : (<div></div>)}

                                        <button className="text-4xl text-black min-h-[76px] w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleConfirmPassword}> Change Password</button>

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
