'use client'

import { useState } from "react";
import '@/app/css/LoginPage.css'
import { useRouter } from "next/navigation";
import LoginNavComponent from "./components/LoginNavComponent";
import { Toast } from "flowbite-react";
import { HiX } from "react-icons/hi";
import RequiredInputComponent from "./components/RequiredInputComponent";

export default function Home() {
  const [openerBool, setOpenerBool] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameClass, setUsernameClass] = useState<string>('');
  const [usernameTitle, setUsernameTitle] = useState<string>('Username:');
  const [userBorderError, setuserBorderError] = useState<string>('');
  const [passwordBorderError, setPasswordBorderError] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const router = useRouter();

  const handleOpenerBoolChange = () => {
    setOpenerBool(!openerBool);
  }

  const handleUserChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    // setUserEmpty(false);
    setUsername(param.target.value);
    setErrorMessage(false);
    setuserBorderError('');
  }

  const handlePasswordChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(param.target.value);
    setErrorMessage(false);
    setPasswordBorderError('');
  }

  const handleLogin = () => {
    let userData = {
      username: username,
      password: password
    }

    if (username.length === 0 && password.length === 0) {
      setPasswordBorderError('border-red-600 border-2');
      setuserBorderError('border-red-600 border-2');
      setErrorMessage(true);
    } else if (username.length === 0) {
      setuserBorderError('border-red-600 border-2');
      setErrorMessage(true);
    } else if (password.length === 0) {
      setPasswordBorderError('border-red-600 border-2');
      setErrorMessage(true);
    } else {
      alert('login successful')
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
          // Start of Ternary
          openerBool ? ( // First Ternary Return Statement

            <div className="min-h-screen bg-black opacity-90" onClick={handleOpenerBoolChange}>
              <div className="px-80 pt-60">
                <h1 className="txtOrange text-center text-8xl juraBold mb-16"> Strike <span className="text-white">Showdown</span></h1>
                <h2 className="text-center text-white jura txtOrange text-5xl mb-14">the best social app for bowlers</h2>
                <h3 className="text-center text-white jura text-5xl mb-24">Where you’ll be able to create or join 1v1 challenges or practice sessions with other bowlers!</h3>
                <h3 className="text-center text-white jura txtOrange text-5xl">click to continue...</h3>
              </div>
            </div>

          ) : ( // Second Ternary Return Statement

            <div className="grid grid-cols-2">

              {/* Column 1 (Login Side) */}
              <div className="min-h-screen bgBlack">
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

                <LoginNavComponent exist={false} onClick={() => { }} />

                <div className="px-48">

                  <h1 className="txtOrange text-7xl juraBold mb-12 leading-[90px]"> Strike <span className="text-white">Showdown</span></h1>

                  <RequiredInputComponent title={"Username:"} type={'text'} borderError={userBorderError} placeholder="Enter Username/Email" value={username} onChange={handleUserChange} maxLength={20} />

                  <RequiredInputComponent title={"Password:"} type={'password'} borderError={passwordBorderError} placeholder="Enter Password" value={password} onChange={handlePasswordChange} maxLength={524288} />

                  <h3 className="text-3xl txtOrange jura underline hover:cursor-pointer hover:text-[#ff9939]" onClick={handleForgotPassword}>Forgot Password?</h3>

                  <button className="text-4xl text-black min-h-[76px] w-full my-8 juraBold bgOrange rounded-xl hover:bg-[#ff9939]" onClick={handleLogin}> LOG IN</button>

                  <h3 className="text-3xl text-white jura">Don't have an account? <span className="txtOrange underline hover:cursor-pointer hover:text-[#ff9939]" onClick={handleSignUp}>Sign Up</span></h3>

                </div>

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
