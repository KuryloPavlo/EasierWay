import { User } from '../@types/Users';

export const SignUpActionTypes = {
    ADD_NAME: 'ADD_NAME',
    ADD_PHONENUMBER: 'ADD_PHONENUMBER',
    CHOOSE_BENEFITS: 'CHOOSE_BENEFITS',
    CREATE_USER: 'CREATE_USER',
    REMOVE_USER: 'REMOVE_USER',
    ADD_PASSWORD: 'ADD_PASSWORD'
}

export const removeUser = () => ({
    type: SignUpActionTypes.REMOVE_USER
})

export const createUser  = (user: User) => ({
    type: SignUpActionTypes.CREATE_USER,
    payload: {user}
})

export const addName = (name: string) => ({
    type: SignUpActionTypes.ADD_NAME,
    payload: {name}
})

export const addPhonenumber = (phonenumber: string) => ({
    type: SignUpActionTypes.ADD_PHONENUMBER,
    payload: {phonenumber}
})

export const chooseBenefits = (benefits: boolean) => ({
    type: SignUpActionTypes.CHOOSE_BENEFITS,
    payload: {benefits}
})

export const addPassword = (password: string) => ({
    type: SignUpActionTypes.ADD_PASSWORD,
    payload: {password}
})