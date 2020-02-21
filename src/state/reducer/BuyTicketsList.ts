import { BuyTicketsState } from '../@types/App';
import { BuyTicketActions } from '../actions/BuyTicket';

const defaultState = {
    regular: {
        id: 1,
        name: 'Regular',
        price: 7,
        amount: 0
    },
    student: {
        id: 2,
        name: 'Single Student',
        price: 5,
        amount: 0
    },
    luggage: {
        id: 3,
        name: 'Luggage',
        price: 2,
        amount: 0
    }
}

const BuyTicketsListState = (state = defaultState, action) : BuyTicketsState => {
    switch(action.type) {
        case BuyTicketActions.INCREASE_AMOUNT:
            return {...state, [action.payload]: {
                ...state[action.payload],
                amount: state[action.payload].amount + 1
            }}
        case BuyTicketActions.DECREASE_AMOUNT:
            return {...state, [action.payload]: {
                ...state[action.payload],
                amount: state[action.payload].amount !== 0 ? state[action.payload].amount - 1 : 0
        }}
        default: return state;
    }   
};

export { BuyTicketsListState };