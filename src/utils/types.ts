// interface INewUserResponse {
//   id: string;
//   name: string;
//   email: string;
//   password: string;
// }

export type AuthStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Exams: undefined;
  LostPassword: undefined;
  Activation: {activationToken: String};
};

export interface ISubject {
  name: string;
  _id: string;
  exam: string;
  examYears: {
    examYear: number;
    _id: string;
    isActive: boolean;
  }[];
}

export interface IUser {
  name: string;
  email: string;
  avatar?: {
    public_id: string;
    url: string;
  };
  role: string;
  isVerified: boolean;
  subjectVideo: Array<{subjectVideoId: string}>;
  apiUseageCount: number;
}
