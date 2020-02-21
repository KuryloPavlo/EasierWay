import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { PublicTransport, Main } from '../../view';


const DrawerNavigation = createDrawerNavigator({
    Main: {
        screen: Main
    },
    Transport: {
        screen: PublicTransport
    }

}, {
    initialRouteName: 'Main'
})

export default DrawerNavigation;