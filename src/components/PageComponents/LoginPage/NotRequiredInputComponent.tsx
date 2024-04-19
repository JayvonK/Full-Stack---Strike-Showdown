'use client'
import React, { useState } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import question from '../../../../public/images/question.svg'

const NotRequiredInputComponent = (props: { type: string, borderError: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, maxLength: number, title: string, info: string }) => {

    const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);
    return (
        <>
            <div className='flex'>
                <h3 className={"text-3xl jura text-white pr-2"}>{props.title}</h3>
                <TooltipProvider>
                    <Tooltip open={tooltipOpen}>
                        <TooltipTrigger onFocus={() => setTooltipOpen(true)} onBlur={() => setTooltipOpen(false)}><img src={question.src} alt="" /></TooltipTrigger>
                        <TooltipContent>
                            <p>{props.info}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <input type={props.type} className={"w-full my-5 sm:min-h-14 min-h-12 jura text-3xl rounded-lg pl-3 " + props.borderError} placeholder={props.placeholder} value={props.value} onChange={props.onChange} maxLength={props.maxLength} />
        </>
    )
}

export default NotRequiredInputComponent