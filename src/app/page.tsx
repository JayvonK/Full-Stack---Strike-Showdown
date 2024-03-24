'use client'

import { useState } from "react";
import '@/app/css/LoginPage.css'
import { useRouter } from "next/navigation";
import LoginNavComponent from "./components/LoginNavComponent";

export default function Home() {
  const [openerBool, setOpenerBool] = useState<boolean>(false);
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();

  const handleOpenerBoolChange = () => {
    setOpenerBool(!openerBool);
  }

  const handleUserChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(param.target.value);
  }

  const handlePasswordChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(param.target.value);
  }

  const ForgotPassword = () => {
    router.push('/pages/ForgotPassword')
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

                <LoginNavComponent exist={false} onClick={() => {}}/>

                <div className="px-48 pb-32">

                  <h1 className="txtOrange text-7xl juraBold mb-12 leading-[90px]"> Strike <span className="text-white">Showdown</span></h1>

                  <h3 className="text-4xl text-white jura">Username:</h3>

                  <input type="text" className="w-full my-5 min-h-[76px] jura text-4xl rounded-lg" placeholder="Username" value={username} onChange={handleUserChange} />

                  <h3 className="text-4xl text-white jura">Password:</h3>

                  <input type="password" className="w-full my-5 min-h-[76px] jura text-4xl rounded-lg" placeholder="Password" value={password} onChange={handlePasswordChange} />

                  <h3 className="text-3xl txtOrange jura underline hover:cursor-pointer" onClick={ForgotPassword}>Forgot Password?</h3>

                  <button className="text-4xl text-black min-h-[76px] w-full my-8 juraBold bgOrange rounded-xl"> LOG IN</button>

                  <h3 className="text-3xl text-white jura">Don't have an account? <span className="txtOrange underline hover:cursor-pointer">Sign Up</span></h3>

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
