import React from 'react'

const RequiredInputComponent = (props: { title: string, type: string, borderError: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, maxLength: number}) => {
    return (
        <>
            <h3 className={"text-4xl jura text-white"}>{props.title}</h3>
            <input type={props.type} className={"w-full my-5 min-h-[76px] jura text-4xl rounded-lg " + props.borderError} placeholder={props.placeholder} value={props.value} onChange={props.onChange} maxLength={props.maxLength}/>
        </>
    )
}

export default RequiredInputComponent