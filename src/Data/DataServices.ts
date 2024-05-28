import { IChatRoomName, ICreateMessage, ICreateNotification, ICreatePost, IMessage, INotification, IPublicUserData, IToken, IUserInfoWithStats, IUserLogin, IUserPosts } from "@/interfaces/Interfaces"

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

export const GetUsernameByIDAPI = async (id: number) => {
    const promise = await fetch(url + 'User/GetUsernameByID/' + id);
    const data = await promise.json();
    return data;
}

export const GetUserByID = async (id: number) => {
    const promise = await fetch(url + 'User/GetUserByID/' + id);
    const data: IPublicUserData = await promise.json();
    return data;
}

export const GetAllFriendsAPI = async (userID: number) => {
    const promise = await fetch(url + '/User/GetAllFriends/' + userID);
    const data = await promise.json();
    return data;
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

export const AcceptFriendRequestAPI = async (userID: number, yourID: number) => {
    const res = await fetch(url  + 'User/AcceptFriendRequest/' + userID + '/' + yourID, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        }
    })
    if(!res.ok){
        const message = "Ann error message has occured " + res.status;
        throw new Error(message);
    }
    const data = await res.json();
    console.log('accepted friend')
    return data;
}

export const SendFriendRequestAPI = async (userID: number, yourID: number) => {
    const res = await fetch(url  + 'User/SendFriendRequest/' + userID + '/' + yourID, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        }
    })
    if(!res.ok){
        const message = "Ann error message has occured " + res.status;
        throw new Error(message);
    }
    const data = await res.json();
    console.log('sent friend')
    return data;
}

export const DeclineFriendRequestAPI = async (userID: number, yourID: number) => {
    const res = await fetch(url  + 'User/DeclineFriendRequest/' + userID + '/' + yourID, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        }
    })
    if(!res.ok){
        const message = "Ann error message has occured " + res.status;
        throw new Error(message);
    }
    const data = await res.json();
    console.log('declined friend')
    return data;
}

export const RemoveFriendAPI = async (userID: number, yourID: number) => {
    const res = await fetch(url  + 'User/RemoveFriend/' + userID + '/' + yourID, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        }
    })
    if(!res.ok){
        const message = "Ann error message has occured " + res.status;
        throw new Error(message);
    }
    const data = await res.json();
    console.log('removed friend')
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

export const GetRecentMatchIDByUserIDAPI = async (id: number) => {
    const promise = await fetch(url + 'Match/GetRecentMatchIDByUserID/' +id);
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

export const RemoveUserFromMatchAPI = async (userID: number, match: IUserPosts) => {
    const res = await fetch(url + 'Match/RemoveUserFromMatch/' + userID, {
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

export const GetFriendRequestNotificationsAPI = async (yourID: number, userID: number) => {
    const promise = await fetch(url + 'Notification/GetFriendRequestNotification/' + yourID + '/' + userID)
    const data = await promise.json();
    return data;
}

export const CreateNotificationAPI = async (noti: ICreateNotification) => {
    const res = await fetch(url + 'Notification/CreateNotification', {
        method: 'POST',
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
    console.log(data + 'hh');
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
    console.log('noti deleted');
    return data;
}

export const MakeNotificationRead = async (noti: INotification) => {
    const res = await fetch(url + 'Notification/MakeNotificationRead', {
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

// Everything For Chatroom And Messages

const urlTwo = 'https://strikeshowdownbackend.azurewebsites.net/';

export const JoinChatRoomAPI = async (yourID: number, userID: number) => {
    const promise = await fetch(urlTwo + 'MessageController/JoinChatroom/' + yourID + '/' + userID);
    const data: IChatRoomName = await promise.json();
    return data;
}

export const GetMessagesFromRoomAPI = async (name: string) => {
    const promise = await fetch(urlTwo + 'MessageController/GetMessagesFromChatroom/' + name);
    const data: IMessage[] = await promise.json();
    return data;
}

export const SendMessageAPI = async (message: ICreateMessage) => {
    const res = await fetch(urlTwo + 'MessageController/SendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(message)
    })
    if(!res.ok){
        const message = "An error message has occured " + res.status;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}


