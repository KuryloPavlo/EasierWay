import { SignUpState } from '../@types/App';
import { AnyAction } from 'redux';
import { SignUpActionTypes } from '../actions/User';
import { User } from '../@types/Users';

const defaultState = {
    users: [
       {
            id: 1,
            name: 'Pavlo',
            phoneNumber: '123456',
            password: 123,
            benefits: false
        },
    ]
};

const SignUpReducer = (state = defaultState, action: AnyAction) => {
    switch(action.type) {
        case SignUpActionTypes.CREATE_USER:
            const user = {
                ...action.payload.user,
                id: state.users[state.users.length-1].id+1
            }
            return {
                ...state,
                users: [
                    ...state.users,
                    user
                ]
            }
        case SignUpActionTypes.ADD_PHONENUMBER:
            return {
                ...state,
                users: [
                    state.users[0],
                    {
                        ...state.users[1],
                        phoneNumber: action.payload.phonenumber
                    }
                ]
            }
        case SignUpActionTypes.ADD_PASSWORD: 
            return {
                ...state,
                users: [
                    state.users[0],
                    {
                        ...state.users[1],
                        password: action.payload.password
                    }
                ]
            }
        case SignUpActionTypes.CHOOSE_BENEFITS:
            return {
                ...state,
                users: [
                    state.users[0],
                    {
                        ...state.users[1],
                        benefits: !state.users[1].benefits
                    }
                ]
            }
        case SignUpActionTypes.REMOVE_USER:
            return {
                ...state,
                users: [
                    state.users[0]
                ]
            }
        default: return state;
            
    }
}

export default SignUpReducer;