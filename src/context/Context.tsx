'use client'

import {createContext, useContext, useState} from "react";

interface IContextValue {
    initialOpen: boolean,
    setInitialOpen: (initialOpen: boolean) => void,
    currentState: string,
    setCurrentState: (currentState: string) => void,
    createdAccountBool: boolean,
    setCreatedAccountBool: (createdAccountBool: boolean) => void,
    changedPasswordBool: boolean,
    setChangedPasswordBool: (password: boolean) => void,
    verifiedUser: string,
    setVerifiedUser: (user: string) => void,
    userLoggedIn: boolean,
    setUserLoggedIn: (value: boolean) => void
}

export const Context = createContext<IContextValue>({} as IContextValue);

export const AppWrapper = ({ children, }: Readonly<{ children: React.ReactNode;}>) => {

    const [initialOpen, setInitialOpen] = useState<boolean>(true);
    const [currentState, setCurrentState] = useState<string>("N/A");
    const [createdAccountBool, setCreatedAccountBool] = useState<boolean>(false);
    const [changedPasswordBool, setChangedPasswordBool] = useState<boolean>(false);
    const [verifiedUser, setVerifiedUser] = useState<string>('');
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

    return (
        <Context.Provider value={{initialOpen, setInitialOpen, currentState, setCurrentState, createdAccountBool, setCreatedAccountBool, changedPasswordBool, setChangedPasswordBool, verifiedUser, setVerifiedUser, userLoggedIn, setUserLoggedIn}}>
            {children}
        </Context.Provider>
    )
}

export const useAppContext = () => {
    return useContext(Context);
}