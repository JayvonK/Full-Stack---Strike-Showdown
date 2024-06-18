'use client'

import LoginNavComponent from '@/components/PageComponents/LoginPage/LoginNavComponent';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import '@/app/css/LoginPageAndHome.css';
import RequiredInputComponent from '@/components/PageComponents/LoginPage/RequiredInputComponent';
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useAppContext } from '@/context/Context';
import { ChangePasswordAPI, GetUserAPI, LoginAPI, VerifyForPasswordAPI } from '@/Data/DataServices';
import { IPublicUserData, IUserLogin } from '@/interfaces/Interfaces';

const ForgotPassword = () => {
    const [questionArray, setQuestionArray] = useState<string[]>([]);
    const [questionCount, setQuestionCount] = useState<number>(1);
    const [question, setQuestion] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [userBorderError, setUserBorderError] = useState<string>('');
    const [passwordBorderError, setPasswordBorderError] = useState<string>('');
    const [enterUsername, setEnterUsername] = useState<boolean>(true);
    const [enterAnswer, setEnterAnswer] = useState<boolean>(false);
    const [changePassword, setChangePassword] = useState<boolean>(false);
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
    const [passwordOne, setPasswordOne] = useState<string>('');
    const [passwordTwo, setPasswordTwo] = useState<string>('');
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
        if (e.target.value !== passwordTwo && passwordTwo.trim() !== '') {
            setPasswordBorderError('border-red-600 border-2');
            setPasswordsMatch(false);
            setPasswordOne(e.target.value);
        } else {
            setPasswordOne(e.target.value);
            setPasswordBorderError('');
            setPasswordsMatch(true);
        }
    }

    const handlePasswordTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== passwordOne) {
            setPasswordBorderError('border-red-600 border-2');
            setPasswordsMatch(false);
            setPasswordTwo(e.target.value);
        } else {
            setPasswordTwo(e.target.value);
            setPasswordBorderError('');
            setPasswordsMatch(true);
        }
    }

    const handleConfirmPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (passwordTwo !== passwordOne) {
            setPasswordBorderError('border-red-600 border-2');
            setPasswordsMatch(false);
            toast({
                variant: "destructive",
                title: "Error, Passwords Don't Match.",
                description: "Make sure they match!",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        } else {
            try {
                let userData: IUserLogin = {
                    usernameOrEmail: username,
                    password: passwordOne
                }
                const data = await LoginAPI(userData);
                if (data !== null) {
                    toast({
                        variant: "destructive",
                        title: "Error",
                        description: "You Cannot Enter A Password That You Previously Had",
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                    })
                }
            } catch (error) {
                try {
                    await ChangePasswordAPI(username, passwordOne);
                    pageContext.setChangedPasswordBool(true);
                    router.push('/')
                } catch (error) {
                    toast({
                        variant: "destructive",
                        title: "Error, Something Went Wrong",
                        description: "...",
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                    })
                }
            }
        }
    }

    const handleConfirmUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let data: IPublicUserData | null = await GetUserAPI(username);
            if (data !== null) {
                let dataQuestionArray: string[] = [];
                dataQuestionArray.push(data.securityQuestion);
                dataQuestionArray.push(data.securityQuestionTwo);
                dataQuestionArray.push(data.securityQuestionThree);
                setQuestionArray(dataQuestionArray);
                setQuestion(dataQuestionArray[0]);
                setEnterAnswer(true)
                setEnterUsername(false);
            } else {
                setUserBorderError('border-red-600 border-2');
                toast({
                    variant: "destructive",
                    title: "Username Doesn't Exist",
                    description: "Sorry",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
            }
        } catch (error) {
            setUserBorderError('border-red-600 border-2');
            toast({
                variant: "destructive",
                title: "Username Doesn't Exist",
                description: "Sorry",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }

    const handleConfirmAnswer = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await VerifyForPasswordAPI(username, question, userAnswer)
            if (data) {
                setChangePassword(true);
                setEnterAnswer(false);
            } else {
                toast({
                    variant: "destructive",
                    title: "Wrong Answer.",
                    description: "Please enter the correct answer",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Wrong Answer.",
                description: "Please enter the correct answer",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }

    const handleBack = () => {
        router.push('/');
    }

    const handleBackUsername = () => {
        setQuestionCount(1);
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
                title: "No more questions",
                description: "Answer the question if you can",
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

                                        <h1 className="txtOrange sm:text-6xl text-5xl juraBold mb-20 leading-[90px]"> Your Username?</h1>

                                        <form onSubmit={handleConfirmUser}>

                                            <RequiredInputComponent title="Username:" type='text' borderError={userBorderError} placeholder='Enter Username' value={username} onChange={handleUserChange} maxLength={20} />

                                            <button type='submit' className="text-3xl text-black sm:min-h-14 min-h-12 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]"> Confirm</button>

                                        </form>

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

                                        <h1 className="txtOrange sm:text-6xl text-5xl juraBold mb-12 leading-[90px]"> Answer Security Question</h1>

                                        <form onSubmit={handleConfirmAnswer}>

                                            <RequiredInputComponent title={question + "?"} type='text' borderError={userBorderError} placeholder='Answer' value={userAnswer} onChange={handleUserAnswerChange} maxLength={50} />

                                            <h3 className="sm:text-3xl text-2xl txtOrange jura underline hover:cursor-pointer hover:text-[#ff9939]" onClick={handleAnotherQuestion} >Another Question</h3>

                                            <button type='submit' className="text-3xl text-black sm:min-h-14 min-h-12 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]"> Continue</button>
                                        </form>

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

                                        <form onSubmit={handleConfirmPassword}>
                                            <RequiredInputComponent title="New Password" type='password' borderError={passwordBorderError} placeholder='Password' value={passwordOne} onChange={handlePasswordOneChange} maxLength={50} />

                                            <RequiredInputComponent title="Verify Password" type='password' borderError={passwordBorderError} placeholder='Verify Pasword' value={passwordTwo} onChange={handlePasswordTwoChange} maxLength={50} />

                                            {!passwordsMatch ? (<h1 className='text-2xl jura text-red-600'>Passwords Dont Match</h1>) : (<div></div>)}

                                            <button type='submit' className="text-3xl text-black sm:min-h-14 min-h-12 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" > Change Password</button>

                                        </form>

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
