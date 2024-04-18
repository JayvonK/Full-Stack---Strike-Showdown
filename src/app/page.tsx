'use client'

import * as React from "react"
import { useEffect, useState } from "react";
import '@/app/css/LoginPage.css'
import { useRouter } from "next/navigation";
import LoginNavComponent from "../components/PageComponents/LoginNavComponent";
import RequiredInputComponent from "../components/PageComponents/LoginPage/RequiredInputComponent";
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
import { IUserLogin } from "@/interfaces/Interfaces";
import { LoginAPI } from "@/Data/DataServices";
import { useAppContext } from "@/context/Context";

export default function Home() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userBorderError, setuserBorderError] = useState<string>('');
  const [passwordBorderError, setPasswordBorderError] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [notLoggedIn, setNotLoggedIn] = useState<boolean>(true);
  const [screenCount, setScreenCount] = useState<number>(0);
  const router = useRouter();


  const pageContext = useAppContext();

  const { toast } = useToast()

  const handleOpenerBoolChange = () => {
    pageContext.setInitialOpen(false);
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

  const handleStateChange = (e: string) => {
    pageContext.setCurrentState(e);
  }

  const handleBack = () => {
    setNotLoggedIn(true);
  }

  const handleLocationConfirm = () => {
    pageContext.setUserLoggedIn(true);
    router.push('/pages/HomePage')
  }

  const handleLogin = async () => {
    let userData: IUserLogin = {
      usernameOrEmail: username,
      password: password
    }

    try {
      let token = await LoginAPI(userData);
      setuserBorderError('');
      setPasswordBorderError('');
      setNotLoggedIn(false);
      pageContext.setVerifiedUser(username);
    } catch (error) {
      setPasswordBorderError('border-red-600 border-2');
      setuserBorderError('border-red-600 border-2');
      toast({
        variant: "destructive",
        title: "Error.",
        description: "Username or Password is incorrect",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  const handleForgotPassword = () => {
    pageContext.setChangedPasswordBool(false);
    router.push('/pages/ForgotPassword')
  }

  const handleSignUp = () => {
    pageContext.setCreatedAccountBool(false);
    router.push('/pages/SignUp')
  }

  useEffect(() => {
    if (pageContext.createdAccountBool) {
      toast({
        title: "You have Successfully Created An Account.",
        description: "YAY"
      })
      pageContext.setCreatedAccountBool(false);
    } else if (pageContext.changedPasswordBool) {
      toast({
        title: "You have Successfully Changed Your Password",
        description: "YAY"
      })
      pageContext.setChangedPasswordBool(false);
    }
  }, [])

  return (
    <div>
      <div className="min-h-screen bgLogin">
        {
          // Start of Ternary For Welcome Screen
          pageContext.initialOpen ? ( // First Ternary Return Statement

            <div className="min-h-screen bg-black opacity-90 hover:cursor-pointer" onClick={handleOpenerBoolChange}>
              <div className="2xl:px-80 xl:px-56 lg:px-36 md:px-24 sm:px-14 px-7 pt-60">
                <h1 className="txtOrange text-center lg:text-7xl sm:text-6xl text-5xl juraBold mb-16"> Strike <span className="text-white">Showdown</span></h1>
                <h2 className="text-center text-white jura txtOrange lg:text-4xl sm:text-3xl text-2xl mb-14">the best social app for bowlers</h2>
                <h3 className="text-center text-white jura lg:text-4xl sm:text-3xl text-2xl mb-24">Where you&apos;ll be able to create or join 1v1 challenges or practice sessions with other bowlers!</h3>
                <h3 className="text-center text-white jura txtOrange lg:text-4xl sm:text-3xl text-2xl pb-10">click to continue...</h3>
              </div>
            </div>

          ) : (  // Second Statement

            <div className="grid 2xl:grid-cols-2 xl:grid-cols-[60%_40%] lg:grid-cols-[70%_30%] md:grid-cols-[75%_25%] sm:grid-cols-[85%_15%]">

              {/* Column 1 (Login Side) */}
              <div className="min-h-screen bgBlack">


                { // Ternary to switch between login and preffered location (This one is login )
                  notLoggedIn ? (
                    <>
                      <LoginNavComponent exist={false} onClick={() => { }} />

                      <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                        <h1 className="txtOrange sm:text-6xl text-5xl juraBold mb-12 sm:leading-[90px] leading-[75px]"> Strike <br /> <span className="text-white">Showdown</span></h1>

                        <form action="">

                          <RequiredInputComponent title={"Username:"} type={'text'} borderError={userBorderError} placeholder=" Username/Email" value={username} onChange={handleUserChange} maxLength={20} />

                          <RequiredInputComponent title={"Password:"} type={'password'} borderError={passwordBorderError} placeholder=" Password" value={password} onChange={handlePasswordChange} maxLength={524288} />

                          <h3 className=" text-3xl txtOrange jura underline hover:cursor-pointer hover:text-[#ff9939]" onClick={handleForgotPassword}>Forgot Password?</h3>

                          <button type="submit" className="text-3xl text-black sm:min-h-16 min-h-16 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleLogin}> LOG IN</button>

                          <h3 className="text-3xl text-white jura">Don&apos;t have an account? <span className="txtOrange underline hover:cursor-pointer hover:text-[#ff9939]" onClick={handleSignUp}>Sign Up</span></h3>
                        </form>



                      </div>
                    </>

                  ) : ( // Ternary to switch between login page and preffered location (This one is preffered location)

                    <>
                      <LoginNavComponent exist={true} onClick={handleBack} />

                      <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                        <h1 className="txtOrange sm:text-6xl text-5xl juraBold mb-12 sm:leading-[90px] leading-[75px]">Your Preferred Location?</h1>

                        <h3 className="sm:text-4xl text-3xl jura text-white mb-5">State</h3>
                        <Select onValueChange={(e) => handleStateChange(e)}>
                          <SelectTrigger className="w-full jura sm:text-4xl text-3xl sm:min-h-16 min-h-16 bg-white pl-3">
                            <SelectValue placeholder="Select a State" />
                          </SelectTrigger>
                          <SelectContent className="jura text-4xl">
                            <SelectItem value="ALL">All States</SelectItem>
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

                        <button className="sm:text-4xl text-3xl text-black sm:min-h-16 min-h-16 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleLocationConfirm}> Confirm</button>
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