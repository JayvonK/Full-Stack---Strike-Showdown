import React from 'react'

const NotRequiredInputComponent = (props: { type: string, borderError: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, maxLength: number}) => {
    return (
        <>
            <input type={props.type} className={"w-full my-2 min-h-[76px] jura text-4xl rounded-lg pl-3 " + props.borderError} placeholder={props.placeholder} value={props.value} onChange={props.onChange} maxLength={props.maxLength}/>
        </>
    )
}

export default NotRequiredInputComponent