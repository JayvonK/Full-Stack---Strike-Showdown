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
}
