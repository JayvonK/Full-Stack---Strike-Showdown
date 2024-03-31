'use client'

import * as React from "react"
import { useState } from "react";
import '@/app/css/LoginPage.css'
import { useRouter } from "next/navigation";
import LoginNavComponent from "../components/PageComponents/LoginNavComponent";
import { Toast } from "flowbite-react";
import { HiX } from "react-icons/hi";
import RequiredInputComponent from "../components/PageComponents/RequiredInputComponent";
import { createAccount } from "@/Data/DataServices";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  const [openerBool, setOpenerBool] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userBorderError, setuserBorderError] = useState<string>('');
  const [passwordBorderError, setPasswordBorderError] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [notLoggedIn, setNotLoggedIn] = useState<boolean>(true);
  const [screenCount, setScreenCount] = useState<number>(0);
  const router = useRouter();

  const { toast } = useToast()

  const handleOpenerBoolChange = () => {
    setOpenerBool(!openerBool);
  }

  const handleUserChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(param.target.value);
    setErrorMessage(false);
    setuserBorderError('');
  }

  const handlePasswordChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(param.target.value);
    setErrorMessage(false);
    setPasswordBorderError('');
  }

  const handleBack = () => {
    setNotLoggedIn(true);
  }

  const handleLocationConfirm = () => {

  }

  const handleLogin = async () => {
    let userData = {
      username: username,
      password: password
    }

    if (username.trim() === "" || password.trim() === "") {
      setPasswordBorderError('border-red-600 border-2');
      setuserBorderError('border-red-600 border-2');
      toast({
        variant: "destructive",
        title: "Zahid said youre a bitch.",
        description: "Me personally, I wouldn't take that.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    } else {
      setNotLoggedIn(false);
    }
  }

  const handleForgotPassword = () => {
    router.push('/pages/ForgotPassword')
  }

  const handleSignUp = () => {
    router.push('/pages/SignUp')
  }

  return (
    <div>
      <div className="min-h-screen bgLogin">
        {
          // Start of Ternary For Welcome Screen
          openerBool ? ( // First Ternary Return Statement

            <div className="min-h-screen bg-black opacity-90" onClick={handleOpenerBoolChange}>
              <div className="px-80 pt-60">
                <h1 className="txtOrange text-center text-8xl juraBold mb-16"> Strike <span className="text-white">Showdown</span></h1>
                <h2 className="text-center text-white jura txtOrange text-5xl mb-14">the best social app for bowlers</h2>
                <h3 className="text-center text-white jura text-5xl mb-24">Where you’ll be able to create or join 1v1 challenges or practice sessions with other bowlers!</h3>
                <h3 className="text-center text-white jura txtOrange text-5xl">click to continue...</h3>
              </div>
            </div>

          ) : (  // Second Statement

            <div className="grid grid-cols-2">

              {/* Column 1 (Login Side) */}
              <div className="min-h-screen bgBlack">


                { // Ternary to switch between login and preffered location (This one is login )
                  notLoggedIn ? (
                    <>
                      <LoginNavComponent exist={false} onClick={() => { }} />

                      <div className="px-48">

                        <h1 className="txtOrange text-7xl juraBold mb-12 leading-[90px]"> Strike <span className="text-white">Showdown</span></h1>

                        <RequiredInputComponent title={"Username:"} type={'text'} borderError={userBorderError} placeholder=" Username/Email" value={username} onChange={handleUserChange} maxLength={20} />

                        <RequiredInputComponent title={"Password:"} type={'password'} borderError={passwordBorderError} placeholder=" Password" value={password} onChange={handlePasswordChange} maxLength={524288} />

                        <h3 className="text-3xl txtOrange jura underline hover:cursor-pointer hover:text-[#ff9939]" onClick={handleForgotPassword}>Forgot Password?</h3>

                        <button className="text-4xl text-black min-h-[76px] w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleLogin}> LOG IN</button>

                        <h3 className="text-3xl text-white jura">Don't have an account? <span className="txtOrange underline hover:cursor-pointer hover:text-[#ff9939]" onClick={handleSignUp}>Sign Up</span></h3>

                      </div>
                    </>


                  ) : ( // Ternary to switch between login page and preffered location (This one is preffered location)

                    <>
                      <LoginNavComponent exist={true} onClick={handleBack} />

                      <div className="px-48">

                        {
                          errorMessage ? (
                            <Toast className="absolute">
                              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                                <HiX className="h-5 w-5" />
                              </div>
                              <div className="ml-3 text-sm text-black">Invalid Username Or Password</div>
                              <Toast.Toggle onClick={() => setErrorMessage(false)} />
                            </Toast>) : (<div></div>)
                        }

                        <h1 className="txtOrange text-7xl juraBold mb-12 leading-[90px]">Your Preferred Location?</h1>

                        <h3 className="text-4xl jura text-white mb-5">State</h3>
                        <Select>
                          <SelectTrigger className="w-full jura text-4xl min-h-[76px] bg-white pl-3">
                            <SelectValue placeholder="Select a State" />
                          </SelectTrigger>
                          <SelectContent className="jura text-4xl">
                            <SelectItem value="N/A">N/A</SelectItem>
                            <SelectItem value="Alabama">Alabama</SelectItem>
                            <SelectItem value="Alaska">Alaska</SelectItem>
                            <SelectItem value="Arizona">Arizona</SelectItem>
                            <SelectItem value="Arkansas">Arkansas</SelectItem>
                            <SelectItem value="California">California</SelectItem>
                            <SelectItem value="Colorado">Colorado</SelectItem>
                            <SelectItem value="Connecticut">Connecticut</SelectItem>
                            <SelectItem value="Delaware">Delaware</SelectItem>
                            <SelectItem value="District of Columbia">District of Columbia</SelectItem>
                            <SelectItem value="Florida">Florida</SelectItem>
                            <SelectItem value="Georgia">Georgia</SelectItem>
                            <SelectItem value="Hawaii">Hawaii</SelectItem>
                            <SelectItem value="Idaho">Idaho</SelectItem>
                            <SelectItem value="Illinois">Illinois</SelectItem>
                            <SelectItem value="Indiana">Indiana</SelectItem>
                            <SelectItem value="Iowa">Iowa</SelectItem>
                            <SelectItem value="Kansas">Kansas</SelectItem>
                            <SelectItem value="Kentucky">Kentucky</SelectItem>
                            <SelectItem value="Louisiana">Louisiana</SelectItem>
                            <SelectItem value="Maine">Maine</SelectItem>
                            <SelectItem value="Maryland">Maryland</SelectItem>
                            <SelectItem value="Massachusetts">Massachusetts</SelectItem>
                            <SelectItem value="Michigan">Michigan</SelectItem>
                            <SelectItem value="Minnesota">Minnesota</SelectItem>
                            <SelectItem value="Mississippi">Mississippi</SelectItem>
                            <SelectItem value="Missouri">Missouri</SelectItem>
                            <SelectItem value="Montana">Montana</SelectItem>
                            <SelectItem value="Nebraska">Nebraska</SelectItem>
                            <SelectItem value="Nevada">Nevada</SelectItem>
                            <SelectItem value="New Hampshire">New Hampshire</SelectItem>
                            <SelectItem value="New Jersey">New Jersey</SelectItem>
                            <SelectItem value="New Mexico">New Mexico</SelectItem>
                            <SelectItem value="New York">New York</SelectItem>
                            <SelectItem value="North Carolina">North Carolina</SelectItem>
                            <SelectItem value="North Dakota">North Dakota</SelectItem>
                            <SelectItem value="Ohio">Ohio</SelectItem>
                            <SelectItem value="Oklahoma">Oklahoma</SelectItem>
                            <SelectItem value="Oregon">Oregon</SelectItem>
                            <SelectItem value="Pennsylvania">Pennsylvania</SelectItem>
                            <SelectItem value="Rhode Island">Rhode Island</SelectItem>
                            <SelectItem value="South Carolina">South Carolina</SelectItem>
                            <SelectItem value="South Dakota">South Dakota</SelectItem>
                            <SelectItem value="Tennessee">Tennessee</SelectItem>
                            <SelectItem value="Texas">Texas</SelectItem>
                            <SelectItem value="Utah">Utah</SelectItem>
                            <SelectItem value="Vermont">Vermont</SelectItem>
                            <SelectItem value="Virginia">Virginia</SelectItem>
                            <SelectItem value="Washington">Washington</SelectItem>
                            <SelectItem value="West Virginia">West Virginia</SelectItem>
                            <SelectItem value="Wisconsin">Wisconsin</SelectItem>
                            <SelectItem value="Wyoming">Wyoming</SelectItem>
                          </SelectContent>
                        </Select>


                        <button className="text-4xl text-black min-h-[76px] w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleLocationConfirm}> Confirm</button>
                      </div>
                    </>
                  )}
              </div>
              {/* Column 2 (Nothing) */}
              <div>

              </div>

            </div>
          )
        }
      </div>
    </div>

  );
}
