export interface Question{
    qid:string
    title:string
    body:string
    tags:string[]
    user_id:string
    answer_count:number
    date:string
    tag_names:string
}

export interface newQuestion{
  qid:string
  title:string
  body:string
  tags:string[]


}

export interface TagName{
  tagname:string
}



export interface QuestionState {
    questions: Question[];
    loaded: boolean;
    error?: string | null;
    question: Question | undefined
  }

  export interface UserState {
    users: User[];
    loaded: boolean;
    error?: string | null;
  }

  export interface TagsState {
    tags: Tag[];
    loaded: boolean;
    error?: string | null;
  }

  export interface AnswersState{
    answers:Answer[]
    loaded:boolean
    error?: string | null;
  }

  export interface User {
    uid: string;
    username: string;
    email: string;
    role: string;
    isDeleted: number;
    password: string;
    emailSent: string;
    location?:string;
    about?:string
  }

export interface UserSignup{
    username:string
    email:string
    password:string
}

export interface UserLogin{
    email:string
    password:string
}

export interface ReturnedMessage{
    message:string
}

export interface Tag{
    id:string
    tagname:string
    description:string
}

export interface SuccessMessages{
  message:string
}



export interface Answer{
  username: string
    aid:string
    answer: string
    isPrefered: boolean
    vote_count: number
}