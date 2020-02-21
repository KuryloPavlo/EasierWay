import { BuyTicketsState, TicketPurchanseInfo } from '../../../state/@types/App'
import { NavigationScreenProp } from 'react-navigation';

export interface Props {
    regular: TicketPurchanseInfo,
    student: TicketPurchanseInfo,
    luggage: TicketPurchanseInfo,
    navigation: NavigationScreenProp<any, any>;
    increase: (field: string) => void;
    decrease: (field: string) => void;
}
