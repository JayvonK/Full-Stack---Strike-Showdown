'use client'

import LoginNavComponent from '@/components/PageComponents/LoginNavComponent';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '@/app/css/LoginPage.css';
import RequiredInputComponent from '@/components/PageComponents/RequiredInputComponent';
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from "@/components/ui/toast";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IUserInfoWithStats } from '@/interfaces/Interfaces';
import NotRequiredInputComponent from '@/components/PageComponents/NotRequiredInputComponent';

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [userBorderError, setUserBorderError] = useState<string>('');
  const [creatingAccount, setCreatingAccount] = useState<boolean>(true);
  const [doesUserWantStats, setDoesUserWantStats] = useState<boolean>(false);
  const [answeringSecurity, setAnsweringSecurity] = useState<boolean>(false);
  const [addingCustomStats, setAddingCustomStats] = useState<boolean>(false);
  const [questionOne, setQuestionOne] = useState<string>('');
  const [questionTwo, setQuestionTwo] = useState<string>('');
  const [questionThree, setQuestionThree] = useState<string>('');
  const [securityOne, setSecurityOne] = useState<string>('');
  const [securityTwo, setSecurityTwo] = useState<string>('');
  const [securityThree, setSecurityThree] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [prounouns, setPronouns] = useState<string>('');
  const [bowlingCenter, setBowlingCenter] = useState<string>('');
  const [average, setAverage] = useState<string>('');
  const [style, setStyle] = useState<string>('');
  const [highGame, setHighGame] = useState<string>('');
  const [hightSeries, setHighSeries] = useState<string>('');
  const [earnings, setEarnings] = useState<string>('');
  const router = useRouter();
  const { toast } = useToast();

  const handleUserChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(param.target.value);
    setErrorMessage(false);
    setUserBorderError('');
  }

  const handleEmailChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(param.target.value);
    setErrorMessage(false);
    setUserBorderError('');
  }

  const handlePasswordChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(param.target.value);
    setErrorMessage(false);
    setUserBorderError('');
  }

  const handlePassword2Change = (param: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(param.target.value);
    setErrorMessage(false);
    setUserBorderError('');
  }

  const handleSecurityOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecurityOne(e.target.value);
  }

  const handleSecurityTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecurityTwo(e.target.value);
  }

  const handleSecurityThreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecurityThree(e.target.value);
  }

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
  }

  const handlePronounsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPronouns(e.target.value);
  }

  const handleBowlingCenterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBowlingCenter(e.target.value);
  }

  const handleAverageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAverage(e.target.value);
  }

  const handleStyleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStyle(e.target.value);
  }

  const handleHighGameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHighGame(e.target.value);
  }

  const handleHighSeriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHighSeries(e.target.value);
  }

  const handleEarningsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEarnings(e.target.value);
  }

  const handleNext = () => {
    if (username.trim() === '' || password.trim() === '' || password2.trim() === '' || email.trim() === '') {
      setErrorMessage(true);
      setUserBorderError('border-red-600 border-2');
      toast({
        variant: "destructive",
        title: "Error.",
        description: "Me personally, I wouldn't take that.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    } else {
      setAnsweringSecurity(true)
      setCreatingAccount(false);
    }
  }

  const handleNextOptional = () => {
    setAnsweringSecurity(false);
    setDoesUserWantStats(true);
  }

  const handleAddStats = () => {
    setAddingCustomStats(true);
    setDoesUserWantStats(false)
  }

  const handleBackLogin = () => {
    router.push('/');
  }

  const handleBackCreateAcc = () => {
    setCreatingAccount(true);
    setAnsweringSecurity(false);
  }

  const handleBackSecurityQuestions = () => {
    setAnsweringSecurity(true);
    setDoesUserWantStats(false);
  }

  const handleBackOptional = () => {
    setDoesUserWantStats(false);
    setAnsweringSecurity(true);
  }

  const handleCreateWithoutStats = () => {
    router.push('/');
  }

  const handleCreateAccountWithStats = () => {
    let userData: IUserInfoWithStats = {
      username: username,
      email: email,
      password: password,
      bolwingCenter: bowlingCenter,
      average: average,
      style: style,
      highGame: highGame,
      highSeries: hightSeries,
      earnings: earnings,
      questionOne: questionOne,
      questionOneAnswer: securityOne,
      questionTwo: questionTwo,
      questionTwoAnswer: securityTwo,
      questionThree: questionThree,
      questionThreeAnswer: securityThree
    }

    router.push('/');
  }


  return (
    <div>
      <div className="min-h-screen bgLogin">
        <img src="" alt="" />

        <div className='grid grid-cols-2'>

          <div className="min-h-screen bgBlack">
            {
              creatingAccount ? (
                <>

                  <LoginNavComponent exist={true} onClick={handleBackLogin} />

                  <div className="px-48">

                    <h1 className="txtOrange text-7xl juraBold mb-5 leading-[90px]"> Create Your Account</h1>

                    <RequiredInputComponent title="Username:" type='text' borderError={userBorderError} placeholder='Enter Username' value={username} onChange={handleUserChange} maxLength={5000} />
                    <RequiredInputComponent title="Email:" type='text' borderError={userBorderError} placeholder='Enter Enail' value={email} onChange={handleEmailChange} maxLength={20} />
                    <RequiredInputComponent title="Password:" type='password' borderError={userBorderError} placeholder='Enter Password' value={password} onChange={handlePasswordChange} maxLength={5000} />
                    <RequiredInputComponent title="Verify Password:" type='password' borderError={userBorderError} placeholder='Re-enter Password' value={password2} onChange={handlePassword2Change} maxLength={5000} />

                    <button className="text-4xl text-black min-h-[76px] w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleNext}> Next</button>

                  </div>
                </>
              ) : (
                <div>

                </div>
              )
            }

            {
              answeringSecurity ? (
                <>

                  <LoginNavComponent exist={true} onClick={handleBackCreateAcc} />

                  <div className="px-48">

                    <h1 className="txtOrange text-7xl juraBold mb-5 leading-[90px]"> Security Questions</h1>

                    {/* Selecting Question 1 */}
                    <Select onValueChange={(e) => setQuestionOne(e)}>
                      <SelectTrigger className="w-full jura text-4xl text-white min-h-[40px]">
                        <SelectValue placeholder="Select a Question" />
                      </SelectTrigger>
                      <SelectContent className='text-3xl'>
                        <SelectGroup>
                          <SelectLabel>Security Questions</SelectLabel>
                          <SelectItem value="What's Your Favorite Movie?">What's Your Favorite Movie?</SelectItem>
                          <SelectItem value="What's The Model Of Your First Car?">What's The Model Of Your First Car?</SelectItem>
                          <SelectItem value="Name Of Your First Pet?">Name Of Your First Pet?</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <RequiredInputComponent title="" type='text' borderError={userBorderError} placeholder='Answer #1' value={securityOne} onChange={handleSecurityOneChange} maxLength={5000} />


                    {/* Selecting Question 2 */}
                    <Select onValueChange={(e) => setQuestionTwo(e)}>
                      <SelectTrigger className="w-full jura text-4xl text-white min-h-[40px]">
                        <SelectValue placeholder="Select a Question" />
                      </SelectTrigger>
                      <SelectContent className='text-3xl'>
                        <SelectGroup>
                          <SelectLabel>Security Questions</SelectLabel>
                          <SelectItem value="Name of Childhood Best Friend?">Name of Childhood Best Friend?</SelectItem>
                          <SelectItem value="What's Your Nickname?">What's Your Nickname?</SelectItem>
                          <SelectItem value="What's Your Favorite Food?">What's Your Favorite Food?</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <RequiredInputComponent title="" type='text' borderError={userBorderError} placeholder='Answer #2' value={securityTwo} onChange={handleSecurityTwoChange} maxLength={5000} />


                    {/* Selecting Question 3 */}
                    <Select onValueChange={(e) => setQuestionThree(e)}>
                      <SelectTrigger className="w-full jura text-4xl text-white min-h-[40px]">
                        <SelectValue placeholder="Select a Question" />
                      </SelectTrigger>
                      <SelectContent className='text-3xl'>
                        <SelectGroup>
                          <SelectLabel>Security Questions</SelectLabel>
                          <SelectItem value="What's Your Favorite School Subject?">What's Your Favorite School Subject?</SelectItem>
                          <SelectItem value="What's Your Favorite Cartoon?">What's Your Favorite Cartoon?</SelectItem>
                          <SelectItem value="What's Your Favorite Ice Cream?">What's Your Favorite Ice Cream?</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <RequiredInputComponent title="" type='text' borderError={userBorderError} placeholder='Answer #3' value={securityThree} onChange={handleSecurityThreeChange} maxLength={5000} />

                    <button className="text-4xl text-black min-h-[76px] w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleNextOptional}> Next</button>
                  </div>
                </>
              ) : (
                <div>

                </div>
              )
            }

            {
              doesUserWantStats ? (
                <>
                  <LoginNavComponent exist={true} onClick={handleBackOptional} />

                  <div className="px-48">

                    <h1 className="txtOrange text-6xl juraBold mb-14 leading-[76px]"> Do You Want To Add Your Custom Stats & Info To Your Account?</h1>

                    <button className="text-4xl text-black min-h-[76px] w-full my-9 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleAddStats}>Yes</button>
                    <h1 className='text-4xl w-full text-white jura text-center'>OR</h1>
                    <button className="text-4xl text-black min-h-[76px] w-full my-9 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleCreateWithoutStats}>No, Create Account</button>

                  </div>
                </>
              ) : (<div></div>)


            }

            {
              addingCustomStats ? (
                <>
                  <LoginNavComponent exist={true} onClick={handleBackLogin} />

                  <div className="px-48">

                    <h1 className="txtOrange text-7xl juraBold mb-10 leading-[90px]"> Add Your Stats/Info</h1>

                    <ScrollArea className="h-[450px] w-full rounded-md pr-4">
                      <h1 className='text-4xl jura text-white font-medium'>Stats (Scroll)</h1>
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='Full Name' value={fullname} onChange={handleFullNameChange} maxLength={5000} />
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='Pronouns' value={prounouns} onChange={handlePronounsChange} maxLength={5000} />
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='Main Bowling Center' value={bowlingCenter} onChange={handleBowlingCenterChange} maxLength={5000} />
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='Bowling Avg' value={average} onChange={handleAverageChange} maxLength={5000} />
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='Bowling Style' value={style} onChange={handleStyleChange} maxLength={5000} />
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='High Game' value={highGame} onChange={handleHighGameChange} maxLength={5000} />
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='High Series' value={hightSeries} onChange={handleHighSeriesChange} maxLength={5000} />
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='$ Earnings $' value={earnings} onChange={handleEarningsChange} maxLength={5000} />
                    </ScrollArea>

                    <button className="text-4xl text-black min-h-[76px] w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleCreateAccountWithStats}> Next</button>

                  </div>
                </>) : (<></>)
            }



          </div>

          {/* Column 2 */}
          <div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default SignUp
