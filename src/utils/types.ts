export type AuthStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Exams: undefined;
  LostPassword: undefined;
  Activation: {activationToken: string};
};
export type ExamStackParamList = {
  ExamsNav: undefined;
  Questions: {examType: string; examYear: number; subject: string};
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

export interface IQuestion {
  options: {
    [key: string]: string;
  };
  _id: string;
  correctOption: string;
  examType: string;
  examYear: string;
  subject: string;
  image: string;
  question: string;
  solution: string;
}

export interface Option {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
}
