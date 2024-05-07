'use client'

import * as React from "react"
import { useEffect, useState } from "react";
import '@/app/css/LoginPageAndHome.css'
import { useRouter } from "next/navigation";
import LoginNavComponent from "../components/PageComponents/LoginPage/LoginNavComponent";
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
import { AddToLocalStorage, GetLocalStorage } from "@/utils/LocalStorageFunctions";

export default function Home() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userBorderError, setuserBorderError] = useState<string>('');
  const [passwordBorderError, setPasswordBorderError] = useState<string>('');
  const router = useRouter();


  const pageContext = useAppContext();

  const { toast } = useToast();

  const handleOpenerBoolChange = () => {
    pageContext.setInitialOpen(false);
  }

  const handleUserChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(param.target.value);
    setuserBorderError('');
  }

  const handlePasswordChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(param.target.value);
    setPasswordBorderError('');
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userData: IUserLogin = {
      usernameOrEmail: username,
      password: password
    }

    try {
      if (username.trim() !== '' && password.trim() !== '') {
        let token = await LoginAPI(userData);
        if (token === null) {
          setPasswordBorderError('border-red-600 border-2');
          setuserBorderError('border-red-600 border-2');
          toast({
            variant: "destructive",
            title: "Error.",
            description: "Username or Password is incorrect",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        } else {
          setuserBorderError('');
          setPasswordBorderError('');
          AddToLocalStorage([token.token, username]);
          pageContext.setVerifiedUser(username);
          pageContext.setUserLoggedIn(true);
          router.push('/pages/HomePage');
        }
      }
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
    let storage = GetLocalStorage();
    if(storage.length !== 0 && !pageContext.userLoggedIn){
      router.push('/pages/HomePage')
      pageContext.setUserLoggedIn(true);
    } else if(storage.length !== 0 && pageContext.userLoggedIn){
      localStorage.clear();
    }
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

                <>
                  <LoginNavComponent exist={false} onClick={() => { }} />

                  <div className="2xl:px-44 xl:px-40 lg:px-32 md:px-24 sm:px-16 px-8">

                    <h1 className="txtOrange sm:text-6xl text-5xl juraBold mb-20 sm:leading-[75px]"> Strike <br /> <span className="text-white">Showdown</span></h1>

                    <form onSubmit={(e) => handleLogin(e)}>

                      <RequiredInputComponent title={"Username:"} type={'text'} borderError={userBorderError} placeholder="Username/Email" value={username} onChange={handleUserChange} maxLength={50000} />

                      <RequiredInputComponent title={"Password:"} type={'password'} borderError={passwordBorderError} placeholder="Password" value={password} onChange={handlePasswordChange} maxLength={524288} />

                      <h3 className=" text-2xl txtOrange jura underline hover:cursor-pointer hover:text-[#ff9939] my-2" onClick={handleForgotPassword}>Forgot Password?</h3>

                      <button type="submit" className="text-3xl text-black sm:min-h-14 min-h-14 w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]"> LOG IN</button>

                      <h3 className="text-2xl text-white jura my-2">Don&apos;t have an account? <span className="txtOrange underline hover:cursor-pointer hover:text-[#ff9939]" onClick={handleSignUp}>Sign Up</span></h3>
                    </form>

                  </div>
                </>
              </div>
            </div>

          )}
      </div>
      {/* Column 2 (Nothing) */}
      <div>

      </div>

    </div>
  )
}