'use client'

import LoginNavComponent from '@/app/components/LoginNavComponent';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import '@/app/css/LoginPage.css';

const ForgotPassword = () => {
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

    const handleBack = () => {
        router.back();
    }

    return (
        <div>
            <div className="min-h-screen bgLogin">
                <img src="" alt="" />
                {
                    <div className='grid grid-cols-2'>


                        <div className="min-h-screen bgBlack">

                            <LoginNavComponent exist={true} onClick={handleBack} />
                            
                            {/* Column 1 (Login Side) */}
                            <div className="px-48 pb-32">

                                <h1 className="txtOrange text-7xl juraBold mb-12 leading-[90px]"> What's your username?</h1>

                                <h3 className="text-4xl text-white jura">Username:</h3>

                                <input type="text" className="w-full my-5 min-h-[76px] jura text-4xl rounded-lg" placeholder="Enter Username" value={username} onChange={handleUserChange} />

                                <button className="text-4xl text-black min-h-[76px] w-full my-8 juraBold bgOrange rounded-xl" > Continue</button>

                            </div>

                            {/* Column 2 (Nothing) */}
                            <div>

                            </div>

                        </div>
                    </div>

                }
            </div>
        </div>
    )
}

export default ForgotPassword
