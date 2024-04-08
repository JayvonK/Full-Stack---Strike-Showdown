import { IToken, IUserInfoWithStats, IUserLogin } from "@/interfaces/Interfaces"

const url = 'https://strikeshowdownbackend.azurewebsites.net/api/'

export const LoginAPI = async(createdUser: IUserLogin) => {
    const res = await fetch(url + 'User/Login/', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdUser)
    });

    if(!res.ok) {
        const message = "An error has occured " + res.status;
        throw new Error(message);
    }

    const data: IToken = await res.json();
    console.log(data);
    return data;
}

export const CreateAccountAPI = async(createdUser: IUserInfoWithStats) => {
    const res = await fetch(url + 'User/AddUser', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdUser)
    });

    if(!res.ok){
        const message = "An error message has occured " + res.status;
        throw new Error(message);
    }
    const data = await res.json();
    console.log(data);
}

export const VerifyForPasswordAPI = async(UsernameOrEmail: string, question: string, answer: string) => {
    const promise = await fetch(`${url}User/${UsernameOrEmail}/${question}/${answer}`);
    const data = await promise.json();
    return data;
}

export const ChangePasswordAPI = async(UsernameOrEmail: string, password: string ) => {
    const res = await fetch(url + `User/ForgotPassword/${UsernameOrEmail}/${password}`, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        }
    });
    if(!res.ok){
        const message = "An error message has occured " + res.status;
        throw new Error(message);
    }
    const data = await res.json();
    console.log(data);
}