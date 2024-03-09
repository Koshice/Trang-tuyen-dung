export interface IParams {
    page: string
    id: string
}

export interface ILogin {
    role: string
    username: string
    password: string
    remember: boolean
}

export interface ICollection {
  id?: string
  logo?: string
  phone?: string
  email?: string
  company?: string
  nameJob?: string
  requirement?: string
}

interface IQuestion {
  id?: string;
  questionText?: string;
  options?: string[];
  // correctAnswerIndex?: number;
  questionType?: string;
}