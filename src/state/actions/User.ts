import { User } from '../@types/Users';

export const UserActionTypes = {
    ADD_NAME: 'ADD_NAME',
    ADD_PHONENUMBER: 'ADD_PHONENUMBER',
    CHOISE_BENEFITS: 'CHOISE_BENEFITS'
}

export const addName = (users: User) => ({
    type: UserActionTypes.ADD_NAME,
    payload: {users}
})

export const addPhonenumber = (users: User) => ({
    type: UserActionTypes.ADD_PHONENUMBER,
    payload: {users}
})

export const choiseBenefits = (users: User) => ({
    type: UserActionTypes.CHOISE_BENEFITS,
    payload: {users}
})