import React from 'react';
import logo from '../../../public/images/Strike Showdown Logo.png'
import backArrow from '../../../public/images/arrow-u-up-left-fill.svg'
import { useRouter } from 'next/navigation';

const LoginNavComponent = (props: { exist: boolean, onClick: () => void }) => {
    const router = useRouter();
    const logoClick = () => {
        router.push('/');
    }

    return (
        <>
            {
                !props.exist ? (

                    <div className="px-10 flex justify-between py-5">

                        <img src={logo.src} alt="" className="object-cover h-20 w-20 rounded-full border border-white hover:cursor-pointer" onClick={logoClick} />

                    </div>

                ) : (

                    <div className="px-10 flex justify-between py-5">

                        <img src={logo.src} alt="" className="object-cover h-20 w-20 rounded-full border border-white hover:cursor-pointer" onClick={logoClick} />

                        <img src={backArrow.src} alt="" className="object-cover h-20 w-20 hover:cursor-pointer" onClick={props.onClick} />

                    </div>

                )
            }
        </>

    )
}

export default LoginNavComponent
