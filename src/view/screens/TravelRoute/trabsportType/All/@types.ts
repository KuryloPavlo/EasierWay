import { RouteState } from '../../../../../state/@types/App';
import { NavigationScreenProp } from 'react-navigation';

export interface Props {
    routeList: RouteState[],
    navigation: NavigationScreenProp<any, any>;
}