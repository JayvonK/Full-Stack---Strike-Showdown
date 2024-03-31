'use client'

import LoginNavComponent from '@/components/PageComponents/LoginNavComponent';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '@/app/css/LoginPage.css';
import { Toast } from 'flowbite-react';
import { HiX } from "react-icons/hi";
import RequiredInputComponent from '@/components/PageComponents/RequiredInputComponent';
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
  const [addingCustomStats2, setAddingCustomStats2] = useState<boolean>(false);
  const [securityOne, setSecurityOne] = useState<string>('');
  const [securityTwo, setSecurityTwo] = useState<string>('');
  const [securityThree, setSecurityThree] = useState<string>('');
  const router = useRouter();

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

  const handleNext = () => {
    if (username.trim() === '' || password.trim() === '' || password2.trim() === '' || email.trim() === '') {
      setErrorMessage(true);
      setUserBorderError('border-red-600 border-2');
    } else {
      setAnsweringSecurity(true)
      setCreatingAccount(false);
    }
  }

  const handleNextOptional = () => {
    setAnsweringSecurity(false);
    setDoesUserWantStats(true);
  }

  const handleBackLogin = () => {
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

                  <LoginNavComponent exist={true} onClick={handleBackLogin} />

                  <div className="px-48">

                    <h1 className="txtOrange text-7xl juraBold mb-5 leading-[90px]"> Security Questions</h1>

                    {/* Selecting Question 1 */}
                    <Select>
                      <SelectTrigger className="w-full jura text-4xl text-white min-h-[40px]">
                        <SelectValue placeholder="Select a Question" />
                      </SelectTrigger>
                      <SelectContent className='text-3xl'>
                        <SelectGroup>
                          <SelectLabel>Security Questions</SelectLabel>
                          <SelectItem value="Favorite Movie?">Favorite Move?</SelectItem>
                          <SelectItem value="Model Of Your First Car?">Model Of Your First Car?</SelectItem>
                          <SelectItem value="Name Of First Pet?">Name Of First Pet?</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <RequiredInputComponent title="" type='text' borderError={userBorderError} placeholder='Answer #1' value={securityOne} onChange={handleSecurityOneChange} maxLength={5000} />


                    {/* Selecting Question 2 */}
                    <Select>
                      <SelectTrigger className="w-full jura text-4xl text-white min-h-[40px]">
                        <SelectValue placeholder="Select a Question" />
                      </SelectTrigger>
                      <SelectContent className='text-3xl'>
                        <SelectGroup>
                          <SelectLabel>Security Questions</SelectLabel>
                          <SelectItem value="Childhood Best Friend?">Childhood Best Friend?</SelectItem>
                          <SelectItem value="What's Your Nickname?">What's Your Nickname?</SelectItem>
                          <SelectItem value="Favorite Food?">Favorite Food?</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <RequiredInputComponent title="" type='text' borderError={userBorderError} placeholder='Answer #2' value={securityTwo} onChange={handleSecurityTwoChange} maxLength={5000} />


                    {/* Selecting Question 3 */}
                    <Select>
                      <SelectTrigger className="w-full jura text-4xl text-white min-h-[40px]">
                        <SelectValue placeholder="Select a Question" />
                      </SelectTrigger>
                      <SelectContent className='text-3xl'>
                        <SelectGroup>
                          <SelectLabel>Security Questions</SelectLabel>
                          <SelectItem value="First Person?">First Person You Kissed?</SelectItem>
                          <SelectItem value="Favorite Cartoon?">Favorite Cartoon?</SelectItem>
                          <SelectItem value="Favorite Ice Cream?">Favorite Ice Cream?</SelectItem>
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
