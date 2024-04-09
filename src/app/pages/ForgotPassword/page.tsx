'use client'

import LoginNavComponent from '@/components/PageComponents/LoginNavComponent';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import '@/app/css/LoginPage.css';
import RequiredInputComponent from '@/components/PageComponents/RequiredInputComponent';
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useAppContext } from '@/context/Context';
import { ChangePasswordAPI, GetUserAPI, VerifyForPasswordAPI } from '@/Data/DataServices';
import { IPublicUserData } from '@/interfaces/Interfaces';

const ForgotPassword = () => {
    const [questionArray, setQuestionArray] = useState<string[]>([]);
    const [questionCount, setQuestionCount] = useState<number>(1);
    const [question, setQuestion] = useState<string>('');
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
    const [currentUserData, setCurrentUserData] = useState<IPublicUserData | null>(null);
    const router = useRouter();
    const { toast } = useToast();
    const pageContext = useAppContext();

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
        if (e.target.value !== passwordOne) {
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

    const handleConfirmPassword = async () => {
        if (passwordOne.trim() === '' || passwordTwo.trim() === '') {
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
        } else {
            try {
                await ChangePasswordAPI(username, passwordOne);
                pageContext.setChangedPasswordBool(true);
                router.push('/')
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "Error, Something Went Wrong",
                    description: "Me personally, I wouldn't take that.",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
            }
        }
    }

    const handleConfirmUser = async () => {
        if (username.trim() === '') {
            setUserBorderError('border-red-600 border-2');
            toast({
                variant: "destructive",
                title: "Error.",
                description: "Me personally, I wouldn't take that.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        } else {
            try {
                let data: IPublicUserData | null = await GetUserAPI(username);
                if (data !== null) {
                    let dataQuestionArray: string[] = [];
                    dataQuestionArray.push(data.securityQuestion);
                    dataQuestionArray.push(data.securityQuestionTwo);
                    dataQuestionArray.push(data.securityQuestionThree);
                    console.log(dataQuestionArray);
                    setQuestionArray(dataQuestionArray);
                    setQuestion(dataQuestionArray[0]);
                    setCurrentUserData(data);
                    setEnterAnswer(true)
                    setEnterUsername(false);
                } else {
                    setUserBorderError('border-red-600 border-2');
                    toast({
                        variant: "destructive",
                        title: "Username Doesn't Exist",
                        description: "Me personally, I wouldn't take that.",
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                    })
                }
            } catch (error) {
                setUserBorderError('border-red-600 border-2');
                toast({
                    variant: "destructive",
                    title: "Username Doesn't Exist",
                    description: "Me personally, I wouldn't take that.",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
            }
        }
    }

    const handleConfirmAnswer = async () => {
        if (await VerifyForPasswordAPI(username, question, userAnswer)) {
            setChangePassword(true);
            setEnterAnswer(false);
        } else {
            toast({
                variant: "destructive",
                title: "Wrong Answer.",
                description: "Please correct the correct answer",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
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
                description: "Press go back a question",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        } else {
            setQuestionCount(questionCount + 1);
            setQuestion(questionArray[questionCount])
        }
    }

    const handleGoBack = () => {

    }

    return (
        <div>
            <div className="min-h-screen bgLogin">
                <img src="" alt="" />
                <div className='grid 2xl:grid-cols-2 xl:grid-cols-[60%_40%] lg:grid-cols-[70%_30%] md:grid-cols-[75%_25%] sm:grid-cols-[85%_15%]'>

                    <div className="min-h-screen bgBlack">
                        {
                            enterUsername ? (
                                <>
                                    <LoginNavComponent exist={true} onClick={handleBack} />

                                    <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                                        <h1 className="txtOrange sm:text-7xl text-5xl juraBold mb-12 leading-[90px]"> Your Username?</h1>

                                        <RequiredInputComponent title="Username:" type='text' borderError={userBorderError} placeholder='Enter Username' value={username} onChange={handleUserChange} maxLength={20} />

                                        <button className="sm:text-4xl text-3xl text-black sm:min-h-[76px] min-h-16 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleConfirmUser}> Confirm</button>

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

                                    <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                                        <h1 className="txtOrange sm:text-7xl text-5xl juraBold mb-12 leading-[90px]"> Answer Security Question</h1>

                                        <RequiredInputComponent title={question + "?"} type='text' borderError={userBorderError} placeholder='Answer' value={userAnswer} onChange={handleUserAnswerChange} maxLength={5000} />

                                        <h3 className="sm:text-3xl text-2xl txtOrange jura underline hover:cursor-pointer hover:text-[#ff9939]" onClick={handleAnotherQuestion} >Another Question</h3>

                                        <button className="sm:text-4xl text-3xl text-black sm:min-h-[76px] min-h-16 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleConfirmAnswer}> Continue</button>

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

                                    <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                                        <h1 className="txtOrange sm:text-7xl text-5xl juraBold mb-12 leading-[90px]"> Answer Security Question</h1>

                                        <RequiredInputComponent title="New Password" type='password' borderError={passwordBorderError} placeholder='Password' value={passwordOne} onChange={handlePasswordOneChange} maxLength={5000} />

                                        <RequiredInputComponent title="Verify Password" type='password' borderError={password2BorderError} placeholder='Verify Pasword' value={passwordTwo} onChange={handlePasswordTwoChange} maxLength={5000} />

                                        {!passwordsMatch ? (<h1 className='text-2xl jura text-red-600'>Passwords Dont Match</h1>) : (<div></div>)}

                                        <button className="sm:text-4xl text-3xl text-black sm:min-h-[76px] min-h-16 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleConfirmPassword}> Change Password</button>

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
