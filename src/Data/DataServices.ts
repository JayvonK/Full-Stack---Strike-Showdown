import { IToken, IUserInfo } from "@/interfaces/Interfaces"

const url = 'https://strikeshowdownbackend.azurewebsites.net/api/'

export const Login = async(createdUser: IUserInfo) => {
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