export interface IUserLogin {
  usernameOrEmail: string;
  password: string;
}

export interface IToken {
  token: string;
}

interface IIinvitedUser {
  iD: number;
  userId: number;
  publisherName: string
}

export interface IUserInfoWithStats {
  username: string;
  email: string;
  location: string;
  password: string;
  securityQuestion: string;
  securityQuestionTwo: string;
  securityQuestionThree: string;
  securityAnswer: string;
  securityAnswerTwo: string;
  securityAnswerThree: string;
  fullName: string;
  profileImage: string;
  pronouns: string;
  wins: number;
  losses: number;
  style: string;
  mainCenter: string;
  average: string;
  earnings: string;
  highGame: string;
  highSeries: string;
  streak: number;
}

export interface IPublicUserData {
  id: number;
  username: string;
  email: string;
  location: string;
  securityQuestion: string;
  securityQuestionTwo: string;
  securityQuestionThree: string;
  fullName: string;
  profileImage: string;
  pronouns: string;
  wins: number;
  losses: number;
  style: string;
  mainCenter: string;
  average: string;
  earnings: string;
  highGame: string;
  highSeries: string;
  streak: number;
  pendingFriends: string;
  friends: string;
}

export interface IRecentWinner {
  id: number;
  userID: number;
  username: string;
  email: string;
  location: string;
  fullName: string;
  profileImage: string;
  pronouns: string;
  wins: number;
  losses: number;
  style: string;
  mainCenter: string;
  average: string;
  earnings: string;
  highGame: string;
  highSeries: string;
  isDeleted: boolean;
  data: string;
}

export interface IUserPosts {
  id: number;
  userID: number;
  title: string;
  isVisible: boolean; 
  state: string;
  locations: string;
  challengeLocation: string;
  date: string; 
  time: string; 
  maxPpl: number;
  currentPpl: number;
  matchUsersIDs: string;
  description: string; 
  isFinished: boolean; 
  publisher: string; 
  image: string; 
  wins: number; 
  average: string; 
  style: string; 
  streak: number;
}

export interface INotification {
  id: number;
  postID: number;
  senderID: number;
  senderUsername: string;
  recieverID: number;
  recieverUsername: string;
  type: string;
  image: string;
  content: string;
  isRead: boolean;
  isDeleted: boolean;
}

export interface ICreatePost{
  title: string;
  isVisible: boolean; 
  state: string;
  locations: string;
  date: string; 
  time: string; 
  maxPpl: number;
  currentPpl: number;
  description: string; 
  isFinished: boolean; 
}

export interface ICreateNotification{
  senderID: number;
  recieverID: number;
  postID: number;
  type: string;
  content: string;
}
export interface IUsername {
  username: string;
}

export interface Message {
  username: string;
  msg: string;
}

export interface IChatRoomName {
  chatroomName: string
}

export interface ICreateMessage {
  userID: number;
  message: string;
  chatRoomName: string;
}

export interface IMessage {
  id: number;
  userID: number;
  chatRoom: string;
  message: string;
  publisherName: string;
}

export type SendMessage = (message: string) => Promise<void>;
export type JoinChatRoom = (username: string, chatroom: string) => Promise<void>;

export interface IMatchScore {
  id: number;
  postID: number;
  userID: number;
  scoreOne: number;
  scoreTwo: number;
  isValid: boolean;
}