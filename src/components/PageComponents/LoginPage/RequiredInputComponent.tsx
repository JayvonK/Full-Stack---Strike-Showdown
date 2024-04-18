import React from 'react'

const RequiredInputComponent = (props: { title: string, type: string, borderError: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, maxLength: number}) => {
    return (
        <>
            <h3 className={"text-3xl jura text-white"}>{props.title}</h3>
            <input required type={props.type} className={"w-full mt-3 mb-4 sm:min-h-16 min-h-12 jura text-3xl rounded-lg pl-1 " + props.borderError} placeholder={props.placeholder} value={props.value} onChange={props.onChange} maxLength={props.maxLength}/>
        </>
    )
}

export default RequiredInputComponent