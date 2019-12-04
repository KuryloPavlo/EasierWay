import { UserState } from '../@types/App';
import { AnyAction } from 'redux';
import { UserActionTypes } from '../actions/User';
import { User } from '../@types/Users';

const defaultState = () : UserState => ({
    users: []
});

const UserReducer = (state = defaultState(), action: AnyAction) => {
    switch(action.type) {
        case UserActionTypes.ADD_NAME:
            const index = state.users.findIndex((user: User) => user.id === action.payload.user.id);
            const updateUsers = [...state.users];
            updateUsers[index] = action.payload.user;
            return {

            }
    }
}

export default UserReducer;