import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { All, Tram, Trolley } from '../trabsportType';

const NavigatorTab = createMaterialTopTabNavigator({
    All: {
        screen: All
    },
    Tram: {
        screen: Tram
    },
    Trolley: {
        screen: Trolley
    }
},
{
    tabBarOptions: {
        showIcon: true,
        tabStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        style: {
            backgroundColor: '#17223B'
        }
    }
}
)

export default createAppContainer(NavigatorTab);