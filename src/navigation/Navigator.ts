import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LOGIN } from './Routes';
import {
    Login,
    SingUp1,
    SingUp2,
    SingUp3,
    SingUp4,
    Main
} from '../view';

const mainNavigation = createStackNavigator({
    LOGIN: Login,
    SING_UP_1: SingUp1,
    SING_UP_2: SingUp2,
    SING_UP_3: SingUp3,
    SING_UP_4: SingUp4,
    MAIN: Main
},{
    headerMode: 'none',
    initialRouteName: LOGIN
})

export default createAppContainer(mainNavigation);