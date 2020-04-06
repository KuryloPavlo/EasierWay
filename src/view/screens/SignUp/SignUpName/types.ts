import { User } from '../../../../state/@types/Users';


export interface Props{
    createUser: (user: User) => void;
}

export interface State{
    user: User;
}