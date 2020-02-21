import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Bus, Tram, Trolley } from '../transportType';


const NavigatorTab = createMaterialTopTabNavigator(
    {
        Bus: {
            screen: Bus
        },
        Tram:{ 
            screen: Tram
        },
        Trolley:{ 
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