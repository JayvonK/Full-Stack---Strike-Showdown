'use client'

import { useState } from "react";
import '@/app/css/LoginPage.css'
import { useRouter } from "next/navigation";
import LoginNavComponent from "./components/LoginNavComponent";
import { Toast } from "flowbite-react";
import { HiX } from "react-icons/hi";
import RequiredInputComponent from "./components/RequiredInputComponent";
import { createAccount } from "@/Data/DataServices";

export default function Home() {
  const [openerBool, setOpenerBool] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userBorderError, setuserBorderError] = useState<string>('');
  const [passwordBorderError, setPasswordBorderError] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [notLoggedIn, setNotLoggedIn] = useState<boolean>(true);
  const router = useRouter();

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

    if (username.length === 0 || password.length === 0) {
      setPasswordBorderError('border-red-600 border-2');
      setuserBorderError('border-red-600 border-2');
      setErrorMessage(true);
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
          openerBool && notLoggedIn ? ( // First Ternary Return Statement

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

                {/* Error Meassage Ternary */}
                {errorMessage ? (
                  <Toast className="absolute">
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                      <HiX className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm text-black">Invalid Username Or Password</div>
                    <Toast.Toggle onClick={() => setErrorMessage(false)} />
                  </Toast>) : (<div></div>)
                }

                { // Ternary to switch between login and preffered location (This one is login )
                  notLoggedIn ? (
                    <>
                      <LoginNavComponent exist={false} onClick={() => { }} />

                      <div className="px-48">

                        <h1 className="txtOrange text-7xl juraBold mb-12 leading-[90px]"> Strike <span className="text-white">Showdown</span></h1>

                        <RequiredInputComponent title={"Username:"} type={'text'} borderError={userBorderError} placeholder="Username/Email" value={username} onChange={handleUserChange} maxLength={20} />

                        <RequiredInputComponent title={"Password:"} type={'password'} borderError={passwordBorderError} placeholder="Password" value={password} onChange={handlePasswordChange} maxLength={524288} />

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


                        <h3 className={"text-4xl jura text-white"}>State</h3>
                        {/* <label htmlFor="states">ee</label> */}
                        <select name="states" id="states" className="w-full my-5 min-h-[76px] jura text-4xl">
                          <option value="" disabled selected>Select State</option>
                          <option value="N/A">N/A</option>
                          <option value="">Select a state</option>
                          <option value="Alabama">Alabama</option>
                          <option value="Alaska">Alaska</option>
                          <option value="Arizona">Arizona</option>
                          <option value="Arkansas">Arkansas</option>
                          <option value="California">California</option>
                          <option value="Colorado">Colorado</option>
                          <option value="Connecticut">Connecticut</option>
                          <option value="Delaware">Delaware</option>
                          <option value="District of Columbia">District of Columbia</option>
                          <option value="Florida">Florida</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Hawaii">Hawaii</option>
                          <option value="Idaho">Idaho</option>
                          <option value="Illinois">Illinois</option>
                          <option value="Indiana">Indiana</option>
                          <option value="Iowa">Iowa</option>
                          <option value="Kansas">Kansas</option>
                          <option value="Kentucky">Kentucky</option>
                          <option value="Louisiana">Louisiana</option>
                          <option value="Maine">Maine</option>
                          <option value="Maryland">Maryland</option>
                          <option value="Massachusetts">Massachusetts</option>
                          <option value="Michigan">Michigan</option>
                          <option value="Minnesota">Minnesota</option>
                          <option value="Mississippi">Mississippi</option>
                          <option value="Missouri">Missouri</option>
                          <option value="Montana">Montana</option>
                          <option value="Nebraska">Nebraska</option>
                          <option value="Nevada">Nevada</option>
                          <option value="New Hampshire">New Hampshire</option>
                          <option value="New Jersey">New Jersey</option>
                          <option value="New Mexico">New Mexico</option>
                          <option value="New York">New York</option>
                          <option value="North Carolina">North Carolina</option>
                          <option value="North Dakota">North Dakota</option>
                          <option value="Ohio">Ohio</option>
                          <option value="Oklahoma">Oklahoma</option>
                          <option value="Oregon">Oregon</option>
                          <option value="Pennsylvania">Pennsylvania</option>
                          <option value="Rhode Island">Rhode Island</option>
                          <option value="South Carolina">South Carolina</option>
                          <option value="South Dakota">South Dakota</option>
                          <option value="Tennessee">Tennessee</option>
                          <option value="Texas">Texas</option>
                          <option value="Utah">Utah</option>
                          <option value="Vermont">Vermont</option>
                          <option value="Virginia">Virginia</option>
                          <option value="Washington">Washington</option>
                          <option value="West Virginia">West Virginia</option>
                          <option value="Wisconsin">Wisconsin</option>
                          <option value="Wyoming">Wyoming</option>
                        </select>


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
