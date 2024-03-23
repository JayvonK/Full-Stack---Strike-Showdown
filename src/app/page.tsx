'use client'

import Image from "next/image";
import { useState } from "react";
import '@/app/css/LoginPage.css'

export default function Home() {
  const [openerBool, setOpenerBool] = useState<boolean>(true);

  const handleOpenerBoolChange = () => {
    setOpenerBool(!openerBool);
  }

  return (
    <div>
      <div className="min-h-screen bgLogin">
        <img src="" alt="" />

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

            <div className="grid grid-cols-[45%_55%]">

              {/* Column 1 (Login Side) */}
              <div className="min-h-screen bg-black opacity-90 p-36">
                <h1 className="txtOrange text-6xl juraBold mb-16"> Strike <span className="text-white">Showdown</span></h1>

                <h3 className="text-3xl text-white jura">Username:</h3>

                <input type="text" />

                <h3 className="text-3xl text-white jura">Password:</h3>

                <input type="text" />

                <h3 className="text-3xl txtOrange jura">Forgot Password?</h3>


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
