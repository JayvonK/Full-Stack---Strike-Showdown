import React from 'react'

const NotRequiredInputComponent = (props: { type: string, borderError: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, maxLength: number}) => {
    return (
        <>
            <input type={props.type} className={"w-full my-5 sm:min-h-[76px] min-h-16 jura sm:text-4xl text-3xl rounded-lg pl-2 placeholder:text-black " + props.borderError} placeholder={props.placeholder} value={props.value} onChange={props.onChange} maxLength={props.maxLength}/>
        </>
    )
}

export default NotRequiredInputComponent