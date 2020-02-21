import { combineReducers } from 'redux';
import SignUp from './SignUp'
import {BusListState} from './BusList';
import {RouteListState} from './RouteList';
import {BuyTicketsListState} from './BuyTicketsList';

export default combineReducers({
    signUp: SignUp,
    busList: BusListState,
    routeList: RouteListState,
    buyTicketList: BuyTicketsListState
});