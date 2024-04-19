export interface IUserLogin {
  usernameOrEmail: string;
  password: string;
}

export interface IToken {
  token: string;
}

export interface IUserInfoWithStats {
  username: string;
  email: string;
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
  loses: number;
  style: string;
  mainCenter: string;
  average: string;
  earnings: string;
  highGame: string;
  highSeries: string;
  streak: number;
}

export interface IPublicUserData {
  username: string;
  email: string;
  securityQuestion: string;
  securityQuestionTwo: string;
  securityQuestionThree: string;
  fullName: string;
  profileImage: string;
  pronouns: string;
  wins: number;
  loses: number;
  style: string;
  mainCenter: string;
  average: string;
  earnings: string;
  highGame: string;
  highSeries: string;
  streak: number;
}

export interface IUserPosts {
  title: string;
  visibility: boolean; 
  state: string;
  locations: string;
  date: string; 
  time: string; 
  maxPpl: number;
  currentPpl: number;
  description: string; 
  isFinished: boolean; 
  username: string; 
  profileImage: string; 
  wins: number; 
  average: string; 
  style: string; 
  streak: number; 
}
