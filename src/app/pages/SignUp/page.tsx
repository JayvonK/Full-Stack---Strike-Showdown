'use client'

import LoginNavComponent from '@/components/PageComponents/LoginPage/LoginNavComponent';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '@/app/css/LoginPageAndHome.css';
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
import question from '../../../../public/images/question.svg';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SignUp = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showSecondPassword, setShowSecondPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [userBorderError, setUserBorderError] = useState<string>('');
  const [emailBorderError, setEmailBorderError] = useState<string>('');
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
  const [pronouns, setPronouns] = useState<string>('');
  const [bowlingCenter, setBowlingCenter] = useState<string>('');
  const [average, setAverage] = useState<string>('');
  const [style, setStyle] = useState<string>('');
  const [highGame, setHighGame] = useState<string>('');
  const [highSeries, setHighSeries] = useState<string>('');
  const [earnings, setEarnings] = useState<string>('');
  const router = useRouter();
  const { toast } = useToast();
  const pageContext = useAppContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [toolTipOpen, setToolTipOpen] = useState<boolean>(false);
  const [toolTipOpen2, setToolTipOpen2] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('');

  const handleUserChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(param.target.value);
    setUserBorderError('');
    setPasswordBorderError('');
  }

  const handleEmailChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(param.target.value);
    setEmailBorderError('');
  }

  const handleLocationChange = (e: string) => {
    setLocation(e);
  }

  const showPasswordClick = () => {
    setShowPassword(!showPassword)
  }

  const secondShowPasswordClick = () => {
    setShowSecondPassword(!showSecondPassword);
  }

  const handlePasswordChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    if (password2.trim() !== '' && password2 !== param.target.value) {
      setPassword(param.target.value);
      setPasswordsMatch(false);
      setPasswordBorderError('border-red-600 border-2');
    } else {
      setPassword(param.target.value);
      setPasswordsMatch(true);
      setPasswordBorderError('');
      setUserBorderError('');
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

  const handleStyleChange = (e: string) => {
    setStyle(e);
  }

  const handleHighGameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((Number(e.target.value) || e.target.value === '') && !e.target.value.includes('.') && Number(e.target.value) <= 300) {
      setHighGame(e.target.value);
    } else if (Number(e.target.value) > 300)  {
      toast({
        variant: "destructive",
        title: "Error ",
        description: "Your High Game Cannot be over 300",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  const handleHighSeriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((Number(e.target.value) || e.target.value === '') && !e.target.value.includes('.')) {
      setHighSeries(e.target.value);
    }
  }

  const handleEarningsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((Number(e.target.value) || e.target.value === '')) {
      setEarnings(e.target.value);
    }
  }

  const handleNext = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== password2) {
      setPasswordBorderError('border-red-600 border-2')
      toast({
        variant: "destructive",
        title: "Error.",
        description: "Please fill in your info or make sure passwords match",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    } else if (username.trim() !== '' && password.trim() !== '' && password2.trim() !== '' && email.trim() !== '') {
      try {
        let data = await GetUserAPI(username);
        if (data !== null) {
          setUserBorderError('border-red-600 border-2');
          toast({
            variant: "destructive",
            title: "Error. Username Taken",
            description: "Username or email is already taken",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }
      } catch (error) {
        try {
          let data = await GetUserAPI(email);
          if (data !== null) {
            setEmailBorderError('border-red-600 border-2');
            toast({
              variant: "destructive",
              title: "Error. Username Taken",
              description: "Username or email is already taken",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
          }
        } catch (error) {
          setQuestionOne('');
          setQuestionTwo('');
          setQuestionThree('');
          setAnsweringSecurity(true);
          setCreatingAccount(false);
        }
      }
    }
  }

  const handleNextOptional = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (questionOne.trim() !== '' && questionTwo.trim() !== '' && questionThree.trim() !== '' && securityOne.trim() !== '' && securityTwo.trim() !== '' && securityThree.trim() !== '') {
      setAnsweringSecurity(false);
      setDoesUserWantStats(true);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Make sure you select and answer all questions",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
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
    setQuestionOne('');
    setQuestionTwo('');
    setQuestionThree('');
    setDoesUserWantStats(false);
  }

  const handleBackOptional = () => {
    setStyle('');
    setAverage('');
    setAddingCustomStats(false);
    setDoesUserWantStats(true)
  }

  const handleCreateWithoutStats = async () => {
    let userData: IUserInfoWithStats = {
      username: username,
      email: email,
      password: password,
      location: location,
      securityQuestion: questionOne,
      securityQuestionTwo: questionTwo,
      securityQuestionThree: questionThree,
      securityAnswer: securityOne,
      securityAnswerTwo: securityTwo,
      securityAnswerThree: securityThree,
      fullName: 'N/A',
      profileImage: '/images/blankpfp.png',
      pronouns: 'N/A',
      wins: 0,
      losses: 0,
      style: 'N/A',
      mainCenter: 'N/A',
      average: 'N/A',
      earnings: 'N/A',
      highGame: 'N/A',
      highSeries: 'N/A',
      streak: 0
    }

    try {
      setLoading(true);
      let createdUser = await CreateAccountAPI(userData);
      console.log(createdUser);
      pageContext.setCreatedAccountBool(true);
      router.push('/');
    } catch (error) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }

  }

  const handleCreateAccountWithStats = async () => {
    let userData: IUserInfoWithStats = {
      username: username,
      email: email,
      location: location,
      password: password,
      securityQuestion: questionOne,
      securityQuestionTwo: questionTwo,
      securityQuestionThree: questionThree,
      securityAnswer: securityOne,
      securityAnswerTwo: securityTwo,
      securityAnswerThree: securityThree,
      fullName: fullname.trim() === '' ? 'N/A' : fullname,
      profileImage: '/images/blankpfp.png',
      pronouns: pronouns.trim() === '' ? 'N/A' : pronouns,
      wins: 0,
      losses: 0,
      style: style.trim() === '' ? 'N/A' : style,
      mainCenter: bowlingCenter.trim() === '' ? 'N/A' : bowlingCenter,
      average: average.trim() === '' ? 'N/A' : average,
      earnings: earnings.trim() === '' ? 'N/A' : earnings,
      highGame: highGame.trim() === '' ? 'N/A' : highGame,
      highSeries: highSeries.trim() === '' ? 'N/A' : highSeries,
      streak: 0
    }

    try {
      setLoading(true);
      let createdUser = await CreateAccountAPI(userData);
      pageContext.setCreatedAccountBool(true);
      router.push('/');
    } catch (error) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Error ",
        description: "Something went wrong",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  return (
    <div>
      <div className="min-h-screen bgLogin">
        <img src="" alt="" />

        <div className={addingCustomStats ? 'grid xl:grid-cols-[75%_25%] lg:grid-cols-[90%_10%] grid-cols-1' : 'grid 2xl:grid-cols-2 xl:grid-cols-[60%_40%] lg:grid-cols-[70%_30%] md:grid-cols-[75%_25%] sm:grid-cols-[85%_15%]'}>

          <div className="min-h-screen bgBlack">
            {
              // Creating Account Section
              creatingAccount &&
                <>
                  <LoginNavComponent exist={true} onClick={handleBackLogin} />

                  <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                    <h1 className="txtOrange sm:text-6xl text-5xl juraBold mb-8 sm:leading-[75px]"> Create Your Account</h1>

                    <form onSubmit={handleNext}>
                      <RequiredInputComponent title="Username:" type='text' borderError={userBorderError} placeholder='Enter Username' value={username} onChange={handleUserChange} maxLength={20} />
                      <RequiredInputComponent title="Email:" type='email' borderError={emailBorderError} placeholder='Enter Email' value={email} onChange={handleEmailChange} maxLength={50} />
                      <h3 className="text-3xl jura text-white">Preferred Location</h3>
                      <Select required onValueChange={(e) => handleLocationChange(e)}>
                        <SelectTrigger className="w-full jura text-3xl sm:min-h-43 min-h-12 bg-white pl-3 mb-4 mt-2">
                          <SelectValue placeholder="States" />
                        </SelectTrigger>
                        <SelectContent className="jura text-3xl">
                          <SelectItem value="AL">Alabama</SelectItem>
                          <SelectItem value="AK">Alaska</SelectItem>
                          <SelectItem value="AZ">Arizona</SelectItem>
                          <SelectItem value="AR">Arkansas</SelectItem>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="CO">Colorado</SelectItem>
                          <SelectItem value="CT">Connecticut</SelectItem>
                          <SelectItem value="DE">Delaware</SelectItem>
                          <SelectItem value="DC">District of Columbia</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                          <SelectItem value="GA">Georgia</SelectItem>
                          <SelectItem value="HI">Hawaii</SelectItem>
                          <SelectItem value="ID">Idaho</SelectItem>
                          <SelectItem value="IL">Illinois</SelectItem>
                          <SelectItem value="IN">Indiana</SelectItem>
                          <SelectItem value="IA">Iowa</SelectItem>
                          <SelectItem value="KS">Kansas</SelectItem>
                          <SelectItem value="KY">Kentucky</SelectItem>
                          <SelectItem value="LA">Louisiana</SelectItem>
                          <SelectItem value="ME">Maine</SelectItem>
                          <SelectItem value="MD">Maryland</SelectItem>
                          <SelectItem value="MA">Massachusetts</SelectItem>
                          <SelectItem value="MI">Michigan</SelectItem>
                          <SelectItem value="MN">Minnesota</SelectItem>
                          <SelectItem value="MS">Mississippi</SelectItem>
                          <SelectItem value="MO">Missouri</SelectItem>
                          <SelectItem value="MT">Montana</SelectItem>
                          <SelectItem value="NE">Nebraska</SelectItem>
                          <SelectItem value="NV">Nevada</SelectItem>
                          <SelectItem value="NH">New Hampshire</SelectItem>
                          <SelectItem value="NJ">New Jersey</SelectItem>
                          <SelectItem value="NM">New Mexico</SelectItem>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="NC">North Carolina</SelectItem>
                          <SelectItem value="ND">North Dakota</SelectItem>
                          <SelectItem value="OH">Ohio</SelectItem>
                          <SelectItem value="OK">Oklahoma</SelectItem>
                          <SelectItem value="OR">Oregon</SelectItem>
                          <SelectItem value="PA">Pennsylvania</SelectItem>
                          <SelectItem value="RI">Rhode Island</SelectItem>
                          <SelectItem value="SC">South Carolina</SelectItem>
                          <SelectItem value="SD">South Dakota</SelectItem>
                          <SelectItem value="TN">Tennessee</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="UT">Utah</SelectItem>
                          <SelectItem value="VT">Vermont</SelectItem>
                          <SelectItem value="VA">Virginia</SelectItem>
                          <SelectItem value="WA">Washington</SelectItem>
                          <SelectItem value="WV">West Virginia</SelectItem>
                          <SelectItem value="WI">Wisconsin</SelectItem>
                          <SelectItem value="WY">Wyoming</SelectItem>
                        </SelectContent>
                      </Select>
                      <RequiredInputComponent title="Password:" type={showPassword ? 'text' : 'password'} borderError={passwordBorderError} placeholder='Enter Password' value={password} onChange={handlePasswordChange} maxLength={50} showPasswordClick={showPasswordClick}/>
                      <RequiredInputComponent title="Verify Password:" type={showSecondPassword ? 'text' : 'password'} borderError={passwordBorderError} placeholder='Re-enter Password' value={password2} onChange={handlePassword2Change} maxLength={50} showPasswordClick={secondShowPasswordClick}/>
                      {!passwordsMatch ? (<h1 className='text-2xl jura text-red-600'>Passwords Dont Match</h1>) : (<div></div>)}

                      <button type='submit' className=" text-3xl text-black sm:min-h-14 min-h-12 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]"> Next</button>
                    </form>
                  </div>
                </>
            }

            {
              // Security Questions Section
              answeringSecurity &&
                <>

                  <LoginNavComponent exist={true} onClick={handleBackCreateAcc} />

                  <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                    <h1 className="txtOrange sm:text-6xl text-5xl juraBold mb-12 sm:leading-[75px]"> Security Questions</h1>

                    {/* Selecting Question 1 */}
                    <form onSubmit={handleNextOptional}>

                      <Select required onValueChange={(e) => setQuestionOne(e)}>
                        <SelectTrigger className="w-full jura  text-3xl text-white min-h-[40px]">
                          <SelectValue placeholder="Select Question" />
                        </SelectTrigger>
                        <SelectContent className='sm:text-3xl text-2xl selectWidth'>
                          <SelectGroup>
                            <SelectLabel>Security Questions</SelectLabel>
                            <SelectItem value="What's Your Favorite Movie">What&apos;s Your Favorite Movie?</SelectItem>
                            <SelectItem value="What's The Model Of Your First Car">What&apos;s The Model Of Your First Car?</SelectItem>
                            <SelectItem value="Name Of Your First Pet">Name Of Your First Pet?</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <RequiredInputComponent title="" type='text' borderError={''} placeholder='Answer #1' value={securityOne} onChange={handleSecurityOneChange} maxLength={50} />


                      {/* Selecting Question 2 */}
                      <Select required onValueChange={(e) => setQuestionTwo(e)}>
                        <SelectTrigger className="w-full jura  text-3xl text-white min-h-[40px]">
                          <SelectValue placeholder="Select Question" />
                        </SelectTrigger>
                        <SelectContent className='sm:text-3xl text-2xl selectWidth'>
                          <SelectGroup className=''>
                            <SelectLabel>Security Questions</SelectLabel>
                            <SelectItem value="Name of Childhood Best Friend">Name of Childhood Best Friend?</SelectItem>
                            <SelectItem value="What's Your Nickname">What&apos;s Your Nickname?</SelectItem>
                            <SelectItem value="What's Your Favorite Food">What&apos;s Your Favorite Food?</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <RequiredInputComponent title="" type='text' borderError={''} placeholder='Answer #2' value={securityTwo} onChange={handleSecurityTwoChange} maxLength={50} />


                      {/* Selecting Question 3 */}
                      <Select required onValueChange={(e) => setQuestionThree(e)}>
                        <SelectTrigger className="w-full jura  text-3xl text-white min-h-[40px]">
                          <SelectValue placeholder="Select Question" />
                        </SelectTrigger>
                        <SelectContent className='sm:text-3xl text-2xl selectWidth'>
                          <SelectGroup>
                            <SelectLabel>Security Questions</SelectLabel>
                            <SelectItem value="What's Your Favorite School Subject">What&apos;s Your Favorite School Subject?</SelectItem>
                            <SelectItem value="What's Your Favorite Cartoon">What&apos;s Your Favorite Cartoon?</SelectItem>
                            <SelectItem value="What's Your Favorite Ice Cream">What&apos;s Your Favorite Ice Cream?</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <RequiredInputComponent title="" type='text' borderError={''} placeholder='Answer #3' value={securityThree} onChange={handleSecurityThreeChange} maxLength={50} />

                      <button type='submit' className=" text-3xl text-black sm:min-h-14 min-h-12 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]"> Next</button>

                    </form>

                  </div>
                </>
            }

            {
              // Optional Stats Section
              doesUserWantStats &&
                <>
                  <LoginNavComponent exist={true} onClick={handleBackSecurityQuestions} />

                  <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                    <h1 className="txtOrange sm:text-6xl text-4xl juraBold mb-12 sm:leading-[75px]"> Do You Want To Add Your Custom Stats & Info To Your Account?</h1>

                    <button className=" text-3xl text-black sm:min-h-14 min-h-12 w-full my-9 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleAddStats}>Yes</button>

                    <h1 className='text-4xl w-full text-white jura text-center'>OR</h1>

                    {
                      loading ? (
                        <button className=" text-3xl text-black sm:min-h-14 min-h-12 w-full my-8 juraBold rounded-xl bg-orange-300"> Creating...</button>
                      ) : (
                        <button className=" text-3xl text-black sm:min-h-14 min-h-12 w-full my-9 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleCreateWithoutStats}>No, Create Account</button>
                      )
                    }

                  </div>
                </>
            }

            {
              // Adding Custom Stats Section
              addingCustomStats &&
                <>
                  <LoginNavComponent exist={true} onClick={handleBackOptional} />

                  <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                    <h1 className="txtOrange sm:text-6xl text-5xl juraBold mb-12 sm:leading-[75px]"> Add Your Stats & Info</h1>

                    <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-16'>
                      <div>
                        <NotRequiredInputComponent title='Full Name' type='text' borderError={''} placeholder='Full Name' value={fullname} onChange={handleFullNameChange} maxLength={50} info='Enter Your Full Name. e.g Booger Barth Truth' />
                        <NotRequiredInputComponent title='Pronouns' type='text' borderError={''} placeholder='Pronouns' value={pronouns} onChange={handlePronounsChange} maxLength={50} info='Enter Your Pronounse. e.g He/Him' />
                        <div className='flex'>
                          <h3 className={"text-3xl jura text-white pr-2"}>Select Average</h3>
                          <TooltipProvider>
                            <Tooltip open={toolTipOpen}>
                              <TooltipTrigger onFocus={() => setToolTipOpen(true)} onBlur={() => setToolTipOpen(false)}><img src={question.src} alt="" /></TooltipTrigger>
                              <TooltipContent>
                                <p>Select your bowling average from one of the options in the dropdown. e.g 190-200 Avg</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Select onValueChange={(e) => handleAverageChange(e)} >
                          <SelectTrigger className="w-full jura text-3xl sm:min-h-14 min-h-12 bg-white pl-3 my-5">
                            <SelectValue placeholder="Average" />
                          </SelectTrigger>
                          <SelectContent className="jura text-4xl">
                            <SelectItem value="Under 90">Under 90</SelectItem>
                            <SelectItem value="90-100 Avg">90-100 Avg</SelectItem>
                            <SelectItem value="100-110 Avg">100-110 Avg</SelectItem>
                            <SelectItem value="110-120 Avg">110-120 Avg</SelectItem>
                            <SelectItem value="120-130 Avg">120-130 Avg</SelectItem>
                            <SelectItem value="130-140 Avg">130-140 Avg</SelectItem>
                            <SelectItem value="140-150 Avg">140-150 Avg</SelectItem>
                            <SelectItem value="150-160 Avg">150-160 Avg</SelectItem>
                            <SelectItem value="160-170 Avg">160-170 Avg</SelectItem>
                            <SelectItem value="170-180 Avg">170-180 Avg</SelectItem>
                            <SelectItem value="180-190 Avg">180-190 Avg</SelectItem>
                            <SelectItem value="190-200 Avg">190-200 Avg</SelectItem>
                            <SelectItem value="200-210 Avg">200-210 Avg</SelectItem>
                            <SelectItem value="210-220 Avg">210-220 Avg</SelectItem>
                            <SelectItem value="220-230 Avg">220-230 Avg</SelectItem>
                            <SelectItem value="230-240 Avg">230-240 Avg</SelectItem>
                            <SelectItem value="240-250 Avg">240-250 Avg</SelectItem>
                            <SelectItem value="250-260 Avg">250-260 Avg</SelectItem>
                            <SelectItem value="260-270 Avg">260-270 Avg</SelectItem>
                            <SelectItem value="270-280 Avg">270-280 Avg</SelectItem>
                            <SelectItem value="280-290 Avg">280-290 Avg</SelectItem>
                            <SelectItem value="290-300 Avg">290-300 Avg</SelectItem>
                          </SelectContent>
                        </Select>
                        <NotRequiredInputComponent title='Bowling Center' type='text' borderError={''} placeholder='Bowling Center' value={bowlingCenter} onChange={handleBowlingCenterChange} maxLength={50} info='Enter the bowling center where you bowl the most, or represent the most. e.g Reno Bowl' />
                      </div>

                      <div>
                        <div className='flex'>
                          <h3 className={"text-3xl jura text-white pr-2"}>Select Style</h3>
                          <TooltipProvider>
                            <Tooltip open={toolTipOpen2}>
                              <TooltipTrigger onFocus={() => setToolTipOpen2(true)} onBlur={() => setToolTipOpen2(false)}><img src={question.src} alt="" /></TooltipTrigger>
                              <TooltipContent>
                                <p>Select your bowling style from one of the options in the dropdown. e.g 2 handed (Right)</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Select onValueChange={(e) => handleStyleChange(e)} >
                          <SelectTrigger className="w-full jura text-3xl sm:min-h-14 min-h-12 bg-white pl-3 my-5 ">
                            <SelectValue placeholder="Styles" />
                          </SelectTrigger>
                          <SelectContent className="jura text-4xl">
                            <SelectItem value="1 Handed (Left)">1 Handed (Left)</SelectItem>
                            <SelectItem value="2 Handed (Left)">2 Handed (Left)</SelectItem>
                            <SelectItem value="1 Handed (Right)">1 Handed (Right)</SelectItem>
                            <SelectItem value="2 Handed (Right)">2 Handed (Right)</SelectItem>
                            <SelectItem value="1 Handed (Both)">1 Handed (Both)</SelectItem>
                            <SelectItem value="2 Handed (Both)">2 Handed (Both)</SelectItem>
                            <SelectItem value="Hadouken Style">Hadouken Style</SelectItem>
                          </SelectContent>
                        </Select>
                        <NotRequiredInputComponent title='High Game' type='text' borderError={''} placeholder='High Game' value={highGame} onChange={handleHighGameChange} maxLength={50} info='Enter in your highest game that you bowled (Max 300). e.g 275' />
                        <NotRequiredInputComponent title='High Series' type='text' borderError={''} placeholder='High Series' value={highSeries} onChange={handleHighSeriesChange} maxLength={50} info='Enter in your highest seires that you bowled out of three games or more (1st game score + 2nd game score + 3rd game score). e.g 777' />
                        <NotRequiredInputComponent title='Earnings' type='text' borderError={''} placeholder='$ Earnings $' value={earnings} onChange={handleEarningsChange} maxLength={50} info='Enter how much money you have made from bowling tournaments $$$' />
                      </div>
                    </div>

                    {
                      loading ? (
                        <button className=" text-3xl text-black sm:min-h-14 min-h-12 w-full my-8 juraBold rounded-xl bg-orange-300"> Creating...</button>
                      ) : (
                        <button className=" text-3xl text-black sm:min-h-14 min-h-12 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleCreateAccountWithStats}> Create Account</button>
                      )
                    }

                  </div>
                </>
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
