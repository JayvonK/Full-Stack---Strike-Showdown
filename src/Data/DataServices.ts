import { ICreatePost, IPublicUserData, IToken, IUserInfoWithStats, IUserLogin, IUserPosts } from "@/interfaces/Interfaces"

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
    const data:IUserInfoWithStats = await res.json();
    console.log(data);
}

export const VerifyForPasswordAPI = async(UsernameOrEmail: string, question: string, answer: string) => {
    const promise = await fetch(`${url}User/GetSecurity/${UsernameOrEmail}/${question}/${answer}`);
    const data: boolean = await promise.json();
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

export const GetUserAPI = async (UsernameOrEmail: string) => {
    const promise = await fetch(url + `User/GetUserByUsernameOrEmail/${UsernameOrEmail}`);
    const data: IPublicUserData = await promise.json();
    return data;
}

export const UpdateUserAPI = async (username: string, userData: IPublicUserData) => {
    const res = await fetch(url  + 'User/UpdateUser/' + username, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(userData)
    })
    if(!res.ok){
        const message = "Ann error message has occured " + res.status;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}

export const CreatePostAPI = async (Post: ICreatePost, publisher: string) => {
    const res = await fetch(url + 'Match/AddMatch/' + publisher, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(Post)
    })
    if(!res.ok){
        const message = "An error message has occured " + res.status;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}

export const UpdateMatchAPI = async (match: IUserPosts) => {
    const res = await fetch(url  + 'Match/UpdateMatch/' + match, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(match)
    })
    if(!res.ok){
        const message = "Ann error message has occured " + res.status;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}

export const GetPublicMatchesAPI = async () => {
    const promise = await fetch(url + 'Match/GetPublicMatches');
    const data = await promise.json();
    return data;
}

export const GetPublicMatchesByStateAPI = async (state: string) => {
    const promise = await fetch(url + 'Match/GetPublicMatchesByState/' + state);
    const data = await promise.json();
    return data;
}
