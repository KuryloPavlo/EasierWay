import { User } from './Users';
import { BusList } from './BusList';
import { RouteList } from './RouteList';
import { StopsList } from './StopsList';

export interface UserState {
    users: User[]; 
};

export interface SignUpState {
    users: User[];
}

export interface AppState {
    signUp: SignUpState;
    busList: BusState;
    routeList: RouteState;
    buyTicketList: BuyTicketsState;
    stopsList: StopsState;
}

export interface BusState {
    busList: BusList[];
}

export interface RouteState {
    routeList: RouteList[];
}

export interface StopsState {
    stopsList: StopsList[];
}

export interface BuyTicketsState {
    regular: TicketPurchanseInfo;
    student: TicketPurchanseInfo;
    luggage: TicketPurchanseInfo;
}

export interface TicketPurchanseInfo {
    id: number;
    name: string;
    price: number;
    amount: number;
}