import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Map, List } from '../screens';

const NavigatorTab = createMaterialTopTabNavigator({
    Map: {
        screen: Map
    },
    List: {
        screen: List
    }
},
{
    tabBarOptions: {
        style: {
            backgroundColor: '#17223B'
        }
    }
}
)

export default createAppContainer(NavigatorTab);