import React from 'react'

const RequiredInputComponent = (props: { title: string, type: string, borderError: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, maxLength: number, showPasswordClick?: () => void }) => {

    return (
        <>
            <div className='flex items-center'>
                <h3 className={"text-3xl jura text-white"}>{props.title}</h3>
                {props.title.includes("Password") && <img className='hover:cursor-pointer ml-2' src={props.type !== "password" ? "/images/eye-bold.svg" : "/images/eye-slash-bold.svg"} alt="" onClick={props.showPasswordClick} />}
            </div>

            <input required type={props.type} className={"w-full mt-3 mb-4 sm:min-h-14 min-h-12 jura text-3xl rounded-lg pl-3 " + props.borderError} placeholder={props.placeholder} value={props.value} onChange={props.onChange} maxLength={props.maxLength} />
        </>
    )
}

export default RequiredInputComponent