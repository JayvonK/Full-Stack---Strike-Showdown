import { ICreateNotification, ICreatePost, INotification, IPublicUserData, IToken, IUserInfoWithStats, IUserLogin, IUserPosts } from "@/interfaces/Interfaces"

const url = 'https://strikeshowdownbackend.azurewebsites.net/api/'

// Everything for Logging in and Creating User

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

// Everything for Users

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

// Everything for Post and Matches
export const GetUsersByStateAPI = async (state: string) => {
    const promise = await fetch(url + 'User/GetUsersByState/' + state);
    const data = await promise.json();
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
    const res = await fetch(url  + 'Match/UpdateMatch', {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(match)
    })
    if(!res.ok){
        const message = "An error message has occured " + res.status;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}

export const DeleteMatchAPI = async(match: IUserPosts) => {
    const res = await fetch(url + 'Match/DeleteMatch', {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(match)
    })
    if(!res.ok){
        const message = "An error message has occured" + res.status;
        throw new Error(message);
    }

    const data = res.json()
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

export const GetMatchesByIDAPI = async (id: number) => {
    const promise = await fetch(url + 'Match/GetMatchesByID/' + id);
    const data = await promise.json();
    return data;
}

export const GetMatchByPostIDAPI = async (id: number) => {
    const promise = await fetch(url + 'Match/GetMatchByPostID/' + id);
    const data = await promise.json();
    return data;
}

export const AddUserToMatchAPI = async (userID: number, match: IUserPosts) => {
    const res = await fetch(url + 'Match/AddUserToMatch/' + userID, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(match)
    })

    if(!res.ok){
        const message = "An error message has occured " + res.status;
        throw new Error(message);
    }

    const data = await res.json();
    return data;
}

// Everything For Notifications

export const GetNotificationsByUserIDAPI = async (id: number) => {
    const promise = await fetch(url + 'Notification/GetNotificationsByUserID/' + id)
    const data = await promise.json();
    return data;
}

export const CreateNotificationAPI = async (noti: ICreateNotification) => {
    const res = await fetch(url + 'Notification/CreateNotification', {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(noti)
    })
    if(!res.ok){
        const message = "An error message has occured " + res.status;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}

export const DeleteNotificationAPI = async (noti: INotification) => {
    const res = await fetch(url + 'Notification/DeleteNotification', {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(noti)
    })
    if(!res.ok){
        const message = "An error message has occured " + res.status;
        throw new Error(message);
    }

    const data = res.json();
    return data;
}
