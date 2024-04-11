'use client'

import LoginNavComponent from '@/components/PageComponents/LoginNavComponent';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '@/app/css/LoginPage.css';
import RequiredInputComponent from '@/components/PageComponents/LoginPage/RequiredInputComponent';
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
import NotRequiredInputComponent from '@/components/PageComponents/LoginPage/NotRequiredInputComponent';
import { CreateAccountAPI, GetUserAPI } from '@/Data/DataServices';
import { useAppContext } from '@/context/Context';

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [userBorderError, setUserBorderError] = useState<string>('');
  const [passwordBorderError, setPasswordBorderError] = useState<string>('');
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
  const pageContext = useAppContext();
  const [loading, setLoading] = useState<boolean>(false);

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
    if (password2.trim() !== '' && password2 !== param.target.value) {
      setPassword(param.target.value);
      setPasswordsMatch(false);
      setPasswordBorderError('border-red-600 border-2');
    } else {
      setPassword(param.target.value);
      setErrorMessage(false);
      setPasswordBorderError('');
    }
  }

  const handlePassword2Change = (param: React.ChangeEvent<HTMLInputElement>) => {
    if (param.target.value !== password) {
      setPassword2(param.target.value);
      setPasswordsMatch(false);
      setPasswordBorderError('border-red-600 border-2');
    } else {
      setPasswordsMatch(true);
      setPassword2(param.target.value);
      setPasswordBorderError('');
    }
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

  const handleAverageChange = (e: string) => {
    setAverage(e);
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

  const handleNext = async () => {
    if (username.trim() === '' || password.trim() === '' || password2.trim() === '' || email.trim() === '' || password !== password2) {
      setUserBorderError('border-red-600 border-2');
      setPasswordBorderError('border-red-600 border-2')
      toast({
        variant: "destructive",
        title: "Error.",
        description: "Me personally, I wouldn't take that.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    } else {
      try {
        let data = await GetUserAPI(username);
        if (data !== null) {
          setUserBorderError('border-red-600 border-2');
          toast({
            variant: "destructive",
            title: "Error. Username Taken",
            description: "Me personally, I wouldn't take that.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }
      } catch (error) {
        setAnsweringSecurity(true);
        setCreatingAccount(false);
      }
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

  const handleCreateWithoutStats = async () => {
    let userData: IUserInfoWithStats = {
      username: username,
      email: email,
      password: password,
      securityQuestion: questionOne,
      securityQuestionTwo: questionTwo,
      securityQuestionThree: questionThree,
      securityAnswer: securityOne,
      securityAnswerTwo: securityTwo,
      securityAnswerThree: securityThree,
      fullName: 'N/A',
      profileImage: 'N/A',
      pronouns: 'N/A',
      wins: 0,
      loses: 0,
      style: 'N/A',
      mainCenter: 'N/A',
      average: 'N/A',
      earnings: 'N/A'
    }
    try {
      let createdUser = await CreateAccountAPI(userData);
      console.log(createdUser);
      setLoading(true);
      pageContext.setCreatedAccountBool(true);
      router.push('/');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error, Make Sure You Filled Everything In.",
        description: "Me personally, I wouldn't take that.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  const handleCreateAccountWithStats = async () => {
    let userData: IUserInfoWithStats = {
      username: username,
      email: email,
      password: password,
      securityQuestion: questionOne,
      securityQuestionTwo: questionTwo,
      securityQuestionThree: questionThree,
      securityAnswer: securityOne,
      securityAnswerTwo: securityTwo,
      securityAnswerThree: securityThree,
      fullName: fullname,
      profileImage: 'N/A',
      pronouns: prounouns,
      wins: 0,
      loses: 0,
      style: style,
      mainCenter: bowlingCenter,
      average: average,
      earnings: earnings
    }

    try {
      let createdUser = await CreateAccountAPI(userData);
      console.log(createdUser);
      setLoading(true);
      pageContext.setCreatedAccountBool(true);
      router.push('/');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error, Make Sure You Filled Everything In.",
        description: "Me personally, I wouldn't take that.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }


  return (
    <div>
      <div className="min-h-screen bgLogin">
        <img src="" alt="" />

        <div className='grid 2xl:grid-cols-2 xl:grid-cols-[60%_40%] lg:grid-cols-[70%_30%] md:grid-cols-[75%_25%] sm:grid-cols-[85%_15%]'>

          <div className="min-h-screen bgBlack">
            {
              creatingAccount ? (
                <>

                  <LoginNavComponent exist={true} onClick={handleBackLogin} />

                  <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                    <h1 className="txtOrange sm:text-7xl text-5xl juraBold mb-8 sm:leading-[90px] leading-[75px]"> Create Your Account</h1>

                    <RequiredInputComponent title="Username:" type='text' borderError={userBorderError} placeholder='Enter Username' value={username} onChange={handleUserChange} maxLength={5000} />
                    <RequiredInputComponent title="Email:" type='text' borderError={userBorderError} placeholder='Enter Email' value={email} onChange={handleEmailChange} maxLength={20} />
                    <RequiredInputComponent title="Password:" type='password' borderError={passwordBorderError} placeholder='Enter Password' value={password} onChange={handlePasswordChange} maxLength={5000} />
                    <RequiredInputComponent title="Verify Password:" type='password' borderError={passwordBorderError} placeholder='Re-enter Password' value={password2} onChange={handlePassword2Change} maxLength={5000} />
                    {!passwordsMatch ? (<h1 className='text-2xl jura text-red-600'>Passwords Dont Match</h1>) : (<div></div>)}

                    <button className="sm:text-4xl text-3xl text-black sm:min-h-[76px] min-h-16 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleNext}> Next</button>

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

                  <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                    <h1 className="txtOrange sm:text-7xl text-5xl juraBold mb-12 sm:leading-[90px] leading-[75px]"> Security Questions</h1>

                    {/* Selecting Question 1 */}
                    <Select onValueChange={(e) => setQuestionOne(e)}>
                      <SelectTrigger className="w-full jura sm:text-4xl text-3xl text-white min-h-[40px]">
                        <SelectValue placeholder="Select Question" />
                      </SelectTrigger>
                      <SelectContent className='sm:text-3xl text-2xl selectWidth'>
                        <SelectGroup>
                          <SelectLabel>Security Questions</SelectLabel>
                          <SelectItem value="What's Your Favorite Movie">What's Your Favorite Movie?</SelectItem>
                          <SelectItem value="What's The Model Of Your First Car">What's The Model Of Your First Car?</SelectItem>
                          <SelectItem value="Name Of Your First Pet">Name Of Your First Pet?</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <RequiredInputComponent title="" type='text' borderError={userBorderError} placeholder='Answer #1' value={securityOne} onChange={handleSecurityOneChange} maxLength={5000} />


                    {/* Selecting Question 2 */}
                    <Select onValueChange={(e) => setQuestionTwo(e)}>
                      <SelectTrigger className="w-full jura sm:text-4xl text-3xl text-white min-h-[40px]">
                        <SelectValue placeholder="Select Question" />
                      </SelectTrigger>
                      <SelectContent className='sm:text-3xl text-2xl selectWidth'>
                        <SelectGroup className=''>
                          <SelectLabel>Security Questions</SelectLabel>
                          <SelectItem value="Name of Childhood Best Friend">Name of Childhood Best Friend?</SelectItem>
                          <SelectItem value="What's Your Nickname">What's Your Nickname?</SelectItem>
                          <SelectItem value="What's Your Favorite Food">What's Your Favorite Food?</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <RequiredInputComponent title="" type='text' borderError={userBorderError} placeholder='Answer #2' value={securityTwo} onChange={handleSecurityTwoChange} maxLength={5000} />


                    {/* Selecting Question 3 */}
                    <Select onValueChange={(e) => setQuestionThree(e)}>
                      <SelectTrigger className="w-full jura sm:text-4xl text-3xl text-white min-h-[40px]">
                        <SelectValue placeholder="Select Question" />
                      </SelectTrigger>
                      <SelectContent className='sm:text-3xl text-2xl selectWidth'>
                        <SelectGroup>
                          <SelectLabel>Security Questions</SelectLabel>
                          <SelectItem value="What's Your Favorite School Subject">What's Your Favorite School Subject?</SelectItem>
                          <SelectItem value="What's Your Favorite Cartoon">What's Your Favorite Cartoon?</SelectItem>
                          <SelectItem value="What's Your Favorite Ice Cream">What's Your Favorite Ice Cream?</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <RequiredInputComponent title="" type='text' borderError={userBorderError} placeholder='Answer #3' value={securityThree} onChange={handleSecurityThreeChange} maxLength={5000} />

                    <button className="sm:text-4xl text-3xl text-black sm:min-h-[76px] min-h-16 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleNextOptional}> Next</button>
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

                  <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                    <h1 className="txtOrange sm:text-7xl text-4xl juraBold mb-12 sm:leading-[90px] leading-[75px]"> Do You Want To Add Your Custom Stats & Info To Your Account?</h1>

                    <button className="sm:text-4xl text-3xl text-black sm:min-h-[76px] min-h-16 w-full my-9 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleAddStats}>Yes</button>

                    <h1 className='text-4xl w-full text-white jura text-center'>OR</h1>

                    {
                      loading ? (
                        <button className="sm:text-4xl text-3xl text-black sm:min-h-[76px] min-h-16 w-full my-8 juraBold rounded-xl bg-orange-300"> Creating...</button>
                      ) : (
                        <button className="sm:text-4xl text-3xl text-black sm:min-h-[76px] min-h-16 w-full my-9 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleCreateWithoutStats}>No, Create Account</button>
                      )
                    }

                  </div>
                </>
              ) : (<div></div>)

            }

            {
              addingCustomStats ? (
                <>
                  <LoginNavComponent exist={true} onClick={handleBackOptional} />

                  <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                    <h1 className="txtOrange sm:text-7xl text-5xl juraBold mb-12 sm:leading-[90px] leading-[75px]"> Add Your Stats/Info</h1>

                    <ScrollArea className="h-[450px] w-full rounded-md pr-4">
                      <h1 className='text-4xl jura text-white font-medium'>Stats (Scroll ↓)</h1>
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='Full Name' value={fullname} onChange={handleFullNameChange} maxLength={5000} />
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='Pronouns' value={prounouns} onChange={handlePronounsChange} maxLength={5000} />
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='Bowling Center' value={bowlingCenter} onChange={handleBowlingCenterChange} maxLength={5000} />
                      <Select onValueChange={(e) => handleAverageChange(e)} >
                        <SelectTrigger className="w-full jura sm:text-4xl text-3xl sm:min-h-[76px] min-h-16 bg-white pl-3 my-5">
                          <SelectValue placeholder="Select a State" />
                        </SelectTrigger>
                        <SelectContent className="jura text-4xl">
                          <SelectItem value="10-20 Avg">All States</SelectItem>
                          <SelectItem value="10-20 Avg">Alabama</SelectItem>
                          <SelectItem value="10-20 Avg">Alaska</SelectItem>
                          <SelectItem value="10-20 Avg">Arizona</SelectItem>
                          <SelectItem value="10-20 Avg">Arkansas</SelectItem>
                          <SelectItem value="10-20 Avg">California</SelectItem>
                          <SelectItem value="10-20 Avg">Colorado</SelectItem>
                          <SelectItem value="10-20 Avg">Connecticut</SelectItem>
                          <SelectItem value="10-20 Avg">Delaware</SelectItem>
                          <SelectItem value="10-20 Avg">District of Columbia</SelectItem>

                        </SelectContent>
                      </Select>
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='Bowling Style' value={style} onChange={handleStyleChange} maxLength={5000} />
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='High Game' value={highGame} onChange={handleHighGameChange} maxLength={5000} />
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='High Series' value={hightSeries} onChange={handleHighSeriesChange} maxLength={5000} />
                      <NotRequiredInputComponent type='text' borderError={userBorderError} placeholder='$ Earnings $' value={earnings} onChange={handleEarningsChange} maxLength={5000} />
                    </ScrollArea>

                    {
                      loading ? (
                        <button className="sm:text-4xl text-3xl text-black sm:min-h-[76px] min-h-16 w-full my-8 juraBold rounded-xl bg-orange-300"> Creating...</button>
                      ) : (
                        <button className="sm:text-4xl text-3xl text-black sm:min-h-[76px] min-h-16 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleCreateAccountWithStats}> Create Account</button>
                      )
                    }

                  </div>
                </>) : (<></>)
            }



          </div>

          {/* Column 2 */}
          <div>

          </div>
        </div>


      </div>
    </div >
  )
}

export default SignUp
