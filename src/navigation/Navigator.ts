import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LOGIN } from './Routes';
import {
    Login,
    SignUpName,
    SignUpBenefits,
    SignUpPhonenubmer,
    SignUpCreditCard,
    TravelRoute,
    BuyTicket,
    Ticket,
    SelectedTransport,
    SignUpPassword
} from '../view';

import { All } from '../view/screens/TravelRoute/trabsportType';

import {NavigationDrawer} from './navigationDrawer';


const mainNavigation = createStackNavigator({
    LOGIN: Login,
    SIGN_UP_NAME: SignUpName,
    SIGN_UP_BENEFITS: SignUpBenefits,
    SIGN_UP_PHONENUMBER: SignUpPhonenubmer,
    SIGN_UP_CREDIT_CARD: SignUpCreditCard,
    MAIN: NavigationDrawer,
    TRAVEL_ROUTE: TravelRoute,
    BUY_TICKET: BuyTicket,
    TICKET: Ticket,
    SELECTED_TRANSPORT: SelectedTransport,
    ALL: All,
    SIGN_UP_PASSWORD: SignUpPassword
},{
    headerMode: 'none',
    initialRouteName: LOGIN
})

export default createAppContainer(mainNavigation);